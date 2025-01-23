import { r as ref, c as computed, g as getCurrentInstance, ap as stop, as as stopAndPrevent, ak as client, h, ah as useDarkProps, ai as useDark, a2 as vmIsDestroyed, y as provide, bF as uploaderKey, w as watch, K as onBeforeUnmount, d as isRef, bG as injectProp, bH as injectMultipleProps, a1 as QSpinner, at as QIcon, Y as QBtn, v as createComponent, bI as isObject } from "./index.61ed5618.js";
import { Q as QCircularProgress } from "./QCircularProgress.996c3e2f.js";
import { h as humanStorageSize } from "./format.7f7370d3.js";
function filterFiles(files, rejectedFiles, failedPropValidation, filterFn) {
  const acceptedFiles = [];
  files.forEach((file) => {
    if (filterFn(file) === true) {
      acceptedFiles.push(file);
    } else {
      rejectedFiles.push({ failedPropValidation, file });
    }
  });
  return acceptedFiles;
}
function stopAndPreventDrag(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy");
  stopAndPrevent(e);
}
const useFileProps = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function
};
const useFileEmits = ["rejected"];
function useFile({
  editable,
  dnd,
  getFileInput,
  addFilesToQueue
}) {
  const { props: props2, emit, proxy } = getCurrentInstance();
  const dndRef = ref(null);
  const extensions = computed(() => props2.accept !== void 0 ? props2.accept.split(",").map((ext) => {
    ext = ext.trim();
    if (ext === "*") {
      return "*/";
    } else if (ext.endsWith("/*")) {
      ext = ext.slice(0, ext.length - 1);
    }
    return ext.toUpperCase();
  }) : null);
  const maxFilesNumber = computed(() => parseInt(props2.maxFiles, 10));
  const maxTotalSizeNumber = computed(() => parseInt(props2.maxTotalSize, 10));
  function pickFiles(e) {
    if (editable.value) {
      if (e !== Object(e)) {
        e = { target: null };
      }
      if (e.target !== null && e.target.matches('input[type="file"]') === true) {
        e.clientX === 0 && e.clientY === 0 && stop(e);
      } else {
        const input = getFileInput();
        input && input !== e.target && input.click(e);
      }
    }
  }
  function addFiles(files) {
    if (editable.value && files) {
      addFilesToQueue(null, files);
    }
  }
  function processFiles(e, filesToProcess, currentFileList, append) {
    let files = Array.from(filesToProcess || e.target.files);
    const rejectedFiles = [];
    const done = () => {
      if (rejectedFiles.length !== 0) {
        emit("rejected", rejectedFiles);
      }
    };
    if (props2.accept !== void 0 && extensions.value.indexOf("*/") === -1) {
      files = filterFiles(files, rejectedFiles, "accept", (file) => {
        return extensions.value.some((ext) => file.type.toUpperCase().startsWith(ext) || file.name.toUpperCase().endsWith(ext));
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props2.maxFileSize !== void 0) {
      const maxFileSize = parseInt(props2.maxFileSize, 10);
      files = filterFiles(files, rejectedFiles, "max-file-size", (file) => {
        return file.size <= maxFileSize;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props2.multiple !== true && files.length !== 0) {
      files = [files[0]];
    }
    files.forEach((file) => {
      file.__key = file.webkitRelativePath + file.lastModified + file.name + file.size;
    });
    if (append === true) {
      const filenameMap = currentFileList.map((entry) => entry.__key);
      files = filterFiles(files, rejectedFiles, "duplicate", (file) => {
        return filenameMap.includes(file.__key) === false;
      });
    }
    if (files.length === 0) {
      return done();
    }
    if (props2.maxTotalSize !== void 0) {
      let size = append === true ? currentFileList.reduce((total, file) => total + file.size, 0) : 0;
      files = filterFiles(files, rejectedFiles, "max-total-size", (file) => {
        size += file.size;
        return size <= maxTotalSizeNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (typeof props2.filter === "function") {
      const filteredFiles = props2.filter(files);
      files = filterFiles(files, rejectedFiles, "filter", (file) => {
        return filteredFiles.includes(file);
      });
    }
    if (props2.maxFiles !== void 0) {
      let filesNumber = append === true ? currentFileList.length : 0;
      files = filterFiles(files, rejectedFiles, "max-files", () => {
        filesNumber++;
        return filesNumber <= maxFilesNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    done();
    if (files.length !== 0) {
      return files;
    }
  }
  function onDragover(e) {
    stopAndPreventDrag(e);
    dnd.value !== true && (dnd.value = true);
  }
  function onDragleave(e) {
    stopAndPrevent(e);
    const gone = e.relatedTarget !== null || client.is.safari !== true ? e.relatedTarget !== dndRef.value : document.elementsFromPoint(e.clientX, e.clientY).includes(dndRef.value) === false;
    gone === true && (dnd.value = false);
  }
  function onDrop(e) {
    stopAndPreventDrag(e);
    const files = e.dataTransfer.files;
    if (files.length !== 0) {
      addFilesToQueue(null, files);
    }
    dnd.value = false;
  }
  function getDndNode(type) {
    if (dnd.value === true) {
      return h("div", {
        ref: dndRef,
        class: `q-${type}__dnd absolute-full`,
        onDragenter: stopAndPreventDrag,
        onDragover: stopAndPreventDrag,
        onDragleave,
        onDrop
      });
    }
  }
  Object.assign(proxy, { pickFiles, addFiles });
  return {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  };
}
function getProgressLabel(p) {
  return (p * 100).toFixed(2) + "%";
}
const coreProps = {
  ...useDarkProps,
  ...useFileProps,
  label: String,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  noThumbnails: Boolean,
  autoUpload: Boolean,
  hideUploadBtn: Boolean,
  disable: Boolean,
  readonly: Boolean
};
const coreEmits = [
  ...useFileEmits,
  "start",
  "finish",
  "added",
  "removed"
];
function getRenderer(getPlugin, expose) {
  const vm = getCurrentInstance();
  const { props: props2, slots, emit, proxy } = vm;
  const { $q } = proxy;
  const isDark = useDark(props2, $q);
  function updateFileStatus(file, status, uploadedSize) {
    file.__status = status;
    if (status === "idle") {
      file.__uploaded = 0;
      file.__progress = 0;
      file.__sizeLabel = humanStorageSize(file.size);
      file.__progressLabel = "0.00%";
      return;
    }
    if (status === "failed") {
      proxy.$forceUpdate();
      return;
    }
    file.__uploaded = status === "uploaded" ? file.size : uploadedSize;
    file.__progress = status === "uploaded" ? 1 : Math.min(0.9999, file.__uploaded / file.size);
    file.__progressLabel = getProgressLabel(file.__progress);
    proxy.$forceUpdate();
  }
  const editable = computed(() => props2.disable !== true && props2.readonly !== true);
  const dnd = ref(false);
  const rootRef = ref(null);
  const inputRef = ref(null);
  const state = {
    files: ref([]),
    queuedFiles: ref([]),
    uploadedFiles: ref([]),
    uploadedSize: ref(0),
    updateFileStatus,
    isAlive: () => vmIsDestroyed(vm) === false
  };
  const {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  } = useFile({ editable, dnd, getFileInput, addFilesToQueue });
  Object.assign(state, getPlugin({
    props: props2,
    slots,
    emit,
    helpers: state,
    exposeApi: (obj) => {
      Object.assign(state, obj);
    }
  }));
  if (state.isBusy === void 0) {
    state.isBusy = ref(false);
  }
  const uploadSize = ref(0);
  const uploadProgress = computed(() => uploadSize.value === 0 ? 0 : state.uploadedSize.value / uploadSize.value);
  const uploadProgressLabel = computed(() => getProgressLabel(uploadProgress.value));
  const uploadSizeLabel = computed(() => humanStorageSize(uploadSize.value));
  const canAddFiles = computed(
    () => editable.value === true && state.isUploading.value !== true && (props2.multiple === true || state.queuedFiles.value.length === 0) && (props2.maxFiles === void 0 || state.files.value.length < maxFilesNumber.value) && (props2.maxTotalSize === void 0 || uploadSize.value < maxTotalSizeNumber.value)
  );
  const canUpload = computed(
    () => editable.value === true && state.isBusy.value !== true && state.isUploading.value !== true && state.queuedFiles.value.length !== 0
  );
  provide(uploaderKey, renderInput);
  const classes = computed(
    () => "q-uploader column no-wrap" + (isDark.value === true ? " q-uploader--dark q-dark" : "") + (props2.bordered === true ? " q-uploader--bordered" : "") + (props2.square === true ? " q-uploader--square no-border-radius" : "") + (props2.flat === true ? " q-uploader--flat no-shadow" : "") + (props2.disable === true ? " disabled q-uploader--disable" : "") + (dnd.value === true ? " q-uploader--dnd" : "")
  );
  const colorClass = computed(
    () => "q-uploader__header" + (props2.color !== void 0 ? ` bg-${props2.color}` : "") + (props2.textColor !== void 0 ? ` text-${props2.textColor}` : "")
  );
  watch(state.isUploading, (newVal, oldVal) => {
    if (oldVal === false && newVal === true) {
      emit("start");
    } else if (oldVal === true && newVal === false) {
      emit("finish");
    }
  });
  function reset() {
    if (props2.disable === false) {
      state.abort();
      state.uploadedSize.value = 0;
      uploadSize.value = 0;
      revokeImgURLs();
      state.files.value = [];
      state.queuedFiles.value = [];
      state.uploadedFiles.value = [];
    }
  }
  function removeUploadedFiles() {
    if (props2.disable === false) {
      batchRemoveFiles(["uploaded"], () => {
        state.uploadedFiles.value = [];
      });
    }
  }
  function removeQueuedFiles() {
    batchRemoveFiles(["idle", "failed"], ({ size }) => {
      uploadSize.value -= size;
      state.queuedFiles.value = [];
    });
  }
  function batchRemoveFiles(statusList, cb) {
    if (props2.disable === true) {
      return;
    }
    const removed = {
      files: [],
      size: 0
    };
    const localFiles = state.files.value.filter((f) => {
      if (statusList.indexOf(f.__status) === -1) {
        return true;
      }
      removed.size += f.size;
      removed.files.push(f);
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    if (removed.files.length !== 0) {
      state.files.value = localFiles;
      cb(removed);
      emit("removed", removed.files);
    }
  }
  function removeFile(file) {
    if (props2.disable)
      return;
    if (file.__status === "uploaded") {
      state.uploadedFiles.value = state.uploadedFiles.value.filter((f) => f.__key !== file.__key);
    } else if (file.__status === "uploading") {
      file.__abort();
    } else {
      uploadSize.value -= file.size;
    }
    state.files.value = state.files.value.filter((f) => {
      if (f.__key !== file.__key) {
        return true;
      }
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
      return false;
    });
    state.queuedFiles.value = state.queuedFiles.value.filter((f) => f.__key !== file.__key);
    emit("removed", [file]);
  }
  function revokeImgURLs() {
    state.files.value.forEach((f) => {
      f.__img !== void 0 && window.URL.revokeObjectURL(f.__img.src);
    });
  }
  function getFileInput() {
    return inputRef.value || rootRef.value.getElementsByClassName("q-uploader__input")[0];
  }
  function addFilesToQueue(e, fileList) {
    const localFiles = processFiles(e, fileList, state.files.value, true);
    const fileInput = getFileInput();
    if (fileInput !== void 0 && fileInput !== null) {
      fileInput.value = "";
    }
    if (localFiles === void 0)
      return;
    localFiles.forEach((file) => {
      state.updateFileStatus(file, "idle");
      uploadSize.value += file.size;
      if (props2.noThumbnails !== true && file.type.toUpperCase().startsWith("IMAGE")) {
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        file.__img = img;
      }
    });
    state.files.value = state.files.value.concat(localFiles);
    state.queuedFiles.value = state.queuedFiles.value.concat(localFiles);
    emit("added", localFiles);
    props2.autoUpload === true && state.upload();
  }
  function upload() {
    canUpload.value === true && state.upload();
  }
  function getBtn(show, icon, fn) {
    if (show === true) {
      const data = {
        type: "a",
        key: icon,
        icon: $q.iconSet.uploader[icon],
        flat: true,
        dense: true
      };
      let child = void 0;
      if (icon === "add") {
        data.onClick = pickFiles;
        child = renderInput;
      } else {
        data.onClick = fn;
      }
      return h(QBtn, data, child);
    }
  }
  function renderInput() {
    return h("input", {
      ref: inputRef,
      class: "q-uploader__input overflow-hidden absolute-full",
      tabindex: -1,
      type: "file",
      title: "",
      accept: props2.accept,
      multiple: props2.multiple === true ? "multiple" : void 0,
      capture: props2.capture,
      onMousedown: stop,
      onClick: pickFiles,
      onChange: addFilesToQueue
    });
  }
  function getHeader() {
    if (slots.header !== void 0) {
      return slots.header(publicApi);
    }
    return [
      h("div", {
        class: "q-uploader__header-content column"
      }, [
        h("div", {
          class: "flex flex-center no-wrap q-gutter-xs"
        }, [
          getBtn(state.queuedFiles.value.length !== 0, "removeQueue", removeQueuedFiles),
          getBtn(state.uploadedFiles.value.length !== 0, "removeUploaded", removeUploadedFiles),
          state.isUploading.value === true ? h(QSpinner, { class: "q-uploader__spinner" }) : null,
          h("div", { class: "col column justify-center" }, [
            props2.label !== void 0 ? h("div", { class: "q-uploader__title" }, [props2.label]) : null,
            h("div", { class: "q-uploader__subtitle" }, [
              uploadSizeLabel.value + " / " + uploadProgressLabel.value
            ])
          ]),
          getBtn(canAddFiles.value, "add"),
          getBtn(props2.hideUploadBtn === false && canUpload.value === true, "upload", state.upload),
          getBtn(state.isUploading.value, "clear", state.abort)
        ])
      ])
    ];
  }
  function getList() {
    if (slots.list !== void 0) {
      return slots.list(publicApi);
    }
    return state.files.value.map((file) => h("div", {
      key: file.__key,
      class: "q-uploader__file relative-position" + (props2.noThumbnails !== true && file.__img !== void 0 ? " q-uploader__file--img" : "") + (file.__status === "failed" ? " q-uploader__file--failed" : file.__status === "uploaded" ? " q-uploader__file--uploaded" : ""),
      style: props2.noThumbnails !== true && file.__img !== void 0 ? { backgroundImage: 'url("' + file.__img.src + '")' } : null
    }, [
      h("div", {
        class: "q-uploader__file-header row flex-center no-wrap"
      }, [
        file.__status === "failed" ? h(QIcon, {
          class: "q-uploader__file-status",
          name: $q.iconSet.type.negative,
          color: "negative"
        }) : null,
        h("div", { class: "q-uploader__file-header-content col" }, [
          h("div", { class: "q-uploader__title" }, [file.name]),
          h("div", {
            class: "q-uploader__subtitle row items-center no-wrap"
          }, [
            file.__sizeLabel + " / " + file.__progressLabel
          ])
        ]),
        file.__status === "uploading" ? h(QCircularProgress, {
          value: file.__progress,
          min: 0,
          max: 1,
          indeterminate: file.__progress === 0
        }) : h(QBtn, {
          round: true,
          dense: true,
          flat: true,
          icon: $q.iconSet.uploader[file.__status === "uploaded" ? "done" : "clear"],
          onClick: () => {
            removeFile(file);
          }
        })
      ])
    ]));
  }
  onBeforeUnmount(() => {
    state.isUploading.value === true && state.abort();
    state.files.value.length !== 0 && revokeImgURLs();
  });
  const publicApi = {};
  for (const key in state) {
    if (isRef(state[key]) === true) {
      injectProp(publicApi, key, () => state[key].value);
    } else {
      publicApi[key] = state[key];
    }
  }
  Object.assign(publicApi, {
    upload,
    reset,
    removeUploadedFiles,
    removeQueuedFiles,
    removeFile,
    pickFiles,
    addFiles
  });
  injectMultipleProps(publicApi, {
    canAddFiles: () => canAddFiles.value,
    canUpload: () => canUpload.value,
    uploadSizeLabel: () => uploadSizeLabel.value,
    uploadProgressLabel: () => uploadProgressLabel.value
  });
  expose({
    ...state,
    upload,
    reset,
    removeUploadedFiles,
    removeQueuedFiles,
    removeFile,
    pickFiles,
    addFiles,
    canAddFiles,
    canUpload,
    uploadSizeLabel,
    uploadProgressLabel
  });
  return () => {
    const children = [
      h("div", { class: colorClass.value }, getHeader()),
      h("div", { class: "q-uploader__list scroll" }, getList()),
      getDndNode("uploader")
    ];
    state.isBusy.value === true && children.push(
      h("div", {
        class: "q-uploader__overlay absolute-full flex flex-center"
      }, [h(QSpinner)])
    );
    const data = { ref: rootRef, class: classes.value };
    if (canAddFiles.value === true) {
      Object.assign(data, { onDragover, onDragleave });
    }
    return h("div", data, children);
  };
}
const trueFn = () => true;
function getEmitsObject(emitsArray) {
  const emitsObject = {};
  emitsArray.forEach((val) => {
    emitsObject[val] = trueFn;
  });
  return emitsObject;
}
const coreEmitsObject = getEmitsObject(coreEmits);
var createUploaderComponent = ({ name: name2, props: props2, emits: emits2, injectPlugin: injectPlugin2 }) => createComponent({
  name: name2,
  props: {
    ...coreProps,
    ...props2
  },
  emits: isObject(emits2) === true ? { ...coreEmitsObject, ...emits2 } : [...coreEmits, ...emits2],
  setup(_, { expose }) {
    return getRenderer(injectPlugin2, expose);
  }
});
function getFn(prop) {
  return typeof prop === "function" ? prop : () => prop;
}
const name = "QUploader";
const props = {
  url: [Function, String],
  method: {
    type: [Function, String],
    default: "POST"
  },
  fieldName: {
    type: [Function, String],
    default: () => (file) => file.name
  },
  headers: [Function, Array],
  formFields: [Function, Array],
  withCredentials: [Function, Boolean],
  sendRaw: [Function, Boolean],
  batch: [Function, Boolean],
  factory: Function
};
const emits = ["factoryFailed", "uploaded", "failed", "uploading"];
function injectPlugin({ props: props2, emit, helpers }) {
  const xhrs = ref([]);
  const promises = ref([]);
  const workingThreads = ref(0);
  const xhrProps = computed(() => ({
    url: getFn(props2.url),
    method: getFn(props2.method),
    headers: getFn(props2.headers),
    formFields: getFn(props2.formFields),
    fieldName: getFn(props2.fieldName),
    withCredentials: getFn(props2.withCredentials),
    sendRaw: getFn(props2.sendRaw),
    batch: getFn(props2.batch)
  }));
  const isUploading = computed(() => workingThreads.value > 0);
  const isBusy = computed(() => promises.value.length !== 0);
  let abortPromises;
  function abort() {
    xhrs.value.forEach((x) => {
      x.abort();
    });
    if (promises.value.length !== 0) {
      abortPromises = true;
    }
  }
  function upload() {
    const queue = helpers.queuedFiles.value.slice(0);
    helpers.queuedFiles.value = [];
    if (xhrProps.value.batch(queue)) {
      runFactory(queue);
    } else {
      queue.forEach((file) => {
        runFactory([file]);
      });
    }
  }
  function runFactory(files) {
    workingThreads.value++;
    if (typeof props2.factory !== "function") {
      performUpload(files, {});
      return;
    }
    const res = props2.factory(files);
    if (!res) {
      emit(
        "factoryFailed",
        new Error("QUploader: factory() does not return properly"),
        files
      );
      workingThreads.value--;
    } else if (typeof res.catch === "function" && typeof res.then === "function") {
      promises.value.push(res);
      const failed = (err) => {
        if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          if (promises.value.length === 0) {
            abortPromises = false;
          }
          helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
          files.forEach((f) => {
            helpers.updateFileStatus(f, "failed");
          });
          emit("factoryFailed", err, files);
          workingThreads.value--;
        }
      };
      res.then((factory) => {
        if (abortPromises === true) {
          failed(new Error("Aborted"));
        } else if (helpers.isAlive() === true) {
          promises.value = promises.value.filter((p) => p !== res);
          performUpload(files, factory);
        }
      }).catch(failed);
    } else {
      performUpload(files, res || {});
    }
  }
  function performUpload(files, factory) {
    const form = new FormData(), xhr = new XMLHttpRequest();
    const getProp = (name2, arg) => {
      return factory[name2] !== void 0 ? getFn(factory[name2])(arg) : xhrProps.value[name2](arg);
    };
    const url = getProp("url", files);
    if (!url) {
      console.error("q-uploader: invalid or no URL specified");
      workingThreads.value--;
      return;
    }
    const fields = getProp("formFields", files);
    fields !== void 0 && fields.forEach((field) => {
      form.append(field.name, field.value);
    });
    let uploadIndex = 0, uploadIndexSize = 0, localUploadedSize = 0, maxUploadSize = 0, aborted;
    xhr.upload.addEventListener("progress", (e) => {
      if (aborted === true)
        return;
      const loaded = Math.min(maxUploadSize, e.loaded);
      helpers.uploadedSize.value += loaded - localUploadedSize;
      localUploadedSize = loaded;
      let size = localUploadedSize - uploadIndexSize;
      for (let i = uploadIndex; size > 0 && i < files.length; i++) {
        const file = files[i], uploaded = size > file.size;
        if (uploaded) {
          size -= file.size;
          uploadIndex++;
          uploadIndexSize += file.size;
          helpers.updateFileStatus(file, "uploading", file.size);
        } else {
          helpers.updateFileStatus(file, "uploading", size);
          return;
        }
      }
    }, false);
    xhr.onreadystatechange = () => {
      if (xhr.readyState < 4) {
        return;
      }
      if (xhr.status && xhr.status < 400) {
        helpers.uploadedFiles.value = helpers.uploadedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "uploaded");
        });
        emit("uploaded", { files, xhr });
      } else {
        aborted = true;
        helpers.uploadedSize.value -= localUploadedSize;
        helpers.queuedFiles.value = helpers.queuedFiles.value.concat(files);
        files.forEach((f) => {
          helpers.updateFileStatus(f, "failed");
        });
        emit("failed", { files, xhr });
      }
      workingThreads.value--;
      xhrs.value = xhrs.value.filter((x) => x !== xhr);
    };
    xhr.open(
      getProp("method", files),
      url
    );
    if (getProp("withCredentials", files) === true) {
      xhr.withCredentials = true;
    }
    const headers = getProp("headers", files);
    headers !== void 0 && headers.forEach((head) => {
      xhr.setRequestHeader(head.name, head.value);
    });
    const sendRaw = getProp("sendRaw", files);
    files.forEach((file) => {
      helpers.updateFileStatus(file, "uploading", 0);
      if (sendRaw !== true) {
        form.append(getProp("fieldName", file), file, file.name);
      }
      file.xhr = xhr;
      file.__abort = () => {
        xhr.abort();
      };
      maxUploadSize += file.size;
    });
    emit("uploading", { files, xhr });
    xhrs.value.push(xhr);
    if (sendRaw === true) {
      xhr.send(new Blob(files));
    } else {
      xhr.send(form);
    }
  }
  return {
    isUploading,
    isBusy,
    abort,
    upload
  };
}
var xhrUploaderPlugin = {
  name,
  props,
  emits,
  injectPlugin
};
var QUploader = createUploaderComponent(xhrUploaderPlugin);
export { QUploader as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVVwbG9hZGVyLmJjMWRhNjVkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1maWxlL3VzZS1maWxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy91cGxvYWRlci91cGxvYWRlci1jb3JlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS5nZXQtZW1pdHMtb2JqZWN0L2dldC1lbWl0cy1vYmplY3QuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9jcmVhdGUtdXBsb2FkZXItY29tcG9uZW50L2NyZWF0ZS11cGxvYWRlci1jb21wb25lbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3VwbG9hZGVyL3hoci11cGxvYWRlci1wbHVnaW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3VwbG9hZGVyL1FVcGxvYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uLy4uL3BsdWdpbnMvcGxhdGZvcm0vUGxhdGZvcm0uanMnXG5pbXBvcnQgeyBzdG9wLCBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuXG5mdW5jdGlvbiBmaWx0ZXJGaWxlcyAoZmlsZXMsIHJlamVjdGVkRmlsZXMsIGZhaWxlZFByb3BWYWxpZGF0aW9uLCBmaWx0ZXJGbikge1xuICBjb25zdCBhY2NlcHRlZEZpbGVzID0gW11cblxuICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgIGlmIChmaWx0ZXJGbihmaWxlKSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjZXB0ZWRGaWxlcy5wdXNoKGZpbGUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVqZWN0ZWRGaWxlcy5wdXNoKHsgZmFpbGVkUHJvcFZhbGlkYXRpb24sIGZpbGUgfSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGFjY2VwdGVkRmlsZXNcbn1cblxuZnVuY3Rpb24gc3RvcEFuZFByZXZlbnREcmFnIChlKSB7XG4gIGUgJiYgZS5kYXRhVHJhbnNmZXIgJiYgKGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weScpXG4gIHN0b3BBbmRQcmV2ZW50KGUpXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGaWxlUHJvcHMgPSB7XG4gIG11bHRpcGxlOiBCb29sZWFuLFxuICBhY2NlcHQ6IFN0cmluZyxcbiAgY2FwdHVyZTogU3RyaW5nLFxuICBtYXhGaWxlU2l6ZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICBtYXhUb3RhbFNpemU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgbWF4RmlsZXM6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgZmlsdGVyOiBGdW5jdGlvblxufVxuXG5leHBvcnQgY29uc3QgdXNlRmlsZUVtaXRzID0gWyAncmVqZWN0ZWQnIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtcbiAgZWRpdGFibGUsXG4gIGRuZCxcbiAgZ2V0RmlsZUlucHV0LFxuICBhZGRGaWxlc1RvUXVldWVcbn0pIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgY29uc3QgZG5kUmVmID0gcmVmKG51bGwpXG5cbiAgY29uc3QgZXh0ZW5zaW9ucyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5hY2NlcHQgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5hY2NlcHQuc3BsaXQoJywnKS5tYXAoZXh0ID0+IHtcbiAgICAgICAgZXh0ID0gZXh0LnRyaW0oKVxuICAgICAgICBpZiAoZXh0ID09PSAnKicpIHsgLy8gc3VwcG9ydCBcIipcIlxuICAgICAgICAgIHJldHVybiAnKi8nXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXh0LmVuZHNXaXRoKCcvKicpKSB7IC8vIHN1cHBvcnQgXCJpbWFnZS8qXCIgb3IgXCIqLypcIlxuICAgICAgICAgIGV4dCA9IGV4dC5zbGljZSgwLCBleHQubGVuZ3RoIC0gMSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXh0LnRvVXBwZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcbiAgKSlcblxuICBjb25zdCBtYXhGaWxlc051bWJlciA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heEZpbGVzLCAxMCkpXG4gIGNvbnN0IG1heFRvdGFsU2l6ZU51bWJlciA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heFRvdGFsU2l6ZSwgMTApKVxuXG4gIGZ1bmN0aW9uIHBpY2tGaWxlcyAoZSkge1xuICAgIGlmIChlZGl0YWJsZS52YWx1ZSkge1xuICAgICAgaWYgKGUgIT09IE9iamVjdChlKSkge1xuICAgICAgICBlID0geyB0YXJnZXQ6IG51bGwgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQgIT09IG51bGwgJiYgZS50YXJnZXQubWF0Y2hlcygnaW5wdXRbdHlwZT1cImZpbGVcIl0nKSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBzdG9wIHByb3BhZ2F0aW9uIGlmIGl0J3Mgbm90IGEgcmVhbCBwb2ludGVyIGV2ZW50XG4gICAgICAgIGUuY2xpZW50WCA9PT0gMCAmJiBlLmNsaWVudFkgPT09IDAgJiYgc3RvcChlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZ2V0RmlsZUlucHV0KClcbiAgICAgICAgaW5wdXQgJiYgaW5wdXQgIT09IGUudGFyZ2V0ICYmIGlucHV0LmNsaWNrKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkRmlsZXMgKGZpbGVzKSB7XG4gICAgaWYgKGVkaXRhYmxlLnZhbHVlICYmIGZpbGVzKSB7XG4gICAgICBhZGRGaWxlc1RvUXVldWUobnVsbCwgZmlsZXMpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZpbGVzIChlLCBmaWxlc1RvUHJvY2VzcywgY3VycmVudEZpbGVMaXN0LCBhcHBlbmQpIHtcbiAgICBsZXQgZmlsZXMgPSBBcnJheS5mcm9tKGZpbGVzVG9Qcm9jZXNzIHx8IGUudGFyZ2V0LmZpbGVzKVxuICAgIGNvbnN0IHJlamVjdGVkRmlsZXMgPSBbXVxuXG4gICAgY29uc3QgZG9uZSA9ICgpID0+IHtcbiAgICAgIGlmIChyZWplY3RlZEZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBlbWl0KCdyZWplY3RlZCcsIHJlamVjdGVkRmlsZXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIGZpbGUgdHlwZXNcbiAgICBpZiAocHJvcHMuYWNjZXB0ICE9PSB2b2lkIDAgJiYgZXh0ZW5zaW9ucy52YWx1ZS5pbmRleE9mKCcqLycpID09PSAtMSkge1xuICAgICAgZmlsZXMgPSBmaWx0ZXJGaWxlcyhmaWxlcywgcmVqZWN0ZWRGaWxlcywgJ2FjY2VwdCcsIGZpbGUgPT4ge1xuICAgICAgICByZXR1cm4gZXh0ZW5zaW9ucy52YWx1ZS5zb21lKGV4dCA9PiAoXG4gICAgICAgICAgZmlsZS50eXBlLnRvVXBwZXJDYXNlKCkuc3RhcnRzV2l0aChleHQpXG4gICAgICAgICAgfHwgZmlsZS5uYW1lLnRvVXBwZXJDYXNlKCkuZW5kc1dpdGgoZXh0KVxuICAgICAgICApKVxuICAgICAgfSlcblxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cbiAgICB9XG5cbiAgICAvLyBmaWx0ZXIgbWF4IGZpbGUgc2l6ZVxuICAgIGlmIChwcm9wcy5tYXhGaWxlU2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zdCBtYXhGaWxlU2l6ZSA9IHBhcnNlSW50KHByb3BzLm1heEZpbGVTaXplLCAxMClcbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdtYXgtZmlsZS1zaXplJywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBmaWxlLnNpemUgPD0gbWF4RmlsZVNpemVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIGRvbmUoKSB9XG4gICAgfVxuXG4gICAgLy8gQ29yZG92YS9pT1MgYWxsb3dzIHNlbGVjdGluZyBtdWx0aXBsZSBmaWxlcyBldmVuIHdoZW4gdGhlXG4gICAgLy8gbXVsdGlwbGUgYXR0cmlidXRlIGlzIG5vdCBzcGVjaWZpZWQuIFdlIGFsc28gbm9ybWFsaXplIGRyYWcnbidkcm9wcGVkXG4gICAgLy8gZmlsZXMgaGVyZTpcbiAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUgJiYgZmlsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmaWxlcyA9IFsgZmlsZXNbIDAgXSBdXG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBrZXkgdG8gdXNlIGZvciBlYWNoIGZpbGVcbiAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgZmlsZS5fX2tleSA9IGZpbGUud2Via2l0UmVsYXRpdmVQYXRoICsgZmlsZS5sYXN0TW9kaWZpZWQgKyBmaWxlLm5hbWUgKyBmaWxlLnNpemVcbiAgICB9KVxuXG4gICAgaWYgKGFwcGVuZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIGZpbGVzXG4gICAgICBjb25zdCBmaWxlbmFtZU1hcCA9IGN1cnJlbnRGaWxlTGlzdC5tYXAoZW50cnkgPT4gZW50cnkuX19rZXkpXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnZHVwbGljYXRlJywgZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiBmaWxlbmFtZU1hcC5pbmNsdWRlcyhmaWxlLl9fa2V5KSA9PT0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gZG9uZSgpIH1cblxuICAgIGlmIChwcm9wcy5tYXhUb3RhbFNpemUgIT09IHZvaWQgMCkge1xuICAgICAgbGV0IHNpemUgPSBhcHBlbmQgPT09IHRydWVcbiAgICAgICAgPyBjdXJyZW50RmlsZUxpc3QucmVkdWNlKCh0b3RhbCwgZmlsZSkgPT4gdG90YWwgKyBmaWxlLnNpemUsIDApXG4gICAgICAgIDogMFxuXG4gICAgICBmaWxlcyA9IGZpbHRlckZpbGVzKGZpbGVzLCByZWplY3RlZEZpbGVzLCAnbWF4LXRvdGFsLXNpemUnLCBmaWxlID0+IHtcbiAgICAgICAgc2l6ZSArPSBmaWxlLnNpemVcbiAgICAgICAgcmV0dXJuIHNpemUgPD0gbWF4VG90YWxTaXplTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIC8vIGRvIHdlIGhhdmUgY3VzdG9tIGZpbHRlciBmdW5jdGlvbj9cbiAgICBpZiAodHlwZW9mIHByb3BzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZmlsdGVyZWRGaWxlcyA9IHByb3BzLmZpbHRlcihmaWxlcylcbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdmaWx0ZXInLCBmaWxlID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRmlsZXMuaW5jbHVkZXMoZmlsZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1heEZpbGVzICE9PSB2b2lkIDApIHtcbiAgICAgIGxldCBmaWxlc051bWJlciA9IGFwcGVuZCA9PT0gdHJ1ZVxuICAgICAgICA/IGN1cnJlbnRGaWxlTGlzdC5sZW5ndGhcbiAgICAgICAgOiAwXG5cbiAgICAgIGZpbGVzID0gZmlsdGVyRmlsZXMoZmlsZXMsIHJlamVjdGVkRmlsZXMsICdtYXgtZmlsZXMnLCAoKSA9PiB7XG4gICAgICAgIGZpbGVzTnVtYmVyKytcbiAgICAgICAgcmV0dXJuIGZpbGVzTnVtYmVyIDw9IG1heEZpbGVzTnVtYmVyLnZhbHVlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBkb25lKCkgfVxuICAgIH1cblxuICAgIGRvbmUoKVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZpbGVzXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnb3ZlciAoZSkge1xuICAgIHN0b3BBbmRQcmV2ZW50RHJhZyhlKVxuICAgIGRuZC52YWx1ZSAhPT0gdHJ1ZSAmJiAoZG5kLnZhbHVlID0gdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ2xlYXZlIChlKSB7XG4gICAgc3RvcEFuZFByZXZlbnQoZSlcblxuICAgIC8vIFNhZmFyaSBidWc6IHJlbGF0ZWRUYXJnZXQgaXMgbnVsbCBmb3Igb3ZlciAxMCB5ZWFyc1xuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD02NjU0N1xuICAgIGNvbnN0IGdvbmUgPSBlLnJlbGF0ZWRUYXJnZXQgIT09IG51bGwgfHwgY2xpZW50LmlzLnNhZmFyaSAhPT0gdHJ1ZVxuICAgICAgPyBlLnJlbGF0ZWRUYXJnZXQgIT09IGRuZFJlZi52YWx1ZVxuICAgICAgOiBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSkuaW5jbHVkZXMoZG5kUmVmLnZhbHVlKSA9PT0gZmFsc2VcblxuICAgIGdvbmUgPT09IHRydWUgJiYgKGRuZC52YWx1ZSA9IGZhbHNlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wIChlKSB7XG4gICAgc3RvcEFuZFByZXZlbnREcmFnKGUpXG4gICAgY29uc3QgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1xuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYWRkRmlsZXNUb1F1ZXVlKG51bGwsIGZpbGVzKVxuICAgIH1cblxuICAgIGRuZC52YWx1ZSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBnZXREbmROb2RlICh0eXBlKSB7XG4gICAgaWYgKGRuZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiBkbmRSZWYsXG4gICAgICAgIGNsYXNzOiBgcS0keyB0eXBlIH1fX2RuZCBhYnNvbHV0ZS1mdWxsYCxcbiAgICAgICAgb25EcmFnZW50ZXI6IHN0b3BBbmRQcmV2ZW50RHJhZyxcbiAgICAgICAgb25EcmFnb3Zlcjogc3RvcEFuZFByZXZlbnREcmFnLFxuICAgICAgICBvbkRyYWdsZWF2ZSxcbiAgICAgICAgb25Ecm9wXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHBpY2tGaWxlcywgYWRkRmlsZXMgfSlcblxuICByZXR1cm4ge1xuICAgIHBpY2tGaWxlcyxcbiAgICBhZGRGaWxlcyxcbiAgICBvbkRyYWdvdmVyLFxuICAgIG9uRHJhZ2xlYXZlLFxuICAgIHByb2Nlc3NGaWxlcyxcbiAgICBnZXREbmROb2RlLFxuXG4gICAgbWF4RmlsZXNOdW1iZXIsXG4gICAgbWF4VG90YWxTaXplTnVtYmVyXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgaXNSZWYsIGNvbXB1dGVkLCB3YXRjaCwgcHJvdmlkZSwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVNwaW5uZXIgZnJvbSAnLi4vc3Bpbm5lci9RU3Bpbm5lci5qcydcbmltcG9ydCBRQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICcuLi9jaXJjdWxhci1wcm9ncmVzcy9RQ2lyY3VsYXJQcm9ncmVzcy5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB1c2VGaWxlLCB7IHVzZUZpbGVQcm9wcywgdXNlRmlsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZmlsZS91c2UtZmlsZS5qcydcblxuaW1wb3J0IHsgc3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50L2V2ZW50LmpzJ1xuaW1wb3J0IHsgaHVtYW5TdG9yYWdlU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC9mb3JtYXQuanMnXG5pbXBvcnQgeyB1cGxvYWRlcktleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuc3ltYm9scy9zeW1ib2xzLmpzJ1xuaW1wb3J0IHsgaW5qZWN0UHJvcCwgaW5qZWN0TXVsdGlwbGVQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuaW5qZWN0LW9iai1wcm9wL2luamVjdC1vYmotcHJvcC5qcydcbmltcG9ydCB7IHZtSXNEZXN0cm95ZWQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnZtL3ZtLmpzJ1xuXG5mdW5jdGlvbiBnZXRQcm9ncmVzc0xhYmVsIChwKSB7XG4gIHJldHVybiAocCAqIDEwMCkudG9GaXhlZCgyKSArICclJ1xufVxuXG5leHBvcnQgY29uc3QgY29yZVByb3BzID0ge1xuICAuLi51c2VEYXJrUHJvcHMsXG4gIC4uLnVzZUZpbGVQcm9wcyxcblxuICBsYWJlbDogU3RyaW5nLFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIHRleHRDb2xvcjogU3RyaW5nLFxuXG4gIHNxdWFyZTogQm9vbGVhbixcbiAgZmxhdDogQm9vbGVhbixcbiAgYm9yZGVyZWQ6IEJvb2xlYW4sXG5cbiAgbm9UaHVtYm5haWxzOiBCb29sZWFuLFxuICBhdXRvVXBsb2FkOiBCb29sZWFuLFxuICBoaWRlVXBsb2FkQnRuOiBCb29sZWFuLFxuXG4gIGRpc2FibGU6IEJvb2xlYW4sXG4gIHJlYWRvbmx5OiBCb29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBjb3JlRW1pdHMgPSBbXG4gIC4uLnVzZUZpbGVFbWl0cyxcbiAgJ3N0YXJ0JywgJ2ZpbmlzaCcsICdhZGRlZCcsICdyZW1vdmVkJ1xuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVuZGVyZXIgKGdldFBsdWdpbiwgZXhwb3NlKSB7XG4gIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgeyBwcm9wcywgc2xvdHMsIGVtaXQsIHByb3h5IH0gPSB2bVxuICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUZpbGVTdGF0dXMgKGZpbGUsIHN0YXR1cywgdXBsb2FkZWRTaXplKSB7XG4gICAgZmlsZS5fX3N0YXR1cyA9IHN0YXR1c1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2lkbGUnKSB7XG4gICAgICBmaWxlLl9fdXBsb2FkZWQgPSAwXG4gICAgICBmaWxlLl9fcHJvZ3Jlc3MgPSAwXG4gICAgICBmaWxlLl9fc2l6ZUxhYmVsID0gaHVtYW5TdG9yYWdlU2l6ZShmaWxlLnNpemUpXG4gICAgICBmaWxlLl9fcHJvZ3Jlc3NMYWJlbCA9ICcwLjAwJSdcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSAnZmFpbGVkJykge1xuICAgICAgcHJveHkuJGZvcmNlVXBkYXRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZpbGUuX191cGxvYWRlZCA9IHN0YXR1cyA9PT0gJ3VwbG9hZGVkJ1xuICAgICAgPyBmaWxlLnNpemVcbiAgICAgIDogdXBsb2FkZWRTaXplXG5cbiAgICBmaWxlLl9fcHJvZ3Jlc3MgPSBzdGF0dXMgPT09ICd1cGxvYWRlZCdcbiAgICAgID8gMVxuICAgICAgOiBNYXRoLm1pbigwLjk5OTksIGZpbGUuX191cGxvYWRlZCAvIGZpbGUuc2l6ZSlcblxuICAgIGZpbGUuX19wcm9ncmVzc0xhYmVsID0gZ2V0UHJvZ3Jlc3NMYWJlbChmaWxlLl9fcHJvZ3Jlc3MpXG4gICAgcHJveHkuJGZvcmNlVXBkYXRlKClcbiAgfVxuXG4gIGNvbnN0IGVkaXRhYmxlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZSlcbiAgY29uc3QgZG5kID0gcmVmKGZhbHNlKVxuXG4gIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgY29uc3QgaW5wdXRSZWYgPSByZWYobnVsbClcblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBmaWxlczogcmVmKFtdKSxcbiAgICBxdWV1ZWRGaWxlczogcmVmKFtdKSxcbiAgICB1cGxvYWRlZEZpbGVzOiByZWYoW10pLFxuICAgIHVwbG9hZGVkU2l6ZTogcmVmKDApLFxuXG4gICAgdXBkYXRlRmlsZVN0YXR1cyxcbiAgICBpc0FsaXZlOiAoKSA9PiB2bUlzRGVzdHJveWVkKHZtKSA9PT0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBwaWNrRmlsZXMsXG4gICAgYWRkRmlsZXMsXG4gICAgb25EcmFnb3ZlcixcbiAgICBvbkRyYWdsZWF2ZSxcbiAgICBwcm9jZXNzRmlsZXMsXG4gICAgZ2V0RG5kTm9kZSxcbiAgICBtYXhGaWxlc051bWJlcixcbiAgICBtYXhUb3RhbFNpemVOdW1iZXJcbiAgfSA9IHVzZUZpbGUoeyBlZGl0YWJsZSwgZG5kLCBnZXRGaWxlSW5wdXQsIGFkZEZpbGVzVG9RdWV1ZSB9KVxuXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUsIGdldFBsdWdpbih7XG4gICAgcHJvcHMsXG4gICAgc2xvdHMsXG4gICAgZW1pdCxcbiAgICBoZWxwZXJzOiBzdGF0ZSxcbiAgICBleHBvc2VBcGk6IG9iaiA9PiB7IE9iamVjdC5hc3NpZ24oc3RhdGUsIG9iaikgfVxuICB9KSlcblxuICBpZiAoc3RhdGUuaXNCdXN5ID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZS5pc0J1c3kgPSByZWYoZmFsc2UpXG4gIH1cblxuICBjb25zdCB1cGxvYWRTaXplID0gcmVmKDApXG4gIGNvbnN0IHVwbG9hZFByb2dyZXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHVwbG9hZFNpemUudmFsdWUgPT09IDBcbiAgICAgID8gMFxuICAgICAgOiBzdGF0ZS51cGxvYWRlZFNpemUudmFsdWUgLyB1cGxvYWRTaXplLnZhbHVlXG4gICkpXG4gIGNvbnN0IHVwbG9hZFByb2dyZXNzTGFiZWwgPSBjb21wdXRlZCgoKSA9PiBnZXRQcm9ncmVzc0xhYmVsKHVwbG9hZFByb2dyZXNzLnZhbHVlKSlcbiAgY29uc3QgdXBsb2FkU2l6ZUxhYmVsID0gY29tcHV0ZWQoKCkgPT4gaHVtYW5TdG9yYWdlU2l6ZSh1cGxvYWRTaXplLnZhbHVlKSlcblxuICBjb25zdCBjYW5BZGRGaWxlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICAmJiBzdGF0ZS5pc1VwbG9hZGluZy52YWx1ZSAhPT0gdHJ1ZVxuICAgIC8vIGlmIHNpbmdsZSBzZWxlY3Rpb24gYW5kIG5vIGZpbGVzIGFyZSBxdWV1ZWQ6XG4gICAgJiYgKHByb3BzLm11bHRpcGxlID09PSB0cnVlIHx8IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAvLyBpZiBtYXgtZmlsZXMgaXMgc2V0IGFuZCBjdXJyZW50IG51bWJlciBvZiBmaWxlcyBkb2VzIG5vdCBleGNlZWRzIGl0OlxuICAgICYmIChwcm9wcy5tYXhGaWxlcyA9PT0gdm9pZCAwIHx8IHN0YXRlLmZpbGVzLnZhbHVlLmxlbmd0aCA8IG1heEZpbGVzTnVtYmVyLnZhbHVlKVxuICAgIC8vIGlmIG1heC10b3RhbC1zaXplIGlzIHNldCBhbmQgY3VycmVudCB1cGxvYWQgc2l6ZSBkb2VzIG5vdCBleGNlZWRzIGl0OlxuICAgICYmIChwcm9wcy5tYXhUb3RhbFNpemUgPT09IHZvaWQgMCB8fCB1cGxvYWRTaXplLnZhbHVlIDwgbWF4VG90YWxTaXplTnVtYmVyLnZhbHVlKVxuICApXG5cbiAgY29uc3QgY2FuVXBsb2FkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICYmIHN0YXRlLmlzQnVzeS52YWx1ZSAhPT0gdHJ1ZVxuICAgICYmIHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlICE9PSB0cnVlXG4gICAgJiYgc3RhdGUucXVldWVkRmlsZXMudmFsdWUubGVuZ3RoICE9PSAwXG4gIClcblxuICBwcm92aWRlKHVwbG9hZGVyS2V5LCByZW5kZXJJbnB1dClcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS11cGxvYWRlciBjb2x1bW4gbm8td3JhcCdcbiAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdXBsb2FkZXItLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXVwbG9hZGVyLS1ib3JkZXJlZCcgOiAnJylcbiAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtdXBsb2FkZXItLXNxdWFyZSBuby1ib3JkZXItcmFkaXVzJyA6ICcnKVxuICAgICsgKHByb3BzLmZsYXQgPT09IHRydWUgPyAnIHEtdXBsb2FkZXItLWZsYXQgbm8tc2hhZG93JyA6ICcnKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkIHEtdXBsb2FkZXItLWRpc2FibGUnIDogJycpXG4gICAgKyAoZG5kLnZhbHVlID09PSB0cnVlID8gJyBxLXVwbG9hZGVyLS1kbmQnIDogJycpXG4gIClcblxuICBjb25zdCBjb2xvckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS11cGxvYWRlcl9faGVhZGVyJ1xuICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgKyAocHJvcHMudGV4dENvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgcHJvcHMudGV4dENvbG9yIH1gIDogJycpXG4gIClcblxuICB3YXRjaChzdGF0ZS5pc1VwbG9hZGluZywgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XG4gICAgaWYgKG9sZFZhbCA9PT0gZmFsc2UgJiYgbmV3VmFsID09PSB0cnVlKSB7XG4gICAgICBlbWl0KCdzdGFydCcpXG4gICAgfVxuICAgIGVsc2UgaWYgKG9sZFZhbCA9PT0gdHJ1ZSAmJiBuZXdWYWwgPT09IGZhbHNlKSB7XG4gICAgICBlbWl0KCdmaW5pc2gnKVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiByZXNldCAoKSB7XG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IGZhbHNlKSB7XG4gICAgICBzdGF0ZS5hYm9ydCgpXG4gICAgICBzdGF0ZS51cGxvYWRlZFNpemUudmFsdWUgPSAwXG4gICAgICB1cGxvYWRTaXplLnZhbHVlID0gMFxuICAgICAgcmV2b2tlSW1nVVJMcygpXG4gICAgICBzdGF0ZS5maWxlcy52YWx1ZSA9IFtdXG4gICAgICBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZSA9IFtdXG4gICAgICBzdGF0ZS51cGxvYWRlZEZpbGVzLnZhbHVlID0gW11cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVVcGxvYWRlZEZpbGVzICgpIHtcbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIGJhdGNoUmVtb3ZlRmlsZXMoWyAndXBsb2FkZWQnIF0sICgpID0+IHtcbiAgICAgICAgc3RhdGUudXBsb2FkZWRGaWxlcy52YWx1ZSA9IFtdXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVF1ZXVlZEZpbGVzICgpIHtcbiAgICBiYXRjaFJlbW92ZUZpbGVzKFsgJ2lkbGUnLCAnZmFpbGVkJyBdLCAoeyBzaXplIH0pID0+IHtcbiAgICAgIHVwbG9hZFNpemUudmFsdWUgLT0gc2l6ZVxuICAgICAgc3RhdGUucXVldWVkRmlsZXMudmFsdWUgPSBbXVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBiYXRjaFJlbW92ZUZpbGVzIChzdGF0dXNMaXN0LCBjYikge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVkID0ge1xuICAgICAgZmlsZXM6IFtdLFxuICAgICAgc2l6ZTogMFxuICAgIH1cblxuICAgIGNvbnN0IGxvY2FsRmlsZXMgPSBzdGF0ZS5maWxlcy52YWx1ZS5maWx0ZXIoZiA9PiB7XG4gICAgICBpZiAoc3RhdHVzTGlzdC5pbmRleE9mKGYuX19zdGF0dXMpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZW1vdmVkLnNpemUgKz0gZi5zaXplXG4gICAgICByZW1vdmVkLmZpbGVzLnB1c2goZilcblxuICAgICAgZi5fX2ltZyAhPT0gdm9pZCAwICYmIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKGYuX19pbWcuc3JjKVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHJlbW92ZWQuZmlsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBzdGF0ZS5maWxlcy52YWx1ZSA9IGxvY2FsRmlsZXNcbiAgICAgIGNiKHJlbW92ZWQpXG4gICAgICBlbWl0KCdyZW1vdmVkJywgcmVtb3ZlZC5maWxlcylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVGaWxlIChmaWxlKSB7XG4gICAgaWYgKHByb3BzLmRpc2FibGUpIHJldHVyblxuXG4gICAgaWYgKGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRlZCcpIHtcbiAgICAgIHN0YXRlLnVwbG9hZGVkRmlsZXMudmFsdWUgPSBzdGF0ZS51cGxvYWRlZEZpbGVzLnZhbHVlLmZpbHRlcihmID0+IGYuX19rZXkgIT09IGZpbGUuX19rZXkpXG4gICAgfVxuICAgIGVsc2UgaWYgKGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSB7XG4gICAgICBmaWxlLl9fYWJvcnQoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVwbG9hZFNpemUudmFsdWUgLT0gZmlsZS5zaXplXG4gICAgfVxuXG4gICAgc3RhdGUuZmlsZXMudmFsdWUgPSBzdGF0ZS5maWxlcy52YWx1ZS5maWx0ZXIoZiA9PiB7XG4gICAgICBpZiAoZi5fX2tleSAhPT0gZmlsZS5fX2tleSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBmLl9faW1nICE9PSB2b2lkIDAgJiYgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwoZi5fX2ltZy5zcmMpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBzdGF0ZS5xdWV1ZWRGaWxlcy52YWx1ZSA9IHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlLmZpbHRlcihmID0+IGYuX19rZXkgIT09IGZpbGUuX19rZXkpXG4gICAgZW1pdCgncmVtb3ZlZCcsIFsgZmlsZSBdKVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2b2tlSW1nVVJMcyAoKSB7XG4gICAgc3RhdGUuZmlsZXMudmFsdWUuZm9yRWFjaChmID0+IHtcbiAgICAgIGYuX19pbWcgIT09IHZvaWQgMCAmJiB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChmLl9faW1nLnNyYylcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RmlsZUlucHV0ICgpIHtcbiAgICByZXR1cm4gaW5wdXRSZWYudmFsdWVcbiAgICAgIHx8IHJvb3RSZWYudmFsdWUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncS11cGxvYWRlcl9faW5wdXQnKVsgMCBdXG4gIH1cblxuICBmdW5jdGlvbiBhZGRGaWxlc1RvUXVldWUgKGUsIGZpbGVMaXN0KSB7XG4gICAgY29uc3QgbG9jYWxGaWxlcyA9IHByb2Nlc3NGaWxlcyhlLCBmaWxlTGlzdCwgc3RhdGUuZmlsZXMudmFsdWUsIHRydWUpXG4gICAgY29uc3QgZmlsZUlucHV0ID0gZ2V0RmlsZUlucHV0KClcblxuICAgIGlmIChmaWxlSW5wdXQgIT09IHZvaWQgMCAmJiBmaWxlSW5wdXQgIT09IG51bGwpIHtcbiAgICAgIGZpbGVJbnB1dC52YWx1ZSA9ICcnXG4gICAgfVxuXG4gICAgaWYgKGxvY2FsRmlsZXMgPT09IHZvaWQgMCkgcmV0dXJuXG5cbiAgICBsb2NhbEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBzdGF0ZS51cGRhdGVGaWxlU3RhdHVzKGZpbGUsICdpZGxlJylcbiAgICAgIHVwbG9hZFNpemUudmFsdWUgKz0gZmlsZS5zaXplXG5cbiAgICAgIGlmIChwcm9wcy5ub1RodW1ibmFpbHMgIT09IHRydWUgJiYgZmlsZS50eXBlLnRvVXBwZXJDYXNlKCkuc3RhcnRzV2l0aCgnSU1BR0UnKSkge1xuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWcuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgICAgZmlsZS5fX2ltZyA9IGltZ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBzdGF0ZS5maWxlcy52YWx1ZSA9IHN0YXRlLmZpbGVzLnZhbHVlLmNvbmNhdChsb2NhbEZpbGVzKVxuICAgIHN0YXRlLnF1ZXVlZEZpbGVzLnZhbHVlID0gc3RhdGUucXVldWVkRmlsZXMudmFsdWUuY29uY2F0KGxvY2FsRmlsZXMpXG4gICAgZW1pdCgnYWRkZWQnLCBsb2NhbEZpbGVzKVxuICAgIHByb3BzLmF1dG9VcGxvYWQgPT09IHRydWUgJiYgc3RhdGUudXBsb2FkKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwbG9hZCAoKSB7XG4gICAgY2FuVXBsb2FkLnZhbHVlID09PSB0cnVlICYmIHN0YXRlLnVwbG9hZCgpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRCdG4gKHNob3csIGljb24sIGZuKSB7XG4gICAgaWYgKHNob3cgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHR5cGU6ICdhJyxcbiAgICAgICAga2V5OiBpY29uLFxuICAgICAgICBpY29uOiAkcS5pY29uU2V0LnVwbG9hZGVyWyBpY29uIF0sXG4gICAgICAgIGZsYXQ6IHRydWUsXG4gICAgICAgIGRlbnNlOiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGxldCBjaGlsZCA9IHZvaWQgMFxuXG4gICAgICBpZiAoaWNvbiA9PT0gJ2FkZCcpIHtcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gcGlja0ZpbGVzXG4gICAgICAgIGNoaWxkID0gcmVuZGVySW5wdXRcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkYXRhLm9uQ2xpY2sgPSBmblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChRQnRuLCBkYXRhLCBjaGlsZClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJJbnB1dCAoKSB7XG4gICAgcmV0dXJuIGgoJ2lucHV0Jywge1xuICAgICAgcmVmOiBpbnB1dFJlZixcbiAgICAgIGNsYXNzOiAncS11cGxvYWRlcl9faW5wdXQgb3ZlcmZsb3ctaGlkZGVuIGFic29sdXRlLWZ1bGwnLFxuICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgdGl0bGU6ICcnLCAvLyB0cnkgdG8gcmVtb3ZlIGRlZmF1bHQgdG9vbHRpcFxuICAgICAgYWNjZXB0OiBwcm9wcy5hY2NlcHQsXG4gICAgICBtdWx0aXBsZTogcHJvcHMubXVsdGlwbGUgPT09IHRydWUgPyAnbXVsdGlwbGUnIDogdm9pZCAwLFxuICAgICAgY2FwdHVyZTogcHJvcHMuY2FwdHVyZSxcbiAgICAgIG9uTW91c2Vkb3duOiBzdG9wLCAvLyBuZWVkIHRvIHN0b3AgcmVmb2N1cyBmcm9tIFFCdG5cbiAgICAgIG9uQ2xpY2s6IHBpY2tGaWxlcyxcbiAgICAgIG9uQ2hhbmdlOiBhZGRGaWxlc1RvUXVldWVcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SGVhZGVyICgpIHtcbiAgICBpZiAoc2xvdHMuaGVhZGVyICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBzbG90cy5oZWFkZXIocHVibGljQXBpKVxuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS11cGxvYWRlcl9faGVhZGVyLWNvbnRlbnQgY29sdW1uJ1xuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdmbGV4IGZsZXgtY2VudGVyIG5vLXdyYXAgcS1ndXR0ZXIteHMnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBnZXRCdG4oc3RhdGUucXVldWVkRmlsZXMudmFsdWUubGVuZ3RoICE9PSAwLCAncmVtb3ZlUXVldWUnLCByZW1vdmVRdWV1ZWRGaWxlcyksXG4gICAgICAgICAgZ2V0QnRuKHN0YXRlLnVwbG9hZGVkRmlsZXMudmFsdWUubGVuZ3RoICE9PSAwLCAncmVtb3ZlVXBsb2FkZWQnLCByZW1vdmVVcGxvYWRlZEZpbGVzKSxcblxuICAgICAgICAgIHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoUVNwaW5uZXIsIHsgY2xhc3M6ICdxLXVwbG9hZGVyX19zcGlubmVyJyB9KVxuICAgICAgICAgICAgOiBudWxsLFxuXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ2NvbCBjb2x1bW4ganVzdGlmeS1jZW50ZXInIH0sIFtcbiAgICAgICAgICAgIHByb3BzLmxhYmVsICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fdGl0bGUnIH0sIFsgcHJvcHMubGFiZWwgXSlcbiAgICAgICAgICAgICAgOiBudWxsLFxuXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fc3VidGl0bGUnIH0sIFtcbiAgICAgICAgICAgICAgdXBsb2FkU2l6ZUxhYmVsLnZhbHVlICsgJyAvICcgKyB1cGxvYWRQcm9ncmVzc0xhYmVsLnZhbHVlXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgZ2V0QnRuKGNhbkFkZEZpbGVzLnZhbHVlLCAnYWRkJyksXG4gICAgICAgICAgZ2V0QnRuKHByb3BzLmhpZGVVcGxvYWRCdG4gPT09IGZhbHNlICYmIGNhblVwbG9hZC52YWx1ZSA9PT0gdHJ1ZSwgJ3VwbG9hZCcsIHN0YXRlLnVwbG9hZCksXG4gICAgICAgICAgZ2V0QnRuKHN0YXRlLmlzVXBsb2FkaW5nLnZhbHVlLCAnY2xlYXInLCBzdGF0ZS5hYm9ydClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdCAoKSB7XG4gICAgaWYgKHNsb3RzLmxpc3QgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNsb3RzLmxpc3QocHVibGljQXBpKVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZS5maWxlcy52YWx1ZS5tYXAoZmlsZSA9PiBoKCdkaXYnLCB7XG4gICAgICBrZXk6IGZpbGUuX19rZXksXG4gICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX2ZpbGUgcmVsYXRpdmUtcG9zaXRpb24nXG4gICAgICAgICsgKHByb3BzLm5vVGh1bWJuYWlscyAhPT0gdHJ1ZSAmJiBmaWxlLl9faW1nICE9PSB2b2lkIDAgPyAnIHEtdXBsb2FkZXJfX2ZpbGUtLWltZycgOiAnJylcbiAgICAgICAgKyAoXG4gICAgICAgICAgZmlsZS5fX3N0YXR1cyA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICAgID8gJyBxLXVwbG9hZGVyX19maWxlLS1mYWlsZWQnXG4gICAgICAgICAgICA6IChmaWxlLl9fc3RhdHVzID09PSAndXBsb2FkZWQnID8gJyBxLXVwbG9hZGVyX19maWxlLS11cGxvYWRlZCcgOiAnJylcbiAgICAgICAgKSxcbiAgICAgIHN0eWxlOiBwcm9wcy5ub1RodW1ibmFpbHMgIT09IHRydWUgJiYgZmlsZS5fX2ltZyAhPT0gdm9pZCAwXG4gICAgICAgID8geyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCInICsgZmlsZS5fX2ltZy5zcmMgKyAnXCIpJyB9XG4gICAgICAgIDogbnVsbFxuICAgIH0sIFtcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLXVwbG9hZGVyX19maWxlLWhlYWRlciByb3cgZmxleC1jZW50ZXIgbm8td3JhcCdcbiAgICAgIH0sIFtcbiAgICAgICAgZmlsZS5fX3N0YXR1cyA9PT0gJ2ZhaWxlZCdcbiAgICAgICAgICA/IGgoUUljb24sIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS11cGxvYWRlcl9fZmlsZS1zdGF0dXMnLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50eXBlLm5lZ2F0aXZlLFxuICAgICAgICAgICAgY29sb3I6ICduZWdhdGl2ZSdcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogbnVsbCxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fZmlsZS1oZWFkZXItY29udGVudCBjb2wnIH0sIFtcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS11cGxvYWRlcl9fdGl0bGUnIH0sIFsgZmlsZS5uYW1lIF0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS11cGxvYWRlcl9fc3VidGl0bGUgcm93IGl0ZW1zLWNlbnRlciBuby13cmFwJ1xuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGZpbGUuX19zaXplTGFiZWwgKyAnIC8gJyArIGZpbGUuX19wcm9ncmVzc0xhYmVsXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgZmlsZS5fX3N0YXR1cyA9PT0gJ3VwbG9hZGluZydcbiAgICAgICAgICA/IGgoUUNpcmN1bGFyUHJvZ3Jlc3MsIHtcbiAgICAgICAgICAgIHZhbHVlOiBmaWxlLl9fcHJvZ3Jlc3MsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgICBpbmRldGVybWluYXRlOiBmaWxlLl9fcHJvZ3Jlc3MgPT09IDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogaChRQnRuLCB7XG4gICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZSxcbiAgICAgICAgICAgIGljb246ICRxLmljb25TZXQudXBsb2FkZXJbIGZpbGUuX19zdGF0dXMgPT09ICd1cGxvYWRlZCcgPyAnZG9uZScgOiAnY2xlYXInIF0sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IHJlbW92ZUZpbGUoZmlsZSkgfVxuICAgICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pKVxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBzdGF0ZS5pc1VwbG9hZGluZy52YWx1ZSA9PT0gdHJ1ZSAmJiBzdGF0ZS5hYm9ydCgpXG4gICAgc3RhdGUuZmlsZXMudmFsdWUubGVuZ3RoICE9PSAwICYmIHJldm9rZUltZ1VSTHMoKVxuICB9KVxuXG4gIGNvbnN0IHB1YmxpY0FwaSA9IHt9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoaXNSZWYoc3RhdGVbIGtleSBdKSA9PT0gdHJ1ZSkge1xuICAgICAgaW5qZWN0UHJvcChwdWJsaWNBcGksIGtleSwgKCkgPT4gc3RhdGVbIGtleSBdLnZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHsgLy8gbWV0aG9kIG9yIG5vbi1jb21wdXRlZCBwcm9wXG4gICAgICBwdWJsaWNBcGlbIGtleSBdID0gc3RhdGVbIGtleSBdXG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihwdWJsaWNBcGksIHtcbiAgICB1cGxvYWQsXG4gICAgcmVzZXQsXG4gICAgcmVtb3ZlVXBsb2FkZWRGaWxlcyxcbiAgICByZW1vdmVRdWV1ZWRGaWxlcyxcbiAgICByZW1vdmVGaWxlLFxuXG4gICAgcGlja0ZpbGVzLFxuICAgIGFkZEZpbGVzXG4gIH0pXG5cbiAgaW5qZWN0TXVsdGlwbGVQcm9wcyhwdWJsaWNBcGksIHtcbiAgICBjYW5BZGRGaWxlczogKCkgPT4gY2FuQWRkRmlsZXMudmFsdWUsXG4gICAgY2FuVXBsb2FkOiAoKSA9PiBjYW5VcGxvYWQudmFsdWUsXG4gICAgdXBsb2FkU2l6ZUxhYmVsOiAoKSA9PiB1cGxvYWRTaXplTGFiZWwudmFsdWUsXG4gICAgdXBsb2FkUHJvZ3Jlc3NMYWJlbDogKCkgPT4gdXBsb2FkUHJvZ3Jlc3NMYWJlbC52YWx1ZVxuICB9KVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgYXBpIChtZXRob2RzICYgY29tcHV0ZWQgcHJvcHMpXG4gIGV4cG9zZSh7XG4gICAgLi4uc3RhdGUsXG5cbiAgICB1cGxvYWQsXG4gICAgcmVzZXQsXG4gICAgcmVtb3ZlVXBsb2FkZWRGaWxlcyxcbiAgICByZW1vdmVRdWV1ZWRGaWxlcyxcbiAgICByZW1vdmVGaWxlLFxuXG4gICAgcGlja0ZpbGVzLFxuICAgIGFkZEZpbGVzLFxuXG4gICAgY2FuQWRkRmlsZXMsXG4gICAgY2FuVXBsb2FkLFxuICAgIHVwbG9hZFNpemVMYWJlbCxcbiAgICB1cGxvYWRQcm9ncmVzc0xhYmVsXG4gIH0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGNvbG9yQ2xhc3MudmFsdWUgfSwgZ2V0SGVhZGVyKCkpLFxuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdXBsb2FkZXJfX2xpc3Qgc2Nyb2xsJyB9LCBnZXRMaXN0KCkpLFxuICAgICAgZ2V0RG5kTm9kZSgndXBsb2FkZXInKVxuICAgIF1cblxuICAgIHN0YXRlLmlzQnVzeS52YWx1ZSA9PT0gdHJ1ZSAmJiBjaGlsZHJlbi5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtdXBsb2FkZXJfX292ZXJsYXkgYWJzb2x1dGUtZnVsbCBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgfSwgWyBoKFFTcGlubmVyKSBdKVxuICAgIClcblxuICAgIGNvbnN0IGRhdGEgPSB7IHJlZjogcm9vdFJlZiwgY2xhc3M6IGNsYXNzZXMudmFsdWUgfVxuXG4gICAgaWYgKGNhbkFkZEZpbGVzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHsgb25EcmFnb3Zlciwgb25EcmFnbGVhdmUgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgY2hpbGRyZW4pXG4gIH1cbn1cbiIsImNvbnN0IHRydWVGbiA9ICgpID0+IHRydWVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVtaXRzQXJyYXkpIHtcbiAgY29uc3QgZW1pdHNPYmplY3QgPSB7fVxuXG4gIGVtaXRzQXJyYXkuZm9yRWFjaCh2YWwgPT4ge1xuICAgIGVtaXRzT2JqZWN0WyB2YWwgXSA9IHRydWVGblxuICB9KVxuXG4gIHJldHVybiBlbWl0c09iamVjdFxufVxuIiwiaW1wb3J0IHsgY29yZVByb3BzLCBjb3JlRW1pdHMsIGdldFJlbmRlcmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91cGxvYWRlci91cGxvYWRlci1jb3JlLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgZ2V0RW1pdHNPYmplY3QgZnJvbSAnLi4vcHJpdmF0ZS5nZXQtZW1pdHMtb2JqZWN0L2dldC1lbWl0cy1vYmplY3QuanMnXG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL2lzL2lzLmpzJ1xuXG5jb25zdCBjb3JlRW1pdHNPYmplY3QgPSBnZXRFbWl0c09iamVjdChjb3JlRW1pdHMpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IG5hbWUsIHByb3BzLCBlbWl0cywgaW5qZWN0UGx1Z2luIH0pID0+IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWUsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi5jb3JlUHJvcHMsXG4gICAgLi4ucHJvcHNcbiAgfSxcblxuICBlbWl0czogaXNPYmplY3QoZW1pdHMpID09PSB0cnVlXG4gICAgPyB7IC4uLmNvcmVFbWl0c09iamVjdCwgLi4uZW1pdHMgfVxuICAgIDogWyAuLi5jb3JlRW1pdHMsIC4uLmVtaXRzIF0sXG5cbiAgc2V0dXAgKF8sIHsgZXhwb3NlIH0pIHtcbiAgICByZXR1cm4gZ2V0UmVuZGVyZXIoaW5qZWN0UGx1Z2luLCBleHBvc2UpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBnZXRGbiAocHJvcCkge1xuICByZXR1cm4gdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbidcbiAgICA/IHByb3BcbiAgICA6ICgpID0+IHByb3Bcbn1cblxuY29uc3QgbmFtZSA9ICdRVXBsb2FkZXInXG5cbmNvbnN0IHByb3BzID0ge1xuICB1cmw6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuICBtZXRob2Q6IHtcbiAgICB0eXBlOiBbIEZ1bmN0aW9uLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAnUE9TVCdcbiAgfSxcbiAgZmllbGROYW1lOiB7XG4gICAgdHlwZTogWyBGdW5jdGlvbiwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogKCkgPT4gZmlsZSA9PiBmaWxlLm5hbWVcbiAgfSxcbiAgaGVhZGVyczogWyBGdW5jdGlvbiwgQXJyYXkgXSxcbiAgZm9ybUZpZWxkczogWyBGdW5jdGlvbiwgQXJyYXkgXSxcbiAgd2l0aENyZWRlbnRpYWxzOiBbIEZ1bmN0aW9uLCBCb29sZWFuIF0sXG4gIHNlbmRSYXc6IFsgRnVuY3Rpb24sIEJvb2xlYW4gXSxcblxuICBiYXRjaDogWyBGdW5jdGlvbiwgQm9vbGVhbiBdLFxuICBmYWN0b3J5OiBGdW5jdGlvblxufVxuXG5jb25zdCBlbWl0cyA9IFsgJ2ZhY3RvcnlGYWlsZWQnLCAndXBsb2FkZWQnLCAnZmFpbGVkJywgJ3VwbG9hZGluZycgXVxuXG5mdW5jdGlvbiBpbmplY3RQbHVnaW4gKHsgcHJvcHMsIGVtaXQsIGhlbHBlcnMgfSkge1xuICBjb25zdCB4aHJzID0gcmVmKFtdKVxuICBjb25zdCBwcm9taXNlcyA9IHJlZihbXSlcbiAgY29uc3Qgd29ya2luZ1RocmVhZHMgPSByZWYoMClcblxuICBjb25zdCB4aHJQcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgdXJsOiBnZXRGbihwcm9wcy51cmwpLFxuICAgIG1ldGhvZDogZ2V0Rm4ocHJvcHMubWV0aG9kKSxcbiAgICBoZWFkZXJzOiBnZXRGbihwcm9wcy5oZWFkZXJzKSxcbiAgICBmb3JtRmllbGRzOiBnZXRGbihwcm9wcy5mb3JtRmllbGRzKSxcbiAgICBmaWVsZE5hbWU6IGdldEZuKHByb3BzLmZpZWxkTmFtZSksXG4gICAgd2l0aENyZWRlbnRpYWxzOiBnZXRGbihwcm9wcy53aXRoQ3JlZGVudGlhbHMpLFxuICAgIHNlbmRSYXc6IGdldEZuKHByb3BzLnNlbmRSYXcpLFxuICAgIGJhdGNoOiBnZXRGbihwcm9wcy5iYXRjaClcbiAgfSkpXG5cbiAgY29uc3QgaXNVcGxvYWRpbmcgPSBjb21wdXRlZCgoKSA9PiB3b3JraW5nVGhyZWFkcy52YWx1ZSA+IDApXG4gIGNvbnN0IGlzQnVzeSA9IGNvbXB1dGVkKCgpID0+IHByb21pc2VzLnZhbHVlLmxlbmd0aCAhPT0gMClcblxuICBsZXQgYWJvcnRQcm9taXNlc1xuXG4gIGZ1bmN0aW9uIGFib3J0ICgpIHtcbiAgICB4aHJzLnZhbHVlLmZvckVhY2goeCA9PiB7IHguYWJvcnQoKSB9KVxuXG4gICAgaWYgKHByb21pc2VzLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYWJvcnRQcm9taXNlcyA9IHRydWVcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGxvYWQgKCkge1xuICAgIGNvbnN0IHF1ZXVlID0gaGVscGVycy5xdWV1ZWRGaWxlcy52YWx1ZS5zbGljZSgwKVxuICAgIGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUgPSBbXVxuXG4gICAgaWYgKHhoclByb3BzLnZhbHVlLmJhdGNoKHF1ZXVlKSkge1xuICAgICAgcnVuRmFjdG9yeShxdWV1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBxdWV1ZS5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICBydW5GYWN0b3J5KFsgZmlsZSBdKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBydW5GYWN0b3J5IChmaWxlcykge1xuICAgIHdvcmtpbmdUaHJlYWRzLnZhbHVlKytcblxuICAgIGlmICh0eXBlb2YgcHJvcHMuZmFjdG9yeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGVyZm9ybVVwbG9hZChmaWxlcywge30pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBwcm9wcy5mYWN0b3J5KGZpbGVzKVxuXG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIGVtaXQoXG4gICAgICAgICdmYWN0b3J5RmFpbGVkJyxcbiAgICAgICAgbmV3IEVycm9yKCdRVXBsb2FkZXI6IGZhY3RvcnkoKSBkb2VzIG5vdCByZXR1cm4gcHJvcGVybHknKSxcbiAgICAgICAgZmlsZXNcbiAgICAgIClcbiAgICAgIHdvcmtpbmdUaHJlYWRzLnZhbHVlLS1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHJlcy5jYXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb21pc2VzLnZhbHVlLnB1c2gocmVzKVxuXG4gICAgICBjb25zdCBmYWlsZWQgPSBlcnIgPT4ge1xuICAgICAgICBpZiAoaGVscGVycy5pc0FsaXZlKCkgPT09IHRydWUpIHtcbiAgICAgICAgICBwcm9taXNlcy52YWx1ZSA9IHByb21pc2VzLnZhbHVlLmZpbHRlcihwID0+IHAgIT09IHJlcylcblxuICAgICAgICAgIGlmIChwcm9taXNlcy52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGFib3J0UHJvbWlzZXMgPSBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUgPSBoZWxwZXJzLnF1ZXVlZEZpbGVzLnZhbHVlLmNvbmNhdChmaWxlcylcbiAgICAgICAgICBmaWxlcy5mb3JFYWNoKGYgPT4geyBoZWxwZXJzLnVwZGF0ZUZpbGVTdGF0dXMoZiwgJ2ZhaWxlZCcpIH0pXG5cbiAgICAgICAgICBlbWl0KCdmYWN0b3J5RmFpbGVkJywgZXJyLCBmaWxlcylcbiAgICAgICAgICB3b3JraW5nVGhyZWFkcy52YWx1ZS0tXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzLnRoZW4oZmFjdG9yeSA9PiB7XG4gICAgICAgIGlmIChhYm9ydFByb21pc2VzID09PSB0cnVlKSB7XG4gICAgICAgICAgZmFpbGVkKG5ldyBFcnJvcignQWJvcnRlZCcpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlbHBlcnMuaXNBbGl2ZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgcHJvbWlzZXMudmFsdWUgPSBwcm9taXNlcy52YWx1ZS5maWx0ZXIocCA9PiBwICE9PSByZXMpXG4gICAgICAgICAgcGVyZm9ybVVwbG9hZChmaWxlcywgZmFjdG9yeSlcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZmFpbGVkKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHBlcmZvcm1VcGxvYWQoZmlsZXMsIHJlcyB8fCB7fSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwZXJmb3JtVXBsb2FkIChmaWxlcywgZmFjdG9yeSkge1xuICAgIGNvbnN0XG4gICAgICBmb3JtID0gbmV3IEZvcm1EYXRhKCksXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgY29uc3QgZ2V0UHJvcCA9IChuYW1lLCBhcmcpID0+IHtcbiAgICAgIHJldHVybiBmYWN0b3J5WyBuYW1lIF0gIT09IHZvaWQgMFxuICAgICAgICA/IGdldEZuKGZhY3RvcnlbIG5hbWUgXSkoYXJnKVxuICAgICAgICA6IHhoclByb3BzLnZhbHVlWyBuYW1lIF0oYXJnKVxuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IGdldFByb3AoJ3VybCcsIGZpbGVzKVxuXG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3EtdXBsb2FkZXI6IGludmFsaWQgb3Igbm8gVVJMIHNwZWNpZmllZCcpXG4gICAgICB3b3JraW5nVGhyZWFkcy52YWx1ZS0tXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSBnZXRQcm9wKCdmb3JtRmllbGRzJywgZmlsZXMpXG4gICAgZmllbGRzICE9PSB2b2lkIDAgJiYgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgZm9ybS5hcHBlbmQoZmllbGQubmFtZSwgZmllbGQudmFsdWUpXG4gICAgfSlcblxuICAgIGxldFxuICAgICAgdXBsb2FkSW5kZXggPSAwLFxuICAgICAgdXBsb2FkSW5kZXhTaXplID0gMCxcbiAgICAgIGxvY2FsVXBsb2FkZWRTaXplID0gMCxcbiAgICAgIG1heFVwbG9hZFNpemUgPSAwLFxuICAgICAgYWJvcnRlZFxuXG4gICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGUgPT4ge1xuICAgICAgaWYgKGFib3J0ZWQgPT09IHRydWUpIHJldHVyblxuXG4gICAgICBjb25zdCBsb2FkZWQgPSBNYXRoLm1pbihtYXhVcGxvYWRTaXplLCBlLmxvYWRlZClcblxuICAgICAgaGVscGVycy51cGxvYWRlZFNpemUudmFsdWUgKz0gbG9hZGVkIC0gbG9jYWxVcGxvYWRlZFNpemVcbiAgICAgIGxvY2FsVXBsb2FkZWRTaXplID0gbG9hZGVkXG5cbiAgICAgIGxldCBzaXplID0gbG9jYWxVcGxvYWRlZFNpemUgLSB1cGxvYWRJbmRleFNpemVcbiAgICAgIGZvciAobGV0IGkgPSB1cGxvYWRJbmRleDsgc2l6ZSA+IDAgJiYgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgZmlsZSA9IGZpbGVzWyBpIF0sXG4gICAgICAgICAgdXBsb2FkZWQgPSBzaXplID4gZmlsZS5zaXplXG5cbiAgICAgICAgaWYgKHVwbG9hZGVkKSB7XG4gICAgICAgICAgc2l6ZSAtPSBmaWxlLnNpemVcbiAgICAgICAgICB1cGxvYWRJbmRleCsrXG4gICAgICAgICAgdXBsb2FkSW5kZXhTaXplICs9IGZpbGUuc2l6ZVxuICAgICAgICAgIGhlbHBlcnMudXBkYXRlRmlsZVN0YXR1cyhmaWxlLCAndXBsb2FkaW5nJywgZmlsZS5zaXplKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGhlbHBlcnMudXBkYXRlRmlsZVN0YXR1cyhmaWxlLCAndXBsb2FkaW5nJywgc2l6ZSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGZhbHNlKVxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA8IDQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh4aHIuc3RhdHVzICYmIHhoci5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgaGVscGVycy51cGxvYWRlZEZpbGVzLnZhbHVlID0gaGVscGVycy51cGxvYWRlZEZpbGVzLnZhbHVlLmNvbmNhdChmaWxlcylcbiAgICAgICAgZmlsZXMuZm9yRWFjaChmID0+IHsgaGVscGVycy51cGRhdGVGaWxlU3RhdHVzKGYsICd1cGxvYWRlZCcpIH0pXG4gICAgICAgIGVtaXQoJ3VwbG9hZGVkJywgeyBmaWxlcywgeGhyIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYWJvcnRlZCA9IHRydWVcbiAgICAgICAgaGVscGVycy51cGxvYWRlZFNpemUudmFsdWUgLT0gbG9jYWxVcGxvYWRlZFNpemVcbiAgICAgICAgaGVscGVycy5xdWV1ZWRGaWxlcy52YWx1ZSA9IGhlbHBlcnMucXVldWVkRmlsZXMudmFsdWUuY29uY2F0KGZpbGVzKVxuICAgICAgICBmaWxlcy5mb3JFYWNoKGYgPT4geyBoZWxwZXJzLnVwZGF0ZUZpbGVTdGF0dXMoZiwgJ2ZhaWxlZCcpIH0pXG4gICAgICAgIGVtaXQoJ2ZhaWxlZCcsIHsgZmlsZXMsIHhociB9KVxuICAgICAgfVxuXG4gICAgICB3b3JraW5nVGhyZWFkcy52YWx1ZS0tXG4gICAgICB4aHJzLnZhbHVlID0geGhycy52YWx1ZS5maWx0ZXIoeCA9PiB4ICE9PSB4aHIpXG4gICAgfVxuXG4gICAgeGhyLm9wZW4oXG4gICAgICBnZXRQcm9wKCdtZXRob2QnLCBmaWxlcyksXG4gICAgICB1cmxcbiAgICApXG5cbiAgICBpZiAoZ2V0UHJvcCgnd2l0aENyZWRlbnRpYWxzJywgZmlsZXMpID09PSB0cnVlKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBnZXRQcm9wKCdoZWFkZXJzJywgZmlsZXMpXG4gICAgaGVhZGVycyAhPT0gdm9pZCAwICYmIGhlYWRlcnMuZm9yRWFjaChoZWFkID0+IHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWQubmFtZSwgaGVhZC52YWx1ZSlcbiAgICB9KVxuXG4gICAgY29uc3Qgc2VuZFJhdyA9IGdldFByb3AoJ3NlbmRSYXcnLCBmaWxlcylcblxuICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBoZWxwZXJzLnVwZGF0ZUZpbGVTdGF0dXMoZmlsZSwgJ3VwbG9hZGluZycsIDApXG4gICAgICBpZiAoc2VuZFJhdyAhPT0gdHJ1ZSkge1xuICAgICAgICBmb3JtLmFwcGVuZChnZXRQcm9wKCdmaWVsZE5hbWUnLCBmaWxlKSwgZmlsZSwgZmlsZS5uYW1lKVxuICAgICAgfVxuICAgICAgZmlsZS54aHIgPSB4aHJcbiAgICAgIGZpbGUuX19hYm9ydCA9ICgpID0+IHsgeGhyLmFib3J0KCkgfVxuICAgICAgbWF4VXBsb2FkU2l6ZSArPSBmaWxlLnNpemVcbiAgICB9KVxuXG4gICAgZW1pdCgndXBsb2FkaW5nJywgeyBmaWxlcywgeGhyIH0pXG4gICAgeGhycy52YWx1ZS5wdXNoKHhocilcblxuICAgIGlmIChzZW5kUmF3ID09PSB0cnVlKSB7XG4gICAgICB4aHIuc2VuZChuZXcgQmxvYihmaWxlcykpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgeGhyLnNlbmQoZm9ybSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzVXBsb2FkaW5nLFxuICAgIGlzQnVzeSxcblxuICAgIGFib3J0LFxuICAgIHVwbG9hZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZSxcbiAgcHJvcHMsXG4gIGVtaXRzLFxuICBpbmplY3RQbHVnaW5cbn1cbiIsImltcG9ydCBjcmVhdGVVcGxvYWRlckNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlscy9jcmVhdGUtdXBsb2FkZXItY29tcG9uZW50L2NyZWF0ZS11cGxvYWRlci1jb21wb25lbnQuanMnXG5pbXBvcnQgeGhyVXBsb2FkZXJQbHVnaW4gZnJvbSAnLi94aHItdXBsb2FkZXItcGx1Z2luLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVcGxvYWRlckNvbXBvbmVudCh4aHJVcGxvYWRlclBsdWdpbilcbiJdLCJuYW1lcyI6WyJwcm9wcyIsIm5hbWUiLCJlbWl0cyIsImluamVjdFBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7O0FBS0EsU0FBUyxZQUFhLE9BQU8sZUFBZSxzQkFBc0IsVUFBVTtBQUMxRSxRQUFNLGdCQUFnQixDQUFFO0FBRXhCLFFBQU0sUUFBUSxVQUFRO0FBQ3BCLFFBQUksU0FBUyxJQUFJLE1BQU0sTUFBTTtBQUMzQixvQkFBYyxLQUFLLElBQUk7QUFBQSxJQUN4QixPQUNJO0FBQ0gsb0JBQWMsS0FBSyxFQUFFLHNCQUFzQixLQUFJLENBQUU7QUFBQSxJQUNsRDtBQUFBLEVBQ0wsQ0FBRztBQUVELFNBQU87QUFDVDtBQUVBLFNBQVMsbUJBQW9CLEdBQUc7QUFDOUIsT0FBSyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsYUFBYTtBQUNwRCxpQkFBZSxDQUFDO0FBQ2xCO0FBRU8sTUFBTSxlQUFlO0FBQUEsRUFDMUIsVUFBVTtBQUFBLEVBQ1YsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsYUFB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
