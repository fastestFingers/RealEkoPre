import { W as WebPlugin, bZ as buildRequestInit } from "./index.61ed5618.js";
import { E as Encoding } from "./AppCamera.007aea33.js";
import "./vue-i18n.runtime.esm-bundler.fc6ce9e4.js";
function resolve(path) {
  const posix = path.split("/").filter((item) => item !== ".");
  const newPosix = [];
  posix.forEach((item) => {
    if (item === ".." && newPosix.length > 0 && newPosix[newPosix.length - 1] !== "..") {
      newPosix.pop();
    } else {
      newPosix.push(item);
    }
  });
  return newPosix.join("/");
}
function isPathParent(parent, children) {
  parent = resolve(parent);
  children = resolve(children);
  const pathsA = parent.split("/");
  const pathsB = children.split("/");
  return parent !== children && pathsA.every((value, index) => value === pathsB[index]);
}
class FilesystemWeb extends WebPlugin {
  constructor() {
    super(...arguments);
    this.DB_VERSION = 1;
    this.DB_NAME = "Disc";
    this._writeCmds = ["add", "put", "delete"];
    this.downloadFile = async (options) => {
      var _a, _b;
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const response = await fetch(options.url, requestInit);
      let blob;
      if (!options.progress)
        blob = await response.blob();
      else if (!(response === null || response === void 0 ? void 0 : response.body))
        blob = new Blob();
      else {
        const reader = response.body.getReader();
        let bytes = 0;
        const chunks = [];
        const contentType = response.headers.get("content-type");
        const contentLength = parseInt(response.headers.get("content-length") || "0", 10);
        while (true) {
          const { done, value } = await reader.read();
          if (done)
            break;
          chunks.push(value);
          bytes += (value === null || value === void 0 ? void 0 : value.length) || 0;
          const status = {
            url: options.url,
            bytes,
            contentLength
          };
          this.notifyListeners("progress", status);
        }
        const allChunks = new Uint8Array(bytes);
        let position = 0;
        for (const chunk of chunks) {
          if (typeof chunk === "undefined")
            continue;
          allChunks.set(chunk, position);
          position += chunk.length;
        }
        blob = new Blob([allChunks.buffer], { type: contentType || void 0 });
      }
      const result = await this.writeFile({
        path: options.path,
        directory: (_a = options.directory) !== null && _a !== void 0 ? _a : void 0,
        recursive: (_b = options.recursive) !== null && _b !== void 0 ? _b : false,
        data: blob
      });
      return { path: result.uri, blob };
    };
  }
  async initDb() {
    if (this._db !== void 0) {
      return this._db;
    }
    if (!("indexedDB" in window)) {
      throw this.unavailable("This browser doesn't support IndexedDB");
    }
    return new Promise((resolve2, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
      request.onupgradeneeded = FilesystemWeb.doUpgrade;
      request.onsuccess = () => {
        this._db = request.result;
        resolve2(request.result);
      };
      request.onerror = () => reject(request.error);
      request.onblocked = () => {
        console.warn("db blocked");
      };
    });
  }
  static doUpgrade(event) {
    const eventTarget = event.target;
    const db = eventTarget.result;
    switch (event.oldVersion) {
      case 0:
      case 1:
      default: {
        if (db.objectStoreNames.contains("FileStorage")) {
          db.deleteObjectStore("FileStorage");
        }
        const store = db.createObjectStore("FileStorage", { keyPath: "path" });
        store.createIndex("by_folder", "folder");
      }
    }
  }
  async dbRequest(cmd, args) {
    const readFlag = this._writeCmds.indexOf(cmd) !== -1 ? "readwrite" : "readonly";
    return this.initDb().then((conn) => {
      return new Promise((resolve2, reject) => {
        const tx = conn.transaction(["FileStorage"], readFlag);
        const store = tx.objectStore("FileStorage");
        const req = store[cmd](...args);
        req.onsuccess = () => resolve2(req.result);
        req.onerror = () => reject(req.error);
      });
    });
  }
  async dbIndexRequest(indexName, cmd, args) {
    const readFlag = this._writeCmds.indexOf(cmd) !== -1 ? "readwrite" : "readonly";
    return this.initDb().then((conn) => {
      return new Promise((resolve2, reject) => {
        const tx = conn.transaction(["FileStorage"], readFlag);
        const store = tx.objectStore("FileStorage");
        const index = store.index(indexName);
        const req = index[cmd](...args);
        req.onsuccess = () => resolve2(req.result);
        req.onerror = () => reject(req.error);
      });
    });
  }
  getPath(directory, uriPath) {
    const cleanedUriPath = uriPath !== void 0 ? uriPath.replace(/^[/]+|[/]+$/g, "") : "";
    let fsPath = "";
    if (directory !== void 0)
      fsPath += "/" + directory;
    if (uriPath !== "")
      fsPath += "/" + cleanedUriPath;
    return fsPath;
  }
  async clear() {
    const conn = await this.initDb();
    const tx = conn.transaction(["FileStorage"], "readwrite");
    const store = tx.objectStore("FileStorage");
    store.clear();
  }
  async readFile(options) {
    const path = this.getPath(options.directory, options.path);
    const entry = await this.dbRequest("get", [path]);
    if (entry === void 0)
      throw Error("File does not exist.");
    return { data: entry.content ? entry.content : "" };
  }
  async writeFile(options) {
    const path = this.getPath(options.directory, options.path);
    let data = options.data;
    const encoding = options.encoding;
    const doRecursive = options.recursive;
    const occupiedEntry = await this.dbRequest("get", [path]);
    if (occupiedEntry && occupiedEntry.type === "directory")
      throw Error("The supplied path is a directory.");
    const parentPath = path.substr(0, path.lastIndexOf("/"));
    const parentEntry = await this.dbRequest("get", [parentPath]);
    if (parentEntry === void 0) {
      const subDirIndex = parentPath.indexOf("/", 1);
      if (subDirIndex !== -1) {
        const parentArgPath = parentPath.substr(subDirIndex);
        await this.mkdir({
          path: parentArgPath,
          directory: options.directory,
          recursive: doRecursive
        });
      }
    }
    if (!encoding && !(data instanceof Blob)) {
      data = data.indexOf(",") >= 0 ? data.split(",")[1] : data;
      if (!this.isBase64String(data))
        throw Error("The supplied data is not valid base64 content.");
    }
    const now = Date.now();
    const pathObj = {
      path,
      folder: parentPath,
      type: "file",
      size: data instanceof Blob ? data.size : data.length,
      ctime: now,
      mtime: now,
      content: data
    };
    await this.dbRequest("put", [pathObj]);
    return {
      uri: pathObj.path
    };
  }
  async appendFile(options) {
    const path = this.getPath(options.directory, options.path);
    let data = options.data;
    const encoding = options.encoding;
    const parentPath = path.substr(0, path.lastIndexOf("/"));
    const now = Date.now();
    let ctime = now;
    const occupiedEntry = await this.dbRequest("get", [path]);
    if (occupiedEntry && occupiedEntry.type === "directory")
      throw Error("The supplied path is a directory.");
    const parentEntry = await this.dbRequest("get", [parentPath]);
    if (parentEntry === void 0) {
      const subDirIndex = parentPath.indexOf("/", 1);
      if (subDirIndex !== -1) {
        const parentArgPath = parentPath.substr(subDirIndex);
        await this.mkdir({
          path: parentArgPath,
          directory: options.directory,
          recursive: true
        });
      }
    }
    if (!encoding && !this.isBase64String(data))
      throw Error("The supplied data is not valid base64 content.");
    if (occupiedEntry !== void 0) {
      if (occupiedEntry.content instanceof Blob) {
        throw Error("The occupied entry contains a Blob object which cannot be appended to.");
      }
      if (occupiedEntry.content !== void 0 && !encoding) {
        data = btoa(atob(occupiedEntry.content) + atob(data));
      } else {
        data = occupiedEntry.content + data;
      }
      ctime = occupiedEntry.ctime;
    }
    const pathObj = {
      path,
      folder: parentPath,
      type: "file",
      size: data.length,
      ctime,
      mtime: now,
      content: data
    };
    await this.dbRequest("put", [pathObj]);
  }
  async deleteFile(options) {
    const path = this.getPath(options.directory, options.path);
    const entry = await this.dbRequest("get", [path]);
    if (entry === void 0)
      throw Error("File does not exist.");
    const entries = await this.dbIndexRequest("by_folder", "getAllKeys", [
      IDBKeyRange.only(path)
    ]);
    if (entries.length !== 0)
      throw Error("Folder is not empty.");
    await this.dbRequest("delete", [path]);
  }
  async mkdir(options) {
    const path = this.getPath(options.directory, options.path);
    const doRecursive = options.recursive;
    const parentPath = path.substr(0, path.lastIndexOf("/"));
    const depth = (path.match(/\//g) || []).length;
    const parentEntry = await this.dbRequest("get", [parentPath]);
    const occupiedEntry = await this.dbRequest("get", [path]);
    if (depth === 1)
      throw Error("Cannot create Root directory");
    if (occupiedEntry !== void 0)
      throw Error("Current directory does already exist.");
    if (!doRecursive && depth !== 2 && parentEntry === void 0)
      throw Error("Parent directory must exist");
    if (doRecursive && depth !== 2 && parentEntry === void 0) {
      const parentArgPath = parentPath.substr(parentPath.indexOf("/", 1));
      await this.mkdir({
        path: parentArgPath,
        directory: options.directory,
        recursive: doRecursive
      });
    }
    const now = Date.now();
    const pathObj = {
      path,
      folder: parentPath,
      type: "directory",
      size: 0,
      ctime: now,
      mtime: now
    };
    await this.dbRequest("put", [pathObj]);
  }
  async rmdir(options) {
    const { path, directory, recursive } = options;
    const fullPath = this.getPath(directory, path);
    const entry = await this.dbRequest("get", [fullPath]);
    if (entry === void 0)
      throw Error("Folder does not exist.");
    if (entry.type !== "directory")
      throw Error("Requested path is not a directory");
    const readDirResult = await this.readdir({ path, directory });
    if (readDirResult.files.length !== 0 && !recursive)
      throw Error("Folder is not empty");
    for (const entry2 of readDirResult.files) {
      const entryPath = `${path}/${entry2.name}`;
      const entryObj = await this.stat({ path: entryPath, directory });
      if (entryObj.type === "file") {
        await this.deleteFile({ path: entryPath, directory });
      } else {
        await this.rmdir({ path: entryPath, directory, recursive });
      }
    }
    await this.dbRequest("delete", [fullPath]);
  }
  async readdir(options) {
    const path = this.getPath(options.directory, options.path);
    const entry = await this.dbRequest("get", [path]);
    if (options.path !== "" && entry === void 0)
      throw Error("Folder does not exist.");
    const entries = await this.dbIndexRequest("by_folder", "getAllKeys", [IDBKeyRange.only(path)]);
    const files = await Promise.all(entries.map(async (e) => {
      let subEntry = await this.dbRequest("get", [e]);
      if (subEntry === void 0) {
        subEntry = await this.dbRequest("get", [e + "/"]);
      }
      return {
        name: e.substring(path.length + 1),
        type: subEntry.type,
        size: subEntry.size,
        ctime: subEntry.ctime,
        mtime: subEntry.mtime,
        uri: subEntry.path
      };
    }));
    return { files };
  }
  async getUri(options) {
    const path = this.getPath(options.directory, options.path);
    let entry = await this.dbRequest("get", [path]);
    if (entry === void 0) {
      entry = await this.dbRequest("get", [path + "/"]);
    }
    return {
      uri: (entry === null || entry === void 0 ? void 0 : entry.path) || path
    };
  }
  async stat(options) {
    const path = this.getPath(options.directory, options.path);
    let entry = await this.dbRequest("get", [path]);
    if (entry === void 0) {
      entry = await this.dbRequest("get", [path + "/"]);
    }
    if (entry === void 0)
      throw Error("Entry does not exist.");
    return {
      type: entry.type,
      size: entry.size,
      ctime: entry.ctime,
      mtime: entry.mtime,
      uri: entry.path
    };
  }
  async rename(options) {
    await this._copy(options, true);
    return;
  }
  async copy(options) {
    return this._copy(options, false);
  }
  async requestPermissions() {
    return { publicStorage: "granted" };
  }
  async checkPermissions() {
    return { publicStorage: "granted" };
  }
  async _copy(options, doRename = false) {
    let { toDirectory } = options;
    const { to, from, directory: fromDirectory } = options;
    if (!to || !from) {
      throw Error("Both to and from must be provided");
    }
    if (!toDirectory) {
      toDirectory = fromDirectory;
    }
    const fromPath = this.getPath(fromDirectory, from);
    const toPath = this.getPath(toDirectory, to);
    if (fromPath === toPath) {
      return {
        uri: toPath
      };
    }
    if (isPathParent(fromPath, toPath)) {
      throw Error("To path cannot contain the from path");
    }
    let toObj;
    try {
      toObj = await this.stat({
        path: to,
        directory: toDirectory
      });
    } catch (e) {
      const toPathComponents = to.split("/");
      toPathComponents.pop();
      const toPath2 = toPathComponents.join("/");
      if (toPathComponents.length > 0) {
        const toParentDirectory = await this.stat({
          path: toPath2,
          directory: toDirectory
        });
        if (toParentDirectory.type !== "directory") {
          throw new Error("Parent directory of the to path is a file");
        }
      }
    }
    if (toObj && toObj.type === "directory") {
      throw new Error("Cannot overwrite a directory with a file");
    }
    const fromObj = await this.stat({
      path: from,
      directory: fromDirectory
    });
    const updateTime = async (path, ctime2, mtime) => {
      const fullPath = this.getPath(toDirectory, path);
      const entry = await this.dbRequest("get", [fullPath]);
      entry.ctime = ctime2;
      entry.mtime = mtime;
      await this.dbRequest("put", [entry]);
    };
    const ctime = fromObj.ctime ? fromObj.ctime : Date.now();
    switch (fromObj.type) {
      case "file": {
        const file = await this.readFile({
          path: from,
          directory: fromDirectory
        });
        if (doRename) {
          await this.deleteFile({
            path: from,
            directory: fromDirectory
          });
        }
        let encoding;
        if (!(file.data instanceof Blob) && !this.isBase64String(file.data)) {
          encoding = Encoding.UTF8;
        }
        const writeResult = await this.writeFile({
          path: to,
          directory: toDirectory,
          data: file.data,
          encoding
        });
        if (doRename) {
          await updateTime(to, ctime, fromObj.mtime);
        }
        return writeResult;
      }
      case "directory": {
        if (toObj) {
          throw Error("Cannot move a directory over an existing object");
        }
        try {
          await this.mkdir({
            path: to,
            directory: toDirectory,
            recursive: false
          });
          if (doRename) {
            await updateTime(to, ctime, fromObj.mtime);
          }
        } catch (e) {
        }
        const contents = (await this.readdir({
          path: from,
          directory: fromDirectory
        })).files;
        for (const filename of contents) {
          await this._copy({
            from: `${from}/${filename.name}`,
            to: `${to}/${filename.name}`,
            directory: fromDirectory,
            toDirectory
          }, doRename);
        }
        if (doRename) {
          await this.rmdir({
            path: from,
            directory: fromDirectory
          });
        }
      }
    }
    return {
      uri: toPath
    };
  }
  isBase64String(str) {
    try {
      return btoa(atob(str)) == str;
    } catch (err) {
      return false;
    }
  }
}
FilesystemWeb._debug = true;
export { FilesystemWeb };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLjkxM2RjZWE4LmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9maWxlc3lzdGVtL2Rpc3QvZXNtL3dlYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXZWJQbHVnaW4sIGJ1aWxkUmVxdWVzdEluaXQgfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuaW1wb3J0IHsgRW5jb2RpbmcgfSBmcm9tICcuL2RlZmluaXRpb25zJztcbmZ1bmN0aW9uIHJlc29sdmUocGF0aCkge1xuICAgIGNvbnN0IHBvc2l4ID0gcGF0aC5zcGxpdCgnLycpLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09ICcuJyk7XG4gICAgY29uc3QgbmV3UG9zaXggPSBbXTtcbiAgICBwb3NpeC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbSA9PT0gJy4uJyAmJlxuICAgICAgICAgICAgbmV3UG9zaXgubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgbmV3UG9zaXhbbmV3UG9zaXgubGVuZ3RoIC0gMV0gIT09ICcuLicpIHtcbiAgICAgICAgICAgIG5ld1Bvc2l4LnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3UG9zaXgucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdQb3NpeC5qb2luKCcvJyk7XG59XG5mdW5jdGlvbiBpc1BhdGhQYXJlbnQocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHBhcmVudCA9IHJlc29sdmUocGFyZW50KTtcbiAgICBjaGlsZHJlbiA9IHJlc29sdmUoY2hpbGRyZW4pO1xuICAgIGNvbnN0IHBhdGhzQSA9IHBhcmVudC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHBhdGhzQiA9IGNoaWxkcmVuLnNwbGl0KCcvJyk7XG4gICAgcmV0dXJuIChwYXJlbnQgIT09IGNoaWxkcmVuICYmXG4gICAgICAgIHBhdGhzQS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gcGF0aHNCW2luZGV4XSkpO1xufVxuZXhwb3J0IGNsYXNzIEZpbGVzeXN0ZW1XZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLkRCX1ZFUlNJT04gPSAxO1xuICAgICAgICB0aGlzLkRCX05BTUUgPSAnRGlzYyc7XG4gICAgICAgIHRoaXMuX3dyaXRlQ21kcyA9IFsnYWRkJywgJ3B1dCcsICdkZWxldGUnXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgYSBodHRwIHJlcXVlc3QgdG8gYSBzZXJ2ZXIgYW5kIGRvd25sb2FkcyB0aGUgZmlsZSB0byB0aGUgc3BlY2lmaWVkIGRlc3RpbmF0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBvcHRpb25zIGZvciB0aGUgZG93bmxvYWQgb3BlcmF0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRvd25sb2FkIGZpbGUgcmVzdWx0XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRvd25sb2FkRmlsZSA9IGFzeW5jIChvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEluaXQgPSBidWlsZFJlcXVlc3RJbml0KG9wdGlvbnMsIG9wdGlvbnMud2ViRmV0Y2hFeHRyYSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG9wdGlvbnMudXJsLCByZXF1ZXN0SW5pdCk7XG4gICAgICAgICAgICBsZXQgYmxvYjtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wcm9ncmVzcylcbiAgICAgICAgICAgICAgICBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgZWxzZSBpZiAoIShyZXNwb25zZSA9PT0gbnVsbCB8fCByZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzcG9uc2UuYm9keSkpXG4gICAgICAgICAgICAgICAgYmxvYiA9IG5ldyBCbG9iKCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgICAgICAgICAgIGxldCBieXRlcyA9IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IHBhcnNlSW50KHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LWxlbmd0aCcpIHx8ICcwJywgMTApO1xuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNodW5rcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXMgKz0gKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS5sZW5ndGgpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogb3B0aW9ucy51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKCdwcm9ncmVzcycsIHN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbENodW5rcyA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2h1bmsgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGFsbENodW5rcy5zZXQoY2h1bmssIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gY2h1bmsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBibG9iID0gbmV3IEJsb2IoW2FsbENodW5rcy5idWZmZXJdLCB7IHR5cGU6IGNvbnRlbnRUeXBlIHx8IHVuZGVmaW5lZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMud3JpdGVGaWxlKHtcbiAgICAgICAgICAgICAgICBwYXRoOiBvcHRpb25zLnBhdGgsXG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5OiAoX2EgPSBvcHRpb25zLmRpcmVjdG9yeSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZTogKF9iID0gb3B0aW9ucy5yZWN1cnNpdmUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGJsb2IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7IHBhdGg6IHJlc3VsdC51cmksIGJsb2IgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXN5bmMgaW5pdERiKCkge1xuICAgICAgICBpZiAodGhpcy5fZGIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKCdpbmRleGVkREInIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEluZGV4ZWREQlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKHRoaXMuREJfTkFNRSwgdGhpcy5EQl9WRVJTSU9OKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gRmlsZXN5c3RlbVdlYi5kb1VwZ3JhZGU7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kYiA9IHJlcXVlc3QucmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25ibG9ja2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignZGIgYmxvY2tlZCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBkb1VwZ3JhZGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGRiID0gZXZlbnRUYXJnZXQucmVzdWx0O1xuICAgICAgICBzd2l0Y2ggKGV2ZW50Lm9sZFZlcnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBpZiAoZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucygnRmlsZVN0b3JhZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBkYi5kZWxldGVPYmplY3RTdG9yZSgnRmlsZVN0b3JhZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZSgnRmlsZVN0b3JhZ2UnLCB7IGtleVBhdGg6ICdwYXRoJyB9KTtcbiAgICAgICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgnYnlfZm9sZGVyJywgJ2ZvbGRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGRiUmVxdWVzdChjbWQsIGFyZ3MpIHtcbiAgICAgICAgY29uc3QgcmVhZEZsYWcgPSB0aGlzLl93cml0ZUNtZHMuaW5kZXhPZihjbWQpICE9PSAtMSA/ICdyZWFkd3JpdGUnIDogJ3JlYWRvbmx5JztcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdERiKCkudGhlbigoY29ubikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eCA9IGNvbm4udHJhbnNhY3Rpb24oWydGaWxlU3RvcmFnZSddLCByZWFkRmxhZyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZSgnRmlsZVN0b3JhZ2UnKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXEgPSBzdG9yZVtjbWRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKHJlcS5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGRiSW5kZXhSZXF1ZXN0KGluZGV4TmFtZSwgY21kLCBhcmdzKSB7XG4gICAgICAgIGNvbnN0IHJlYWRGbGFnID0gdGhpcy5fd3JpdGVDbWRzLmluZGV4T2YoY21kKSAhPT0gLTEgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seSc7XG4gICAgICAgIHJldHVybiB0aGlzLmluaXREYigpLnRoZW4oKGNvbm4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHggPSBjb25uLnRyYW5zYWN0aW9uKFsnRmlsZVN0b3JhZ2UnXSwgcmVhZEZsYWcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ0ZpbGVTdG9yYWdlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdG9yZS5pbmRleChpbmRleE5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcSA9IGluZGV4W2NtZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UGF0aChkaXJlY3RvcnksIHVyaVBhdGgpIHtcbiAgICAgICAgY29uc3QgY2xlYW5lZFVyaVBhdGggPSB1cmlQYXRoICE9PSB1bmRlZmluZWQgPyB1cmlQYXRoLnJlcGxhY2UoL15bL10rfFsvXSskL2csICcnKSA6ICcnO1xuICAgICAgICBsZXQgZnNQYXRoID0gJyc7XG4gICAgICAgIGlmIChkaXJlY3RvcnkgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGZzUGF0aCArPSAnLycgKyBkaXJlY3Rvcnk7XG4gICAgICAgIGlmICh1cmlQYXRoICE9PSAnJylcbiAgICAgICAgICAgIGZzUGF0aCArPSAnLycgKyBjbGVhbmVkVXJpUGF0aDtcbiAgICAgICAgcmV0dXJuIGZzUGF0aDtcbiAgICB9XG4gICAgYXN5bmMgY2xlYXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbm4gPSBhd2FpdCB0aGlzLmluaXREYigpO1xuICAgICAgICBjb25zdCB0eCA9IGNvbm4udHJhbnNhY3Rpb24oWydGaWxlU3RvcmFnZSddLCAncmVhZHdyaXRlJyk7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoJ0ZpbGVTdG9yYWdlJyk7XG4gICAgICAgIHN0b3JlLmNsZWFyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWQgYSBmaWxlIGZyb20gZGlza1xuICAgICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgZm9yIHRoZSBmaWxlIHJlYWRcbiAgICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlYWQgZmlsZSBkYXRhIHJlc3VsdFxuICAgICAqL1xuICAgIGFzeW5jIHJlYWRGaWxlKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aChvcHRpb25zLmRpcmVjdG9yeSwgb3B0aW9ucy5wYXRoKTtcbiAgICAgICAgLy8gY29uc3QgZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuICAgICAgICBjb25zdCBlbnRyeSA9IChhd2FpdCB0aGlzLmRiUmVxdWVzdCgnZ2V0JywgW3BhdGhdKSk7XG4gICAgICAgIGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ZpbGUgZG9lcyBub3QgZXhpc3QuJyk7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IGVudHJ5LmNvbnRlbnQgPyBlbnRyeS5jb250ZW50IDogJycgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV3JpdGUgYSBmaWxlIHRvIGRpc2sgaW4gdGhlIHNwZWNpZmllZCBsb2NhdGlvbiBvbiBkZXZpY2VcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIGZvciB0aGUgZmlsZSB3cml0ZVxuICAgICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZmlsZSB3cml0ZSByZXN1bHRcbiAgICAgKi9cbiAgICBhc3luYyB3cml0ZUZpbGUob3B0aW9ucykge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKG9wdGlvbnMuZGlyZWN0b3J5LCBvcHRpb25zLnBhdGgpO1xuICAgICAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgY29uc3QgZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuICAgICAgICBjb25zdCBkb1JlY3Vyc2l2ZSA9IG9wdGlvbnMucmVjdXJzaXZlO1xuICAgICAgICBjb25zdCBvY2N1cGllZEVudHJ5ID0gKGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGF0aF0pKTtcbiAgICAgICAgaWYgKG9jY3VwaWVkRW50cnkgJiYgb2NjdXBpZWRFbnRyeS50eXBlID09PSAnZGlyZWN0b3J5JylcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUaGUgc3VwcGxpZWQgcGF0aCBpcyBhIGRpcmVjdG9yeS4nKTtcbiAgICAgICAgY29uc3QgcGFyZW50UGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgIGNvbnN0IHBhcmVudEVudHJ5ID0gKGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGFyZW50UGF0aF0pKTtcbiAgICAgICAgaWYgKHBhcmVudEVudHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRpckluZGV4ID0gcGFyZW50UGF0aC5pbmRleE9mKCcvJywgMSk7XG4gICAgICAgICAgICBpZiAoc3ViRGlySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50QXJnUGF0aCA9IHBhcmVudFBhdGguc3Vic3RyKHN1YkRpckluZGV4KTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm1rZGlyKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGFyZW50QXJnUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5OiBvcHRpb25zLmRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlOiBkb1JlY3Vyc2l2ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVuY29kaW5nICYmICEoZGF0YSBpbnN0YW5jZW9mIEJsb2IpKSB7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5pbmRleE9mKCcsJykgPj0gMCA/IGRhdGEuc3BsaXQoJywnKVsxXSA6IGRhdGE7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNCYXNlNjRTdHJpbmcoZGF0YSkpXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RoZSBzdXBwbGllZCBkYXRhIGlzIG5vdCB2YWxpZCBiYXNlNjQgY29udGVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBwYXRoT2JqID0ge1xuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGZvbGRlcjogcGFyZW50UGF0aCxcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgICAgIHNpemU6IGRhdGEgaW5zdGFuY2VvZiBCbG9iID8gZGF0YS5zaXplIDogZGF0YS5sZW5ndGgsXG4gICAgICAgICAgICBjdGltZTogbm93LFxuICAgICAgICAgICAgbXRpbWU6IG5vdyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdwdXQnLCBbcGF0aE9ial0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJpOiBwYXRoT2JqLnBhdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGVuZCB0byBhIGZpbGUgb24gZGlzayBpbiB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uIG9uIGRldmljZVxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgZm9yIHRoZSBmaWxlIGFwcGVuZFxuICAgICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZmlsZSB3cml0ZSByZXN1bHRcbiAgICAgKi9cbiAgICBhc3luYyBhcHBlbmRGaWxlKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aChvcHRpb25zLmRpcmVjdG9yeSwgb3B0aW9ucy5wYXRoKTtcbiAgICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIGNvbnN0IGVuY29kaW5nID0gb3B0aW9ucy5lbmNvZGluZztcbiAgICAgICAgY29uc3QgcGFyZW50UGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGFzdEluZGV4T2YoJy8nKSk7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBjdGltZSA9IG5vdztcbiAgICAgICAgY29uc3Qgb2NjdXBpZWRFbnRyeSA9IChhd2FpdCB0aGlzLmRiUmVxdWVzdCgnZ2V0JywgW3BhdGhdKSk7XG4gICAgICAgIGlmIChvY2N1cGllZEVudHJ5ICYmIG9jY3VwaWVkRW50cnkudHlwZSA9PT0gJ2RpcmVjdG9yeScpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVGhlIHN1cHBsaWVkIHBhdGggaXMgYSBkaXJlY3RvcnkuJyk7XG4gICAgICAgIGNvbnN0IHBhcmVudEVudHJ5ID0gKGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGFyZW50UGF0aF0pKTtcbiAgICAgICAgaWYgKHBhcmVudEVudHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkRpckluZGV4ID0gcGFyZW50UGF0aC5pbmRleE9mKCcvJywgMSk7XG4gICAgICAgICAgICBpZiAoc3ViRGlySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50QXJnUGF0aCA9IHBhcmVudFBhdGguc3Vic3RyKHN1YkRpckluZGV4KTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm1rZGlyKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGFyZW50QXJnUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5OiBvcHRpb25zLmRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZW5jb2RpbmcgJiYgIXRoaXMuaXNCYXNlNjRTdHJpbmcoZGF0YSkpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVGhlIHN1cHBsaWVkIGRhdGEgaXMgbm90IHZhbGlkIGJhc2U2NCBjb250ZW50LicpO1xuICAgICAgICBpZiAob2NjdXBpZWRFbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAob2NjdXBpZWRFbnRyeS5jb250ZW50IGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdUaGUgb2NjdXBpZWQgZW50cnkgY29udGFpbnMgYSBCbG9iIG9iamVjdCB3aGljaCBjYW5ub3QgYmUgYXBwZW5kZWQgdG8uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2NjdXBpZWRFbnRyeS5jb250ZW50ICE9PSB1bmRlZmluZWQgJiYgIWVuY29kaW5nKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGJ0b2EoYXRvYihvY2N1cGllZEVudHJ5LmNvbnRlbnQpICsgYXRvYihkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gb2NjdXBpZWRFbnRyeS5jb250ZW50ICsgZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN0aW1lID0gb2NjdXBpZWRFbnRyeS5jdGltZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXRoT2JqID0ge1xuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGZvbGRlcjogcGFyZW50UGF0aCxcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgICAgIHNpemU6IGRhdGEubGVuZ3RoLFxuICAgICAgICAgICAgY3RpbWU6IGN0aW1lLFxuICAgICAgICAgICAgbXRpbWU6IG5vdyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEsXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdwdXQnLCBbcGF0aE9ial0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYSBmaWxlIGZyb20gZGlza1xuICAgICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgZm9yIHRoZSBmaWxlIGRlbGV0ZVxuICAgICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZGVsZXRlZCBmaWxlIGRhdGEgcmVzdWx0XG4gICAgICovXG4gICAgYXN5bmMgZGVsZXRlRmlsZShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgob3B0aW9ucy5kaXJlY3RvcnksIG9wdGlvbnMucGF0aCk7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gKGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGF0aF0pKTtcbiAgICAgICAgaWYgKGVudHJ5ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRmlsZSBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHRoaXMuZGJJbmRleFJlcXVlc3QoJ2J5X2ZvbGRlcicsICdnZXRBbGxLZXlzJywgW1xuICAgICAgICAgICAgSURCS2V5UmFuZ2Uub25seShwYXRoKSxcbiAgICAgICAgXSk7XG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCAhPT0gMClcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdGb2xkZXIgaXMgbm90IGVtcHR5LicpO1xuICAgICAgICBhd2FpdCB0aGlzLmRiUmVxdWVzdCgnZGVsZXRlJywgW3BhdGhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZGlyZWN0b3J5LlxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgZm9yIHRoZSBta2RpclxuICAgICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbWtkaXIgcmVzdWx0XG4gICAgICovXG4gICAgYXN5bmMgbWtkaXIob3B0aW9ucykge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKG9wdGlvbnMuZGlyZWN0b3J5LCBvcHRpb25zLnBhdGgpO1xuICAgICAgICBjb25zdCBkb1JlY3Vyc2l2ZSA9IG9wdGlvbnMucmVjdXJzaXZlO1xuICAgICAgICBjb25zdCBwYXJlbnRQYXRoID0gcGF0aC5zdWJzdHIoMCwgcGF0aC5sYXN0SW5kZXhPZignLycpKTtcbiAgICAgICAgY29uc3QgZGVwdGggPSAocGF0aC5tYXRjaCgvXFwvL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHBhcmVudEVudHJ5ID0gKGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbcGFyZW50UGF0aF0pKTtcbiAgICAgICAgY29uc3Qgb2NjdXBpZWRFbnRyeSA9IChhd2FpdCB0aGlzLmRiUmVxdWVzdCgnZ2V0JywgW3BhdGhdKSk7XG4gICAgICAgIGlmIChkZXB0aCA9PT0gMSlcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdDYW5ub3QgY3JlYXRlIFJvb3QgZGlyZWN0b3J5Jyk7XG4gICAgICAgIGlmIChvY2N1cGllZEVudHJ5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQ3VycmVudCBkaXJlY3RvcnkgZG9lcyBhbHJlYWR5IGV4aXN0LicpO1xuICAgICAgICBpZiAoIWRvUmVjdXJzaXZlICYmIGRlcHRoICE9PSAyICYmIHBhcmVudEVudHJ5ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUGFyZW50IGRpcmVjdG9yeSBtdXN0IGV4aXN0Jyk7XG4gICAgICAgIGlmIChkb1JlY3Vyc2l2ZSAmJiBkZXB0aCAhPT0gMiAmJiBwYXJlbnRFbnRyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRBcmdQYXRoID0gcGFyZW50UGF0aC5zdWJzdHIocGFyZW50UGF0aC5pbmRleE9mKCcvJywgMSkpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5ta2Rpcih7XG4gICAgICAgICAgICAgICAgcGF0aDogcGFyZW50QXJnUGF0aCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6IG9wdGlvbnMuZGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZTogZG9SZWN1cnNpdmUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBwYXRoT2JqID0ge1xuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGZvbGRlcjogcGFyZW50UGF0aCxcbiAgICAgICAgICAgIHR5cGU6ICdkaXJlY3RvcnknLFxuICAgICAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgICAgIGN0aW1lOiBub3csXG4gICAgICAgICAgICBtdGltZTogbm93LFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCB0aGlzLmRiUmVxdWVzdCgncHV0JywgW3BhdGhPYmpdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgZGlyZWN0b3J5XG4gICAgICogQHBhcmFtIG9wdGlvbnMgdGhlIG9wdGlvbnMgZm9yIHRoZSBkaXJlY3RvcnkgcmVtb3ZlXG4gICAgICovXG4gICAgYXN5bmMgcm1kaXIob3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IHBhdGgsIGRpcmVjdG9yeSwgcmVjdXJzaXZlIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHRoaXMuZ2V0UGF0aChkaXJlY3RvcnksIHBhdGgpO1xuICAgICAgICBjb25zdCBlbnRyeSA9IChhd2FpdCB0aGlzLmRiUmVxdWVzdCgnZ2V0JywgW2Z1bGxQYXRoXSkpO1xuICAgICAgICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdGb2xkZXIgZG9lcyBub3QgZXhpc3QuJyk7XG4gICAgICAgIGlmIChlbnRyeS50eXBlICE9PSAnZGlyZWN0b3J5JylcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdSZXF1ZXN0ZWQgcGF0aCBpcyBub3QgYSBkaXJlY3RvcnknKTtcbiAgICAgICAgY29uc3QgcmVhZERpclJlc3VsdCA9IGF3YWl0IHRoaXMucmVhZGRpcih7IHBhdGgsIGRpcmVjdG9yeSB9KTtcbiAgICAgICAgaWYgKHJlYWREaXJSZXN1bHQuZmlsZXMubGVuZ3RoICE9PSAwICYmICFyZWN1cnNpdmUpXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRm9sZGVyIGlzIG5vdCBlbXB0eScpO1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHJlYWREaXJSZXN1bHQuZmlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5UGF0aCA9IGAke3BhdGh9LyR7ZW50cnkubmFtZX1gO1xuICAgICAgICAgICAgY29uc3QgZW50cnlPYmogPSBhd2FpdCB0aGlzLnN0YXQoeyBwYXRoOiBlbnRyeVBhdGgsIGRpcmVjdG9yeSB9KTtcbiAgICAgICAgICAgIGlmIChlbnRyeU9iai50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZUZpbGUoeyBwYXRoOiBlbnRyeVBhdGgsIGRpcmVjdG9yeSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucm1kaXIoeyBwYXRoOiBlbnRyeVBhdGgsIGRpcmVjdG9yeSwgcmVjdXJzaXZlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdkZWxldGUnLCBbZnVsbFBhdGhdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgbGlzdCBvZiBmaWxlcyBmcm9tIHRoZSBkaXJlY3RvcnkgKG5vdCByZWN1cnNpdmUpXG4gICAgICogQHBhcmFtIG9wdGlvbnMgdGhlIG9wdGlvbnMgZm9yIHRoZSByZWFkZGlyIG9wZXJhdGlvblxuICAgICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVhZGRpciBkaXJlY3RvcnkgbGlzdGluZyByZXN1bHRcbiAgICAgKi9cbiAgICBhc3luYyByZWFkZGlyKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0UGF0aChvcHRpb25zLmRpcmVjdG9yeSwgb3B0aW9ucy5wYXRoKTtcbiAgICAgICAgY29uc3QgZW50cnkgPSAoYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtwYXRoXSkpO1xuICAgICAgICBpZiAob3B0aW9ucy5wYXRoICE9PSAnJyAmJiBlbnRyeSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0ZvbGRlciBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IGF3YWl0IHRoaXMuZGJJbmRleFJlcXVlc3QoJ2J5X2ZvbGRlcicsICdnZXRBbGxLZXlzJywgW0lEQktleVJhbmdlLm9ubHkocGF0aCldKTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRyaWVzLm1hcChhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHN1YkVudHJ5ID0gKGF3YWl0IHRoaXMuZGJSZXF1ZXN0KCdnZXQnLCBbZV0pKTtcbiAgICAgICAgICAgIGlmIChzdWJFbnRyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3ViRW50cnkgPSAoYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtlICsgJy8nXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBlLnN1YnN0cmluZyhwYXRoLmxlbmd0aCArIDEpLFxuICAgICAgICAgICAgICAgIHR5cGU6IHN1YkVudHJ5LnR5cGUsXG4gICAgICAgICAgICAgICAgc2l6ZTogc3ViRW50cnkuc2l6ZSxcbiAgICAgICAgICAgICAgICBjdGltZTogc3ViRW50cnkuY3RpbWUsXG4gICAgICAgICAgICAgICAgbXRpbWU6IHN1YkVudHJ5Lm10aW1lLFxuICAgICAgICAgICAgICAgIHVyaTogc3ViRW50cnkucGF0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHsgZmlsZXM6IGZpbGVzIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiBmdWxsIEZpbGUgVVJJIGZvciBhIHBhdGggYW5kIGRpcmVjdG9yeVxuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBvcHRpb25zIGZvciB0aGUgc3RhdCBvcGVyYXRpb25cbiAgICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGZpbGUgc3RhdCByZXN1bHRcbiAgICAgKi9cbiAgICBhc3luYyBnZXRVcmkob3B0aW9ucykge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKG9wdGlvbnMuZGlyZWN0b3J5LCBvcHRpb25zLnBhdGgpO1xuICAgICAgICBsZXQgZW50cnkgPSAoYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtwYXRoXSkpO1xuICAgICAgICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW50cnkgPSAoYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtwYXRoICsgJy8nXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmk6IChlbnRyeSA9PT0gbnVsbCB8fCBlbnRyeSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZW50cnkucGF0aCkgfHwgcGF0aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGRhdGEgYWJvdXQgYSBmaWxlXG4gICAgICogQHBhcmFtIG9wdGlvbnMgdGhlIG9wdGlvbnMgZm9yIHRoZSBzdGF0IG9wZXJhdGlvblxuICAgICAqIEByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZmlsZSBzdGF0IHJlc3VsdFxuICAgICAqL1xuICAgIGFzeW5jIHN0YXQob3B0aW9ucykge1xuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5nZXRQYXRoKG9wdGlvbnMuZGlyZWN0b3J5LCBvcHRpb25zLnBhdGgpO1xuICAgICAgICBsZXQgZW50cnkgPSAoYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtwYXRoXSkpO1xuICAgICAgICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW50cnkgPSAoYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtwYXRoICsgJy8nXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0VudHJ5IGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogZW50cnkudHlwZSxcbiAgICAgICAgICAgIHNpemU6IGVudHJ5LnNpemUsXG4gICAgICAgICAgICBjdGltZTogZW50cnkuY3RpbWUsXG4gICAgICAgICAgICBtdGltZTogZW50cnkubXRpbWUsXG4gICAgICAgICAgICB1cmk6IGVudHJ5LnBhdGgsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbmFtZSBhIGZpbGUgb3IgZGlyZWN0b3J5XG4gICAgICogQHBhcmFtIG9wdGlvbnMgdGhlIG9wdGlvbnMgZm9yIHRoZSByZW5hbWUgb3BlcmF0aW9uXG4gICAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZW5hbWUgcmVzdWx0XG4gICAgICovXG4gICAgYXN5bmMgcmVuYW1lKG9wdGlvbnMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fY29weShvcHRpb25zLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3B5IGEgZmlsZSBvciBkaXJlY3RvcnlcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyB0aGUgb3B0aW9ucyBmb3IgdGhlIGNvcHkgb3BlcmF0aW9uXG4gICAgICogQHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb3B5IHJlc3VsdFxuICAgICAqL1xuICAgIGFzeW5jIGNvcHkob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29weShvcHRpb25zLCBmYWxzZSk7XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3RQZXJtaXNzaW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHsgcHVibGljU3RvcmFnZTogJ2dyYW50ZWQnIH07XG4gICAgfVxuICAgIGFzeW5jIGNoZWNrUGVybWlzc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB7IHB1YmxpY1N0b3JhZ2U6ICdncmFudGVkJyB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGNhbiBwZXJmb3JtIGEgY29weSBvciBhIHJlbmFtZVxuICAgICAqIEBwYXJhbSBvcHRpb25zIHRoZSBvcHRpb25zIGZvciB0aGUgcmVuYW1lIG9wZXJhdGlvblxuICAgICAqIEBwYXJhbSBkb1JlbmFtZSB3aGV0aGVyIHRvIHBlcmZvcm0gYSByZW5hbWUgb3IgY29weSBvcGVyYXRpb25cbiAgICAgKiBAcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdFxuICAgICAqL1xuICAgIGFzeW5jIF9jb3B5KG9wdGlvbnMsIGRvUmVuYW1lID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHsgdG9EaXJlY3RvcnkgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHsgdG8sIGZyb20sIGRpcmVjdG9yeTogZnJvbURpcmVjdG9yeSB9ID0gb3B0aW9ucztcbiAgICAgICAgaWYgKCF0byB8fCAhZnJvbSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0JvdGggdG8gYW5kIGZyb20gbXVzdCBiZSBwcm92aWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIG5vIFwidG9cIiBkaXJlY3RvcnkgaXMgcHJvdmlkZWQsIHVzZSB0aGUgXCJmcm9tXCIgZGlyZWN0b3J5XG4gICAgICAgIGlmICghdG9EaXJlY3RvcnkpIHtcbiAgICAgICAgICAgIHRvRGlyZWN0b3J5ID0gZnJvbURpcmVjdG9yeTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmcm9tUGF0aCA9IHRoaXMuZ2V0UGF0aChmcm9tRGlyZWN0b3J5LCBmcm9tKTtcbiAgICAgICAgY29uc3QgdG9QYXRoID0gdGhpcy5nZXRQYXRoKHRvRGlyZWN0b3J5LCB0byk7XG4gICAgICAgIC8vIFRlc3QgdGhhdCB0aGUgXCJ0b1wiIGFuZCBcImZyb21cIiBsb2NhdGlvbnMgYXJlIGRpZmZlcmVudFxuICAgICAgICBpZiAoZnJvbVBhdGggPT09IHRvUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmk6IHRvUGF0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUGF0aFBhcmVudChmcm9tUGF0aCwgdG9QYXRoKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RvIHBhdGggY2Fubm90IGNvbnRhaW4gdGhlIGZyb20gcGF0aCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIHRoZSBzdGF0ZSBvZiB0aGUgXCJ0b1wiIGxvY2F0aW9uXG4gICAgICAgIGxldCB0b09iajtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRvT2JqID0gYXdhaXQgdGhpcy5zdGF0KHtcbiAgICAgICAgICAgICAgICBwYXRoOiB0byxcbiAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6IHRvRGlyZWN0b3J5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFRvIGxvY2F0aW9uIGRvZXMgbm90IGV4aXN0LCBlbnN1cmUgdGhlIGRpcmVjdG9yeSBjb250YWluaW5nIFwidG9cIiBsb2NhdGlvbiBleGlzdHMgYW5kIGlzIGEgZGlyZWN0b3J5XG4gICAgICAgICAgICBjb25zdCB0b1BhdGhDb21wb25lbnRzID0gdG8uc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIHRvUGF0aENvbXBvbmVudHMucG9wKCk7XG4gICAgICAgICAgICBjb25zdCB0b1BhdGggPSB0b1BhdGhDb21wb25lbnRzLmpvaW4oJy8nKTtcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBjb250YWluaW5nIGRpcmVjdG9yeSBvZiB0aGUgXCJ0b1wiIGxvY2F0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHRvUGF0aENvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvUGFyZW50RGlyZWN0b3J5ID0gYXdhaXQgdGhpcy5zdGF0KHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogdG9QYXRoLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6IHRvRGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0b1BhcmVudERpcmVjdG9yeS50eXBlICE9PSAnZGlyZWN0b3J5Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmVudCBkaXJlY3Rvcnkgb2YgdGhlIHRvIHBhdGggaXMgYSBmaWxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENhbm5vdCBvdmVyd3JpdGUgYSBkaXJlY3RvcnlcbiAgICAgICAgaWYgKHRvT2JqICYmIHRvT2JqLnR5cGUgPT09ICdkaXJlY3RvcnknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBvdmVyd3JpdGUgYSBkaXJlY3Rvcnkgd2l0aCBhIGZpbGUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbnN1cmUgdGhlIFwiZnJvbVwiIG9iamVjdCBleGlzdHNcbiAgICAgICAgY29uc3QgZnJvbU9iaiA9IGF3YWl0IHRoaXMuc3RhdCh7XG4gICAgICAgICAgICBwYXRoOiBmcm9tLFxuICAgICAgICAgICAgZGlyZWN0b3J5OiBmcm9tRGlyZWN0b3J5LFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gU2V0IHRoZSBtdGltZS9jdGltZSBvZiB0aGUgc3VwcGxpZWQgcGF0aFxuICAgICAgICBjb25zdCB1cGRhdGVUaW1lID0gYXN5bmMgKHBhdGgsIGN0aW1lLCBtdGltZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnVsbFBhdGggPSB0aGlzLmdldFBhdGgodG9EaXJlY3RvcnksIHBhdGgpO1xuICAgICAgICAgICAgY29uc3QgZW50cnkgPSAoYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ2dldCcsIFtmdWxsUGF0aF0pKTtcbiAgICAgICAgICAgIGVudHJ5LmN0aW1lID0gY3RpbWU7XG4gICAgICAgICAgICBlbnRyeS5tdGltZSA9IG10aW1lO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5kYlJlcXVlc3QoJ3B1dCcsIFtlbnRyeV0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdGltZSA9IGZyb21PYmouY3RpbWUgPyBmcm9tT2JqLmN0aW1lIDogRGF0ZS5ub3coKTtcbiAgICAgICAgc3dpdGNoIChmcm9tT2JqLnR5cGUpIHtcbiAgICAgICAgICAgIC8vIFRoZSBcImZyb21cIiBvYmplY3QgaXMgYSBmaWxlXG4gICAgICAgICAgICBjYXNlICdmaWxlJzoge1xuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGVcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5yZWFkRmlsZSh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGZyb20sXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogZnJvbURpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBPcHRpb25hbGx5IHJlbW92ZSB0aGUgZmlsZVxuICAgICAgICAgICAgICAgIGlmIChkb1JlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZUZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogZnJvbURpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBlbmNvZGluZztcbiAgICAgICAgICAgICAgICBpZiAoIShmaWxlLmRhdGEgaW5zdGFuY2VvZiBCbG9iKSAmJiAhdGhpcy5pc0Jhc2U2NFN0cmluZyhmaWxlLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuY29kaW5nID0gRW5jb2RpbmcuVVRGODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV3JpdGUgdGhlIGZpbGUgdG8gdGhlIG5ldyBsb2NhdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IHdyaXRlUmVzdWx0ID0gYXdhaXQgdGhpcy53cml0ZUZpbGUoe1xuICAgICAgICAgICAgICAgICAgICBwYXRoOiB0byxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5OiB0b0RpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZmlsZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBlbmNvZGluZzogZW5jb2RpbmcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gQ29weSB0aGUgbXRpbWUvY3RpbWUgb2YgYSByZW5hbWVkIGZpbGVcbiAgICAgICAgICAgICAgICBpZiAoZG9SZW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVGltZSh0bywgY3RpbWUsIGZyb21PYmoubXRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIHByb21pc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JpdGVSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdkaXJlY3RvcnknOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdDYW5ub3QgbW92ZSBhIGRpcmVjdG9yeSBvdmVyIGFuIGV4aXN0aW5nIG9iamVjdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHRvIGRpcmVjdG9yeVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm1rZGlyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5OiB0b0RpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBDb3B5IHRoZSBtdGltZS9jdGltZSBvZiBhIHJlbmFtZWQgZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb1JlbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlVGltZSh0bywgY3RpbWUsIGZyb21PYmoubXRpbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGNvbnRlbnRzIG9mIHRoZSBmcm9tIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSAoYXdhaXQgdGhpcy5yZWFkZGlyKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5OiBmcm9tRGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgIH0pKS5maWxlcztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpbGVuYW1lIG9mIGNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgaXRlbSBmcm9tIHRoZSBmcm9tIGRpcmVjdG9yeSB0byB0aGUgdG8gZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2NvcHkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogYCR7ZnJvbX0vJHtmaWxlbmFtZS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogYCR7dG99LyR7ZmlsZW5hbWUubmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5OiBmcm9tRGlyZWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9EaXJlY3RvcnksXG4gICAgICAgICAgICAgICAgICAgIH0sIGRvUmVuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uYWxseSByZW1vdmUgdGhlIG9yaWdpbmFsIGZyb20gZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgaWYgKGRvUmVuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucm1kaXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogZnJvbURpcmVjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmk6IHRvUGF0aCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaXNCYXNlNjRTdHJpbmcoc3RyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYnRvYShhdG9iKHN0cikpID09IHN0cjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5GaWxlc3lzdGVtV2ViLl9kZWJ1ZyA9IHRydWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWIuanMubWFwIl0sIm5hbWVzIjpbInJlc29sdmUiLCJlbnRyeSIsInRvUGF0aCIsImN0aW1lIl0sIm1hcHBpbmdzIjoiOzs7QUFFQSxTQUFTLFFBQVEsTUFBTTtBQUNuQixRQUFNLFFBQVEsS0FBSyxNQUFNLEdBQUcsRUFBRSxPQUFPLFVBQVEsU0FBUyxHQUFHO0FBQ3pELFFBQU0sV0FBVyxDQUFBO0FBQ2pCLFFBQU0sUUFBUSxVQUFRO0FBQ2xCLFFBQUksU0FBUyxRQUNULFNBQVMsU0FBUyxLQUNsQixTQUFTLFNBQVMsU0FBUyxPQUFPLE1BQU07QUFDeEMsZUFBUyxJQUFHO0FBQUEsSUFDZixPQUNJO0FBQ0QsZUFBUyxLQUFLLElBQUk7QUFBQSxJQUNyQjtBQUFBLEVBQ1Qs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
