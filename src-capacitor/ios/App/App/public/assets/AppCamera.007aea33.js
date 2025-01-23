import { W as WebPlugin, bJ as CapacitorException, az as registerPlugin, u as __vitePreload } from "./index.61ed5618.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.fc6ce9e4.js";
var CameraSource;
(function(CameraSource2) {
  CameraSource2["Prompt"] = "PROMPT";
  CameraSource2["Camera"] = "CAMERA";
  CameraSource2["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function(CameraDirection2) {
  CameraDirection2["Rear"] = "REAR";
  CameraDirection2["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function(CameraResultType2) {
  CameraResultType2["Uri"] = "uri";
  CameraResultType2["Base64"] = "base64";
  CameraResultType2["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
class CameraWeb extends WebPlugin {
  async getPhoto(options) {
    return new Promise(async (resolve, reject) => {
      if (options.webUseInput || options.source === CameraSource.Photos) {
        this.fileInputExperience(options, resolve, reject);
      } else if (options.source === CameraSource.Prompt) {
        let actionSheet = document.querySelector("pwa-action-sheet");
        if (!actionSheet) {
          actionSheet = document.createElement("pwa-action-sheet");
          document.body.appendChild(actionSheet);
        }
        actionSheet.header = options.promptLabelHeader || "Photo";
        actionSheet.cancelable = false;
        actionSheet.options = [
          { title: options.promptLabelPhoto || "From Photos" },
          { title: options.promptLabelPicture || "Take Picture" }
        ];
        actionSheet.addEventListener("onSelection", async (e) => {
          const selection = e.detail;
          if (selection === 0) {
            this.fileInputExperience(options, resolve, reject);
          } else {
            this.cameraExperience(options, resolve, reject);
          }
        });
      } else {
        this.cameraExperience(options, resolve, reject);
      }
    });
  }
  async pickImages(_options) {
    return new Promise(async (resolve, reject) => {
      this.multipleFileInputExperience(resolve, reject);
    });
  }
  async cameraExperience(options, resolve, reject) {
    if (customElements.get("pwa-camera-modal")) {
      const cameraModal = document.createElement("pwa-camera-modal");
      cameraModal.facingMode = options.direction === CameraDirection.Front ? "user" : "environment";
      document.body.appendChild(cameraModal);
      try {
        await cameraModal.componentOnReady();
        cameraModal.addEventListener("onPhoto", async (e) => {
          const photo = e.detail;
          if (photo === null) {
            reject(new CapacitorException("User cancelled photos app"));
          } else if (photo instanceof Error) {
            reject(photo);
          } else {
            resolve(await this._getCameraPhoto(photo, options));
          }
          cameraModal.dismiss();
          document.body.removeChild(cameraModal);
        });
        cameraModal.present();
      } catch (e) {
        this.fileInputExperience(options, resolve, reject);
      }
    } else {
      console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
      this.fileInputExperience(options, resolve, reject);
    }
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input";
      input.type = "file";
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const file = input.files[0];
        let format = "jpeg";
        if (file.type === "image/png") {
          format = "png";
        } else if (file.type === "image/gif") {
          format = "gif";
        }
        if (options.resultType === "dataUrl" || options.resultType === "base64") {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            if (options.resultType === "dataUrl") {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === "base64") {
              const b64 = reader.result.split(",")[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format
          });
          cleanup();
        }
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.capture = true;
    if (options.source === CameraSource.Photos || options.source === CameraSource.Prompt) {
      input.removeAttribute("capture");
    } else if (options.direction === CameraDirection.Front) {
      input.capture = "user";
    } else if (options.direction === CameraDirection.Rear) {
      input.capture = "environment";
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input-multiple");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input-multiple";
      input.type = "file";
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const photos = [];
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = "jpeg";
          if (file.type === "image/png") {
            format = "png";
          } else if (file.type === "image/gif") {
            format = "gif";
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format
          });
        }
        resolve({ photos });
        cleanup();
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = photo.type.split("/")[1];
      if (options.resultType === "uri") {
        resolve({
          webPath: URL.createObjectURL(photo),
          format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === "dataUrl") {
            resolve({
              dataUrl: r,
              format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(",")[1],
              format,
              saved: false
            });
          }
        };
        reader.onerror = (e) => {
          reject(e);
        };
      }
    });
  }
  async checkPermissions() {
    if (typeof navigator === "undefined" || !navigator.permissions) {
      throw this.unavailable("Permissions API not available in this browser");
    }
    try {
      const permission = await window.navigator.permissions.query({
        name: "camera"
      });
      return {
        camera: permission.state,
        photos: "granted"
      };
    } catch (_a) {
      throw this.unavailable("Camera permissions are not available in this browser");
    }
  }
  async requestPermissions() {
    throw this.unimplemented("Not implemented on web.");
  }
  async pickLimitedLibraryPhotos() {
    throw this.unavailable("Not implemented on web.");
  }
  async getLimitedLibraryPhotos() {
    throw this.unavailable("Not implemented on web.");
  }
}
new CameraWeb();
const Camera = registerPlugin("Camera", {
  web: () => new CameraWeb()
});
var Directory;
(function(Directory2) {
  Directory2["Documents"] = "DOCUMENTS";
  Directory2["Data"] = "DATA";
  Directory2["Library"] = "LIBRARY";
  Directory2["Cache"] = "CACHE";
  Directory2["External"] = "EXTERNAL";
  Directory2["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));
var Encoding;
(function(Encoding2) {
  Encoding2["UTF8"] = "utf8";
  Encoding2["ASCII"] = "ascii";
  Encoding2["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
const Filesystem = registerPlugin("Filesystem", {
  web: () => __vitePreload(() => import("./web.913dcea8.js"), true ? ["assets/web.913dcea8.js","assets/index.61ed5618.js","assets/index.dbee30c0.css","assets/vue-i18n.runtime.esm-bundler.fc6ce9e4.js"] : void 0).then((m) => new m.FilesystemWeb())
});
const AppCamera = {
  async isCameraEnabled() {
    let myPromise = new Promise(function(resolve, reject) {
      Camera.checkPermissions().then((data) => {
        switch (data.camera) {
          case "prompt":
          case "prompt-with-rationale":
          case "denied":
            Camera.requestPermissions().then((data2) => {
              switch (data2.camera) {
                case "granted":
                  resolve("granted");
                  break;
                default:
                  reject("denied");
                  break;
              }
            }).catch((error) => {
              reject(error);
            });
            break;
          case "granted":
            resolve("granted");
            break;
        }
      }).catch((error) => {
        reject(error);
      });
    });
    return await myPromise;
  },
  async isFileAccessEnabled() {
    let myPromise = new Promise(function(resolve, reject) {
      Filesystem.checkPermissions().then((data) => {
        switch (data.publicStorage) {
          case "prompt":
          case "prompt-with-rationale":
          case "denied":
            Filesystem.requestPermissions().then((data2) => {
              switch (data2.publicStorage) {
                case "granted":
                  resolve("granted");
                  break;
                default:
                  reject("denied");
                  break;
              }
            }).catch((error) => {
              reject(error);
            });
            break;
          case "granted":
            resolve("granted");
            break;
          default:
            reject("denied");
            break;
        }
      }).catch((error) => {
        reject(error);
      });
    });
    return await myPromise;
  },
  async getPhoto(sourceType) {
    let $source = CameraSource.Prompt;
    if (sourceType == 2) {
      $source = CameraSource.Camera;
    } else if (sourceType == 3) {
      $source = CameraSource.Photos;
    }
    const { t } = useI18n();
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      width: 500,
      source: $source,
      promptLabelHeader: t("Photo"),
      promptLabelCancel: t("Cancel"),
      promptLabelPhoto: t("From Photos"),
      promptLabelPicture: t("Take Picture")
    });
    if (image) {
      const contents = await Filesystem.readFile({
        path: image.path
      });
      if (contents) {
        return {
          format: image.format,
          path: image.webPath,
          data: contents.data
        };
      }
    }
    return false;
  },
  async ReadFile(imagePath) {
    const contents = await Filesystem.readFile({
      path: imagePath
    });
    if (contents) {
      return contents;
    }
    return false;
  }
};
export { AppCamera as A, Encoding as E };
//# sourceMappingURL=data:application/json;base64,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QyxNQUFNO0FBQUEsSUFDWixDQUFLO0FBQ0QsUUFBSSxVQUFVO0FBQ1osYUFBTztBQUFBLElBQ1I7QUFDRCxXQUFPO0FBQUEsRUFDUjtBQUVIIiwibmFtZXMiOlsiQ2FtZXJhU291cmNlIiwiQ2FtZXJhRGlyZWN0aW9uIiwiQ2FtZXJhUmVzdWx0VHlwZSIsIkRpcmVjdG9yeSIsIkVuY29kaW5nIiwiZGF0YSJdLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2NhbWVyYS9kaXN0L2VzbS9kZWZpbml0aW9ucy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2NhbWVyYS9kaXN0L2VzbS93ZWIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9jYW1lcmEvZGlzdC9lc20vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9maWxlc3lzdGVtL2Rpc3QvZXNtL2RlZmluaXRpb25zLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BjYXBhY2l0b3IvZmlsZXN5c3RlbS9kaXN0L2VzbS9pbmRleC5qcyIsIi4uLy4uLy4uL3NyYy9hcGkvQXBwQ2FtZXJhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgQ2FtZXJhU291cmNlO1xuKGZ1bmN0aW9uIChDYW1lcmFTb3VyY2UpIHtcbiAgICAvKipcbiAgICAgKiBQcm9tcHRzIHRoZSB1c2VyIHRvIHNlbGVjdCBlaXRoZXIgdGhlIHBob3RvIGFsYnVtIG9yIHRha2UgYSBwaG90by5cbiAgICAgKi9cbiAgICBDYW1lcmFTb3VyY2VbXCJQcm9tcHRcIl0gPSBcIlBST01QVFwiO1xuICAgIC8qKlxuICAgICAqIFRha2UgYSBuZXcgcGhvdG8gdXNpbmcgdGhlIGNhbWVyYS5cbiAgICAgKi9cbiAgICBDYW1lcmFTb3VyY2VbXCJDYW1lcmFcIl0gPSBcIkNBTUVSQVwiO1xuICAgIC8qKlxuICAgICAqIFBpY2sgYW4gZXhpc3RpbmcgcGhvdG8gZnJvbSB0aGUgZ2FsbGVyeSBvciBwaG90byBhbGJ1bS5cbiAgICAgKi9cbiAgICBDYW1lcmFTb3VyY2VbXCJQaG90b3NcIl0gPSBcIlBIT1RPU1wiO1xufSkoQ2FtZXJhU291cmNlIHx8IChDYW1lcmFTb3VyY2UgPSB7fSkpO1xuZXhwb3J0IHZhciBDYW1lcmFEaXJlY3Rpb247XG4oZnVuY3Rpb24gKENhbWVyYURpcmVjdGlvbikge1xuICAgIENhbWVyYURpcmVjdGlvbltcIlJlYXJcIl0gPSBcIlJFQVJcIjtcbiAgICBDYW1lcmFEaXJlY3Rpb25bXCJGcm9udFwiXSA9IFwiRlJPTlRcIjtcbn0pKENhbWVyYURpcmVjdGlvbiB8fCAoQ2FtZXJhRGlyZWN0aW9uID0ge30pKTtcbmV4cG9ydCB2YXIgQ2FtZXJhUmVzdWx0VHlwZTtcbihmdW5jdGlvbiAoQ2FtZXJhUmVzdWx0VHlwZSkge1xuICAgIENhbWVyYVJlc3VsdFR5cGVbXCJVcmlcIl0gPSBcInVyaVwiO1xuICAgIENhbWVyYVJlc3VsdFR5cGVbXCJCYXNlNjRcIl0gPSBcImJhc2U2NFwiO1xuICAgIENhbWVyYVJlc3VsdFR5cGVbXCJEYXRhVXJsXCJdID0gXCJkYXRhVXJsXCI7XG59KShDYW1lcmFSZXN1bHRUeXBlIHx8IChDYW1lcmFSZXN1bHRUeXBlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmluaXRpb25zLmpzLm1hcCIsImltcG9ydCB7IFdlYlBsdWdpbiwgQ2FwYWNpdG9yRXhjZXB0aW9uIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmltcG9ydCB7IENhbWVyYVNvdXJjZSwgQ2FtZXJhRGlyZWN0aW9uIH0gZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgY2xhc3MgQ2FtZXJhV2ViIGV4dGVuZHMgV2ViUGx1Z2luIHtcbiAgICBhc3luYyBnZXRQaG90byhvcHRpb25zKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy53ZWJVc2VJbnB1dCB8fCBvcHRpb25zLnNvdXJjZSA9PT0gQ2FtZXJhU291cmNlLlBob3Rvcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUlucHV0RXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5zb3VyY2UgPT09IENhbWVyYVNvdXJjZS5Qcm9tcHQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uU2hlZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwd2EtYWN0aW9uLXNoZWV0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb25TaGVldCkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25TaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3B3YS1hY3Rpb24tc2hlZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3Rpb25TaGVldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjdGlvblNoZWV0LmhlYWRlciA9IG9wdGlvbnMucHJvbXB0TGFiZWxIZWFkZXIgfHwgJ1Bob3RvJztcbiAgICAgICAgICAgICAgICBhY3Rpb25TaGVldC5jYW5jZWxhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYWN0aW9uU2hlZXQub3B0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogb3B0aW9ucy5wcm9tcHRMYWJlbFBob3RvIHx8ICdGcm9tIFBob3RvcycgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogb3B0aW9ucy5wcm9tcHRMYWJlbFBpY3R1cmUgfHwgJ1Rha2UgUGljdHVyZScgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGFjdGlvblNoZWV0LmFkZEV2ZW50TGlzdGVuZXIoJ29uU2VsZWN0aW9uJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZS5kZXRhaWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZUlucHV0RXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhRXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgcGlja0ltYWdlcyhfb3B0aW9ucykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXN5bmMtcHJvbWlzZS1leGVjdXRvclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tdWx0aXBsZUZpbGVJbnB1dEV4cGVyaWVuY2UocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGNhbWVyYUV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChjdXN0b21FbGVtZW50cy5nZXQoJ3B3YS1jYW1lcmEtbW9kYWwnKSkge1xuICAgICAgICAgICAgY29uc3QgY2FtZXJhTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwd2EtY2FtZXJhLW1vZGFsJyk7XG4gICAgICAgICAgICBjYW1lcmFNb2RhbC5mYWNpbmdNb2RlID1cbiAgICAgICAgICAgICAgICBvcHRpb25zLmRpcmVjdGlvbiA9PT0gQ2FtZXJhRGlyZWN0aW9uLkZyb250ID8gJ3VzZXInIDogJ2Vudmlyb25tZW50JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FtZXJhTW9kYWwpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBjYW1lcmFNb2RhbC5jb21wb25lbnRPblJlYWR5KCk7XG4gICAgICAgICAgICAgICAgY2FtZXJhTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignb25QaG90bycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBob3RvID0gZS5kZXRhaWw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwaG90byA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBDYXBhY2l0b3JFeGNlcHRpb24oJ1VzZXIgY2FuY2VsbGVkIHBob3RvcyBhcHAnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGhvdG8gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHBob3RvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXdhaXQgdGhpcy5fZ2V0Q2FtZXJhUGhvdG8ocGhvdG8sIG9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFNb2RhbC5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2FtZXJhTW9kYWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhbWVyYU1vZGFsLnByZXNlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlSW5wdXRFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gbG9hZCBQV0EgRWxlbWVudCAncHdhLWNhbWVyYS1tb2RhbCcuIFNlZSB0aGUgZG9jczogaHR0cHM6Ly9jYXBhY2l0b3Jqcy5jb20vZG9jcy93ZWIvcHdhLWVsZW1lbnRzLmApO1xuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXRFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlsZUlucHV0RXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19jYXBhY2l0b3ItY2FtZXJhLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAoX2EgPSBpbnB1dC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoaW5wdXQpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5pZCA9ICdfY2FwYWNpdG9yLWNhbWVyYS1pbnB1dCc7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgICAgICAgaW5wdXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKF9lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIGxldCBmb3JtYXQgPSAnanBlZyc7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUudHlwZSA9PT0gJ2ltYWdlL3BuZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gJ3BuZyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpbGUudHlwZSA9PT0gJ2ltYWdlL2dpZicpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0ID0gJ2dpZic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlc3VsdFR5cGUgPT09ICdkYXRhVXJsJyB8fFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc3VsdFR5cGUgPT09ICdiYXNlNjQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVzdWx0VHlwZSA9PT0gJ2RhdGFVcmwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVcmw6IHJlYWRlci5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMucmVzdWx0VHlwZSA9PT0gJ2Jhc2U2NCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiNjQgPSByZWFkZXIucmVzdWx0LnNwbGl0KCcsJylbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U2NFN0cmluZzogYjY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgd2ViUGF0aDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgKF9lKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBDYXBhY2l0b3JFeGNlcHRpb24oJ1VzZXIgY2FuY2VsbGVkIHBob3RvcyBhcHAnKSk7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xuICAgICAgICBpbnB1dC5jYXB0dXJlID0gdHJ1ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc291cmNlID09PSBDYW1lcmFTb3VyY2UuUGhvdG9zIHx8XG4gICAgICAgICAgICBvcHRpb25zLnNvdXJjZSA9PT0gQ2FtZXJhU291cmNlLlByb21wdCkge1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjYXB0dXJlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5kaXJlY3Rpb24gPT09IENhbWVyYURpcmVjdGlvbi5Gcm9udCkge1xuICAgICAgICAgICAgaW5wdXQuY2FwdHVyZSA9ICd1c2VyJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gQ2FtZXJhRGlyZWN0aW9uLlJlYXIpIHtcbiAgICAgICAgICAgIGlucHV0LmNhcHR1cmUgPSAnZW52aXJvbm1lbnQnO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgfVxuICAgIG11bHRpcGxlRmlsZUlucHV0RXhwZXJpZW5jZShyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19jYXBhY2l0b3ItY2FtZXJhLWlucHV0LW11bHRpcGxlJyk7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAoX2EgPSBpbnB1dC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoaW5wdXQpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5pZCA9ICdfY2FwYWNpdG9yLWNhbWVyYS1pbnB1dC1tdWx0aXBsZSc7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgICAgICAgaW5wdXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIGlucHV0Lm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKF9lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGhvdG9zID0gW107XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItZm9yLW9mXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXQgPSAnanBlZyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSAncG5nJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWxlLnR5cGUgPT09ICdpbWFnZS9naWYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSAnZ2lmJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwaG90b3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJQYXRoOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgcGhvdG9zIH0pO1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2FuY2VsJywgKF9lKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBDYXBhY2l0b3JFeGNlcHRpb24oJ1VzZXIgY2FuY2VsbGVkIHBob3RvcyBhcHAnKSk7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xuICAgICAgICBpbnB1dC5jbGljaygpO1xuICAgIH1cbiAgICBfZ2V0Q2FtZXJhUGhvdG8ocGhvdG8sIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXQgPSBwaG90by50eXBlLnNwbGl0KCcvJylbMV07XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5yZXN1bHRUeXBlID09PSAndXJpJykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICB3ZWJQYXRoOiBVUkwuY3JlYXRlT2JqZWN0VVJMKHBob3RvKSxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIHNhdmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHBob3RvKTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVzdWx0VHlwZSA9PT0gJ2RhdGFVcmwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVXJsOiByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTY0U3RyaW5nOiByLnNwbGl0KCcsJylbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgY2hlY2tQZXJtaXNzaW9ucygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8ICFuYXZpZ2F0b3IucGVybWlzc2lvbnMpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ1Blcm1pc3Npb25zIEFQSSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlcicpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUGVybWlzc2lvbnMvcXVlcnlcbiAgICAgICAgICAgIC8vIHRoZSBzcGVjaWZpYyBwZXJtaXNzaW9ucyB0aGF0IGFyZSBzdXBwb3J0ZWQgdmFyaWVzIGFtb25nIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50IHRoZVxuICAgICAgICAgICAgLy8gcGVybWlzc2lvbnMgQVBJLCBzbyB3ZSBuZWVkIGEgdHJ5L2NhdGNoIGluIGNhc2UgJ2NhbWVyYScgaXMgaW52YWxpZFxuICAgICAgICAgICAgY29uc3QgcGVybWlzc2lvbiA9IGF3YWl0IHdpbmRvdy5uYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdjYW1lcmEnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNhbWVyYTogcGVybWlzc2lvbi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwaG90b3M6ICdncmFudGVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLnVuYXZhaWxhYmxlKCdDYW1lcmEgcGVybWlzc2lvbnMgYXJlIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBicm93c2VyJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdFBlcm1pc3Npb25zKCkge1xuICAgICAgICB0aHJvdyB0aGlzLnVuaW1wbGVtZW50ZWQoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gICAgfVxuICAgIGFzeW5jIHBpY2tMaW1pdGVkTGlicmFyeVBob3RvcygpIHtcbiAgICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnTm90IGltcGxlbWVudGVkIG9uIHdlYi4nKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0TGltaXRlZExpYnJhcnlQaG90b3MoKSB7XG4gICAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gICAgfVxufVxuY29uc3QgQ2FtZXJhID0gbmV3IENhbWVyYVdlYigpO1xuZXhwb3J0IHsgQ2FtZXJhIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWIuanMubWFwIiwiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhV2ViIH0gZnJvbSAnLi93ZWInO1xuY29uc3QgQ2FtZXJhID0gcmVnaXN0ZXJQbHVnaW4oJ0NhbWVyYScsIHtcbiAgICB3ZWI6ICgpID0+IG5ldyBDYW1lcmFXZWIoKSxcbn0pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBDYW1lcmEgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCB2YXIgRGlyZWN0b3J5O1xuKGZ1bmN0aW9uIChEaXJlY3RvcnkpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgRG9jdW1lbnRzIGRpcmVjdG9yeS5cbiAgICAgKiBPbiBpT1MgaXQncyB0aGUgYXBwJ3MgZG9jdW1lbnRzIGRpcmVjdG9yeS5cbiAgICAgKiBVc2UgdGhpcyBkaXJlY3RvcnkgdG8gc3RvcmUgdXNlci1nZW5lcmF0ZWQgY29udGVudC5cbiAgICAgKiBPbiBBbmRyb2lkIGl0J3MgdGhlIFB1YmxpYyBEb2N1bWVudHMgZm9sZGVyLCBzbyBpdCdzIGFjY2Vzc2libGUgZnJvbSBvdGhlciBhcHBzLlxuICAgICAqIEl0J3Mgbm90IGFjY2VzaWJsZSBvbiBBbmRyb2lkIDEwIHVubGVzcyB0aGUgYXBwIGVuYWJsZXMgbGVnYWN5IEV4dGVybmFsIFN0b3JhZ2VcbiAgICAgKiBieSBhZGRpbmcgYGFuZHJvaWQ6cmVxdWVzdExlZ2FjeUV4dGVybmFsU3RvcmFnZT1cInRydWVcImAgaW4gdGhlIGBhcHBsaWNhdGlvbmAgdGFnXG4gICAgICogaW4gdGhlIGBBbmRyb2lkTWFuaWZlc3QueG1sYC5cbiAgICAgKiBPbiBBbmRyb2lkIDExIG9yIG5ld2VyIHRoZSBhcHAgY2FuIG9ubHkgYWNjZXNzIHRoZSBmaWxlcy9mb2xkZXJzIHRoZSBhcHAgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIERpcmVjdG9yeVtcIkRvY3VtZW50c1wiXSA9IFwiRE9DVU1FTlRTXCI7XG4gICAgLyoqXG4gICAgICogVGhlIERhdGEgZGlyZWN0b3J5LlxuICAgICAqIE9uIGlPUyBpdCB3aWxsIHVzZSB0aGUgRG9jdW1lbnRzIGRpcmVjdG9yeS5cbiAgICAgKiBPbiBBbmRyb2lkIGl0J3MgdGhlIGRpcmVjdG9yeSBob2xkaW5nIGFwcGxpY2F0aW9uIGZpbGVzLlxuICAgICAqIEZpbGVzIHdpbGwgYmUgZGVsZXRlZCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpcyB1bmluc3RhbGxlZC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIERpcmVjdG9yeVtcIkRhdGFcIl0gPSBcIkRBVEFcIjtcbiAgICAvKipcbiAgICAgKiBUaGUgTGlicmFyeSBkaXJlY3RvcnkuXG4gICAgICogT24gaU9TIGl0IHdpbGwgdXNlIHRoZSBMaWJyYXJ5IGRpcmVjdG9yeS5cbiAgICAgKiBPbiBBbmRyb2lkIGl0J3MgdGhlIGRpcmVjdG9yeSBob2xkaW5nIGFwcGxpY2F0aW9uIGZpbGVzLlxuICAgICAqIEZpbGVzIHdpbGwgYmUgZGVsZXRlZCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpcyB1bmluc3RhbGxlZC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjEuMFxuICAgICAqL1xuICAgIERpcmVjdG9yeVtcIkxpYnJhcnlcIl0gPSBcIkxJQlJBUllcIjtcbiAgICAvKipcbiAgICAgKiBUaGUgQ2FjaGUgZGlyZWN0b3J5LlxuICAgICAqIENhbiBiZSBkZWxldGVkIGluIGNhc2VzIG9mIGxvdyBtZW1vcnksIHNvIHVzZSB0aGlzIGRpcmVjdG9yeSB0byB3cml0ZSBhcHAtc3BlY2lmaWMgZmlsZXMuXG4gICAgICogdGhhdCB5b3VyIGFwcCBjYW4gcmUtY3JlYXRlIGVhc2lseS5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIERpcmVjdG9yeVtcIkNhY2hlXCJdID0gXCJDQUNIRVwiO1xuICAgIC8qKlxuICAgICAqIFRoZSBleHRlcm5hbCBkaXJlY3RvcnkuXG4gICAgICogT24gaU9TIGl0IHdpbGwgdXNlIHRoZSBEb2N1bWVudHMgZGlyZWN0b3J5LlxuICAgICAqIE9uIEFuZHJvaWQgaXQncyB0aGUgZGlyZWN0b3J5IG9uIHRoZSBwcmltYXJ5IHNoYXJlZC9leHRlcm5hbFxuICAgICAqIHN0b3JhZ2UgZGV2aWNlIHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBjYW4gcGxhY2UgcGVyc2lzdGVudCBmaWxlcyBpdCBvd25zLlxuICAgICAqIFRoZXNlIGZpbGVzIGFyZSBpbnRlcm5hbCB0byB0aGUgYXBwbGljYXRpb25zLCBhbmQgbm90IHR5cGljYWxseSB2aXNpYmxlXG4gICAgICogdG8gdGhlIHVzZXIgYXMgbWVkaWEuXG4gICAgICogRmlsZXMgd2lsbCBiZSBkZWxldGVkIHdoZW4gdGhlIGFwcGxpY2F0aW9uIGlzIHVuaW5zdGFsbGVkLlxuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgRGlyZWN0b3J5W1wiRXh0ZXJuYWxcIl0gPSBcIkVYVEVSTkFMXCI7XG4gICAgLyoqXG4gICAgICogVGhlIGV4dGVybmFsIHN0b3JhZ2UgZGlyZWN0b3J5LlxuICAgICAqIE9uIGlPUyBpdCB3aWxsIHVzZSB0aGUgRG9jdW1lbnRzIGRpcmVjdG9yeS5cbiAgICAgKiBPbiBBbmRyb2lkIGl0J3MgdGhlIHByaW1hcnkgc2hhcmVkL2V4dGVybmFsIHN0b3JhZ2UgZGlyZWN0b3J5LlxuICAgICAqIEl0J3Mgbm90IGFjY2VzaWJsZSBvbiBBbmRyb2lkIDEwIHVubGVzcyB0aGUgYXBwIGVuYWJsZXMgbGVnYWN5IEV4dGVybmFsIFN0b3JhZ2VcbiAgICAgKiBieSBhZGRpbmcgYGFuZHJvaWQ6cmVxdWVzdExlZ2FjeUV4dGVybmFsU3RvcmFnZT1cInRydWVcImAgaW4gdGhlIGBhcHBsaWNhdGlvbmAgdGFnXG4gICAgICogaW4gdGhlIGBBbmRyb2lkTWFuaWZlc3QueG1sYC5cbiAgICAgKiBJdCdzIG5vdCBhY2Nlc2libGUgb24gQW5kcm9pZCAxMSBvciBuZXdlci5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIERpcmVjdG9yeVtcIkV4dGVybmFsU3RvcmFnZVwiXSA9IFwiRVhURVJOQUxfU1RPUkFHRVwiO1xufSkoRGlyZWN0b3J5IHx8IChEaXJlY3RvcnkgPSB7fSkpO1xuZXhwb3J0IHZhciBFbmNvZGluZztcbihmdW5jdGlvbiAoRW5jb2RpbmcpIHtcbiAgICAvKipcbiAgICAgKiBFaWdodC1iaXQgVUNTIFRyYW5zZm9ybWF0aW9uIEZvcm1hdFxuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgRW5jb2RpbmdbXCJVVEY4XCJdID0gXCJ1dGY4XCI7XG4gICAgLyoqXG4gICAgICogU2V2ZW4tYml0IEFTQ0lJLCBhLmsuYS4gSVNPNjQ2LVVTLCBhLmsuYS4gdGhlIEJhc2ljIExhdGluIGJsb2NrIG9mIHRoZVxuICAgICAqIFVuaWNvZGUgY2hhcmFjdGVyIHNldFxuICAgICAqIFRoaXMgZW5jb2RpbmcgaXMgb25seSBzdXBwb3J0ZWQgb24gQW5kcm9pZC5cbiAgICAgKlxuICAgICAqIEBzaW5jZSAxLjAuMFxuICAgICAqL1xuICAgIEVuY29kaW5nW1wiQVNDSUlcIl0gPSBcImFzY2lpXCI7XG4gICAgLyoqXG4gICAgICogU2l4dGVlbi1iaXQgVUNTIFRyYW5zZm9ybWF0aW9uIEZvcm1hdCwgYnl0ZSBvcmRlciBpZGVudGlmaWVkIGJ5IGFuXG4gICAgICogb3B0aW9uYWwgYnl0ZS1vcmRlciBtYXJrXG4gICAgICogVGhpcyBlbmNvZGluZyBpcyBvbmx5IHN1cHBvcnRlZCBvbiBBbmRyb2lkLlxuICAgICAqXG4gICAgICogQHNpbmNlIDEuMC4wXG4gICAgICovXG4gICAgRW5jb2RpbmdbXCJVVEYxNlwiXSA9IFwidXRmMTZcIjtcbn0pKEVuY29kaW5nIHx8IChFbmNvZGluZyA9IHt9KSk7XG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgRGlyZWN0b3J5YC5cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5leHBvcnQgY29uc3QgRmlsZXN5c3RlbURpcmVjdG9yeSA9IERpcmVjdG9yeTtcbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBFbmNvZGluZ2AuXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZpbGVzeXN0ZW1FbmNvZGluZyA9IEVuY29kaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmaW5pdGlvbnMuanMubWFwIiwiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuY29uc3QgRmlsZXN5c3RlbSA9IHJlZ2lzdGVyUGx1Z2luKCdGaWxlc3lzdGVtJywge1xuICAgIHdlYjogKCkgPT4gaW1wb3J0KCcuL3dlYicpLnRoZW4obSA9PiBuZXcgbS5GaWxlc3lzdGVtV2ViKCkpLFxufSk7XG5leHBvcnQgKiBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCB7IEZpbGVzeXN0ZW0gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IENhbWVyYSwgQ2FtZXJhUmVzdWx0VHlwZSwgQ2FtZXJhU291cmNlIH0gZnJvbSBcIkBjYXBhY2l0b3IvY2FtZXJhXCI7XG5pbXBvcnQgeyBGaWxlc3lzdGVtLCBEaXJlY3RvcnksIEVuY29kaW5nIH0gZnJvbSBcIkBjYXBhY2l0b3IvZmlsZXN5c3RlbVwiO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gXCJ2dWUtaTE4blwiO1xuXG5jb25zdCBBcHBDYW1lcmEgPSB7XG4gIGFzeW5jIGlzQ2FtZXJhRW5hYmxlZCgpIHtcbiAgICBsZXQgbXlQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgQ2FtZXJhLmNoZWNrUGVybWlzc2lvbnMoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoZGF0YS5jYW1lcmEpIHtcbiAgICAgICAgICAgIGNhc2UgXCJwcm9tcHRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwcm9tcHQtd2l0aC1yYXRpb25hbGVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJkZW5pZWRcIjpcbiAgICAgICAgICAgICAgQ2FtZXJhLnJlcXVlc3RQZXJtaXNzaW9ucygpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZGF0YS5jYW1lcmEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdyYW50ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFwiZ3JhbnRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJkZW5pZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJncmFudGVkXCI6XG4gICAgICAgICAgICAgIHJlc29sdmUoXCJncmFudGVkXCIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgbXlQcm9taXNlO1xuICB9LFxuICBhc3luYyBpc0ZpbGVBY2Nlc3NFbmFibGVkKCkge1xuICAgIGxldCBteVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBGaWxlc3lzdGVtLmNoZWNrUGVybWlzc2lvbnMoKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoZGF0YS5wdWJsaWNTdG9yYWdlKSB7XG4gICAgICAgICAgICBjYXNlIFwicHJvbXB0XCI6XG4gICAgICAgICAgICBjYXNlIFwicHJvbXB0LXdpdGgtcmF0aW9uYWxlXCI6XG4gICAgICAgICAgICBjYXNlIFwiZGVuaWVkXCI6XG4gICAgICAgICAgICAgIEZpbGVzeXN0ZW0ucmVxdWVzdFBlcm1pc3Npb25zKClcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhLnB1YmxpY1N0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdyYW50ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFwiZ3JhbnRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJkZW5pZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImdyYW50ZWRcIjpcbiAgICAgICAgICAgICAgcmVzb2x2ZShcImdyYW50ZWRcIik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmVqZWN0KFwiZGVuaWVkXCIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgbXlQcm9taXNlO1xuICB9LFxuICBhc3luYyBnZXRQaG90byhzb3VyY2VUeXBlKSB7XG4gICAgbGV0ICRzb3VyY2UgPSBDYW1lcmFTb3VyY2UuUHJvbXB0O1xuICAgIGlmIChzb3VyY2VUeXBlID09IDIpIHtcbiAgICAgICRzb3VyY2UgPSBDYW1lcmFTb3VyY2UuQ2FtZXJhO1xuICAgIH0gZWxzZSBpZiAoc291cmNlVHlwZSA9PSAzKSB7XG4gICAgICAkc291cmNlID0gQ2FtZXJhU291cmNlLlBob3RvcztcbiAgICB9XG5cbiAgICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcblxuICAgIGNvbnN0IGltYWdlID0gYXdhaXQgQ2FtZXJhLmdldFBob3RvKHtcbiAgICAgIHF1YWxpdHk6IDkwLFxuICAgICAgYWxsb3dFZGl0aW5nOiBmYWxzZSxcbiAgICAgIHJlc3VsdFR5cGU6IENhbWVyYVJlc3VsdFR5cGUuVXJpLFxuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIHNvdXJjZTogJHNvdXJjZSxcbiAgICAgIHByb21wdExhYmVsSGVhZGVyOiB0KFwiUGhvdG9cIiksXG4gICAgICBwcm9tcHRMYWJlbENhbmNlbDogdChcIkNhbmNlbFwiKSxcbiAgICAgIHByb21wdExhYmVsUGhvdG86IHQoXCJGcm9tIFBob3Rvc1wiKSxcbiAgICAgIHByb21wdExhYmVsUGljdHVyZTogdChcIlRha2UgUGljdHVyZVwiKSxcbiAgICB9KTtcbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRzID0gYXdhaXQgRmlsZXN5c3RlbS5yZWFkRmlsZSh7XG4gICAgICAgIHBhdGg6IGltYWdlLnBhdGgsXG4gICAgICB9KTtcbiAgICAgIGlmIChjb250ZW50cykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZvcm1hdDogaW1hZ2UuZm9ybWF0LFxuICAgICAgICAgIHBhdGg6IGltYWdlLndlYlBhdGgsXG4gICAgICAgICAgZGF0YTogY29udGVudHMuZGF0YSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBhc3luYyBSZWFkRmlsZShpbWFnZVBhdGgpIHtcbiAgICBjb25zdCBjb250ZW50cyA9IGF3YWl0IEZpbGVzeXN0ZW0ucmVhZEZpbGUoe1xuICAgICAgcGF0aDogaW1hZ2VQYXRoLFxuICAgIH0pO1xuICAgIGlmIChjb250ZW50cykge1xuICAgICAgcmV0dXJuIGNvbnRlbnRzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIC8vXG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwQ2FtZXJhO1xuIl0sImZpbGUiOiJhc3NldHMvQXBwQ2FtZXJhLjAwN2FlYTMzLmpzIn0=
