import { v as createComponent, c as computed, h, aZ as getNormalizedVNodes, i as inject, x as emptyRenderFn, bF as uploaderKey, r as ref, w as watch, bG as injectProp, g as getCurrentInstance, aB as QDialog, k as defineComponent, bP as toRaw, o as onMounted, K as onBeforeUnmount, y as provide, G as reactive, bQ as readonly, p as openBlock, V as createElementBlock, U as createBaseVNode, F as Fragment, X as renderList, aa as withDirectives, be as vShow, a7 as normalizeClass, Z as toDisplayString, aA as createCommentVNode, bR as vModelText, n as resolveComponent, f as createVNode, q as createBlock, _ as _export_sfc$1, bC as config, aw as auth, m as APIinterface, t as withCtx, b3 as scroll, Y as QBtn, ae as QAvatar, at as QIcon, a8 as QCard, aY as QInput } from "./index.61ed5618.js";
import { Q as QCircularProgress } from "./QCircularProgress.996c3e2f.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.03eaf2d6.js";
import { Q as QToolbar } from "./QToolbar.c8fc6962.js";
import { Q as QHeader } from "./QHeader.45b47730.js";
import { Q as QInnerLoading } from "./QInnerLoading.abe2afe6.js";
import { Q as QImg } from "./QImg.6c27044c.js";
import { Q as QSpinnerDots } from "./QSpinnerDots.a9d9851d.js";
import { Q as QPage } from "./QPage.0e88d376.js";
import { Q as QUploader } from "./QUploader.bc1da65d.js";
import { u as useAnchorProps, a as useAnchor, Q as QMenu } from "./QMenu.8e482cd8.js";
import { Q as QFooter } from "./QFooter.571ac042.js";
import { d as doc, b as firebaseCollectionEnum, f as firebaseDb, q as query, l as limit, o as orderBy, c as collection, h as onSnapshot, i as getDoc, u as updateDoc, e as addDoc, T as Timestamp, s as serverTimestamp } from "./FirebaseChat.3fe55950.js";
import { d as date } from "./date.ec5d83ae.js";
import "./format.7f7370d3.js";
import "./QResizeObserver.d08dce3c.js";
import "./selection.50b4cb0c.js";
var QChatMessage = createComponent({
  name: "QChatMessage",
  props: {
    sent: Boolean,
    label: String,
    bgColor: String,
    textColor: String,
    name: String,
    avatar: String,
    text: Array,
    stamp: String,
    size: String,
    labelHtml: Boolean,
    nameHtml: Boolean,
    textHtml: Boolean,
    stampHtml: Boolean
  },
  setup(props, { slots }) {
    const op = computed(() => props.sent === true ? "sent" : "received");
    const textClass = computed(
      () => `q-message-text-content q-message-text-content--${op.value}` + (props.textColor !== void 0 ? ` text-${props.textColor}` : "")
    );
    const messageClass = computed(
      () => `q-message-text q-message-text--${op.value}` + (props.bgColor !== void 0 ? ` text-${props.bgColor}` : "")
    );
    const containerClass = computed(
      () => "q-message-container row items-end no-wrap" + (props.sent === true ? " reverse" : "")
    );
    const sizeClass = computed(() => props.size !== void 0 ? `col-${props.size}` : "");
    const domProps = computed(() => ({
      msg: props.textHtml === true ? "innerHTML" : "textContent",
      stamp: props.stampHtml === true ? "innerHTML" : "textContent",
      name: props.nameHtml === true ? "innerHTML" : "textContent",
      label: props.labelHtml === true ? "innerHTML" : "textContent"
    }));
    function wrapStamp(node) {
      if (slots.stamp !== void 0) {
        return [node, h("div", { class: "q-message-stamp" }, slots.stamp())];
      }
      if (props.stamp) {
        return [
          node,
          h("div", {
            class: "q-message-stamp",
            [domProps.value.stamp]: props.stamp
          })
        ];
      }
      return [node];
    }
    function getText(contentList, withSlots) {
      const content = withSlots === true ? contentList.length > 1 ? (text) => text : (text) => h("div", [text]) : (text) => h("div", { [domProps.value.msg]: text });
      return contentList.map((msg, index2) => h("div", {
        key: index2,
        class: messageClass.value
      }, [
        h("div", { class: textClass.value }, wrapStamp(content(msg)))
      ]));
    }
    return () => {
      const container = [];
      if (slots.avatar !== void 0) {
        container.push(slots.avatar());
      } else if (props.avatar !== void 0) {
        container.push(
          h("img", {
            class: `q-message-avatar q-message-avatar--${op.value}`,
            src: props.avatar,
            "aria-hidden": "true"
          })
        );
      }
      const msg = [];
      if (slots.name !== void 0) {
        msg.push(
          h("div", { class: `q-message-name q-message-name--${op.value}` }, slots.name())
        );
      } else if (props.name !== void 0) {
        msg.push(
          h("div", {
            class: `q-message-name q-message-name--${op.value}`,
            [domProps.value.name]: props.name
          })
        );
      }
      if (slots.default !== void 0) {
        msg.push(
          getText(
            getNormalizedVNodes(slots.default()),
            true
          )
        );
      } else if (props.text !== void 0) {
        msg.push(getText(props.text));
      }
      container.push(
        h("div", { class: sizeClass.value }, msg)
      );
      const child = [];
      if (slots.label !== void 0) {
        child.push(
          h("div", { class: "q-message-label" }, slots.label())
        );
      } else if (props.label !== void 0) {
        child.push(
          h("div", {
            class: "q-message-label",
            [domProps.value.label]: props.label
          })
        );
      }
      child.push(
        h("div", { class: containerClass.value }, container)
      );
      return h("div", {
        class: `q-message q-message-${op.value}`
      }, child);
    };
  }
});
var QUploaderAddTrigger = createComponent({
  name: "QUploaderAddTrigger",
  setup() {
    const $trigger = inject(uploaderKey, emptyRenderFn);
    if ($trigger === emptyRenderFn) {
      console.error("QUploaderAddTrigger needs to be child of QUploader");
    }
    return $trigger;
  }
});
var QPopupProxy = createComponent({
  name: "QPopupProxy",
  props: {
    ...useAnchorProps,
    breakpoint: {
      type: [String, Number],
      default: 450
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const showing = ref(false);
    const popupRef = ref(null);
    const breakpoint = computed(() => parseInt(props.breakpoint, 10));
    const { canShow } = useAnchor({ showing });
    function getType() {
      return $q.screen.width < breakpoint.value || $q.screen.height < breakpoint.value ? "dialog" : "menu";
    }
    const type = ref(getType());
    const popupProps = computed(
      () => type.value === "menu" ? { maxHeight: "99vh" } : {}
    );
    watch(() => getType(), (val) => {
      if (showing.value !== true) {
        type.value = val;
      }
    });
    function onShow(evt) {
      showing.value = true;
      emit("show", evt);
    }
    function onHide(evt) {
      showing.value = false;
      type.value = getType();
      emit("hide", evt);
    }
    Object.assign(proxy, {
      show(evt) {
        canShow(evt) === true && popupRef.value.show(evt);
      },
      hide(evt) {
        popupRef.value.hide(evt);
      },
      toggle(evt) {
        popupRef.value.toggle(evt);
      }
    });
    injectProp(proxy, "currentComponent", () => ({
      type: type.value,
      ref: popupRef.value
    }));
    return () => {
      const data = {
        ref: popupRef,
        ...popupProps.value,
        ...attrs,
        onShow,
        onHide
      };
      let component;
      if (type.value === "dialog") {
        component = QDialog;
      } else {
        component = QMenu;
        Object.assign(data, {
          target: props.target,
          contextMenu: props.contextMenu,
          noParentEvent: true,
          separateClosePopup: true
        });
      }
      return h(component, data, slots.default);
    };
  }
});
const EMOJI_REMOTE_SRC = "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64";
const GROUP_NAMES = {
  recent: "Recently used",
  smileys_people: "Smiles & People",
  animals_nature: "Animals & Nature",
  food_drink: "Food & Drink",
  activities: "Activities",
  travel_places: "Travel places",
  objects: "Objects",
  symbols: "Symbols",
  flags: "Flags"
};
const EMOJI_UNICODE_KEY = "u";
const EMOJI_NAME_KEY = "n";
const EMOJI_VARIATIONS_KEY = "v";
const EMOJI_RESULT_KEY = "r";
const DEFAULT_EMOJI = {
  [EMOJI_NAME_KEY]: ["grinning face", "grinning"],
  [EMOJI_UNICODE_KEY]: "1f600",
  [EMOJI_RESULT_KEY]: "1f600"
};
const SKIN_TONE_NEUTRAL = "neutral";
const SKIN_TONE_LIGHT = "1f3fb";
const SKIN_TONE_MEDIUM_LIGHT = "1f3fc";
const SKIN_TONE_MEDIUM = "1f3fd";
const SKIN_TONE_MEDIUM_DARK = "1f3fe";
const SKIN_TONE_DARK = "1f3ff";
const SKIN_TONES = [
  SKIN_TONE_NEUTRAL,
  SKIN_TONE_LIGHT,
  SKIN_TONE_MEDIUM_LIGHT,
  SKIN_TONE_MEDIUM,
  SKIN_TONE_MEDIUM_DARK,
  SKIN_TONE_DARK
];
const STATIC_TEXTS = {
  placeholder: "Search emoji",
  skinTone: "Skin tone"
};
const COLOR_THEMES = ["light", "dark", "auto"];
const smileys_people$1 = [
  {
    n: [
      "grinning face",
      "grinning"
    ],
    u: "1f600"
  },
  {
    n: [
      "grinning face with smiling eyes",
      "grin"
    ],
    u: "1f601"
  },
  {
    n: [
      "face with tears of joy",
      "joy"
    ],
    u: "1f602"
  },
  {
    n: [
      "rolling on the floor laughing",
      "rolling_on_the_floor_laughing"
    ],
    u: "1f923"
  },
  {
    n: [
      "smiling face with open mouth",
      "smiley"
    ],
    u: "1f603"
  },
  {
    n: [
      "smiling face with open mouth and smiling eyes",
      "smile"
    ],
    u: "1f604"
  },
  {
    n: [
      "smiling face with open mouth and cold sweat",
      "sweat_smile"
    ],
    u: "1f605"
  },
  {
    n: [
      "smiling face with open mouth and tightly-closed eyes",
      "laughing",
      "satisfied"
    ],
    u: "1f606"
  },
  {
    n: [
      "winking face",
      "wink"
    ],
    u: "1f609"
  },
  {
    n: [
      "smiling face with smiling eyes",
      "blush"
    ],
    u: "1f60a"
  },
  {
    n: [
      "face savouring delicious food",
      "yum"
    ],
    u: "1f60b"
  },
  {
    n: [
      "smiling face with sunglasses",
      "sunglasses"
    ],
    u: "1f60e"
  },
  {
    n: [
      "smiling face with heart-shaped eyes",
      "heart_eyes"
    ],
    u: "1f60d"
  },
  {
    n: [
      "face throwing a kiss",
      "kissing_heart"
    ],
    u: "1f618"
  },
  {
    n: [
      "kissing face",
      "kissing"
    ],
    u: "1f617"
  },
  {
    n: [
      "kissing face with smiling eyes",
      "kissing_smiling_eyes"
    ],
    u: "1f619"
  },
  {
    n: [
      "kissing face with closed eyes",
      "kissing_closed_eyes"
    ],
    u: "1f61a"
  },
  {
    n: [
      "white smiling face",
      "relaxed"
    ],
    u: "263a-fe0f"
  },
  {
    n: [
      "slightly smiling face",
      "slightly_smiling_face"
    ],
    u: "1f642"
  },
  {
    n: [
      "hugging face",
      "hugging_face"
    ],
    u: "1f917"
  },
  {
    n: [
      "grinning face with star eyes",
      "star-struck",
      "grinning_face_with_star_eyes"
    ],
    u: "1f929"
  },
  {
    n: [
      "thinking face",
      "thinking_face"
    ],
    u: "1f914"
  },
  {
    n: [
      "face with one eyebrow raised",
      "face_with_raised_eyebrow",
      "face_with_one_eyebrow_raised"
    ],
    u: "1f928"
  },
  {
    n: [
      "neutral face",
      "neutral_face"
    ],
    u: "1f610"
  },
  {
    n: [
      "expressionless face",
      "expressionless"
    ],
    u: "1f611"
  },
  {
    n: [
      "face without mouth",
      "no_mouth"
    ],
    u: "1f636"
  },
  {
    n: [
      "face with rolling eyes",
      "face_with_rolling_eyes"
    ],
    u: "1f644"
  },
  {
    n: [
      "smirking face",
      "smirk"
    ],
    u: "1f60f"
  },
  {
    n: [
      "persevering face",
      "persevere"
    ],
    u: "1f623"
  },
  {
    n: [
      "disappointed but relieved face",
      "disappointed_relieved"
    ],
    u: "1f625"
  },
  {
    n: [
      "face with open mouth",
      "open_mouth"
    ],
    u: "1f62e"
  },
  {
    n: [
      "zipper-mouth face",
      "zipper_mouth_face"
    ],
    u: "1f910"
  },
  {
    n: [
      "hushed face",
      "hushed"
    ],
    u: "1f62f"
  },
  {
    n: [
      "sleepy face",
      "sleepy"
    ],
    u: "1f62a"
  },
  {
    n: [
      "tired face",
      "tired_face"
    ],
    u: "1f62b"
  },
  {
    n: [
      "sleeping face",
      "sleeping"
    ],
    u: "1f634"
  },
  {
    n: [
      "relieved face",
      "relieved"
    ],
    u: "1f60c"
  },
  {
    n: [
      "face with stuck-out tongue",
      "stuck_out_tongue"
    ],
    u: "1f61b"
  },
  {
    n: [
      "face with stuck-out tongue and winking eye",
      "stuck_out_tongue_winking_eye"
    ],
    u: "1f61c"
  },
  {
    n: [
      "face with stuck-out tongue and tightly-closed eyes",
      "stuck_out_tongue_closed_eyes"
    ],
    u: "1f61d"
  },
  {
    n: [
      "drooling face",
      "drooling_face"
    ],
    u: "1f924"
  },
  {
    n: [
      "unamused face",
      "unamused"
    ],
    u: "1f612"
  },
  {
    n: [
      "face with cold sweat",
      "sweat"
    ],
    u: "1f613"
  },
  {
    n: [
      "pensive face",
      "pensive"
    ],
    u: "1f614"
  },
  {
    n: [
      "confused face",
      "confused"
    ],
    u: "1f615"
  },
  {
    n: [
      "upside-down face",
      "upside_down_face"
    ],
    u: "1f643"
  },
  {
    n: [
      "money-mouth face",
      "money_mouth_face"
    ],
    u: "1f911"
  },
  {
    n: [
      "astonished face",
      "astonished"
    ],
    u: "1f632"
  },
  {
    n: [
      "white_frowning_face"
    ],
    u: "2639-fe0f"
  },
  {
    n: [
      "slightly frowning face",
      "slightly_frowning_face"
    ],
    u: "1f641"
  },
  {
    n: [
      "confounded face",
      "confounded"
    ],
    u: "1f616"
  },
  {
    n: [
      "disappointed face",
      "disappointed"
    ],
    u: "1f61e"
  },
  {
    n: [
      "worried face",
      "worried"
    ],
    u: "1f61f"
  },
  {
    n: [
      "face with look of triumph",
      "triumph"
    ],
    u: "1f624"
  },
  {
    n: [
      "crying face",
      "cry"
    ],
    u: "1f622"
  },
  {
    n: [
      "loudly crying face",
      "sob"
    ],
    u: "1f62d"
  },
  {
    n: [
      "frowning face with open mouth",
      "frowning"
    ],
    u: "1f626"
  },
  {
    n: [
      "anguished face",
      "anguished"
    ],
    u: "1f627"
  },
  {
    n: [
      "fearful face",
      "fearful"
    ],
    u: "1f628"
  },
  {
    n: [
      "weary face",
      "weary"
    ],
    u: "1f629"
  },
  {
    n: [
      "shocked face with exploding head",
      "exploding_head",
      "shocked_face_with_exploding_head"
    ],
    u: "1f92f"
  },
  {
    n: [
      "grimacing face",
      "grimacing"
    ],
    u: "1f62c"
  },
  {
    n: [
      "face with open mouth and cold sweat",
      "cold_sweat"
    ],
    u: "1f630"
  },
  {
    n: [
      "face screaming in fear",
      "scream"
    ],
    u: "1f631"
  },
  {
    n: [
      "flushed face",
      "flushed"
    ],
    u: "1f633"
  },
  {
    n: [
      "grinning face with one large and one small eye",
      "zany_face",
      "grinning_face_with_one_large_and_one_small_eye"
    ],
    u: "1f92a"
  },
  {
    n: [
      "dizzy face",
      "dizzy_face"
    ],
    u: "1f635"
  },
  {
    n: [
      "pouting face",
      "rage"
    ],
    u: "1f621"
  },
  {
    n: [
      "angry face",
      "angry"
    ],
    u: "1f620"
  },
  {
    n: [
      "serious face with symbols covering mouth",
      "face_with_symbols_on_mouth",
      "serious_face_with_symbols_covering_mouth"
    ],
    u: "1f92c"
  },
  {
    n: [
      "face with medical mask",
      "mask"
    ],
    u: "1f637"
  },
  {
    n: [
      "face with thermometer",
      "face_with_thermometer"
    ],
    u: "1f912"
  },
  {
    n: [
      "face with head-bandage",
      "face_with_head_bandage"
    ],
    u: "1f915"
  },
  {
    n: [
      "nauseated face",
      "nauseated_face"
    ],
    u: "1f922"
  },
  {
    n: [
      "face with open mouth vomiting",
      "face_vomiting",
      "face_with_open_mouth_vomiting"
    ],
    u: "1f92e"
  },
  {
    n: [
      "sneezing face",
      "sneezing_face"
    ],
    u: "1f927"
  },
  {
    n: [
      "smiling face with halo",
      "innocent"
    ],
    u: "1f607"
  },
  {
    n: [
      "face with cowboy hat",
      "face_with_cowboy_hat"
    ],
    u: "1f920"
  },
  {
    n: [
      "clown face",
      "clown_face"
    ],
    u: "1f921"
  },
  {
    n: [
      "lying face",
      "lying_face"
    ],
    u: "1f925"
  },
  {
    n: [
      "face with finger covering closed lips",
      "shushing_face",
      "face_with_finger_covering_closed_lips"
    ],
    u: "1f92b"
  },
  {
    n: [
      "smiling face with smiling eyes and hand covering mouth",
      "face_with_hand_over_mouth",
      "smiling_face_with_smiling_eyes_and_hand_covering_mouth"
    ],
    u: "1f92d"
  },
  {
    n: [
      "face with monocle",
      "face_with_monocle"
    ],
    u: "1f9d0"
  },
  {
    n: [
      "nerd face",
      "nerd_face"
    ],
    u: "1f913"
  },
  {
    n: [
      "smiling face with horns",
      "smiling_imp"
    ],
    u: "1f608"
  },
  {
    n: [
      "imp"
    ],
    u: "1f47f"
  },
  {
    n: [
      "japanese ogre",
      "japanese_ogre"
    ],
    u: "1f479"
  },
  {
    n: [
      "japanese goblin",
      "japanese_goblin"
    ],
    u: "1f47a"
  },
  {
    n: [
      "skull"
    ],
    u: "1f480"
  },
  {
    n: [
      "skull_and_crossbones"
    ],
    u: "2620-fe0f"
  },
  {
    n: [
      "ghost"
    ],
    u: "1f47b"
  },
  {
    n: [
      "extraterrestrial alien",
      "alien"
    ],
    u: "1f47d"
  },
  {
    n: [
      "alien monster",
      "space_invader"
    ],
    u: "1f47e"
  },
  {
    n: [
      "robot face",
      "robot_face"
    ],
    u: "1f916"
  },
  {
    n: [
      "pile of poo",
      "hankey",
      "poop",
      "shit"
    ],
    u: "1f4a9"
  },
  {
    n: [
      "smiling cat face with open mouth",
      "smiley_cat"
    ],
    u: "1f63a"
  },
  {
    n: [
      "grinning cat face with smiling eyes",
      "smile_cat"
    ],
    u: "1f638"
  },
  {
    n: [
      "cat face with tears of joy",
      "joy_cat"
    ],
    u: "1f639"
  },
  {
    n: [
      "smiling cat face with heart-shaped eyes",
      "heart_eyes_cat"
    ],
    u: "1f63b"
  },
  {
    n: [
      "cat face with wry smile",
      "smirk_cat"
    ],
    u: "1f63c"
  },
  {
    n: [
      "kissing cat face with closed eyes",
      "kissing_cat"
    ],
    u: "1f63d"
  },
  {
    n: [
      "weary cat face",
      "scream_cat"
    ],
    u: "1f640"
  },
  {
    n: [
      "crying cat face",
      "crying_cat_face"
    ],
    u: "1f63f"
  },
  {
    n: [
      "pouting cat face",
      "pouting_cat"
    ],
    u: "1f63e"
  },
  {
    n: [
      "see-no-evil monkey",
      "see_no_evil"
    ],
    u: "1f648"
  },
  {
    n: [
      "hear-no-evil monkey",
      "hear_no_evil"
    ],
    u: "1f649"
  },
  {
    n: [
      "speak-no-evil monkey",
      "speak_no_evil"
    ],
    u: "1f64a"
  },
  {
    n: [
      "baby"
    ],
    u: "1f476",
    v: [
      "1f476-1f3fb",
      "1f476-1f3fc",
      "1f476-1f3fd",
      "1f476-1f3fe",
      "1f476-1f3ff"
    ]
  },
  {
    n: [
      "child"
    ],
    u: "1f9d2",
    v: [
      "1f9d2-1f3fb",
      "1f9d2-1f3fc",
      "1f9d2-1f3fd",
      "1f9d2-1f3fe",
      "1f9d2-1f3ff"
    ]
  },
  {
    n: [
      "boy"
    ],
    u: "1f466",
    v: [
      "1f466-1f3fb",
      "1f466-1f3fc",
      "1f466-1f3fd",
      "1f466-1f3fe",
      "1f466-1f3ff"
    ]
  },
  {
    n: [
      "girl"
    ],
    u: "1f467",
    v: [
      "1f467-1f3fb",
      "1f467-1f3fc",
      "1f467-1f3fd",
      "1f467-1f3fe",
      "1f467-1f3ff"
    ]
  },
  {
    n: [
      "adult"
    ],
    u: "1f9d1",
    v: [
      "1f9d1-1f3fb",
      "1f9d1-1f3fc",
      "1f9d1-1f3fd",
      "1f9d1-1f3fe",
      "1f9d1-1f3ff"
    ]
  },
  {
    n: [
      "man"
    ],
    u: "1f468",
    v: [
      "1f468-1f3fb",
      "1f468-1f3fc",
      "1f468-1f3fd",
      "1f468-1f3fe",
      "1f468-1f3ff"
    ]
  },
  {
    n: [
      "woman"
    ],
    u: "1f469",
    v: [
      "1f469-1f3fb",
      "1f469-1f3fc",
      "1f469-1f3fd",
      "1f469-1f3fe",
      "1f469-1f3ff"
    ]
  },
  {
    n: [
      "older adult",
      "older_adult"
    ],
    u: "1f9d3",
    v: [
      "1f9d3-1f3fb",
      "1f9d3-1f3fc",
      "1f9d3-1f3fd",
      "1f9d3-1f3fe",
      "1f9d3-1f3ff"
    ]
  },
  {
    n: [
      "older man",
      "older_man"
    ],
    u: "1f474",
    v: [
      "1f474-1f3fb",
      "1f474-1f3fc",
      "1f474-1f3fd",
      "1f474-1f3fe",
      "1f474-1f3ff"
    ]
  },
  {
    n: [
      "older woman",
      "older_woman"
    ],
    u: "1f475",
    v: [
      "1f475-1f3fb",
      "1f475-1f3fc",
      "1f475-1f3fd",
      "1f475-1f3fe",
      "1f475-1f3ff"
    ]
  },
  {
    n: [
      "male-doctor"
    ],
    u: "1f468-200d-2695-fe0f",
    v: [
      "1f468-1f3fb-200d-2695-fe0f",
      "1f468-1f3fc-200d-2695-fe0f",
      "1f468-1f3fd-200d-2695-fe0f",
      "1f468-1f3fe-200d-2695-fe0f",
      "1f468-1f3ff-200d-2695-fe0f"
    ]
  },
  {
    n: [
      "female-doctor"
    ],
    u: "1f469-200d-2695-fe0f",
    v: [
      "1f469-1f3fb-200d-2695-fe0f",
      "1f469-1f3fc-200d-2695-fe0f",
      "1f469-1f3fd-200d-2695-fe0f",
      "1f469-1f3fe-200d-2695-fe0f",
      "1f469-1f3ff-200d-2695-fe0f"
    ]
  },
  {
    n: [
      "male-student"
    ],
    u: "1f468-200d-1f393",
    v: [
      "1f468-1f3fb-200d-1f393",
      "1f468-1f3fc-200d-1f393",
      "1f468-1f3fd-200d-1f393",
      "1f468-1f3fe-200d-1f393",
      "1f468-1f3ff-200d-1f393"
    ]
  },
  {
    n: [
      "female-student"
    ],
    u: "1f469-200d-1f393",
    v: [
      "1f469-1f3fb-200d-1f393",
      "1f469-1f3fc-200d-1f393",
      "1f469-1f3fd-200d-1f393",
      "1f469-1f3fe-200d-1f393",
      "1f469-1f3ff-200d-1f393"
    ]
  },
  {
    n: [
      "male-teacher"
    ],
    u: "1f468-200d-1f3eb",
    v: [
      "1f468-1f3fb-200d-1f3eb",
      "1f468-1f3fc-200d-1f3eb",
      "1f468-1f3fd-200d-1f3eb",
      "1f468-1f3fe-200d-1f3eb",
      "1f468-1f3ff-200d-1f3eb"
    ]
  },
  {
    n: [
      "female-teacher"
    ],
    u: "1f469-200d-1f3eb",
    v: [
      "1f469-1f3fb-200d-1f3eb",
      "1f469-1f3fc-200d-1f3eb",
      "1f469-1f3fd-200d-1f3eb",
      "1f469-1f3fe-200d-1f3eb",
      "1f469-1f3ff-200d-1f3eb"
    ]
  },
  {
    n: [
      "male-judge"
    ],
    u: "1f468-200d-2696-fe0f",
    v: [
      "1f468-1f3fb-200d-2696-fe0f",
      "1f468-1f3fc-200d-2696-fe0f",
      "1f468-1f3fd-200d-2696-fe0f",
      "1f468-1f3fe-200d-2696-fe0f",
      "1f468-1f3ff-200d-2696-fe0f"
    ]
  },
  {
    n: [
      "female-judge"
    ],
    u: "1f469-200d-2696-fe0f",
    v: [
      "1f469-1f3fb-200d-2696-fe0f",
      "1f469-1f3fc-200d-2696-fe0f",
      "1f469-1f3fd-200d-2696-fe0f",
      "1f469-1f3fe-200d-2696-fe0f",
      "1f469-1f3ff-200d-2696-fe0f"
    ]
  },
  {
    n: [
      "male-farmer"
    ],
    u: "1f468-200d-1f33e",
    v: [
      "1f468-1f3fb-200d-1f33e",
      "1f468-1f3fc-200d-1f33e",
      "1f468-1f3fd-200d-1f33e",
      "1f468-1f3fe-200d-1f33e",
      "1f468-1f3ff-200d-1f33e"
    ]
  },
  {
    n: [
      "female-farmer"
    ],
    u: "1f469-200d-1f33e",
    v: [
      "1f469-1f3fb-200d-1f33e",
      "1f469-1f3fc-200d-1f33e",
      "1f469-1f3fd-200d-1f33e",
      "1f469-1f3fe-200d-1f33e",
      "1f469-1f3ff-200d-1f33e"
    ]
  },
  {
    n: [
      "male-cook"
    ],
    u: "1f468-200d-1f373",
    v: [
      "1f468-1f3fb-200d-1f373",
      "1f468-1f3fc-200d-1f373",
      "1f468-1f3fd-200d-1f373",
      "1f468-1f3fe-200d-1f373",
      "1f468-1f3ff-200d-1f373"
    ]
  },
  {
    n: [
      "female-cook"
    ],
    u: "1f469-200d-1f373",
    v: [
      "1f469-1f3fb-200d-1f373",
      "1f469-1f3fc-200d-1f373",
      "1f469-1f3fd-200d-1f373",
      "1f469-1f3fe-200d-1f373",
      "1f469-1f3ff-200d-1f373"
    ]
  },
  {
    n: [
      "male-mechanic"
    ],
    u: "1f468-200d-1f527",
    v: [
      "1f468-1f3fb-200d-1f527",
      "1f468-1f3fc-200d-1f527",
      "1f468-1f3fd-200d-1f527",
      "1f468-1f3fe-200d-1f527",
      "1f468-1f3ff-200d-1f527"
    ]
  },
  {
    n: [
      "female-mechanic"
    ],
    u: "1f469-200d-1f527",
    v: [
      "1f469-1f3fb-200d-1f527",
      "1f469-1f3fc-200d-1f527",
      "1f469-1f3fd-200d-1f527",
      "1f469-1f3fe-200d-1f527",
      "1f469-1f3ff-200d-1f527"
    ]
  },
  {
    n: [
      "male-factory-worker"
    ],
    u: "1f468-200d-1f3ed",
    v: [
      "1f468-1f3fb-200d-1f3ed",
      "1f468-1f3fc-200d-1f3ed",
      "1f468-1f3fd-200d-1f3ed",
      "1f468-1f3fe-200d-1f3ed",
      "1f468-1f3ff-200d-1f3ed"
    ]
  },
  {
    n: [
      "female-factory-worker"
    ],
    u: "1f469-200d-1f3ed",
    v: [
      "1f469-1f3fb-200d-1f3ed",
      "1f469-1f3fc-200d-1f3ed",
      "1f469-1f3fd-200d-1f3ed",
      "1f469-1f3fe-200d-1f3ed",
      "1f469-1f3ff-200d-1f3ed"
    ]
  },
  {
    n: [
      "male-office-worker"
    ],
    u: "1f468-200d-1f4bc",
    v: [
      "1f468-1f3fb-200d-1f4bc",
      "1f468-1f3fc-200d-1f4bc",
      "1f468-1f3fd-200d-1f4bc",
      "1f468-1f3fe-200d-1f4bc",
      "1f468-1f3ff-200d-1f4bc"
    ]
  },
  {
    n: [
      "female-office-worker"
    ],
    u: "1f469-200d-1f4bc",
    v: [
      "1f469-1f3fb-200d-1f4bc",
      "1f469-1f3fc-200d-1f4bc",
      "1f469-1f3fd-200d-1f4bc",
      "1f469-1f3fe-200d-1f4bc",
      "1f469-1f3ff-200d-1f4bc"
    ]
  },
  {
    n: [
      "male-scientist"
    ],
    u: "1f468-200d-1f52c",
    v: [
      "1f468-1f3fb-200d-1f52c",
      "1f468-1f3fc-200d-1f52c",
      "1f468-1f3fd-200d-1f52c",
      "1f468-1f3fe-200d-1f52c",
      "1f468-1f3ff-200d-1f52c"
    ]
  },
  {
    n: [
      "female-scientist"
    ],
    u: "1f469-200d-1f52c",
    v: [
      "1f469-1f3fb-200d-1f52c",
      "1f469-1f3fc-200d-1f52c",
      "1f469-1f3fd-200d-1f52c",
      "1f469-1f3fe-200d-1f52c",
      "1f469-1f3ff-200d-1f52c"
    ]
  },
  {
    n: [
      "male-technologist"
    ],
    u: "1f468-200d-1f4bb",
    v: [
      "1f468-1f3fb-200d-1f4bb",
      "1f468-1f3fc-200d-1f4bb",
      "1f468-1f3fd-200d-1f4bb",
      "1f468-1f3fe-200d-1f4bb",
      "1f468-1f3ff-200d-1f4bb"
    ]
  },
  {
    n: [
      "female-technologist"
    ],
    u: "1f469-200d-1f4bb",
    v: [
      "1f469-1f3fb-200d-1f4bb",
      "1f469-1f3fc-200d-1f4bb",
      "1f469-1f3fd-200d-1f4bb",
      "1f469-1f3fe-200d-1f4bb",
      "1f469-1f3ff-200d-1f4bb"
    ]
  },
  {
    n: [
      "male-singer"
    ],
    u: "1f468-200d-1f3a4",
    v: [
      "1f468-1f3fb-200d-1f3a4",
      "1f468-1f3fc-200d-1f3a4",
      "1f468-1f3fd-200d-1f3a4",
      "1f468-1f3fe-200d-1f3a4",
      "1f468-1f3ff-200d-1f3a4"
    ]
  },
  {
    n: [
      "female-singer"
    ],
    u: "1f469-200d-1f3a4",
    v: [
      "1f469-1f3fb-200d-1f3a4",
      "1f469-1f3fc-200d-1f3a4",
      "1f469-1f3fd-200d-1f3a4",
      "1f469-1f3fe-200d-1f3a4",
      "1f469-1f3ff-200d-1f3a4"
    ]
  },
  {
    n: [
      "male-artist"
    ],
    u: "1f468-200d-1f3a8",
    v: [
      "1f468-1f3fb-200d-1f3a8",
      "1f468-1f3fc-200d-1f3a8",
      "1f468-1f3fd-200d-1f3a8",
      "1f468-1f3fe-200d-1f3a8",
      "1f468-1f3ff-200d-1f3a8"
    ]
  },
  {
    n: [
      "female-artist"
    ],
    u: "1f469-200d-1f3a8",
    v: [
      "1f469-1f3fb-200d-1f3a8",
      "1f469-1f3fc-200d-1f3a8",
      "1f469-1f3fd-200d-1f3a8",
      "1f469-1f3fe-200d-1f3a8",
      "1f469-1f3ff-200d-1f3a8"
    ]
  },
  {
    n: [
      "male-pilot"
    ],
    u: "1f468-200d-2708-fe0f",
    v: [
      "1f468-1f3fb-200d-2708-fe0f",
      "1f468-1f3fc-200d-2708-fe0f",
      "1f468-1f3fd-200d-2708-fe0f",
      "1f468-1f3fe-200d-2708-fe0f",
      "1f468-1f3ff-200d-2708-fe0f"
    ]
  },
  {
    n: [
      "female-pilot"
    ],
    u: "1f469-200d-2708-fe0f",
    v: [
      "1f469-1f3fb-200d-2708-fe0f",
      "1f469-1f3fc-200d-2708-fe0f",
      "1f469-1f3fd-200d-2708-fe0f",
      "1f469-1f3fe-200d-2708-fe0f",
      "1f469-1f3ff-200d-2708-fe0f"
    ]
  },
  {
    n: [
      "male-astronaut"
    ],
    u: "1f468-200d-1f680",
    v: [
      "1f468-1f3fb-200d-1f680",
      "1f468-1f3fc-200d-1f680",
      "1f468-1f3fd-200d-1f680",
      "1f468-1f3fe-200d-1f680",
      "1f468-1f3ff-200d-1f680"
    ]
  },
  {
    n: [
      "female-astronaut"
    ],
    u: "1f469-200d-1f680",
    v: [
      "1f469-1f3fb-200d-1f680",
      "1f469-1f3fc-200d-1f680",
      "1f469-1f3fd-200d-1f680",
      "1f469-1f3fe-200d-1f680",
      "1f469-1f3ff-200d-1f680"
    ]
  },
  {
    n: [
      "male-firefighter"
    ],
    u: "1f468-200d-1f692",
    v: [
      "1f468-1f3fb-200d-1f692",
      "1f468-1f3fc-200d-1f692",
      "1f468-1f3fd-200d-1f692",
      "1f468-1f3fe-200d-1f692",
      "1f468-1f3ff-200d-1f692"
    ]
  },
  {
    n: [
      "female-firefighter"
    ],
    u: "1f469-200d-1f692",
    v: [
      "1f469-1f3fb-200d-1f692",
      "1f469-1f3fc-200d-1f692",
      "1f469-1f3fd-200d-1f692",
      "1f469-1f3fe-200d-1f692",
      "1f469-1f3ff-200d-1f692"
    ]
  },
  {
    n: [
      "police officer",
      "cop"
    ],
    u: "1f46e",
    v: [
      "1f46e-1f3fb",
      "1f46e-1f3fc",
      "1f46e-1f3fd",
      "1f46e-1f3fe",
      "1f46e-1f3ff"
    ]
  },
  {
    n: [
      "male-police-officer"
    ],
    u: "1f46e-200d-2642-fe0f",
    v: [
      "1f46e-1f3fb-200d-2642-fe0f",
      "1f46e-1f3fc-200d-2642-fe0f",
      "1f46e-1f3fd-200d-2642-fe0f",
      "1f46e-1f3fe-200d-2642-fe0f",
      "1f46e-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "female-police-officer"
    ],
    u: "1f46e-200d-2640-fe0f",
    v: [
      "1f46e-1f3fb-200d-2640-fe0f",
      "1f46e-1f3fc-200d-2640-fe0f",
      "1f46e-1f3fd-200d-2640-fe0f",
      "1f46e-1f3fe-200d-2640-fe0f",
      "1f46e-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "sleuth_or_spy"
    ],
    u: "1f575-fe0f",
    v: [
      "1f575-1f3fb",
      "1f575-1f3fc",
      "1f575-1f3fd",
      "1f575-1f3fe",
      "1f575-1f3ff"
    ]
  },
  {
    n: [
      "male-detective"
    ],
    u: "1f575-fe0f-200d-2642-fe0f",
    v: [
      "1f575-1f3fb-200d-2642-fe0f",
      "1f575-1f3fc-200d-2642-fe0f",
      "1f575-1f3fd-200d-2642-fe0f",
      "1f575-1f3fe-200d-2642-fe0f",
      "1f575-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "female-detective"
    ],
    u: "1f575-fe0f-200d-2640-fe0f",
    v: [
      "1f575-1f3fb-200d-2640-fe0f",
      "1f575-1f3fc-200d-2640-fe0f",
      "1f575-1f3fd-200d-2640-fe0f",
      "1f575-1f3fe-200d-2640-fe0f",
      "1f575-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "guardsman"
    ],
    u: "1f482",
    v: [
      "1f482-1f3fb",
      "1f482-1f3fc",
      "1f482-1f3fd",
      "1f482-1f3fe",
      "1f482-1f3ff"
    ]
  },
  {
    n: [
      "male-guard"
    ],
    u: "1f482-200d-2642-fe0f",
    v: [
      "1f482-1f3fb-200d-2642-fe0f",
      "1f482-1f3fc-200d-2642-fe0f",
      "1f482-1f3fd-200d-2642-fe0f",
      "1f482-1f3fe-200d-2642-fe0f",
      "1f482-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "female-guard"
    ],
    u: "1f482-200d-2640-fe0f",
    v: [
      "1f482-1f3fb-200d-2640-fe0f",
      "1f482-1f3fc-200d-2640-fe0f",
      "1f482-1f3fd-200d-2640-fe0f",
      "1f482-1f3fe-200d-2640-fe0f",
      "1f482-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "construction worker",
      "construction_worker"
    ],
    u: "1f477",
    v: [
      "1f477-1f3fb",
      "1f477-1f3fc",
      "1f477-1f3fd",
      "1f477-1f3fe",
      "1f477-1f3ff"
    ]
  },
  {
    n: [
      "male-construction-worker"
    ],
    u: "1f477-200d-2642-fe0f",
    v: [
      "1f477-1f3fb-200d-2642-fe0f",
      "1f477-1f3fc-200d-2642-fe0f",
      "1f477-1f3fd-200d-2642-fe0f",
      "1f477-1f3fe-200d-2642-fe0f",
      "1f477-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "female-construction-worker"
    ],
    u: "1f477-200d-2640-fe0f",
    v: [
      "1f477-1f3fb-200d-2640-fe0f",
      "1f477-1f3fc-200d-2640-fe0f",
      "1f477-1f3fd-200d-2640-fe0f",
      "1f477-1f3fe-200d-2640-fe0f",
      "1f477-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "prince"
    ],
    u: "1f934",
    v: [
      "1f934-1f3fb",
      "1f934-1f3fc",
      "1f934-1f3fd",
      "1f934-1f3fe",
      "1f934-1f3ff"
    ]
  },
  {
    n: [
      "princess"
    ],
    u: "1f478",
    v: [
      "1f478-1f3fb",
      "1f478-1f3fc",
      "1f478-1f3fd",
      "1f478-1f3fe",
      "1f478-1f3ff"
    ]
  },
  {
    n: [
      "man with turban",
      "man_with_turban"
    ],
    u: "1f473",
    v: [
      "1f473-1f3fb",
      "1f473-1f3fc",
      "1f473-1f3fd",
      "1f473-1f3fe",
      "1f473-1f3ff"
    ]
  },
  {
    n: [
      "man-wearing-turban"
    ],
    u: "1f473-200d-2642-fe0f",
    v: [
      "1f473-1f3fb-200d-2642-fe0f",
      "1f473-1f3fc-200d-2642-fe0f",
      "1f473-1f3fd-200d-2642-fe0f",
      "1f473-1f3fe-200d-2642-fe0f",
      "1f473-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-wearing-turban"
    ],
    u: "1f473-200d-2640-fe0f",
    v: [
      "1f473-1f3fb-200d-2640-fe0f",
      "1f473-1f3fc-200d-2640-fe0f",
      "1f473-1f3fd-200d-2640-fe0f",
      "1f473-1f3fe-200d-2640-fe0f",
      "1f473-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "man with gua pi mao",
      "man_with_gua_pi_mao"
    ],
    u: "1f472",
    v: [
      "1f472-1f3fb",
      "1f472-1f3fc",
      "1f472-1f3fd",
      "1f472-1f3fe",
      "1f472-1f3ff"
    ]
  },
  {
    n: [
      "person with headscarf",
      "person_with_headscarf"
    ],
    u: "1f9d5",
    v: [
      "1f9d5-1f3fb",
      "1f9d5-1f3fc",
      "1f9d5-1f3fd",
      "1f9d5-1f3fe",
      "1f9d5-1f3ff"
    ]
  },
  {
    n: [
      "bearded person",
      "bearded_person"
    ],
    u: "1f9d4",
    v: [
      "1f9d4-1f3fb",
      "1f9d4-1f3fc",
      "1f9d4-1f3fd",
      "1f9d4-1f3fe",
      "1f9d4-1f3ff"
    ]
  },
  {
    n: [
      "person with blond hair",
      "person_with_blond_hair"
    ],
    u: "1f471",
    v: [
      "1f471-1f3fb",
      "1f471-1f3fc",
      "1f471-1f3fd",
      "1f471-1f3fe",
      "1f471-1f3ff"
    ]
  },
  {
    n: [
      "blond-haired-man"
    ],
    u: "1f471-200d-2642-fe0f",
    v: [
      "1f471-1f3fb-200d-2642-fe0f",
      "1f471-1f3fc-200d-2642-fe0f",
      "1f471-1f3fd-200d-2642-fe0f",
      "1f471-1f3fe-200d-2642-fe0f",
      "1f471-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "blond-haired-woman"
    ],
    u: "1f471-200d-2640-fe0f",
    v: [
      "1f471-1f3fb-200d-2640-fe0f",
      "1f471-1f3fc-200d-2640-fe0f",
      "1f471-1f3fd-200d-2640-fe0f",
      "1f471-1f3fe-200d-2640-fe0f",
      "1f471-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "man in tuxedo",
      "man_in_tuxedo"
    ],
    u: "1f935",
    v: [
      "1f935-1f3fb",
      "1f935-1f3fc",
      "1f935-1f3fd",
      "1f935-1f3fe",
      "1f935-1f3ff"
    ]
  },
  {
    n: [
      "bride with veil",
      "bride_with_veil"
    ],
    u: "1f470",
    v: [
      "1f470-1f3fb",
      "1f470-1f3fc",
      "1f470-1f3fd",
      "1f470-1f3fe",
      "1f470-1f3ff"
    ]
  },
  {
    n: [
      "pregnant woman",
      "pregnant_woman"
    ],
    u: "1f930",
    v: [
      "1f930-1f3fb",
      "1f930-1f3fc",
      "1f930-1f3fd",
      "1f930-1f3fe",
      "1f930-1f3ff"
    ]
  },
  {
    n: [
      "breast-feeding"
    ],
    u: "1f931",
    v: [
      "1f931-1f3fb",
      "1f931-1f3fc",
      "1f931-1f3fd",
      "1f931-1f3fe",
      "1f931-1f3ff"
    ]
  },
  {
    n: [
      "baby angel",
      "angel"
    ],
    u: "1f47c",
    v: [
      "1f47c-1f3fb",
      "1f47c-1f3fc",
      "1f47c-1f3fd",
      "1f47c-1f3fe",
      "1f47c-1f3ff"
    ]
  },
  {
    n: [
      "father christmas",
      "santa"
    ],
    u: "1f385",
    v: [
      "1f385-1f3fb",
      "1f385-1f3fc",
      "1f385-1f3fd",
      "1f385-1f3fe",
      "1f385-1f3ff"
    ]
  },
  {
    n: [
      "mother christmas",
      "mrs_claus",
      "mother_christmas"
    ],
    u: "1f936",
    v: [
      "1f936-1f3fb",
      "1f936-1f3fc",
      "1f936-1f3fd",
      "1f936-1f3fe",
      "1f936-1f3ff"
    ]
  },
  {
    n: [
      "mage"
    ],
    u: "1f9d9",
    v: [
      "1f9d9-1f3fb",
      "1f9d9-1f3fc",
      "1f9d9-1f3fd",
      "1f9d9-1f3fe",
      "1f9d9-1f3ff"
    ]
  },
  {
    n: [
      "female_mage"
    ],
    u: "1f9d9-200d-2640-fe0f",
    v: [
      "1f9d9-1f3fb-200d-2640-fe0f",
      "1f9d9-1f3fc-200d-2640-fe0f",
      "1f9d9-1f3fd-200d-2640-fe0f",
      "1f9d9-1f3fe-200d-2640-fe0f",
      "1f9d9-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "male_mage"
    ],
    u: "1f9d9-200d-2642-fe0f",
    v: [
      "1f9d9-1f3fb-200d-2642-fe0f",
      "1f9d9-1f3fc-200d-2642-fe0f",
      "1f9d9-1f3fd-200d-2642-fe0f",
      "1f9d9-1f3fe-200d-2642-fe0f",
      "1f9d9-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "fairy"
    ],
    u: "1f9da",
    v: [
      "1f9da-1f3fb",
      "1f9da-1f3fc",
      "1f9da-1f3fd",
      "1f9da-1f3fe",
      "1f9da-1f3ff"
    ]
  },
  {
    n: [
      "female_fairy"
    ],
    u: "1f9da-200d-2640-fe0f",
    v: [
      "1f9da-1f3fb-200d-2640-fe0f",
      "1f9da-1f3fc-200d-2640-fe0f",
      "1f9da-1f3fd-200d-2640-fe0f",
      "1f9da-1f3fe-200d-2640-fe0f",
      "1f9da-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "male_fairy"
    ],
    u: "1f9da-200d-2642-fe0f",
    v: [
      "1f9da-1f3fb-200d-2642-fe0f",
      "1f9da-1f3fc-200d-2642-fe0f",
      "1f9da-1f3fd-200d-2642-fe0f",
      "1f9da-1f3fe-200d-2642-fe0f",
      "1f9da-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "vampire"
    ],
    u: "1f9db",
    v: [
      "1f9db-1f3fb",
      "1f9db-1f3fc",
      "1f9db-1f3fd",
      "1f9db-1f3fe",
      "1f9db-1f3ff"
    ]
  },
  {
    n: [
      "female_vampire"
    ],
    u: "1f9db-200d-2640-fe0f",
    v: [
      "1f9db-1f3fb-200d-2640-fe0f",
      "1f9db-1f3fc-200d-2640-fe0f",
      "1f9db-1f3fd-200d-2640-fe0f",
      "1f9db-1f3fe-200d-2640-fe0f",
      "1f9db-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "male_vampire"
    ],
    u: "1f9db-200d-2642-fe0f",
    v: [
      "1f9db-1f3fb-200d-2642-fe0f",
      "1f9db-1f3fc-200d-2642-fe0f",
      "1f9db-1f3fd-200d-2642-fe0f",
      "1f9db-1f3fe-200d-2642-fe0f",
      "1f9db-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "merperson"
    ],
    u: "1f9dc",
    v: [
      "1f9dc-1f3fb",
      "1f9dc-1f3fc",
      "1f9dc-1f3fd",
      "1f9dc-1f3fe",
      "1f9dc-1f3ff"
    ]
  },
  {
    n: [
      "mermaid"
    ],
    u: "1f9dc-200d-2640-fe0f",
    v: [
      "1f9dc-1f3fb-200d-2640-fe0f",
      "1f9dc-1f3fc-200d-2640-fe0f",
      "1f9dc-1f3fd-200d-2640-fe0f",
      "1f9dc-1f3fe-200d-2640-fe0f",
      "1f9dc-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "merman"
    ],
    u: "1f9dc-200d-2642-fe0f",
    v: [
      "1f9dc-1f3fb-200d-2642-fe0f",
      "1f9dc-1f3fc-200d-2642-fe0f",
      "1f9dc-1f3fd-200d-2642-fe0f",
      "1f9dc-1f3fe-200d-2642-fe0f",
      "1f9dc-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "elf"
    ],
    u: "1f9dd",
    v: [
      "1f9dd-1f3fb",
      "1f9dd-1f3fc",
      "1f9dd-1f3fd",
      "1f9dd-1f3fe",
      "1f9dd-1f3ff"
    ]
  },
  {
    n: [
      "female_elf"
    ],
    u: "1f9dd-200d-2640-fe0f",
    v: [
      "1f9dd-1f3fb-200d-2640-fe0f",
      "1f9dd-1f3fc-200d-2640-fe0f",
      "1f9dd-1f3fd-200d-2640-fe0f",
      "1f9dd-1f3fe-200d-2640-fe0f",
      "1f9dd-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "male_elf"
    ],
    u: "1f9dd-200d-2642-fe0f",
    v: [
      "1f9dd-1f3fb-200d-2642-fe0f",
      "1f9dd-1f3fc-200d-2642-fe0f",
      "1f9dd-1f3fd-200d-2642-fe0f",
      "1f9dd-1f3fe-200d-2642-fe0f",
      "1f9dd-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "genie"
    ],
    u: "1f9de"
  },
  {
    n: [
      "female_genie"
    ],
    u: "1f9de-200d-2640-fe0f"
  },
  {
    n: [
      "male_genie"
    ],
    u: "1f9de-200d-2642-fe0f"
  },
  {
    n: [
      "zombie"
    ],
    u: "1f9df"
  },
  {
    n: [
      "female_zombie"
    ],
    u: "1f9df-200d-2640-fe0f"
  },
  {
    n: [
      "male_zombie"
    ],
    u: "1f9df-200d-2642-fe0f"
  },
  {
    n: [
      "person frowning",
      "person_frowning"
    ],
    u: "1f64d",
    v: [
      "1f64d-1f3fb",
      "1f64d-1f3fc",
      "1f64d-1f3fd",
      "1f64d-1f3fe",
      "1f64d-1f3ff"
    ]
  },
  {
    n: [
      "man-frowning"
    ],
    u: "1f64d-200d-2642-fe0f",
    v: [
      "1f64d-1f3fb-200d-2642-fe0f",
      "1f64d-1f3fc-200d-2642-fe0f",
      "1f64d-1f3fd-200d-2642-fe0f",
      "1f64d-1f3fe-200d-2642-fe0f",
      "1f64d-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-frowning"
    ],
    u: "1f64d-200d-2640-fe0f",
    v: [
      "1f64d-1f3fb-200d-2640-fe0f",
      "1f64d-1f3fc-200d-2640-fe0f",
      "1f64d-1f3fd-200d-2640-fe0f",
      "1f64d-1f3fe-200d-2640-fe0f",
      "1f64d-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "person with pouting face",
      "person_with_pouting_face"
    ],
    u: "1f64e",
    v: [
      "1f64e-1f3fb",
      "1f64e-1f3fc",
      "1f64e-1f3fd",
      "1f64e-1f3fe",
      "1f64e-1f3ff"
    ]
  },
  {
    n: [
      "man-pouting"
    ],
    u: "1f64e-200d-2642-fe0f",
    v: [
      "1f64e-1f3fb-200d-2642-fe0f",
      "1f64e-1f3fc-200d-2642-fe0f",
      "1f64e-1f3fd-200d-2642-fe0f",
      "1f64e-1f3fe-200d-2642-fe0f",
      "1f64e-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-pouting"
    ],
    u: "1f64e-200d-2640-fe0f",
    v: [
      "1f64e-1f3fb-200d-2640-fe0f",
      "1f64e-1f3fc-200d-2640-fe0f",
      "1f64e-1f3fd-200d-2640-fe0f",
      "1f64e-1f3fe-200d-2640-fe0f",
      "1f64e-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "face with no good gesture",
      "no_good"
    ],
    u: "1f645",
    v: [
      "1f645-1f3fb",
      "1f645-1f3fc",
      "1f645-1f3fd",
      "1f645-1f3fe",
      "1f645-1f3ff"
    ]
  },
  {
    n: [
      "man-gesturing-no"
    ],
    u: "1f645-200d-2642-fe0f",
    v: [
      "1f645-1f3fb-200d-2642-fe0f",
      "1f645-1f3fc-200d-2642-fe0f",
      "1f645-1f3fd-200d-2642-fe0f",
      "1f645-1f3fe-200d-2642-fe0f",
      "1f645-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-gesturing-no"
    ],
    u: "1f645-200d-2640-fe0f",
    v: [
      "1f645-1f3fb-200d-2640-fe0f",
      "1f645-1f3fc-200d-2640-fe0f",
      "1f645-1f3fd-200d-2640-fe0f",
      "1f645-1f3fe-200d-2640-fe0f",
      "1f645-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "face with ok gesture",
      "ok_woman"
    ],
    u: "1f646",
    v: [
      "1f646-1f3fb",
      "1f646-1f3fc",
      "1f646-1f3fd",
      "1f646-1f3fe",
      "1f646-1f3ff"
    ]
  },
  {
    n: [
      "man-gesturing-ok"
    ],
    u: "1f646-200d-2642-fe0f",
    v: [
      "1f646-1f3fb-200d-2642-fe0f",
      "1f646-1f3fc-200d-2642-fe0f",
      "1f646-1f3fd-200d-2642-fe0f",
      "1f646-1f3fe-200d-2642-fe0f",
      "1f646-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-gesturing-ok"
    ],
    u: "1f646-200d-2640-fe0f",
    v: [
      "1f646-1f3fb-200d-2640-fe0f",
      "1f646-1f3fc-200d-2640-fe0f",
      "1f646-1f3fd-200d-2640-fe0f",
      "1f646-1f3fe-200d-2640-fe0f",
      "1f646-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "information desk person",
      "information_desk_person"
    ],
    u: "1f481",
    v: [
      "1f481-1f3fb",
      "1f481-1f3fc",
      "1f481-1f3fd",
      "1f481-1f3fe",
      "1f481-1f3ff"
    ]
  },
  {
    n: [
      "man-tipping-hand"
    ],
    u: "1f481-200d-2642-fe0f",
    v: [
      "1f481-1f3fb-200d-2642-fe0f",
      "1f481-1f3fc-200d-2642-fe0f",
      "1f481-1f3fd-200d-2642-fe0f",
      "1f481-1f3fe-200d-2642-fe0f",
      "1f481-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-tipping-hand"
    ],
    u: "1f481-200d-2640-fe0f",
    v: [
      "1f481-1f3fb-200d-2640-fe0f",
      "1f481-1f3fc-200d-2640-fe0f",
      "1f481-1f3fd-200d-2640-fe0f",
      "1f481-1f3fe-200d-2640-fe0f",
      "1f481-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "happy person raising one hand",
      "raising_hand"
    ],
    u: "1f64b",
    v: [
      "1f64b-1f3fb",
      "1f64b-1f3fc",
      "1f64b-1f3fd",
      "1f64b-1f3fe",
      "1f64b-1f3ff"
    ]
  },
  {
    n: [
      "man-raising-hand"
    ],
    u: "1f64b-200d-2642-fe0f",
    v: [
      "1f64b-1f3fb-200d-2642-fe0f",
      "1f64b-1f3fc-200d-2642-fe0f",
      "1f64b-1f3fd-200d-2642-fe0f",
      "1f64b-1f3fe-200d-2642-fe0f",
      "1f64b-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-raising-hand"
    ],
    u: "1f64b-200d-2640-fe0f",
    v: [
      "1f64b-1f3fb-200d-2640-fe0f",
      "1f64b-1f3fc-200d-2640-fe0f",
      "1f64b-1f3fd-200d-2640-fe0f",
      "1f64b-1f3fe-200d-2640-fe0f",
      "1f64b-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "person bowing deeply",
      "bow"
    ],
    u: "1f647",
    v: [
      "1f647-1f3fb",
      "1f647-1f3fc",
      "1f647-1f3fd",
      "1f647-1f3fe",
      "1f647-1f3ff"
    ]
  },
  {
    n: [
      "man-bowing"
    ],
    u: "1f647-200d-2642-fe0f",
    v: [
      "1f647-1f3fb-200d-2642-fe0f",
      "1f647-1f3fc-200d-2642-fe0f",
      "1f647-1f3fd-200d-2642-fe0f",
      "1f647-1f3fe-200d-2642-fe0f",
      "1f647-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-bowing"
    ],
    u: "1f647-200d-2640-fe0f",
    v: [
      "1f647-1f3fb-200d-2640-fe0f",
      "1f647-1f3fc-200d-2640-fe0f",
      "1f647-1f3fd-200d-2640-fe0f",
      "1f647-1f3fe-200d-2640-fe0f",
      "1f647-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "face palm",
      "face_palm"
    ],
    u: "1f926",
    v: [
      "1f926-1f3fb",
      "1f926-1f3fc",
      "1f926-1f3fd",
      "1f926-1f3fe",
      "1f926-1f3ff"
    ]
  },
  {
    n: [
      "man-facepalming"
    ],
    u: "1f926-200d-2642-fe0f",
    v: [
      "1f926-1f3fb-200d-2642-fe0f",
      "1f926-1f3fc-200d-2642-fe0f",
      "1f926-1f3fd-200d-2642-fe0f",
      "1f926-1f3fe-200d-2642-fe0f",
      "1f926-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-facepalming"
    ],
    u: "1f926-200d-2640-fe0f",
    v: [
      "1f926-1f3fb-200d-2640-fe0f",
      "1f926-1f3fc-200d-2640-fe0f",
      "1f926-1f3fd-200d-2640-fe0f",
      "1f926-1f3fe-200d-2640-fe0f",
      "1f926-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "shrug"
    ],
    u: "1f937",
    v: [
      "1f937-1f3fb",
      "1f937-1f3fc",
      "1f937-1f3fd",
      "1f937-1f3fe",
      "1f937-1f3ff"
    ]
  },
  {
    n: [
      "man-shrugging"
    ],
    u: "1f937-200d-2642-fe0f",
    v: [
      "1f937-1f3fb-200d-2642-fe0f",
      "1f937-1f3fc-200d-2642-fe0f",
      "1f937-1f3fd-200d-2642-fe0f",
      "1f937-1f3fe-200d-2642-fe0f",
      "1f937-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-shrugging"
    ],
    u: "1f937-200d-2640-fe0f",
    v: [
      "1f937-1f3fb-200d-2640-fe0f",
      "1f937-1f3fc-200d-2640-fe0f",
      "1f937-1f3fd-200d-2640-fe0f",
      "1f937-1f3fe-200d-2640-fe0f",
      "1f937-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "face massage",
      "massage"
    ],
    u: "1f486",
    v: [
      "1f486-1f3fb",
      "1f486-1f3fc",
      "1f486-1f3fd",
      "1f486-1f3fe",
      "1f486-1f3ff"
    ]
  },
  {
    n: [
      "man-getting-massage"
    ],
    u: "1f486-200d-2642-fe0f",
    v: [
      "1f486-1f3fb-200d-2642-fe0f",
      "1f486-1f3fc-200d-2642-fe0f",
      "1f486-1f3fd-200d-2642-fe0f",
      "1f486-1f3fe-200d-2642-fe0f",
      "1f486-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-getting-massage"
    ],
    u: "1f486-200d-2640-fe0f",
    v: [
      "1f486-1f3fb-200d-2640-fe0f",
      "1f486-1f3fc-200d-2640-fe0f",
      "1f486-1f3fd-200d-2640-fe0f",
      "1f486-1f3fe-200d-2640-fe0f",
      "1f486-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "haircut"
    ],
    u: "1f487",
    v: [
      "1f487-1f3fb",
      "1f487-1f3fc",
      "1f487-1f3fd",
      "1f487-1f3fe",
      "1f487-1f3ff"
    ]
  },
  {
    n: [
      "man-getting-haircut"
    ],
    u: "1f487-200d-2642-fe0f",
    v: [
      "1f487-1f3fb-200d-2642-fe0f",
      "1f487-1f3fc-200d-2642-fe0f",
      "1f487-1f3fd-200d-2642-fe0f",
      "1f487-1f3fe-200d-2642-fe0f",
      "1f487-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-getting-haircut"
    ],
    u: "1f487-200d-2640-fe0f",
    v: [
      "1f487-1f3fb-200d-2640-fe0f",
      "1f487-1f3fc-200d-2640-fe0f",
      "1f487-1f3fd-200d-2640-fe0f",
      "1f487-1f3fe-200d-2640-fe0f",
      "1f487-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "pedestrian",
      "walking"
    ],
    u: "1f6b6",
    v: [
      "1f6b6-1f3fb",
      "1f6b6-1f3fc",
      "1f6b6-1f3fd",
      "1f6b6-1f3fe",
      "1f6b6-1f3ff"
    ]
  },
  {
    n: [
      "man-walking"
    ],
    u: "1f6b6-200d-2642-fe0f",
    v: [
      "1f6b6-1f3fb-200d-2642-fe0f",
      "1f6b6-1f3fc-200d-2642-fe0f",
      "1f6b6-1f3fd-200d-2642-fe0f",
      "1f6b6-1f3fe-200d-2642-fe0f",
      "1f6b6-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-walking"
    ],
    u: "1f6b6-200d-2640-fe0f",
    v: [
      "1f6b6-1f3fb-200d-2640-fe0f",
      "1f6b6-1f3fc-200d-2640-fe0f",
      "1f6b6-1f3fd-200d-2640-fe0f",
      "1f6b6-1f3fe-200d-2640-fe0f",
      "1f6b6-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "runner",
      "running"
    ],
    u: "1f3c3",
    v: [
      "1f3c3-1f3fb",
      "1f3c3-1f3fc",
      "1f3c3-1f3fd",
      "1f3c3-1f3fe",
      "1f3c3-1f3ff"
    ]
  },
  {
    n: [
      "man-running"
    ],
    u: "1f3c3-200d-2642-fe0f",
    v: [
      "1f3c3-1f3fb-200d-2642-fe0f",
      "1f3c3-1f3fc-200d-2642-fe0f",
      "1f3c3-1f3fd-200d-2642-fe0f",
      "1f3c3-1f3fe-200d-2642-fe0f",
      "1f3c3-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-running"
    ],
    u: "1f3c3-200d-2640-fe0f",
    v: [
      "1f3c3-1f3fb-200d-2640-fe0f",
      "1f3c3-1f3fc-200d-2640-fe0f",
      "1f3c3-1f3fd-200d-2640-fe0f",
      "1f3c3-1f3fe-200d-2640-fe0f",
      "1f3c3-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "dancer"
    ],
    u: "1f483",
    v: [
      "1f483-1f3fb",
      "1f483-1f3fc",
      "1f483-1f3fd",
      "1f483-1f3fe",
      "1f483-1f3ff"
    ]
  },
  {
    n: [
      "man dancing",
      "man_dancing"
    ],
    u: "1f57a",
    v: [
      "1f57a-1f3fb",
      "1f57a-1f3fc",
      "1f57a-1f3fd",
      "1f57a-1f3fe",
      "1f57a-1f3ff"
    ]
  },
  {
    n: [
      "woman with bunny ears",
      "dancers"
    ],
    u: "1f46f"
  },
  {
    n: [
      "man-with-bunny-ears-partying"
    ],
    u: "1f46f-200d-2642-fe0f"
  },
  {
    n: [
      "woman-with-bunny-ears-partying"
    ],
    u: "1f46f-200d-2640-fe0f"
  },
  {
    n: [
      "person in steamy room",
      "person_in_steamy_room"
    ],
    u: "1f9d6",
    v: [
      "1f9d6-1f3fb",
      "1f9d6-1f3fc",
      "1f9d6-1f3fd",
      "1f9d6-1f3fe",
      "1f9d6-1f3ff"
    ]
  },
  {
    n: [
      "woman_in_steamy_room"
    ],
    u: "1f9d6-200d-2640-fe0f",
    v: [
      "1f9d6-1f3fb-200d-2640-fe0f",
      "1f9d6-1f3fc-200d-2640-fe0f",
      "1f9d6-1f3fd-200d-2640-fe0f",
      "1f9d6-1f3fe-200d-2640-fe0f",
      "1f9d6-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "man_in_steamy_room"
    ],
    u: "1f9d6-200d-2642-fe0f",
    v: [
      "1f9d6-1f3fb-200d-2642-fe0f",
      "1f9d6-1f3fc-200d-2642-fe0f",
      "1f9d6-1f3fd-200d-2642-fe0f",
      "1f9d6-1f3fe-200d-2642-fe0f",
      "1f9d6-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "person climbing",
      "person_climbing"
    ],
    u: "1f9d7",
    v: [
      "1f9d7-1f3fb",
      "1f9d7-1f3fc",
      "1f9d7-1f3fd",
      "1f9d7-1f3fe",
      "1f9d7-1f3ff"
    ]
  },
  {
    n: [
      "woman_climbing"
    ],
    u: "1f9d7-200d-2640-fe0f",
    v: [
      "1f9d7-1f3fb-200d-2640-fe0f",
      "1f9d7-1f3fc-200d-2640-fe0f",
      "1f9d7-1f3fd-200d-2640-fe0f",
      "1f9d7-1f3fe-200d-2640-fe0f",
      "1f9d7-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "man_climbing"
    ],
    u: "1f9d7-200d-2642-fe0f",
    v: [
      "1f9d7-1f3fb-200d-2642-fe0f",
      "1f9d7-1f3fc-200d-2642-fe0f",
      "1f9d7-1f3fd-200d-2642-fe0f",
      "1f9d7-1f3fe-200d-2642-fe0f",
      "1f9d7-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "person in lotus position",
      "person_in_lotus_position"
    ],
    u: "1f9d8",
    v: [
      "1f9d8-1f3fb",
      "1f9d8-1f3fc",
      "1f9d8-1f3fd",
      "1f9d8-1f3fe",
      "1f9d8-1f3ff"
    ]
  },
  {
    n: [
      "woman_in_lotus_position"
    ],
    u: "1f9d8-200d-2640-fe0f",
    v: [
      "1f9d8-1f3fb-200d-2640-fe0f",
      "1f9d8-1f3fc-200d-2640-fe0f",
      "1f9d8-1f3fd-200d-2640-fe0f",
      "1f9d8-1f3fe-200d-2640-fe0f",
      "1f9d8-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "man_in_lotus_position"
    ],
    u: "1f9d8-200d-2642-fe0f",
    v: [
      "1f9d8-1f3fb-200d-2642-fe0f",
      "1f9d8-1f3fc-200d-2642-fe0f",
      "1f9d8-1f3fd-200d-2642-fe0f",
      "1f9d8-1f3fe-200d-2642-fe0f",
      "1f9d8-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "bath"
    ],
    u: "1f6c0",
    v: [
      "1f6c0-1f3fb",
      "1f6c0-1f3fc",
      "1f6c0-1f3fd",
      "1f6c0-1f3fe",
      "1f6c0-1f3ff"
    ]
  },
  {
    n: [
      "sleeping accommodation",
      "sleeping_accommodation"
    ],
    u: "1f6cc",
    v: [
      "1f6cc-1f3fb",
      "1f6cc-1f3fc",
      "1f6cc-1f3fd",
      "1f6cc-1f3fe",
      "1f6cc-1f3ff"
    ]
  },
  {
    n: [
      "man_in_business_suit_levitating"
    ],
    u: "1f574-fe0f",
    v: [
      "1f574-1f3fb",
      "1f574-1f3fc",
      "1f574-1f3fd",
      "1f574-1f3fe",
      "1f574-1f3ff"
    ]
  },
  {
    n: [
      "speaking_head_in_silhouette"
    ],
    u: "1f5e3-fe0f"
  },
  {
    n: [
      "bust in silhouette",
      "bust_in_silhouette"
    ],
    u: "1f464"
  },
  {
    n: [
      "busts in silhouette",
      "busts_in_silhouette"
    ],
    u: "1f465"
  },
  {
    n: [
      "fencer"
    ],
    u: "1f93a"
  },
  {
    n: [
      "horse racing",
      "horse_racing"
    ],
    u: "1f3c7",
    v: [
      "1f3c7-1f3fb",
      "1f3c7-1f3fc",
      "1f3c7-1f3fd",
      "1f3c7-1f3fe",
      "1f3c7-1f3ff"
    ]
  },
  {
    n: [
      "skier"
    ],
    u: "26f7-fe0f"
  },
  {
    n: [
      "snowboarder"
    ],
    u: "1f3c2",
    v: [
      "1f3c2-1f3fb",
      "1f3c2-1f3fc",
      "1f3c2-1f3fd",
      "1f3c2-1f3fe",
      "1f3c2-1f3ff"
    ]
  },
  {
    n: [
      "golfer"
    ],
    u: "1f3cc-fe0f",
    v: [
      "1f3cc-1f3fb",
      "1f3cc-1f3fc",
      "1f3cc-1f3fd",
      "1f3cc-1f3fe",
      "1f3cc-1f3ff"
    ]
  },
  {
    n: [
      "man-golfing"
    ],
    u: "1f3cc-fe0f-200d-2642-fe0f",
    v: [
      "1f3cc-1f3fb-200d-2642-fe0f",
      "1f3cc-1f3fc-200d-2642-fe0f",
      "1f3cc-1f3fd-200d-2642-fe0f",
      "1f3cc-1f3fe-200d-2642-fe0f",
      "1f3cc-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-golfing"
    ],
    u: "1f3cc-fe0f-200d-2640-fe0f",
    v: [
      "1f3cc-1f3fb-200d-2640-fe0f",
      "1f3cc-1f3fc-200d-2640-fe0f",
      "1f3cc-1f3fd-200d-2640-fe0f",
      "1f3cc-1f3fe-200d-2640-fe0f",
      "1f3cc-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "surfer"
    ],
    u: "1f3c4",
    v: [
      "1f3c4-1f3fb",
      "1f3c4-1f3fc",
      "1f3c4-1f3fd",
      "1f3c4-1f3fe",
      "1f3c4-1f3ff"
    ]
  },
  {
    n: [
      "man-surfing"
    ],
    u: "1f3c4-200d-2642-fe0f",
    v: [
      "1f3c4-1f3fb-200d-2642-fe0f",
      "1f3c4-1f3fc-200d-2642-fe0f",
      "1f3c4-1f3fd-200d-2642-fe0f",
      "1f3c4-1f3fe-200d-2642-fe0f",
      "1f3c4-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-surfing"
    ],
    u: "1f3c4-200d-2640-fe0f",
    v: [
      "1f3c4-1f3fb-200d-2640-fe0f",
      "1f3c4-1f3fc-200d-2640-fe0f",
      "1f3c4-1f3fd-200d-2640-fe0f",
      "1f3c4-1f3fe-200d-2640-fe0f",
      "1f3c4-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "rowboat"
    ],
    u: "1f6a3",
    v: [
      "1f6a3-1f3fb",
      "1f6a3-1f3fc",
      "1f6a3-1f3fd",
      "1f6a3-1f3fe",
      "1f6a3-1f3ff"
    ]
  },
  {
    n: [
      "man-rowing-boat"
    ],
    u: "1f6a3-200d-2642-fe0f",
    v: [
      "1f6a3-1f3fb-200d-2642-fe0f",
      "1f6a3-1f3fc-200d-2642-fe0f",
      "1f6a3-1f3fd-200d-2642-fe0f",
      "1f6a3-1f3fe-200d-2642-fe0f",
      "1f6a3-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-rowing-boat"
    ],
    u: "1f6a3-200d-2640-fe0f",
    v: [
      "1f6a3-1f3fb-200d-2640-fe0f",
      "1f6a3-1f3fc-200d-2640-fe0f",
      "1f6a3-1f3fd-200d-2640-fe0f",
      "1f6a3-1f3fe-200d-2640-fe0f",
      "1f6a3-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "swimmer"
    ],
    u: "1f3ca",
    v: [
      "1f3ca-1f3fb",
      "1f3ca-1f3fc",
      "1f3ca-1f3fd",
      "1f3ca-1f3fe",
      "1f3ca-1f3ff"
    ]
  },
  {
    n: [
      "man-swimming"
    ],
    u: "1f3ca-200d-2642-fe0f",
    v: [
      "1f3ca-1f3fb-200d-2642-fe0f",
      "1f3ca-1f3fc-200d-2642-fe0f",
      "1f3ca-1f3fd-200d-2642-fe0f",
      "1f3ca-1f3fe-200d-2642-fe0f",
      "1f3ca-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-swimming"
    ],
    u: "1f3ca-200d-2640-fe0f",
    v: [
      "1f3ca-1f3fb-200d-2640-fe0f",
      "1f3ca-1f3fc-200d-2640-fe0f",
      "1f3ca-1f3fd-200d-2640-fe0f",
      "1f3ca-1f3fe-200d-2640-fe0f",
      "1f3ca-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "person_with_ball"
    ],
    u: "26f9-fe0f",
    v: [
      "26f9-1f3fb",
      "26f9-1f3fc",
      "26f9-1f3fd",
      "26f9-1f3fe",
      "26f9-1f3ff"
    ]
  },
  {
    n: [
      "man-bouncing-ball"
    ],
    u: "26f9-fe0f-200d-2642-fe0f",
    v: [
      "26f9-1f3fb-200d-2642-fe0f",
      "26f9-1f3fc-200d-2642-fe0f",
      "26f9-1f3fd-200d-2642-fe0f",
      "26f9-1f3fe-200d-2642-fe0f",
      "26f9-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-bouncing-ball"
    ],
    u: "26f9-fe0f-200d-2640-fe0f",
    v: [
      "26f9-1f3fb-200d-2640-fe0f",
      "26f9-1f3fc-200d-2640-fe0f",
      "26f9-1f3fd-200d-2640-fe0f",
      "26f9-1f3fe-200d-2640-fe0f",
      "26f9-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "weight_lifter"
    ],
    u: "1f3cb-fe0f",
    v: [
      "1f3cb-1f3fb",
      "1f3cb-1f3fc",
      "1f3cb-1f3fd",
      "1f3cb-1f3fe",
      "1f3cb-1f3ff"
    ]
  },
  {
    n: [
      "man-lifting-weights"
    ],
    u: "1f3cb-fe0f-200d-2642-fe0f",
    v: [
      "1f3cb-1f3fb-200d-2642-fe0f",
      "1f3cb-1f3fc-200d-2642-fe0f",
      "1f3cb-1f3fd-200d-2642-fe0f",
      "1f3cb-1f3fe-200d-2642-fe0f",
      "1f3cb-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-lifting-weights"
    ],
    u: "1f3cb-fe0f-200d-2640-fe0f",
    v: [
      "1f3cb-1f3fb-200d-2640-fe0f",
      "1f3cb-1f3fc-200d-2640-fe0f",
      "1f3cb-1f3fd-200d-2640-fe0f",
      "1f3cb-1f3fe-200d-2640-fe0f",
      "1f3cb-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "bicyclist"
    ],
    u: "1f6b4",
    v: [
      "1f6b4-1f3fb",
      "1f6b4-1f3fc",
      "1f6b4-1f3fd",
      "1f6b4-1f3fe",
      "1f6b4-1f3ff"
    ]
  },
  {
    n: [
      "man-biking"
    ],
    u: "1f6b4-200d-2642-fe0f",
    v: [
      "1f6b4-1f3fb-200d-2642-fe0f",
      "1f6b4-1f3fc-200d-2642-fe0f",
      "1f6b4-1f3fd-200d-2642-fe0f",
      "1f6b4-1f3fe-200d-2642-fe0f",
      "1f6b4-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-biking"
    ],
    u: "1f6b4-200d-2640-fe0f",
    v: [
      "1f6b4-1f3fb-200d-2640-fe0f",
      "1f6b4-1f3fc-200d-2640-fe0f",
      "1f6b4-1f3fd-200d-2640-fe0f",
      "1f6b4-1f3fe-200d-2640-fe0f",
      "1f6b4-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "mountain bicyclist",
      "mountain_bicyclist"
    ],
    u: "1f6b5",
    v: [
      "1f6b5-1f3fb",
      "1f6b5-1f3fc",
      "1f6b5-1f3fd",
      "1f6b5-1f3fe",
      "1f6b5-1f3ff"
    ]
  },
  {
    n: [
      "man-mountain-biking"
    ],
    u: "1f6b5-200d-2642-fe0f",
    v: [
      "1f6b5-1f3fb-200d-2642-fe0f",
      "1f6b5-1f3fc-200d-2642-fe0f",
      "1f6b5-1f3fd-200d-2642-fe0f",
      "1f6b5-1f3fe-200d-2642-fe0f",
      "1f6b5-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-mountain-biking"
    ],
    u: "1f6b5-200d-2640-fe0f",
    v: [
      "1f6b5-1f3fb-200d-2640-fe0f",
      "1f6b5-1f3fc-200d-2640-fe0f",
      "1f6b5-1f3fd-200d-2640-fe0f",
      "1f6b5-1f3fe-200d-2640-fe0f",
      "1f6b5-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "racing_car"
    ],
    u: "1f3ce-fe0f"
  },
  {
    n: [
      "racing_motorcycle"
    ],
    u: "1f3cd-fe0f"
  },
  {
    n: [
      "person doing cartwheel",
      "person_doing_cartwheel"
    ],
    u: "1f938",
    v: [
      "1f938-1f3fb",
      "1f938-1f3fc",
      "1f938-1f3fd",
      "1f938-1f3fe",
      "1f938-1f3ff"
    ]
  },
  {
    n: [
      "man-cartwheeling"
    ],
    u: "1f938-200d-2642-fe0f",
    v: [
      "1f938-1f3fb-200d-2642-fe0f",
      "1f938-1f3fc-200d-2642-fe0f",
      "1f938-1f3fd-200d-2642-fe0f",
      "1f938-1f3fe-200d-2642-fe0f",
      "1f938-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-cartwheeling"
    ],
    u: "1f938-200d-2640-fe0f",
    v: [
      "1f938-1f3fb-200d-2640-fe0f",
      "1f938-1f3fc-200d-2640-fe0f",
      "1f938-1f3fd-200d-2640-fe0f",
      "1f938-1f3fe-200d-2640-fe0f",
      "1f938-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "wrestlers"
    ],
    u: "1f93c"
  },
  {
    n: [
      "man-wrestling"
    ],
    u: "1f93c-200d-2642-fe0f"
  },
  {
    n: [
      "woman-wrestling"
    ],
    u: "1f93c-200d-2640-fe0f"
  },
  {
    n: [
      "water polo",
      "water_polo"
    ],
    u: "1f93d",
    v: [
      "1f93d-1f3fb",
      "1f93d-1f3fc",
      "1f93d-1f3fd",
      "1f93d-1f3fe",
      "1f93d-1f3ff"
    ]
  },
  {
    n: [
      "man-playing-water-polo"
    ],
    u: "1f93d-200d-2642-fe0f",
    v: [
      "1f93d-1f3fb-200d-2642-fe0f",
      "1f93d-1f3fc-200d-2642-fe0f",
      "1f93d-1f3fd-200d-2642-fe0f",
      "1f93d-1f3fe-200d-2642-fe0f",
      "1f93d-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-playing-water-polo"
    ],
    u: "1f93d-200d-2640-fe0f",
    v: [
      "1f93d-1f3fb-200d-2640-fe0f",
      "1f93d-1f3fc-200d-2640-fe0f",
      "1f93d-1f3fd-200d-2640-fe0f",
      "1f93d-1f3fe-200d-2640-fe0f",
      "1f93d-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "handball"
    ],
    u: "1f93e",
    v: [
      "1f93e-1f3fb",
      "1f93e-1f3fc",
      "1f93e-1f3fd",
      "1f93e-1f3fe",
      "1f93e-1f3ff"
    ]
  },
  {
    n: [
      "man-playing-handball"
    ],
    u: "1f93e-200d-2642-fe0f",
    v: [
      "1f93e-1f3fb-200d-2642-fe0f",
      "1f93e-1f3fc-200d-2642-fe0f",
      "1f93e-1f3fd-200d-2642-fe0f",
      "1f93e-1f3fe-200d-2642-fe0f",
      "1f93e-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-playing-handball"
    ],
    u: "1f93e-200d-2640-fe0f",
    v: [
      "1f93e-1f3fb-200d-2640-fe0f",
      "1f93e-1f3fc-200d-2640-fe0f",
      "1f93e-1f3fd-200d-2640-fe0f",
      "1f93e-1f3fe-200d-2640-fe0f",
      "1f93e-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "juggling"
    ],
    u: "1f939",
    v: [
      "1f939-1f3fb",
      "1f939-1f3fc",
      "1f939-1f3fd",
      "1f939-1f3fe",
      "1f939-1f3ff"
    ]
  },
  {
    n: [
      "man-juggling"
    ],
    u: "1f939-200d-2642-fe0f",
    v: [
      "1f939-1f3fb-200d-2642-fe0f",
      "1f939-1f3fc-200d-2642-fe0f",
      "1f939-1f3fd-200d-2642-fe0f",
      "1f939-1f3fe-200d-2642-fe0f",
      "1f939-1f3ff-200d-2642-fe0f"
    ]
  },
  {
    n: [
      "woman-juggling"
    ],
    u: "1f939-200d-2640-fe0f",
    v: [
      "1f939-1f3fb-200d-2640-fe0f",
      "1f939-1f3fc-200d-2640-fe0f",
      "1f939-1f3fd-200d-2640-fe0f",
      "1f939-1f3fe-200d-2640-fe0f",
      "1f939-1f3ff-200d-2640-fe0f"
    ]
  },
  {
    n: [
      "man and woman holding hands",
      "couple",
      "man_and_woman_holding_hands"
    ],
    u: "1f46b"
  },
  {
    n: [
      "two men holding hands",
      "two_men_holding_hands"
    ],
    u: "1f46c"
  },
  {
    n: [
      "two women holding hands",
      "two_women_holding_hands"
    ],
    u: "1f46d"
  },
  {
    n: [
      "kiss",
      "couplekiss"
    ],
    u: "1f48f"
  },
  {
    n: [
      "woman-kiss-man"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468"
  },
  {
    n: [
      "man-kiss-man"
    ],
    u: "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468"
  },
  {
    n: [
      "woman-kiss-woman"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469"
  },
  {
    n: [
      "couple with heart",
      "couple_with_heart"
    ],
    u: "1f491"
  },
  {
    n: [
      "woman-heart-man"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f468"
  },
  {
    n: [
      "man-heart-man"
    ],
    u: "1f468-200d-2764-fe0f-200d-1f468"
  },
  {
    n: [
      "woman-heart-woman"
    ],
    u: "1f469-200d-2764-fe0f-200d-1f469"
  },
  {
    n: [
      "family",
      "man-woman-boy"
    ],
    u: "1f46a"
  },
  {
    n: [
      "man-woman-boy",
      "family"
    ],
    u: "1f468-200d-1f469-200d-1f466"
  },
  {
    n: [
      "man-woman-girl"
    ],
    u: "1f468-200d-1f469-200d-1f467"
  },
  {
    n: [
      "man-woman-girl-boy"
    ],
    u: "1f468-200d-1f469-200d-1f467-200d-1f466"
  },
  {
    n: [
      "man-woman-boy-boy"
    ],
    u: "1f468-200d-1f469-200d-1f466-200d-1f466"
  },
  {
    n: [
      "man-woman-girl-girl"
    ],
    u: "1f468-200d-1f469-200d-1f467-200d-1f467"
  },
  {
    n: [
      "man-man-boy"
    ],
    u: "1f468-200d-1f468-200d-1f466"
  },
  {
    n: [
      "man-man-girl"
    ],
    u: "1f468-200d-1f468-200d-1f467"
  },
  {
    n: [
      "man-man-girl-boy"
    ],
    u: "1f468-200d-1f468-200d-1f467-200d-1f466"
  },
  {
    n: [
      "man-man-boy-boy"
    ],
    u: "1f468-200d-1f468-200d-1f466-200d-1f466"
  },
  {
    n: [
      "man-man-girl-girl"
    ],
    u: "1f468-200d-1f468-200d-1f467-200d-1f467"
  },
  {
    n: [
      "woman-woman-boy"
    ],
    u: "1f469-200d-1f469-200d-1f466"
  },
  {
    n: [
      "woman-woman-girl"
    ],
    u: "1f469-200d-1f469-200d-1f467"
  },
  {
    n: [
      "woman-woman-girl-boy"
    ],
    u: "1f469-200d-1f469-200d-1f467-200d-1f466"
  },
  {
    n: [
      "woman-woman-boy-boy"
    ],
    u: "1f469-200d-1f469-200d-1f466-200d-1f466"
  },
  {
    n: [
      "woman-woman-girl-girl"
    ],
    u: "1f469-200d-1f469-200d-1f467-200d-1f467"
  },
  {
    n: [
      "man-boy"
    ],
    u: "1f468-200d-1f466"
  },
  {
    n: [
      "man-boy-boy"
    ],
    u: "1f468-200d-1f466-200d-1f466"
  },
  {
    n: [
      "man-girl"
    ],
    u: "1f468-200d-1f467"
  },
  {
    n: [
      "man-girl-boy"
    ],
    u: "1f468-200d-1f467-200d-1f466"
  },
  {
    n: [
      "man-girl-girl"
    ],
    u: "1f468-200d-1f467-200d-1f467"
  },
  {
    n: [
      "woman-boy"
    ],
    u: "1f469-200d-1f466"
  },
  {
    n: [
      "woman-boy-boy"
    ],
    u: "1f469-200d-1f466-200d-1f466"
  },
  {
    n: [
      "woman-girl"
    ],
    u: "1f469-200d-1f467"
  },
  {
    n: [
      "woman-girl-boy"
    ],
    u: "1f469-200d-1f467-200d-1f466"
  },
  {
    n: [
      "woman-girl-girl"
    ],
    u: "1f469-200d-1f467-200d-1f467"
  },
  {
    n: [
      "selfie"
    ],
    u: "1f933",
    v: [
      "1f933-1f3fb",
      "1f933-1f3fc",
      "1f933-1f3fd",
      "1f933-1f3fe",
      "1f933-1f3ff"
    ]
  },
  {
    n: [
      "flexed biceps",
      "muscle"
    ],
    u: "1f4aa",
    v: [
      "1f4aa-1f3fb",
      "1f4aa-1f3fc",
      "1f4aa-1f3fd",
      "1f4aa-1f3fe",
      "1f4aa-1f3ff"
    ]
  },
  {
    n: [
      "white left pointing backhand index",
      "point_left"
    ],
    u: "1f448",
    v: [
      "1f448-1f3fb",
      "1f448-1f3fc",
      "1f448-1f3fd",
      "1f448-1f3fe",
      "1f448-1f3ff"
    ]
  },
  {
    n: [
      "white right pointing backhand index",
      "point_right"
    ],
    u: "1f449",
    v: [
      "1f449-1f3fb",
      "1f449-1f3fc",
      "1f449-1f3fd",
      "1f449-1f3fe",
      "1f449-1f3ff"
    ]
  },
  {
    n: [
      "white up pointing index",
      "point_up"
    ],
    u: "261d-fe0f",
    v: [
      "261d-1f3fb",
      "261d-1f3fc",
      "261d-1f3fd",
      "261d-1f3fe",
      "261d-1f3ff"
    ]
  },
  {
    n: [
      "white up pointing backhand index",
      "point_up_2"
    ],
    u: "1f446",
    v: [
      "1f446-1f3fb",
      "1f446-1f3fc",
      "1f446-1f3fd",
      "1f446-1f3fe",
      "1f446-1f3ff"
    ]
  },
  {
    n: [
      "reversed hand with middle finger extended",
      "middle_finger",
      "reversed_hand_with_middle_finger_extended"
    ],
    u: "1f595",
    v: [
      "1f595-1f3fb",
      "1f595-1f3fc",
      "1f595-1f3fd",
      "1f595-1f3fe",
      "1f595-1f3ff"
    ]
  },
  {
    n: [
      "white down pointing backhand index",
      "point_down"
    ],
    u: "1f447",
    v: [
      "1f447-1f3fb",
      "1f447-1f3fc",
      "1f447-1f3fd",
      "1f447-1f3fe",
      "1f447-1f3ff"
    ]
  },
  {
    n: [
      "victory hand",
      "v"
    ],
    u: "270c-fe0f",
    v: [
      "270c-1f3fb",
      "270c-1f3fc",
      "270c-1f3fd",
      "270c-1f3fe",
      "270c-1f3ff"
    ]
  },
  {
    n: [
      "hand with index and middle fingers crossed",
      "crossed_fingers",
      "hand_with_index_and_middle_fingers_crossed"
    ],
    u: "1f91e",
    v: [
      "1f91e-1f3fb",
      "1f91e-1f3fc",
      "1f91e-1f3fd",
      "1f91e-1f3fe",
      "1f91e-1f3ff"
    ]
  },
  {
    n: [
      "raised hand with part between middle and ring fingers",
      "spock-hand"
    ],
    u: "1f596",
    v: [
      "1f596-1f3fb",
      "1f596-1f3fc",
      "1f596-1f3fd",
      "1f596-1f3fe",
      "1f596-1f3ff"
    ]
  },
  {
    n: [
      "sign of the horns",
      "the_horns",
      "sign_of_the_horns"
    ],
    u: "1f918",
    v: [
      "1f918-1f3fb",
      "1f918-1f3fc",
      "1f918-1f3fd",
      "1f918-1f3fe",
      "1f918-1f3ff"
    ]
  },
  {
    n: [
      "call me hand",
      "call_me_hand"
    ],
    u: "1f919",
    v: [
      "1f919-1f3fb",
      "1f919-1f3fc",
      "1f919-1f3fd",
      "1f919-1f3fe",
      "1f919-1f3ff"
    ]
  },
  {
    n: [
      "raised_hand_with_fingers_splayed"
    ],
    u: "1f590-fe0f",
    v: [
      "1f590-1f3fb",
      "1f590-1f3fc",
      "1f590-1f3fd",
      "1f590-1f3fe",
      "1f590-1f3ff"
    ]
  },
  {
    n: [
      "raised hand",
      "hand",
      "raised_hand"
    ],
    u: "270b",
    v: [
      "270b-1f3fb",
      "270b-1f3fc",
      "270b-1f3fd",
      "270b-1f3fe",
      "270b-1f3ff"
    ]
  },
  {
    n: [
      "ok hand sign",
      "ok_hand"
    ],
    u: "1f44c",
    v: [
      "1f44c-1f3fb",
      "1f44c-1f3fc",
      "1f44c-1f3fd",
      "1f44c-1f3fe",
      "1f44c-1f3ff"
    ]
  },
  {
    n: [
      "thumbs up sign",
      "+1",
      "thumbsup"
    ],
    u: "1f44d",
    v: [
      "1f44d-1f3fb",
      "1f44d-1f3fc",
      "1f44d-1f3fd",
      "1f44d-1f3fe",
      "1f44d-1f3ff"
    ]
  },
  {
    n: [
      "thumbs down sign",
      "-1",
      "thumbsdown"
    ],
    u: "1f44e",
    v: [
      "1f44e-1f3fb",
      "1f44e-1f3fc",
      "1f44e-1f3fd",
      "1f44e-1f3fe",
      "1f44e-1f3ff"
    ]
  },
  {
    n: [
      "raised fist",
      "fist"
    ],
    u: "270a",
    v: [
      "270a-1f3fb",
      "270a-1f3fc",
      "270a-1f3fd",
      "270a-1f3fe",
      "270a-1f3ff"
    ]
  },
  {
    n: [
      "fisted hand sign",
      "facepunch",
      "punch"
    ],
    u: "1f44a",
    v: [
      "1f44a-1f3fb",
      "1f44a-1f3fc",
      "1f44a-1f3fd",
      "1f44a-1f3fe",
      "1f44a-1f3ff"
    ]
  },
  {
    n: [
      "left-facing fist",
      "left-facing_fist"
    ],
    u: "1f91b",
    v: [
      "1f91b-1f3fb",
      "1f91b-1f3fc",
      "1f91b-1f3fd",
      "1f91b-1f3fe",
      "1f91b-1f3ff"
    ]
  },
  {
    n: [
      "right-facing fist",
      "right-facing_fist"
    ],
    u: "1f91c",
    v: [
      "1f91c-1f3fb",
      "1f91c-1f3fc",
      "1f91c-1f3fd",
      "1f91c-1f3fe",
      "1f91c-1f3ff"
    ]
  },
  {
    n: [
      "raised back of hand",
      "raised_back_of_hand"
    ],
    u: "1f91a",
    v: [
      "1f91a-1f3fb",
      "1f91a-1f3fc",
      "1f91a-1f3fd",
      "1f91a-1f3fe",
      "1f91a-1f3ff"
    ]
  },
  {
    n: [
      "waving hand sign",
      "wave"
    ],
    u: "1f44b",
    v: [
      "1f44b-1f3fb",
      "1f44b-1f3fc",
      "1f44b-1f3fd",
      "1f44b-1f3fe",
      "1f44b-1f3ff"
    ]
  },
  {
    n: [
      "i love you hand sign",
      "i_love_you_hand_sign"
    ],
    u: "1f91f",
    v: [
      "1f91f-1f3fb",
      "1f91f-1f3fc",
      "1f91f-1f3fd",
      "1f91f-1f3fe",
      "1f91f-1f3ff"
    ]
  },
  {
    n: [
      "writing_hand"
    ],
    u: "270d-fe0f",
    v: [
      "270d-1f3fb",
      "270d-1f3fc",
      "270d-1f3fd",
      "270d-1f3fe",
      "270d-1f3ff"
    ]
  },
  {
    n: [
      "clapping hands sign",
      "clap"
    ],
    u: "1f44f",
    v: [
      "1f44f-1f3fb",
      "1f44f-1f3fc",
      "1f44f-1f3fd",
      "1f44f-1f3fe",
      "1f44f-1f3ff"
    ]
  },
  {
    n: [
      "open hands sign",
      "open_hands"
    ],
    u: "1f450",
    v: [
      "1f450-1f3fb",
      "1f450-1f3fc",
      "1f450-1f3fd",
      "1f450-1f3fe",
      "1f450-1f3ff"
    ]
  },
  {
    n: [
      "person raising both hands in celebration",
      "raised_hands"
    ],
    u: "1f64c",
    v: [
      "1f64c-1f3fb",
      "1f64c-1f3fc",
      "1f64c-1f3fd",
      "1f64c-1f3fe",
      "1f64c-1f3ff"
    ]
  },
  {
    n: [
      "palms up together",
      "palms_up_together"
    ],
    u: "1f932",
    v: [
      "1f932-1f3fb",
      "1f932-1f3fc",
      "1f932-1f3fd",
      "1f932-1f3fe",
      "1f932-1f3ff"
    ]
  },
  {
    n: [
      "person with folded hands",
      "pray"
    ],
    u: "1f64f",
    v: [
      "1f64f-1f3fb",
      "1f64f-1f3fc",
      "1f64f-1f3fd",
      "1f64f-1f3fe",
      "1f64f-1f3ff"
    ]
  },
  {
    n: [
      "handshake"
    ],
    u: "1f91d"
  },
  {
    n: [
      "nail polish",
      "nail_care"
    ],
    u: "1f485",
    v: [
      "1f485-1f3fb",
      "1f485-1f3fc",
      "1f485-1f3fd",
      "1f485-1f3fe",
      "1f485-1f3ff"
    ]
  },
  {
    n: [
      "ear"
    ],
    u: "1f442",
    v: [
      "1f442-1f3fb",
      "1f442-1f3fc",
      "1f442-1f3fd",
      "1f442-1f3fe",
      "1f442-1f3ff"
    ]
  },
  {
    n: [
      "nose"
    ],
    u: "1f443",
    v: [
      "1f443-1f3fb",
      "1f443-1f3fc",
      "1f443-1f3fd",
      "1f443-1f3fe",
      "1f443-1f3ff"
    ]
  },
  {
    n: [
      "footprints"
    ],
    u: "1f463"
  },
  {
    n: [
      "eyes"
    ],
    u: "1f440"
  },
  {
    n: [
      "eye"
    ],
    u: "1f441-fe0f"
  },
  {
    n: [
      "eye-in-speech-bubble"
    ],
    u: "1f441-fe0f-200d-1f5e8-fe0f"
  },
  {
    n: [
      "brain"
    ],
    u: "1f9e0"
  },
  {
    n: [
      "tongue"
    ],
    u: "1f445"
  },
  {
    n: [
      "mouth",
      "lips"
    ],
    u: "1f444"
  },
  {
    n: [
      "kiss mark",
      "kiss"
    ],
    u: "1f48b"
  },
  {
    n: [
      "heart with arrow",
      "cupid"
    ],
    u: "1f498"
  },
  {
    n: [
      "heavy black heart",
      "heart"
    ],
    u: "2764-fe0f"
  },
  {
    n: [
      "beating heart",
      "heartbeat"
    ],
    u: "1f493"
  },
  {
    n: [
      "broken heart",
      "broken_heart"
    ],
    u: "1f494"
  },
  {
    n: [
      "two hearts",
      "two_hearts"
    ],
    u: "1f495"
  },
  {
    n: [
      "sparkling heart",
      "sparkling_heart"
    ],
    u: "1f496"
  },
  {
    n: [
      "growing heart",
      "heartpulse"
    ],
    u: "1f497"
  },
  {
    n: [
      "blue heart",
      "blue_heart"
    ],
    u: "1f499"
  },
  {
    n: [
      "green heart",
      "green_heart"
    ],
    u: "1f49a"
  },
  {
    n: [
      "yellow heart",
      "yellow_heart"
    ],
    u: "1f49b"
  },
  {
    n: [
      "orange heart",
      "orange_heart"
    ],
    u: "1f9e1"
  },
  {
    n: [
      "purple heart",
      "purple_heart"
    ],
    u: "1f49c"
  },
  {
    n: [
      "black heart",
      "black_heart"
    ],
    u: "1f5a4"
  },
  {
    n: [
      "heart with ribbon",
      "gift_heart"
    ],
    u: "1f49d"
  },
  {
    n: [
      "revolving hearts",
      "revolving_hearts"
    ],
    u: "1f49e"
  },
  {
    n: [
      "heart decoration",
      "heart_decoration"
    ],
    u: "1f49f"
  },
  {
    n: [
      "heavy_heart_exclamation_mark_ornament"
    ],
    u: "2763-fe0f"
  },
  {
    n: [
      "love letter",
      "love_letter"
    ],
    u: "1f48c"
  },
  {
    n: [
      "sleeping symbol",
      "zzz"
    ],
    u: "1f4a4"
  },
  {
    n: [
      "anger symbol",
      "anger"
    ],
    u: "1f4a2"
  },
  {
    n: [
      "bomb"
    ],
    u: "1f4a3"
  },
  {
    n: [
      "collision symbol",
      "boom",
      "collision"
    ],
    u: "1f4a5"
  },
  {
    n: [
      "splashing sweat symbol",
      "sweat_drops"
    ],
    u: "1f4a6"
  },
  {
    n: [
      "dash symbol",
      "dash"
    ],
    u: "1f4a8"
  },
  {
    n: [
      "dizzy symbol",
      "dizzy"
    ],
    u: "1f4ab"
  },
  {
    n: [
      "speech balloon",
      "speech_balloon"
    ],
    u: "1f4ac"
  },
  {
    n: [
      "left_speech_bubble"
    ],
    u: "1f5e8-fe0f"
  },
  {
    n: [
      "right_anger_bubble"
    ],
    u: "1f5ef-fe0f"
  },
  {
    n: [
      "thought balloon",
      "thought_balloon"
    ],
    u: "1f4ad"
  },
  {
    n: [
      "hole"
    ],
    u: "1f573-fe0f"
  },
  {
    n: [
      "eyeglasses"
    ],
    u: "1f453"
  },
  {
    n: [
      "dark_sunglasses"
    ],
    u: "1f576-fe0f"
  },
  {
    n: [
      "necktie"
    ],
    u: "1f454"
  },
  {
    n: [
      "t-shirt",
      "shirt",
      "tshirt"
    ],
    u: "1f455"
  },
  {
    n: [
      "jeans"
    ],
    u: "1f456"
  },
  {
    n: [
      "scarf"
    ],
    u: "1f9e3"
  },
  {
    n: [
      "gloves"
    ],
    u: "1f9e4"
  },
  {
    n: [
      "coat"
    ],
    u: "1f9e5"
  },
  {
    n: [
      "socks"
    ],
    u: "1f9e6"
  },
  {
    n: [
      "dress"
    ],
    u: "1f457"
  },
  {
    n: [
      "kimono"
    ],
    u: "1f458"
  },
  {
    n: [
      "bikini"
    ],
    u: "1f459"
  },
  {
    n: [
      "womans clothes",
      "womans_clothes"
    ],
    u: "1f45a"
  },
  {
    n: [
      "purse"
    ],
    u: "1f45b"
  },
  {
    n: [
      "handbag"
    ],
    u: "1f45c"
  },
  {
    n: [
      "pouch"
    ],
    u: "1f45d"
  },
  {
    n: [
      "shopping_bags"
    ],
    u: "1f6cd-fe0f"
  },
  {
    n: [
      "school satchel",
      "school_satchel"
    ],
    u: "1f392"
  },
  {
    n: [
      "mans shoe",
      "mans_shoe",
      "shoe"
    ],
    u: "1f45e"
  },
  {
    n: [
      "athletic shoe",
      "athletic_shoe"
    ],
    u: "1f45f"
  },
  {
    n: [
      "high-heeled shoe",
      "high_heel"
    ],
    u: "1f460"
  },
  {
    n: [
      "womans sandal",
      "sandal"
    ],
    u: "1f461"
  },
  {
    n: [
      "womans boots",
      "boot"
    ],
    u: "1f462"
  },
  {
    n: [
      "crown"
    ],
    u: "1f451"
  },
  {
    n: [
      "womans hat",
      "womans_hat"
    ],
    u: "1f452"
  },
  {
    n: [
      "top hat",
      "tophat"
    ],
    u: "1f3a9"
  },
  {
    n: [
      "graduation cap",
      "mortar_board"
    ],
    u: "1f393"
  },
  {
    n: [
      "billed cap",
      "billed_cap"
    ],
    u: "1f9e2"
  },
  {
    n: [
      "helmet_with_white_cross"
    ],
    u: "26d1-fe0f"
  },
  {
    n: [
      "prayer beads",
      "prayer_beads"
    ],
    u: "1f4ff"
  },
  {
    n: [
      "lipstick"
    ],
    u: "1f484"
  },
  {
    n: [
      "ring"
    ],
    u: "1f48d"
  },
  {
    n: [
      "gem stone",
      "gem"
    ],
    u: "1f48e"
  }
];
const animals_nature$1 = [
  {
    n: [
      "monkey face",
      "monkey_face"
    ],
    u: "1f435"
  },
  {
    n: [
      "monkey"
    ],
    u: "1f412"
  },
  {
    n: [
      "gorilla"
    ],
    u: "1f98d"
  },
  {
    n: [
      "dog face",
      "dog"
    ],
    u: "1f436"
  },
  {
    n: [
      "dog",
      "dog2"
    ],
    u: "1f415"
  },
  {
    n: [
      "poodle"
    ],
    u: "1f429"
  },
  {
    n: [
      "wolf face",
      "wolf"
    ],
    u: "1f43a"
  },
  {
    n: [
      "fox face",
      "fox_face"
    ],
    u: "1f98a"
  },
  {
    n: [
      "cat face",
      "cat"
    ],
    u: "1f431"
  },
  {
    n: [
      "cat",
      "cat2"
    ],
    u: "1f408"
  },
  {
    n: [
      "lion face",
      "lion_face"
    ],
    u: "1f981"
  },
  {
    n: [
      "tiger face",
      "tiger"
    ],
    u: "1f42f"
  },
  {
    n: [
      "tiger",
      "tiger2"
    ],
    u: "1f405"
  },
  {
    n: [
      "leopard"
    ],
    u: "1f406"
  },
  {
    n: [
      "horse face",
      "horse"
    ],
    u: "1f434"
  },
  {
    n: [
      "horse",
      "racehorse"
    ],
    u: "1f40e"
  },
  {
    n: [
      "unicorn face",
      "unicorn_face"
    ],
    u: "1f984"
  },
  {
    n: [
      "zebra face",
      "zebra_face"
    ],
    u: "1f993"
  },
  {
    n: [
      "deer"
    ],
    u: "1f98c"
  },
  {
    n: [
      "cow face",
      "cow"
    ],
    u: "1f42e"
  },
  {
    n: [
      "ox"
    ],
    u: "1f402"
  },
  {
    n: [
      "water buffalo",
      "water_buffalo"
    ],
    u: "1f403"
  },
  {
    n: [
      "cow",
      "cow2"
    ],
    u: "1f404"
  },
  {
    n: [
      "pig face",
      "pig"
    ],
    u: "1f437"
  },
  {
    n: [
      "pig",
      "pig2"
    ],
    u: "1f416"
  },
  {
    n: [
      "boar"
    ],
    u: "1f417"
  },
  {
    n: [
      "pig nose",
      "pig_nose"
    ],
    u: "1f43d"
  },
  {
    n: [
      "ram"
    ],
    u: "1f40f"
  },
  {
    n: [
      "sheep"
    ],
    u: "1f411"
  },
  {
    n: [
      "goat"
    ],
    u: "1f410"
  },
  {
    n: [
      "dromedary camel",
      "dromedary_camel"
    ],
    u: "1f42a"
  },
  {
    n: [
      "bactrian camel",
      "camel"
    ],
    u: "1f42b"
  },
  {
    n: [
      "giraffe face",
      "giraffe_face"
    ],
    u: "1f992"
  },
  {
    n: [
      "elephant"
    ],
    u: "1f418"
  },
  {
    n: [
      "rhinoceros"
    ],
    u: "1f98f"
  },
  {
    n: [
      "mouse face",
      "mouse"
    ],
    u: "1f42d"
  },
  {
    n: [
      "mouse",
      "mouse2"
    ],
    u: "1f401"
  },
  {
    n: [
      "rat"
    ],
    u: "1f400"
  },
  {
    n: [
      "hamster face",
      "hamster"
    ],
    u: "1f439"
  },
  {
    n: [
      "rabbit face",
      "rabbit"
    ],
    u: "1f430"
  },
  {
    n: [
      "rabbit",
      "rabbit2"
    ],
    u: "1f407"
  },
  {
    n: [
      "chipmunk"
    ],
    u: "1f43f-fe0f"
  },
  {
    n: [
      "hedgehog"
    ],
    u: "1f994"
  },
  {
    n: [
      "bat"
    ],
    u: "1f987"
  },
  {
    n: [
      "bear face",
      "bear"
    ],
    u: "1f43b"
  },
  {
    n: [
      "koala"
    ],
    u: "1f428"
  },
  {
    n: [
      "panda face",
      "panda_face"
    ],
    u: "1f43c"
  },
  {
    n: [
      "paw prints",
      "feet",
      "paw_prints"
    ],
    u: "1f43e"
  },
  {
    n: [
      "turkey"
    ],
    u: "1f983"
  },
  {
    n: [
      "chicken"
    ],
    u: "1f414"
  },
  {
    n: [
      "rooster"
    ],
    u: "1f413"
  },
  {
    n: [
      "hatching chick",
      "hatching_chick"
    ],
    u: "1f423"
  },
  {
    n: [
      "baby chick",
      "baby_chick"
    ],
    u: "1f424"
  },
  {
    n: [
      "front-facing baby chick",
      "hatched_chick"
    ],
    u: "1f425"
  },
  {
    n: [
      "bird"
    ],
    u: "1f426"
  },
  {
    n: [
      "penguin"
    ],
    u: "1f427"
  },
  {
    n: [
      "dove_of_peace"
    ],
    u: "1f54a-fe0f"
  },
  {
    n: [
      "eagle"
    ],
    u: "1f985"
  },
  {
    n: [
      "duck"
    ],
    u: "1f986"
  },
  {
    n: [
      "owl"
    ],
    u: "1f989"
  },
  {
    n: [
      "frog face",
      "frog"
    ],
    u: "1f438"
  },
  {
    n: [
      "crocodile"
    ],
    u: "1f40a"
  },
  {
    n: [
      "turtle"
    ],
    u: "1f422"
  },
  {
    n: [
      "lizard"
    ],
    u: "1f98e"
  },
  {
    n: [
      "snake"
    ],
    u: "1f40d"
  },
  {
    n: [
      "dragon face",
      "dragon_face"
    ],
    u: "1f432"
  },
  {
    n: [
      "dragon"
    ],
    u: "1f409"
  },
  {
    n: [
      "sauropod"
    ],
    u: "1f995"
  },
  {
    n: [
      "t-rex"
    ],
    u: "1f996"
  },
  {
    n: [
      "spouting whale",
      "whale"
    ],
    u: "1f433"
  },
  {
    n: [
      "whale",
      "whale2"
    ],
    u: "1f40b"
  },
  {
    n: [
      "dolphin",
      "flipper"
    ],
    u: "1f42c"
  },
  {
    n: [
      "fish"
    ],
    u: "1f41f"
  },
  {
    n: [
      "tropical fish",
      "tropical_fish"
    ],
    u: "1f420"
  },
  {
    n: [
      "blowfish"
    ],
    u: "1f421"
  },
  {
    n: [
      "shark"
    ],
    u: "1f988"
  },
  {
    n: [
      "octopus"
    ],
    u: "1f419"
  },
  {
    n: [
      "spiral shell",
      "shell"
    ],
    u: "1f41a"
  },
  {
    n: [
      "crab"
    ],
    u: "1f980"
  },
  {
    n: [
      "shrimp"
    ],
    u: "1f990"
  },
  {
    n: [
      "squid"
    ],
    u: "1f991"
  },
  {
    n: [
      "snail"
    ],
    u: "1f40c"
  },
  {
    n: [
      "butterfly"
    ],
    u: "1f98b"
  },
  {
    n: [
      "bug"
    ],
    u: "1f41b"
  },
  {
    n: [
      "ant"
    ],
    u: "1f41c"
  },
  {
    n: [
      "honeybee",
      "bee"
    ],
    u: "1f41d"
  },
  {
    n: [
      "lady beetle",
      "beetle"
    ],
    u: "1f41e"
  },
  {
    n: [
      "cricket"
    ],
    u: "1f997"
  },
  {
    n: [
      "spider"
    ],
    u: "1f577-fe0f"
  },
  {
    n: [
      "spider_web"
    ],
    u: "1f578-fe0f"
  },
  {
    n: [
      "scorpion"
    ],
    u: "1f982"
  },
  {
    n: [
      "bouquet"
    ],
    u: "1f490"
  },
  {
    n: [
      "cherry blossom",
      "cherry_blossom"
    ],
    u: "1f338"
  },
  {
    n: [
      "white flower",
      "white_flower"
    ],
    u: "1f4ae"
  },
  {
    n: [
      "rosette"
    ],
    u: "1f3f5-fe0f"
  },
  {
    n: [
      "rose"
    ],
    u: "1f339"
  },
  {
    n: [
      "wilted flower",
      "wilted_flower"
    ],
    u: "1f940"
  },
  {
    n: [
      "hibiscus"
    ],
    u: "1f33a"
  },
  {
    n: [
      "sunflower"
    ],
    u: "1f33b"
  },
  {
    n: [
      "blossom"
    ],
    u: "1f33c"
  },
  {
    n: [
      "tulip"
    ],
    u: "1f337"
  },
  {
    n: [
      "seedling"
    ],
    u: "1f331"
  },
  {
    n: [
      "evergreen tree",
      "evergreen_tree"
    ],
    u: "1f332"
  },
  {
    n: [
      "deciduous tree",
      "deciduous_tree"
    ],
    u: "1f333"
  },
  {
    n: [
      "palm tree",
      "palm_tree"
    ],
    u: "1f334"
  },
  {
    n: [
      "cactus"
    ],
    u: "1f335"
  },
  {
    n: [
      "ear of rice",
      "ear_of_rice"
    ],
    u: "1f33e"
  },
  {
    n: [
      "herb"
    ],
    u: "1f33f"
  },
  {
    n: [
      "shamrock"
    ],
    u: "2618-fe0f"
  },
  {
    n: [
      "four leaf clover",
      "four_leaf_clover"
    ],
    u: "1f340"
  },
  {
    n: [
      "maple leaf",
      "maple_leaf"
    ],
    u: "1f341"
  },
  {
    n: [
      "fallen leaf",
      "fallen_leaf"
    ],
    u: "1f342"
  },
  {
    n: [
      "leaf fluttering in wind",
      "leaves"
    ],
    u: "1f343"
  }
];
const food_drink$1 = [
  {
    n: [
      "grapes"
    ],
    u: "1f347"
  },
  {
    n: [
      "melon"
    ],
    u: "1f348"
  },
  {
    n: [
      "watermelon"
    ],
    u: "1f349"
  },
  {
    n: [
      "tangerine"
    ],
    u: "1f34a"
  },
  {
    n: [
      "lemon"
    ],
    u: "1f34b"
  },
  {
    n: [
      "banana"
    ],
    u: "1f34c"
  },
  {
    n: [
      "pineapple"
    ],
    u: "1f34d"
  },
  {
    n: [
      "red apple",
      "apple"
    ],
    u: "1f34e"
  },
  {
    n: [
      "green apple",
      "green_apple"
    ],
    u: "1f34f"
  },
  {
    n: [
      "pear"
    ],
    u: "1f350"
  },
  {
    n: [
      "peach"
    ],
    u: "1f351"
  },
  {
    n: [
      "cherries"
    ],
    u: "1f352"
  },
  {
    n: [
      "strawberry"
    ],
    u: "1f353"
  },
  {
    n: [
      "kiwifruit"
    ],
    u: "1f95d"
  },
  {
    n: [
      "tomato"
    ],
    u: "1f345"
  },
  {
    n: [
      "coconut"
    ],
    u: "1f965"
  },
  {
    n: [
      "avocado"
    ],
    u: "1f951"
  },
  {
    n: [
      "aubergine",
      "eggplant"
    ],
    u: "1f346"
  },
  {
    n: [
      "potato"
    ],
    u: "1f954"
  },
  {
    n: [
      "carrot"
    ],
    u: "1f955"
  },
  {
    n: [
      "ear of maize",
      "corn"
    ],
    u: "1f33d"
  },
  {
    n: [
      "hot_pepper"
    ],
    u: "1f336-fe0f"
  },
  {
    n: [
      "cucumber"
    ],
    u: "1f952"
  },
  {
    n: [
      "broccoli"
    ],
    u: "1f966"
  },
  {
    n: [
      "mushroom"
    ],
    u: "1f344"
  },
  {
    n: [
      "peanuts"
    ],
    u: "1f95c"
  },
  {
    n: [
      "chestnut"
    ],
    u: "1f330"
  },
  {
    n: [
      "bread"
    ],
    u: "1f35e"
  },
  {
    n: [
      "croissant"
    ],
    u: "1f950"
  },
  {
    n: [
      "baguette bread",
      "baguette_bread"
    ],
    u: "1f956"
  },
  {
    n: [
      "pretzel"
    ],
    u: "1f968"
  },
  {
    n: [
      "pancakes"
    ],
    u: "1f95e"
  },
  {
    n: [
      "cheese wedge",
      "cheese_wedge"
    ],
    u: "1f9c0"
  },
  {
    n: [
      "meat on bone",
      "meat_on_bone"
    ],
    u: "1f356"
  },
  {
    n: [
      "poultry leg",
      "poultry_leg"
    ],
    u: "1f357"
  },
  {
    n: [
      "cut of meat",
      "cut_of_meat"
    ],
    u: "1f969"
  },
  {
    n: [
      "bacon"
    ],
    u: "1f953"
  },
  {
    n: [
      "hamburger"
    ],
    u: "1f354"
  },
  {
    n: [
      "french fries",
      "fries"
    ],
    u: "1f35f"
  },
  {
    n: [
      "slice of pizza",
      "pizza"
    ],
    u: "1f355"
  },
  {
    n: [
      "hot dog",
      "hotdog"
    ],
    u: "1f32d"
  },
  {
    n: [
      "sandwich"
    ],
    u: "1f96a"
  },
  {
    n: [
      "taco"
    ],
    u: "1f32e"
  },
  {
    n: [
      "burrito"
    ],
    u: "1f32f"
  },
  {
    n: [
      "stuffed flatbread",
      "stuffed_flatbread"
    ],
    u: "1f959"
  },
  {
    n: [
      "egg"
    ],
    u: "1f95a"
  },
  {
    n: [
      "cooking",
      "fried_egg"
    ],
    u: "1f373"
  },
  {
    n: [
      "shallow pan of food",
      "shallow_pan_of_food"
    ],
    u: "1f958"
  },
  {
    n: [
      "pot of food",
      "stew"
    ],
    u: "1f372"
  },
  {
    n: [
      "bowl with spoon",
      "bowl_with_spoon"
    ],
    u: "1f963"
  },
  {
    n: [
      "green salad",
      "green_salad"
    ],
    u: "1f957"
  },
  {
    n: [
      "popcorn"
    ],
    u: "1f37f"
  },
  {
    n: [
      "canned food",
      "canned_food"
    ],
    u: "1f96b"
  },
  {
    n: [
      "bento box",
      "bento"
    ],
    u: "1f371"
  },
  {
    n: [
      "rice cracker",
      "rice_cracker"
    ],
    u: "1f358"
  },
  {
    n: [
      "rice ball",
      "rice_ball"
    ],
    u: "1f359"
  },
  {
    n: [
      "cooked rice",
      "rice"
    ],
    u: "1f35a"
  },
  {
    n: [
      "curry and rice",
      "curry"
    ],
    u: "1f35b"
  },
  {
    n: [
      "steaming bowl",
      "ramen"
    ],
    u: "1f35c"
  },
  {
    n: [
      "spaghetti"
    ],
    u: "1f35d"
  },
  {
    n: [
      "roasted sweet potato",
      "sweet_potato"
    ],
    u: "1f360"
  },
  {
    n: [
      "oden"
    ],
    u: "1f362"
  },
  {
    n: [
      "sushi"
    ],
    u: "1f363"
  },
  {
    n: [
      "fried shrimp",
      "fried_shrimp"
    ],
    u: "1f364"
  },
  {
    n: [
      "fish cake with swirl design",
      "fish_cake"
    ],
    u: "1f365"
  },
  {
    n: [
      "dango"
    ],
    u: "1f361"
  },
  {
    n: [
      "dumpling"
    ],
    u: "1f95f"
  },
  {
    n: [
      "fortune cookie",
      "fortune_cookie"
    ],
    u: "1f960"
  },
  {
    n: [
      "takeout box",
      "takeout_box"
    ],
    u: "1f961"
  },
  {
    n: [
      "soft ice cream",
      "icecream"
    ],
    u: "1f366"
  },
  {
    n: [
      "shaved ice",
      "shaved_ice"
    ],
    u: "1f367"
  },
  {
    n: [
      "ice cream",
      "ice_cream"
    ],
    u: "1f368"
  },
  {
    n: [
      "doughnut"
    ],
    u: "1f369"
  },
  {
    n: [
      "cookie"
    ],
    u: "1f36a"
  },
  {
    n: [
      "birthday cake",
      "birthday"
    ],
    u: "1f382"
  },
  {
    n: [
      "shortcake",
      "cake"
    ],
    u: "1f370"
  },
  {
    n: [
      "pie"
    ],
    u: "1f967"
  },
  {
    n: [
      "chocolate bar",
      "chocolate_bar"
    ],
    u: "1f36b"
  },
  {
    n: [
      "candy"
    ],
    u: "1f36c"
  },
  {
    n: [
      "lollipop"
    ],
    u: "1f36d"
  },
  {
    n: [
      "custard"
    ],
    u: "1f36e"
  },
  {
    n: [
      "honey pot",
      "honey_pot"
    ],
    u: "1f36f"
  },
  {
    n: [
      "baby bottle",
      "baby_bottle"
    ],
    u: "1f37c"
  },
  {
    n: [
      "glass of milk",
      "glass_of_milk"
    ],
    u: "1f95b"
  },
  {
    n: [
      "hot beverage",
      "coffee"
    ],
    u: "2615"
  },
  {
    n: [
      "teacup without handle",
      "tea"
    ],
    u: "1f375"
  },
  {
    n: [
      "sake bottle and cup",
      "sake"
    ],
    u: "1f376"
  },
  {
    n: [
      "bottle with popping cork",
      "champagne"
    ],
    u: "1f37e"
  },
  {
    n: [
      "wine glass",
      "wine_glass"
    ],
    u: "1f377"
  },
  {
    n: [
      "cocktail glass",
      "cocktail"
    ],
    u: "1f378"
  },
  {
    n: [
      "tropical drink",
      "tropical_drink"
    ],
    u: "1f379"
  },
  {
    n: [
      "beer mug",
      "beer"
    ],
    u: "1f37a"
  },
  {
    n: [
      "clinking beer mugs",
      "beers"
    ],
    u: "1f37b"
  },
  {
    n: [
      "clinking glasses",
      "clinking_glasses"
    ],
    u: "1f942"
  },
  {
    n: [
      "tumbler glass",
      "tumbler_glass"
    ],
    u: "1f943"
  },
  {
    n: [
      "cup with straw",
      "cup_with_straw"
    ],
    u: "1f964"
  },
  {
    n: [
      "chopsticks"
    ],
    u: "1f962"
  },
  {
    n: [
      "knife_fork_plate"
    ],
    u: "1f37d-fe0f"
  },
  {
    n: [
      "fork and knife",
      "fork_and_knife"
    ],
    u: "1f374"
  },
  {
    n: [
      "spoon"
    ],
    u: "1f944"
  },
  {
    n: [
      "hocho",
      "knife"
    ],
    u: "1f52a"
  },
  {
    n: [
      "amphora"
    ],
    u: "1f3fa"
  }
];
const activities$1 = [
  {
    n: [
      "jack-o-lantern",
      "jack_o_lantern"
    ],
    u: "1f383"
  },
  {
    n: [
      "christmas tree",
      "christmas_tree"
    ],
    u: "1f384"
  },
  {
    n: [
      "fireworks"
    ],
    u: "1f386"
  },
  {
    n: [
      "firework sparkler",
      "sparkler"
    ],
    u: "1f387"
  },
  {
    n: [
      "sparkles"
    ],
    u: "2728"
  },
  {
    n: [
      "balloon"
    ],
    u: "1f388"
  },
  {
    n: [
      "party popper",
      "tada"
    ],
    u: "1f389"
  },
  {
    n: [
      "confetti ball",
      "confetti_ball"
    ],
    u: "1f38a"
  },
  {
    n: [
      "tanabata tree",
      "tanabata_tree"
    ],
    u: "1f38b"
  },
  {
    n: [
      "pine decoration",
      "bamboo"
    ],
    u: "1f38d"
  },
  {
    n: [
      "japanese dolls",
      "dolls"
    ],
    u: "1f38e"
  },
  {
    n: [
      "carp streamer",
      "flags"
    ],
    u: "1f38f"
  },
  {
    n: [
      "wind chime",
      "wind_chime"
    ],
    u: "1f390"
  },
  {
    n: [
      "moon viewing ceremony",
      "rice_scene"
    ],
    u: "1f391"
  },
  {
    n: [
      "ribbon"
    ],
    u: "1f380"
  },
  {
    n: [
      "wrapped present",
      "gift"
    ],
    u: "1f381"
  },
  {
    n: [
      "reminder_ribbon"
    ],
    u: "1f397-fe0f"
  },
  {
    n: [
      "admission_tickets"
    ],
    u: "1f39f-fe0f"
  },
  {
    n: [
      "ticket"
    ],
    u: "1f3ab"
  },
  {
    n: [
      "medal"
    ],
    u: "1f396-fe0f"
  },
  {
    n: [
      "trophy"
    ],
    u: "1f3c6"
  },
  {
    n: [
      "sports medal",
      "sports_medal"
    ],
    u: "1f3c5"
  },
  {
    n: [
      "first place medal",
      "first_place_medal"
    ],
    u: "1f947"
  },
  {
    n: [
      "second place medal",
      "second_place_medal"
    ],
    u: "1f948"
  },
  {
    n: [
      "third place medal",
      "third_place_medal"
    ],
    u: "1f949"
  },
  {
    n: [
      "soccer ball",
      "soccer"
    ],
    u: "26bd"
  },
  {
    n: [
      "baseball"
    ],
    u: "26be"
  },
  {
    n: [
      "basketball and hoop",
      "basketball"
    ],
    u: "1f3c0"
  },
  {
    n: [
      "volleyball"
    ],
    u: "1f3d0"
  },
  {
    n: [
      "american football",
      "football"
    ],
    u: "1f3c8"
  },
  {
    n: [
      "rugby football",
      "rugby_football"
    ],
    u: "1f3c9"
  },
  {
    n: [
      "tennis racquet and ball",
      "tennis"
    ],
    u: "1f3be"
  },
  {
    n: [
      "billiards",
      "8ball"
    ],
    u: "1f3b1"
  },
  {
    n: [
      "bowling"
    ],
    u: "1f3b3"
  },
  {
    n: [
      "cricket bat and ball",
      "cricket_bat_and_ball"
    ],
    u: "1f3cf"
  },
  {
    n: [
      "field hockey stick and ball",
      "field_hockey_stick_and_ball"
    ],
    u: "1f3d1"
  },
  {
    n: [
      "ice hockey stick and puck",
      "ice_hockey_stick_and_puck"
    ],
    u: "1f3d2"
  },
  {
    n: [
      "table tennis paddle and ball",
      "table_tennis_paddle_and_ball"
    ],
    u: "1f3d3"
  },
  {
    n: [
      "badminton racquet and shuttlecock",
      "badminton_racquet_and_shuttlecock"
    ],
    u: "1f3f8"
  },
  {
    n: [
      "boxing glove",
      "boxing_glove"
    ],
    u: "1f94a"
  },
  {
    n: [
      "martial arts uniform",
      "martial_arts_uniform"
    ],
    u: "1f94b"
  },
  {
    n: [
      "goal net",
      "goal_net"
    ],
    u: "1f945"
  },
  {
    n: [
      "direct hit",
      "dart"
    ],
    u: "1f3af"
  },
  {
    n: [
      "flag in hole",
      "golf"
    ],
    u: "26f3"
  },
  {
    n: [
      "ice_skate"
    ],
    u: "26f8-fe0f"
  },
  {
    n: [
      "fishing pole and fish",
      "fishing_pole_and_fish"
    ],
    u: "1f3a3"
  },
  {
    n: [
      "running shirt with sash",
      "running_shirt_with_sash"
    ],
    u: "1f3bd"
  },
  {
    n: [
      "ski and ski boot",
      "ski"
    ],
    u: "1f3bf"
  },
  {
    n: [
      "sled"
    ],
    u: "1f6f7"
  },
  {
    n: [
      "curling stone",
      "curling_stone"
    ],
    u: "1f94c"
  },
  {
    n: [
      "video game",
      "video_game"
    ],
    u: "1f3ae"
  },
  {
    n: [
      "joystick"
    ],
    u: "1f579-fe0f"
  },
  {
    n: [
      "game die",
      "game_die"
    ],
    u: "1f3b2"
  },
  {
    n: [
      "black spade suit",
      "spades"
    ],
    u: "2660-fe0f"
  },
  {
    n: [
      "black heart suit",
      "hearts"
    ],
    u: "2665-fe0f"
  },
  {
    n: [
      "black diamond suit",
      "diamonds"
    ],
    u: "2666-fe0f"
  },
  {
    n: [
      "black club suit",
      "clubs"
    ],
    u: "2663-fe0f"
  },
  {
    n: [
      "playing card black joker",
      "black_joker"
    ],
    u: "1f0cf"
  },
  {
    n: [
      "mahjong tile red dragon",
      "mahjong"
    ],
    u: "1f004"
  },
  {
    n: [
      "flower playing cards",
      "flower_playing_cards"
    ],
    u: "1f3b4"
  }
];
const travel_places$1 = [
  {
    n: [
      "earth globe europe-africa",
      "earth_africa"
    ],
    u: "1f30d"
  },
  {
    n: [
      "earth globe americas",
      "earth_americas"
    ],
    u: "1f30e"
  },
  {
    n: [
      "earth globe asia-australia",
      "earth_asia"
    ],
    u: "1f30f"
  },
  {
    n: [
      "globe with meridians",
      "globe_with_meridians"
    ],
    u: "1f310"
  },
  {
    n: [
      "world_map"
    ],
    u: "1f5fa-fe0f"
  },
  {
    n: [
      "silhouette of japan",
      "japan"
    ],
    u: "1f5fe"
  },
  {
    n: [
      "snow_capped_mountain"
    ],
    u: "1f3d4-fe0f"
  },
  {
    n: [
      "mountain"
    ],
    u: "26f0-fe0f"
  },
  {
    n: [
      "volcano"
    ],
    u: "1f30b"
  },
  {
    n: [
      "mount fuji",
      "mount_fuji"
    ],
    u: "1f5fb"
  },
  {
    n: [
      "camping"
    ],
    u: "1f3d5-fe0f"
  },
  {
    n: [
      "beach_with_umbrella"
    ],
    u: "1f3d6-fe0f"
  },
  {
    n: [
      "desert"
    ],
    u: "1f3dc-fe0f"
  },
  {
    n: [
      "desert_island"
    ],
    u: "1f3dd-fe0f"
  },
  {
    n: [
      "national_park"
    ],
    u: "1f3de-fe0f"
  },
  {
    n: [
      "stadium"
    ],
    u: "1f3df-fe0f"
  },
  {
    n: [
      "classical_building"
    ],
    u: "1f3db-fe0f"
  },
  {
    n: [
      "building_construction"
    ],
    u: "1f3d7-fe0f"
  },
  {
    n: [
      "house_buildings"
    ],
    u: "1f3d8-fe0f"
  },
  {
    n: [
      "cityscape"
    ],
    u: "1f3d9-fe0f"
  },
  {
    n: [
      "derelict_house_building"
    ],
    u: "1f3da-fe0f"
  },
  {
    n: [
      "house building",
      "house"
    ],
    u: "1f3e0"
  },
  {
    n: [
      "house with garden",
      "house_with_garden"
    ],
    u: "1f3e1"
  },
  {
    n: [
      "office building",
      "office"
    ],
    u: "1f3e2"
  },
  {
    n: [
      "japanese post office",
      "post_office"
    ],
    u: "1f3e3"
  },
  {
    n: [
      "european post office",
      "european_post_office"
    ],
    u: "1f3e4"
  },
  {
    n: [
      "hospital"
    ],
    u: "1f3e5"
  },
  {
    n: [
      "bank"
    ],
    u: "1f3e6"
  },
  {
    n: [
      "hotel"
    ],
    u: "1f3e8"
  },
  {
    n: [
      "love hotel",
      "love_hotel"
    ],
    u: "1f3e9"
  },
  {
    n: [
      "convenience store",
      "convenience_store"
    ],
    u: "1f3ea"
  },
  {
    n: [
      "school"
    ],
    u: "1f3eb"
  },
  {
    n: [
      "department store",
      "department_store"
    ],
    u: "1f3ec"
  },
  {
    n: [
      "factory"
    ],
    u: "1f3ed"
  },
  {
    n: [
      "japanese castle",
      "japanese_castle"
    ],
    u: "1f3ef"
  },
  {
    n: [
      "european castle",
      "european_castle"
    ],
    u: "1f3f0"
  },
  {
    n: [
      "wedding"
    ],
    u: "1f492"
  },
  {
    n: [
      "tokyo tower",
      "tokyo_tower"
    ],
    u: "1f5fc"
  },
  {
    n: [
      "statue of liberty",
      "statue_of_liberty"
    ],
    u: "1f5fd"
  },
  {
    n: [
      "church"
    ],
    u: "26ea"
  },
  {
    n: [
      "mosque"
    ],
    u: "1f54c"
  },
  {
    n: [
      "synagogue"
    ],
    u: "1f54d"
  },
  {
    n: [
      "shinto_shrine"
    ],
    u: "26e9-fe0f"
  },
  {
    n: [
      "kaaba"
    ],
    u: "1f54b"
  },
  {
    n: [
      "fountain"
    ],
    u: "26f2"
  },
  {
    n: [
      "tent"
    ],
    u: "26fa"
  },
  {
    n: [
      "foggy"
    ],
    u: "1f301"
  },
  {
    n: [
      "night with stars",
      "night_with_stars"
    ],
    u: "1f303"
  },
  {
    n: [
      "sunrise over mountains",
      "sunrise_over_mountains"
    ],
    u: "1f304"
  },
  {
    n: [
      "sunrise"
    ],
    u: "1f305"
  },
  {
    n: [
      "cityscape at dusk",
      "city_sunset"
    ],
    u: "1f306"
  },
  {
    n: [
      "sunset over buildings",
      "city_sunrise"
    ],
    u: "1f307"
  },
  {
    n: [
      "bridge at night",
      "bridge_at_night"
    ],
    u: "1f309"
  },
  {
    n: [
      "hot springs",
      "hotsprings"
    ],
    u: "2668-fe0f"
  },
  {
    n: [
      "milky way",
      "milky_way"
    ],
    u: "1f30c"
  },
  {
    n: [
      "carousel horse",
      "carousel_horse"
    ],
    u: "1f3a0"
  },
  {
    n: [
      "ferris wheel",
      "ferris_wheel"
    ],
    u: "1f3a1"
  },
  {
    n: [
      "roller coaster",
      "roller_coaster"
    ],
    u: "1f3a2"
  },
  {
    n: [
      "barber pole",
      "barber"
    ],
    u: "1f488"
  },
  {
    n: [
      "circus tent",
      "circus_tent"
    ],
    u: "1f3aa"
  },
  {
    n: [
      "performing arts",
      "performing_arts"
    ],
    u: "1f3ad"
  },
  {
    n: [
      "frame_with_picture"
    ],
    u: "1f5bc-fe0f"
  },
  {
    n: [
      "artist palette",
      "art"
    ],
    u: "1f3a8"
  },
  {
    n: [
      "slot machine",
      "slot_machine"
    ],
    u: "1f3b0"
  },
  {
    n: [
      "steam locomotive",
      "steam_locomotive"
    ],
    u: "1f682"
  },
  {
    n: [
      "railway car",
      "railway_car"
    ],
    u: "1f683"
  },
  {
    n: [
      "high-speed train",
      "bullettrain_side"
    ],
    u: "1f684"
  },
  {
    n: [
      "high-speed train with bullet nose",
      "bullettrain_front"
    ],
    u: "1f685"
  },
  {
    n: [
      "train",
      "train2"
    ],
    u: "1f686"
  },
  {
    n: [
      "metro"
    ],
    u: "1f687"
  },
  {
    n: [
      "light rail",
      "light_rail"
    ],
    u: "1f688"
  },
  {
    n: [
      "station"
    ],
    u: "1f689"
  },
  {
    n: [
      "tram"
    ],
    u: "1f68a"
  },
  {
    n: [
      "monorail"
    ],
    u: "1f69d"
  },
  {
    n: [
      "mountain railway",
      "mountain_railway"
    ],
    u: "1f69e"
  },
  {
    n: [
      "tram car",
      "train"
    ],
    u: "1f68b"
  },
  {
    n: [
      "bus"
    ],
    u: "1f68c"
  },
  {
    n: [
      "oncoming bus",
      "oncoming_bus"
    ],
    u: "1f68d"
  },
  {
    n: [
      "trolleybus"
    ],
    u: "1f68e"
  },
  {
    n: [
      "minibus"
    ],
    u: "1f690"
  },
  {
    n: [
      "ambulance"
    ],
    u: "1f691"
  },
  {
    n: [
      "fire engine",
      "fire_engine"
    ],
    u: "1f692"
  },
  {
    n: [
      "police car",
      "police_car"
    ],
    u: "1f693"
  },
  {
    n: [
      "oncoming police car",
      "oncoming_police_car"
    ],
    u: "1f694"
  },
  {
    n: [
      "taxi"
    ],
    u: "1f695"
  },
  {
    n: [
      "oncoming taxi",
      "oncoming_taxi"
    ],
    u: "1f696"
  },
  {
    n: [
      "automobile",
      "car",
      "red_car"
    ],
    u: "1f697"
  },
  {
    n: [
      "oncoming automobile",
      "oncoming_automobile"
    ],
    u: "1f698"
  },
  {
    n: [
      "recreational vehicle",
      "blue_car"
    ],
    u: "1f699"
  },
  {
    n: [
      "delivery truck",
      "truck"
    ],
    u: "1f69a"
  },
  {
    n: [
      "articulated lorry",
      "articulated_lorry"
    ],
    u: "1f69b"
  },
  {
    n: [
      "tractor"
    ],
    u: "1f69c"
  },
  {
    n: [
      "bicycle",
      "bike"
    ],
    u: "1f6b2"
  },
  {
    n: [
      "scooter"
    ],
    u: "1f6f4"
  },
  {
    n: [
      "motor scooter",
      "motor_scooter"
    ],
    u: "1f6f5"
  },
  {
    n: [
      "bus stop",
      "busstop"
    ],
    u: "1f68f"
  },
  {
    n: [
      "motorway"
    ],
    u: "1f6e3-fe0f"
  },
  {
    n: [
      "railway_track"
    ],
    u: "1f6e4-fe0f"
  },
  {
    n: [
      "fuel pump",
      "fuelpump"
    ],
    u: "26fd"
  },
  {
    n: [
      "police cars revolving light",
      "rotating_light"
    ],
    u: "1f6a8"
  },
  {
    n: [
      "horizontal traffic light",
      "traffic_light"
    ],
    u: "1f6a5"
  },
  {
    n: [
      "vertical traffic light",
      "vertical_traffic_light"
    ],
    u: "1f6a6"
  },
  {
    n: [
      "construction sign",
      "construction"
    ],
    u: "1f6a7"
  },
  {
    n: [
      "octagonal sign",
      "octagonal_sign"
    ],
    u: "1f6d1"
  },
  {
    n: [
      "anchor"
    ],
    u: "2693"
  },
  {
    n: [
      "sailboat",
      "boat"
    ],
    u: "26f5"
  },
  {
    n: [
      "canoe"
    ],
    u: "1f6f6"
  },
  {
    n: [
      "speedboat"
    ],
    u: "1f6a4"
  },
  {
    n: [
      "passenger_ship"
    ],
    u: "1f6f3-fe0f"
  },
  {
    n: [
      "ferry"
    ],
    u: "26f4-fe0f"
  },
  {
    n: [
      "motor_boat"
    ],
    u: "1f6e5-fe0f"
  },
  {
    n: [
      "ship"
    ],
    u: "1f6a2"
  },
  {
    n: [
      "airplane"
    ],
    u: "2708-fe0f"
  },
  {
    n: [
      "small_airplane"
    ],
    u: "1f6e9-fe0f"
  },
  {
    n: [
      "airplane departure",
      "airplane_departure"
    ],
    u: "1f6eb"
  },
  {
    n: [
      "airplane arriving",
      "airplane_arriving"
    ],
    u: "1f6ec"
  },
  {
    n: [
      "seat"
    ],
    u: "1f4ba"
  },
  {
    n: [
      "helicopter"
    ],
    u: "1f681"
  },
  {
    n: [
      "suspension railway",
      "suspension_railway"
    ],
    u: "1f69f"
  },
  {
    n: [
      "mountain cableway",
      "mountain_cableway"
    ],
    u: "1f6a0"
  },
  {
    n: [
      "aerial tramway",
      "aerial_tramway"
    ],
    u: "1f6a1"
  },
  {
    n: [
      "satellite"
    ],
    u: "1f6f0-fe0f"
  },
  {
    n: [
      "rocket"
    ],
    u: "1f680"
  },
  {
    n: [
      "flying saucer",
      "flying_saucer"
    ],
    u: "1f6f8"
  },
  {
    n: [
      "bellhop_bell"
    ],
    u: "1f6ce-fe0f"
  },
  {
    n: [
      "door"
    ],
    u: "1f6aa"
  },
  {
    n: [
      "bed"
    ],
    u: "1f6cf-fe0f"
  },
  {
    n: [
      "couch_and_lamp"
    ],
    u: "1f6cb-fe0f"
  },
  {
    n: [
      "toilet"
    ],
    u: "1f6bd"
  },
  {
    n: [
      "shower"
    ],
    u: "1f6bf"
  },
  {
    n: [
      "bathtub"
    ],
    u: "1f6c1"
  },
  {
    n: [
      "hourglass"
    ],
    u: "231b"
  },
  {
    n: [
      "hourglass with flowing sand",
      "hourglass_flowing_sand"
    ],
    u: "23f3"
  },
  {
    n: [
      "watch"
    ],
    u: "231a"
  },
  {
    n: [
      "alarm clock",
      "alarm_clock"
    ],
    u: "23f0"
  },
  {
    n: [
      "stopwatch"
    ],
    u: "23f1-fe0f"
  },
  {
    n: [
      "timer_clock"
    ],
    u: "23f2-fe0f"
  },
  {
    n: [
      "mantelpiece_clock"
    ],
    u: "1f570-fe0f"
  },
  {
    n: [
      "clock face twelve oclock",
      "clock12"
    ],
    u: "1f55b"
  },
  {
    n: [
      "clock face twelve-thirty",
      "clock1230"
    ],
    u: "1f567"
  },
  {
    n: [
      "clock face one oclock",
      "clock1"
    ],
    u: "1f550"
  },
  {
    n: [
      "clock face one-thirty",
      "clock130"
    ],
    u: "1f55c"
  },
  {
    n: [
      "clock face two oclock",
      "clock2"
    ],
    u: "1f551"
  },
  {
    n: [
      "clock face two-thirty",
      "clock230"
    ],
    u: "1f55d"
  },
  {
    n: [
      "clock face three oclock",
      "clock3"
    ],
    u: "1f552"
  },
  {
    n: [
      "clock face three-thirty",
      "clock330"
    ],
    u: "1f55e"
  },
  {
    n: [
      "clock face four oclock",
      "clock4"
    ],
    u: "1f553"
  },
  {
    n: [
      "clock face four-thirty",
      "clock430"
    ],
    u: "1f55f"
  },
  {
    n: [
      "clock face five oclock",
      "clock5"
    ],
    u: "1f554"
  },
  {
    n: [
      "clock face five-thirty",
      "clock530"
    ],
    u: "1f560"
  },
  {
    n: [
      "clock face six oclock",
      "clock6"
    ],
    u: "1f555"
  },
  {
    n: [
      "clock face six-thirty",
      "clock630"
    ],
    u: "1f561"
  },
  {
    n: [
      "clock face seven oclock",
      "clock7"
    ],
    u: "1f556"
  },
  {
    n: [
      "clock face seven-thirty",
      "clock730"
    ],
    u: "1f562"
  },
  {
    n: [
      "clock face eight oclock",
      "clock8"
    ],
    u: "1f557"
  },
  {
    n: [
      "clock face eight-thirty",
      "clock830"
    ],
    u: "1f563"
  },
  {
    n: [
      "clock face nine oclock",
      "clock9"
    ],
    u: "1f558"
  },
  {
    n: [
      "clock face nine-thirty",
      "clock930"
    ],
    u: "1f564"
  },
  {
    n: [
      "clock face ten oclock",
      "clock10"
    ],
    u: "1f559"
  },
  {
    n: [
      "clock face ten-thirty",
      "clock1030"
    ],
    u: "1f565"
  },
  {
    n: [
      "clock face eleven oclock",
      "clock11"
    ],
    u: "1f55a"
  },
  {
    n: [
      "clock face eleven-thirty",
      "clock1130"
    ],
    u: "1f566"
  },
  {
    n: [
      "new moon symbol",
      "new_moon"
    ],
    u: "1f311"
  },
  {
    n: [
      "waxing crescent moon symbol",
      "waxing_crescent_moon"
    ],
    u: "1f312"
  },
  {
    n: [
      "first quarter moon symbol",
      "first_quarter_moon"
    ],
    u: "1f313"
  },
  {
    n: [
      "waxing gibbous moon symbol",
      "moon",
      "waxing_gibbous_moon"
    ],
    u: "1f314"
  },
  {
    n: [
      "full moon symbol",
      "full_moon"
    ],
    u: "1f315"
  },
  {
    n: [
      "waning gibbous moon symbol",
      "waning_gibbous_moon"
    ],
    u: "1f316"
  },
  {
    n: [
      "last quarter moon symbol",
      "last_quarter_moon"
    ],
    u: "1f317"
  },
  {
    n: [
      "waning crescent moon symbol",
      "waning_crescent_moon"
    ],
    u: "1f318"
  },
  {
    n: [
      "crescent moon",
      "crescent_moon"
    ],
    u: "1f319"
  },
  {
    n: [
      "new moon with face",
      "new_moon_with_face"
    ],
    u: "1f31a"
  },
  {
    n: [
      "first quarter moon with face",
      "first_quarter_moon_with_face"
    ],
    u: "1f31b"
  },
  {
    n: [
      "last quarter moon with face",
      "last_quarter_moon_with_face"
    ],
    u: "1f31c"
  },
  {
    n: [
      "thermometer"
    ],
    u: "1f321-fe0f"
  },
  {
    n: [
      "black sun with rays",
      "sunny"
    ],
    u: "2600-fe0f"
  },
  {
    n: [
      "full moon with face",
      "full_moon_with_face"
    ],
    u: "1f31d"
  },
  {
    n: [
      "sun with face",
      "sun_with_face"
    ],
    u: "1f31e"
  },
  {
    n: [
      "white medium star",
      "star"
    ],
    u: "2b50"
  },
  {
    n: [
      "glowing star",
      "star2"
    ],
    u: "1f31f"
  },
  {
    n: [
      "shooting star",
      "stars"
    ],
    u: "1f320"
  },
  {
    n: [
      "cloud"
    ],
    u: "2601-fe0f"
  },
  {
    n: [
      "sun behind cloud",
      "partly_sunny"
    ],
    u: "26c5"
  },
  {
    n: [
      "thunder_cloud_and_rain"
    ],
    u: "26c8-fe0f"
  },
  {
    n: [
      "mostly_sunny",
      "sun_small_cloud"
    ],
    u: "1f324-fe0f"
  },
  {
    n: [
      "barely_sunny",
      "sun_behind_cloud"
    ],
    u: "1f325-fe0f"
  },
  {
    n: [
      "partly_sunny_rain",
      "sun_behind_rain_cloud"
    ],
    u: "1f326-fe0f"
  },
  {
    n: [
      "rain_cloud"
    ],
    u: "1f327-fe0f"
  },
  {
    n: [
      "snow_cloud"
    ],
    u: "1f328-fe0f"
  },
  {
    n: [
      "lightning",
      "lightning_cloud"
    ],
    u: "1f329-fe0f"
  },
  {
    n: [
      "tornado",
      "tornado_cloud"
    ],
    u: "1f32a-fe0f"
  },
  {
    n: [
      "fog"
    ],
    u: "1f32b-fe0f"
  },
  {
    n: [
      "wind_blowing_face"
    ],
    u: "1f32c-fe0f"
  },
  {
    n: [
      "cyclone"
    ],
    u: "1f300"
  },
  {
    n: [
      "rainbow"
    ],
    u: "1f308"
  },
  {
    n: [
      "closed umbrella",
      "closed_umbrella"
    ],
    u: "1f302"
  },
  {
    n: [
      "umbrella"
    ],
    u: "2602-fe0f"
  },
  {
    n: [
      "umbrella with rain drops",
      "umbrella_with_rain_drops"
    ],
    u: "2614"
  },
  {
    n: [
      "umbrella_on_ground"
    ],
    u: "26f1-fe0f"
  },
  {
    n: [
      "high voltage sign",
      "zap"
    ],
    u: "26a1"
  },
  {
    n: [
      "snowflake"
    ],
    u: "2744-fe0f"
  },
  {
    n: [
      "snowman"
    ],
    u: "2603-fe0f"
  },
  {
    n: [
      "snowman without snow",
      "snowman_without_snow"
    ],
    u: "26c4"
  },
  {
    n: [
      "comet"
    ],
    u: "2604-fe0f"
  },
  {
    n: [
      "fire"
    ],
    u: "1f525"
  },
  {
    n: [
      "droplet"
    ],
    u: "1f4a7"
  },
  {
    n: [
      "water wave",
      "ocean"
    ],
    u: "1f30a"
  }
];
const objects$1 = [
  {
    n: [
      "speaker with cancellation stroke",
      "mute"
    ],
    u: "1f507"
  },
  {
    n: [
      "speaker"
    ],
    u: "1f508"
  },
  {
    n: [
      "speaker with one sound wave",
      "sound"
    ],
    u: "1f509"
  },
  {
    n: [
      "speaker with three sound waves",
      "loud_sound"
    ],
    u: "1f50a"
  },
  {
    n: [
      "public address loudspeaker",
      "loudspeaker"
    ],
    u: "1f4e2"
  },
  {
    n: [
      "cheering megaphone",
      "mega"
    ],
    u: "1f4e3"
  },
  {
    n: [
      "postal horn",
      "postal_horn"
    ],
    u: "1f4ef"
  },
  {
    n: [
      "bell"
    ],
    u: "1f514"
  },
  {
    n: [
      "bell with cancellation stroke",
      "no_bell"
    ],
    u: "1f515"
  },
  {
    n: [
      "musical score",
      "musical_score"
    ],
    u: "1f3bc"
  },
  {
    n: [
      "musical note",
      "musical_note"
    ],
    u: "1f3b5"
  },
  {
    n: [
      "multiple musical notes",
      "notes"
    ],
    u: "1f3b6"
  },
  {
    n: [
      "studio_microphone"
    ],
    u: "1f399-fe0f"
  },
  {
    n: [
      "level_slider"
    ],
    u: "1f39a-fe0f"
  },
  {
    n: [
      "control_knobs"
    ],
    u: "1f39b-fe0f"
  },
  {
    n: [
      "microphone"
    ],
    u: "1f3a4"
  },
  {
    n: [
      "headphone",
      "headphones"
    ],
    u: "1f3a7"
  },
  {
    n: [
      "radio"
    ],
    u: "1f4fb"
  },
  {
    n: [
      "saxophone"
    ],
    u: "1f3b7"
  },
  {
    n: [
      "guitar"
    ],
    u: "1f3b8"
  },
  {
    n: [
      "musical keyboard",
      "musical_keyboard"
    ],
    u: "1f3b9"
  },
  {
    n: [
      "trumpet"
    ],
    u: "1f3ba"
  },
  {
    n: [
      "violin"
    ],
    u: "1f3bb"
  },
  {
    n: [
      "drum with drumsticks",
      "drum_with_drumsticks"
    ],
    u: "1f941"
  },
  {
    n: [
      "mobile phone",
      "iphone"
    ],
    u: "1f4f1"
  },
  {
    n: [
      "mobile phone with rightwards arrow at left",
      "calling"
    ],
    u: "1f4f2"
  },
  {
    n: [
      "black telephone",
      "phone",
      "telephone"
    ],
    u: "260e-fe0f"
  },
  {
    n: [
      "telephone receiver",
      "telephone_receiver"
    ],
    u: "1f4de"
  },
  {
    n: [
      "pager"
    ],
    u: "1f4df"
  },
  {
    n: [
      "fax machine",
      "fax"
    ],
    u: "1f4e0"
  },
  {
    n: [
      "battery"
    ],
    u: "1f50b"
  },
  {
    n: [
      "electric plug",
      "electric_plug"
    ],
    u: "1f50c"
  },
  {
    n: [
      "personal computer",
      "computer"
    ],
    u: "1f4bb"
  },
  {
    n: [
      "desktop_computer"
    ],
    u: "1f5a5-fe0f"
  },
  {
    n: [
      "printer"
    ],
    u: "1f5a8-fe0f"
  },
  {
    n: [
      "keyboard"
    ],
    u: "2328-fe0f"
  },
  {
    n: [
      "three_button_mouse"
    ],
    u: "1f5b1-fe0f"
  },
  {
    n: [
      "trackball"
    ],
    u: "1f5b2-fe0f"
  },
  {
    n: [
      "minidisc"
    ],
    u: "1f4bd"
  },
  {
    n: [
      "floppy disk",
      "floppy_disk"
    ],
    u: "1f4be"
  },
  {
    n: [
      "optical disc",
      "cd"
    ],
    u: "1f4bf"
  },
  {
    n: [
      "dvd"
    ],
    u: "1f4c0"
  },
  {
    n: [
      "movie camera",
      "movie_camera"
    ],
    u: "1f3a5"
  },
  {
    n: [
      "film_frames"
    ],
    u: "1f39e-fe0f"
  },
  {
    n: [
      "film_projector"
    ],
    u: "1f4fd-fe0f"
  },
  {
    n: [
      "clapper board",
      "clapper"
    ],
    u: "1f3ac"
  },
  {
    n: [
      "television",
      "tv"
    ],
    u: "1f4fa"
  },
  {
    n: [
      "camera"
    ],
    u: "1f4f7"
  },
  {
    n: [
      "camera with flash",
      "camera_with_flash"
    ],
    u: "1f4f8"
  },
  {
    n: [
      "video camera",
      "video_camera"
    ],
    u: "1f4f9"
  },
  {
    n: [
      "videocassette",
      "vhs"
    ],
    u: "1f4fc"
  },
  {
    n: [
      "left-pointing magnifying glass",
      "mag"
    ],
    u: "1f50d"
  },
  {
    n: [
      "right-pointing magnifying glass",
      "mag_right"
    ],
    u: "1f50e"
  },
  {
    n: [
      "microscope"
    ],
    u: "1f52c"
  },
  {
    n: [
      "telescope"
    ],
    u: "1f52d"
  },
  {
    n: [
      "satellite antenna",
      "satellite_antenna"
    ],
    u: "1f4e1"
  },
  {
    n: [
      "candle"
    ],
    u: "1f56f-fe0f"
  },
  {
    n: [
      "electric light bulb",
      "bulb"
    ],
    u: "1f4a1"
  },
  {
    n: [
      "electric torch",
      "flashlight"
    ],
    u: "1f526"
  },
  {
    n: [
      "izakaya lantern",
      "izakaya_lantern",
      "lantern"
    ],
    u: "1f3ee"
  },
  {
    n: [
      "notebook with decorative cover",
      "notebook_with_decorative_cover"
    ],
    u: "1f4d4"
  },
  {
    n: [
      "closed book",
      "closed_book"
    ],
    u: "1f4d5"
  },
  {
    n: [
      "open book",
      "book",
      "open_book"
    ],
    u: "1f4d6"
  },
  {
    n: [
      "green book",
      "green_book"
    ],
    u: "1f4d7"
  },
  {
    n: [
      "blue book",
      "blue_book"
    ],
    u: "1f4d8"
  },
  {
    n: [
      "orange book",
      "orange_book"
    ],
    u: "1f4d9"
  },
  {
    n: [
      "books"
    ],
    u: "1f4da"
  },
  {
    n: [
      "notebook"
    ],
    u: "1f4d3"
  },
  {
    n: [
      "ledger"
    ],
    u: "1f4d2"
  },
  {
    n: [
      "page with curl",
      "page_with_curl"
    ],
    u: "1f4c3"
  },
  {
    n: [
      "scroll"
    ],
    u: "1f4dc"
  },
  {
    n: [
      "page facing up",
      "page_facing_up"
    ],
    u: "1f4c4"
  },
  {
    n: [
      "newspaper"
    ],
    u: "1f4f0"
  },
  {
    n: [
      "rolled_up_newspaper"
    ],
    u: "1f5de-fe0f"
  },
  {
    n: [
      "bookmark tabs",
      "bookmark_tabs"
    ],
    u: "1f4d1"
  },
  {
    n: [
      "bookmark"
    ],
    u: "1f516"
  },
  {
    n: [
      "label"
    ],
    u: "1f3f7-fe0f"
  },
  {
    n: [
      "money bag",
      "moneybag"
    ],
    u: "1f4b0"
  },
  {
    n: [
      "banknote with yen sign",
      "yen"
    ],
    u: "1f4b4"
  },
  {
    n: [
      "banknote with dollar sign",
      "dollar"
    ],
    u: "1f4b5"
  },
  {
    n: [
      "banknote with euro sign",
      "euro"
    ],
    u: "1f4b6"
  },
  {
    n: [
      "banknote with pound sign",
      "pound"
    ],
    u: "1f4b7"
  },
  {
    n: [
      "money with wings",
      "money_with_wings"
    ],
    u: "1f4b8"
  },
  {
    n: [
      "credit card",
      "credit_card"
    ],
    u: "1f4b3"
  },
  {
    n: [
      "chart with upwards trend and yen sign",
      "chart"
    ],
    u: "1f4b9"
  },
  {
    n: [
      "currency exchange",
      "currency_exchange"
    ],
    u: "1f4b1"
  },
  {
    n: [
      "heavy dollar sign",
      "heavy_dollar_sign"
    ],
    u: "1f4b2"
  },
  {
    n: [
      "envelope",
      "email"
    ],
    u: "2709-fe0f"
  },
  {
    n: [
      "e-mail symbol",
      "e-mail"
    ],
    u: "1f4e7"
  },
  {
    n: [
      "incoming envelope",
      "incoming_envelope"
    ],
    u: "1f4e8"
  },
  {
    n: [
      "envelope with downwards arrow above",
      "envelope_with_arrow"
    ],
    u: "1f4e9"
  },
  {
    n: [
      "outbox tray",
      "outbox_tray"
    ],
    u: "1f4e4"
  },
  {
    n: [
      "inbox tray",
      "inbox_tray"
    ],
    u: "1f4e5"
  },
  {
    n: [
      "package"
    ],
    u: "1f4e6"
  },
  {
    n: [
      "closed mailbox with raised flag",
      "mailbox"
    ],
    u: "1f4eb"
  },
  {
    n: [
      "closed mailbox with lowered flag",
      "mailbox_closed"
    ],
    u: "1f4ea"
  },
  {
    n: [
      "open mailbox with raised flag",
      "mailbox_with_mail"
    ],
    u: "1f4ec"
  },
  {
    n: [
      "open mailbox with lowered flag",
      "mailbox_with_no_mail"
    ],
    u: "1f4ed"
  },
  {
    n: [
      "postbox"
    ],
    u: "1f4ee"
  },
  {
    n: [
      "ballot_box_with_ballot"
    ],
    u: "1f5f3-fe0f"
  },
  {
    n: [
      "pencil",
      "pencil2"
    ],
    u: "270f-fe0f"
  },
  {
    n: [
      "black nib",
      "black_nib"
    ],
    u: "2712-fe0f"
  },
  {
    n: [
      "lower_left_fountain_pen"
    ],
    u: "1f58b-fe0f"
  },
  {
    n: [
      "lower_left_ballpoint_pen"
    ],
    u: "1f58a-fe0f"
  },
  {
    n: [
      "lower_left_paintbrush"
    ],
    u: "1f58c-fe0f"
  },
  {
    n: [
      "lower_left_crayon"
    ],
    u: "1f58d-fe0f"
  },
  {
    n: [
      "memo",
      "pencil"
    ],
    u: "1f4dd"
  },
  {
    n: [
      "briefcase"
    ],
    u: "1f4bc"
  },
  {
    n: [
      "file folder",
      "file_folder"
    ],
    u: "1f4c1"
  },
  {
    n: [
      "open file folder",
      "open_file_folder"
    ],
    u: "1f4c2"
  },
  {
    n: [
      "card_index_dividers"
    ],
    u: "1f5c2-fe0f"
  },
  {
    n: [
      "calendar",
      "date"
    ],
    u: "1f4c5"
  },
  {
    n: [
      "tear-off calendar",
      "calendar"
    ],
    u: "1f4c6"
  },
  {
    n: [
      "spiral_note_pad"
    ],
    u: "1f5d2-fe0f"
  },
  {
    n: [
      "spiral_calendar_pad"
    ],
    u: "1f5d3-fe0f"
  },
  {
    n: [
      "card index",
      "card_index"
    ],
    u: "1f4c7"
  },
  {
    n: [
      "chart with upwards trend",
      "chart_with_upwards_trend"
    ],
    u: "1f4c8"
  },
  {
    n: [
      "chart with downwards trend",
      "chart_with_downwards_trend"
    ],
    u: "1f4c9"
  },
  {
    n: [
      "bar chart",
      "bar_chart"
    ],
    u: "1f4ca"
  },
  {
    n: [
      "clipboard"
    ],
    u: "1f4cb"
  },
  {
    n: [
      "pushpin"
    ],
    u: "1f4cc"
  },
  {
    n: [
      "round pushpin",
      "round_pushpin"
    ],
    u: "1f4cd"
  },
  {
    n: [
      "paperclip"
    ],
    u: "1f4ce"
  },
  {
    n: [
      "linked_paperclips"
    ],
    u: "1f587-fe0f"
  },
  {
    n: [
      "straight ruler",
      "straight_ruler"
    ],
    u: "1f4cf"
  },
  {
    n: [
      "triangular ruler",
      "triangular_ruler"
    ],
    u: "1f4d0"
  },
  {
    n: [
      "black scissors",
      "scissors"
    ],
    u: "2702-fe0f"
  },
  {
    n: [
      "card_file_box"
    ],
    u: "1f5c3-fe0f"
  },
  {
    n: [
      "file_cabinet"
    ],
    u: "1f5c4-fe0f"
  },
  {
    n: [
      "wastebasket"
    ],
    u: "1f5d1-fe0f"
  },
  {
    n: [
      "lock"
    ],
    u: "1f512"
  },
  {
    n: [
      "open lock",
      "unlock"
    ],
    u: "1f513"
  },
  {
    n: [
      "lock with ink pen",
      "lock_with_ink_pen"
    ],
    u: "1f50f"
  },
  {
    n: [
      "closed lock with key",
      "closed_lock_with_key"
    ],
    u: "1f510"
  },
  {
    n: [
      "key"
    ],
    u: "1f511"
  },
  {
    n: [
      "old_key"
    ],
    u: "1f5dd-fe0f"
  },
  {
    n: [
      "hammer"
    ],
    u: "1f528"
  },
  {
    n: [
      "pick"
    ],
    u: "26cf-fe0f"
  },
  {
    n: [
      "hammer_and_pick"
    ],
    u: "2692-fe0f"
  },
  {
    n: [
      "hammer_and_wrench"
    ],
    u: "1f6e0-fe0f"
  },
  {
    n: [
      "dagger_knife"
    ],
    u: "1f5e1-fe0f"
  },
  {
    n: [
      "crossed_swords"
    ],
    u: "2694-fe0f"
  },
  {
    n: [
      "pistol",
      "gun"
    ],
    u: "1f52b"
  },
  {
    n: [
      "bow and arrow",
      "bow_and_arrow"
    ],
    u: "1f3f9"
  },
  {
    n: [
      "shield"
    ],
    u: "1f6e1-fe0f"
  },
  {
    n: [
      "wrench"
    ],
    u: "1f527"
  },
  {
    n: [
      "nut and bolt",
      "nut_and_bolt"
    ],
    u: "1f529"
  },
  {
    n: [
      "gear"
    ],
    u: "2699-fe0f"
  },
  {
    n: [
      "compression"
    ],
    u: "1f5dc-fe0f"
  },
  {
    n: [
      "alembic"
    ],
    u: "2697-fe0f"
  },
  {
    n: [
      "scales"
    ],
    u: "2696-fe0f"
  },
  {
    n: [
      "link symbol",
      "link"
    ],
    u: "1f517"
  },
  {
    n: [
      "chains"
    ],
    u: "26d3-fe0f"
  },
  {
    n: [
      "syringe"
    ],
    u: "1f489"
  },
  {
    n: [
      "pill"
    ],
    u: "1f48a"
  },
  {
    n: [
      "smoking symbol",
      "smoking"
    ],
    u: "1f6ac"
  },
  {
    n: [
      "coffin"
    ],
    u: "26b0-fe0f"
  },
  {
    n: [
      "funeral_urn"
    ],
    u: "26b1-fe0f"
  },
  {
    n: [
      "moyai"
    ],
    u: "1f5ff"
  },
  {
    n: [
      "oil_drum"
    ],
    u: "1f6e2-fe0f"
  },
  {
    n: [
      "crystal ball",
      "crystal_ball"
    ],
    u: "1f52e"
  },
  {
    n: [
      "shopping trolley",
      "shopping_trolley"
    ],
    u: "1f6d2"
  }
];
const symbols$1 = [
  {
    n: [
      "automated teller machine",
      "atm"
    ],
    u: "1f3e7"
  },
  {
    n: [
      "put litter in its place symbol",
      "put_litter_in_its_place"
    ],
    u: "1f6ae"
  },
  {
    n: [
      "potable water symbol",
      "potable_water"
    ],
    u: "1f6b0"
  },
  {
    n: [
      "wheelchair symbol",
      "wheelchair"
    ],
    u: "267f"
  },
  {
    n: [
      "mens symbol",
      "mens"
    ],
    u: "1f6b9"
  },
  {
    n: [
      "womens symbol",
      "womens"
    ],
    u: "1f6ba"
  },
  {
    n: [
      "restroom"
    ],
    u: "1f6bb"
  },
  {
    n: [
      "baby symbol",
      "baby_symbol"
    ],
    u: "1f6bc"
  },
  {
    n: [
      "water closet",
      "wc"
    ],
    u: "1f6be"
  },
  {
    n: [
      "passport control",
      "passport_control"
    ],
    u: "1f6c2"
  },
  {
    n: [
      "customs"
    ],
    u: "1f6c3"
  },
  {
    n: [
      "baggage claim",
      "baggage_claim"
    ],
    u: "1f6c4"
  },
  {
    n: [
      "left luggage",
      "left_luggage"
    ],
    u: "1f6c5"
  },
  {
    n: [
      "warning sign",
      "warning"
    ],
    u: "26a0-fe0f"
  },
  {
    n: [
      "children crossing",
      "children_crossing"
    ],
    u: "1f6b8"
  },
  {
    n: [
      "no entry",
      "no_entry"
    ],
    u: "26d4"
  },
  {
    n: [
      "no entry sign",
      "no_entry_sign"
    ],
    u: "1f6ab"
  },
  {
    n: [
      "no bicycles",
      "no_bicycles"
    ],
    u: "1f6b3"
  },
  {
    n: [
      "no smoking symbol",
      "no_smoking"
    ],
    u: "1f6ad"
  },
  {
    n: [
      "do not litter symbol",
      "do_not_litter"
    ],
    u: "1f6af"
  },
  {
    n: [
      "non-potable water symbol",
      "non-potable_water"
    ],
    u: "1f6b1"
  },
  {
    n: [
      "no pedestrians",
      "no_pedestrians"
    ],
    u: "1f6b7"
  },
  {
    n: [
      "no mobile phones",
      "no_mobile_phones"
    ],
    u: "1f4f5"
  },
  {
    n: [
      "no one under eighteen symbol",
      "underage"
    ],
    u: "1f51e"
  },
  {
    n: [
      "radioactive_sign"
    ],
    u: "2622-fe0f"
  },
  {
    n: [
      "biohazard_sign"
    ],
    u: "2623-fe0f"
  },
  {
    n: [
      "upwards black arrow",
      "arrow_up"
    ],
    u: "2b06-fe0f"
  },
  {
    n: [
      "north east arrow",
      "arrow_upper_right"
    ],
    u: "2197-fe0f"
  },
  {
    n: [
      "black rightwards arrow",
      "arrow_right"
    ],
    u: "27a1-fe0f"
  },
  {
    n: [
      "south east arrow",
      "arrow_lower_right"
    ],
    u: "2198-fe0f"
  },
  {
    n: [
      "downwards black arrow",
      "arrow_down"
    ],
    u: "2b07-fe0f"
  },
  {
    n: [
      "south west arrow",
      "arrow_lower_left"
    ],
    u: "2199-fe0f"
  },
  {
    n: [
      "leftwards black arrow",
      "arrow_left"
    ],
    u: "2b05-fe0f"
  },
  {
    n: [
      "north west arrow",
      "arrow_upper_left"
    ],
    u: "2196-fe0f"
  },
  {
    n: [
      "up down arrow",
      "arrow_up_down"
    ],
    u: "2195-fe0f"
  },
  {
    n: [
      "left right arrow",
      "left_right_arrow"
    ],
    u: "2194-fe0f"
  },
  {
    n: [
      "leftwards arrow with hook",
      "leftwards_arrow_with_hook"
    ],
    u: "21a9-fe0f"
  },
  {
    n: [
      "rightwards arrow with hook",
      "arrow_right_hook"
    ],
    u: "21aa-fe0f"
  },
  {
    n: [
      "arrow pointing rightwards then curving upwards",
      "arrow_heading_up"
    ],
    u: "2934-fe0f"
  },
  {
    n: [
      "arrow pointing rightwards then curving downwards",
      "arrow_heading_down"
    ],
    u: "2935-fe0f"
  },
  {
    n: [
      "clockwise downwards and upwards open circle arrows",
      "arrows_clockwise"
    ],
    u: "1f503"
  },
  {
    n: [
      "anticlockwise downwards and upwards open circle arrows",
      "arrows_counterclockwise"
    ],
    u: "1f504"
  },
  {
    n: [
      "back with leftwards arrow above",
      "back"
    ],
    u: "1f519"
  },
  {
    n: [
      "end with leftwards arrow above",
      "end"
    ],
    u: "1f51a"
  },
  {
    n: [
      "on with exclamation mark with left right arrow above",
      "on"
    ],
    u: "1f51b"
  },
  {
    n: [
      "soon with rightwards arrow above",
      "soon"
    ],
    u: "1f51c"
  },
  {
    n: [
      "top with upwards arrow above",
      "top"
    ],
    u: "1f51d"
  },
  {
    n: [
      "place of worship",
      "place_of_worship"
    ],
    u: "1f6d0"
  },
  {
    n: [
      "atom_symbol"
    ],
    u: "269b-fe0f"
  },
  {
    n: [
      "om_symbol"
    ],
    u: "1f549-fe0f"
  },
  {
    n: [
      "star_of_david"
    ],
    u: "2721-fe0f"
  },
  {
    n: [
      "wheel_of_dharma"
    ],
    u: "2638-fe0f"
  },
  {
    n: [
      "yin_yang"
    ],
    u: "262f-fe0f"
  },
  {
    n: [
      "latin_cross"
    ],
    u: "271d-fe0f"
  },
  {
    n: [
      "orthodox_cross"
    ],
    u: "2626-fe0f"
  },
  {
    n: [
      "star_and_crescent"
    ],
    u: "262a-fe0f"
  },
  {
    n: [
      "peace_symbol"
    ],
    u: "262e-fe0f"
  },
  {
    n: [
      "menorah with nine branches",
      "menorah_with_nine_branches"
    ],
    u: "1f54e"
  },
  {
    n: [
      "six pointed star with middle dot",
      "six_pointed_star"
    ],
    u: "1f52f"
  },
  {
    n: [
      "aries"
    ],
    u: "2648"
  },
  {
    n: [
      "taurus"
    ],
    u: "2649"
  },
  {
    n: [
      "gemini"
    ],
    u: "264a"
  },
  {
    n: [
      "cancer"
    ],
    u: "264b"
  },
  {
    n: [
      "leo"
    ],
    u: "264c"
  },
  {
    n: [
      "virgo"
    ],
    u: "264d"
  },
  {
    n: [
      "libra"
    ],
    u: "264e"
  },
  {
    n: [
      "scorpius"
    ],
    u: "264f"
  },
  {
    n: [
      "sagittarius"
    ],
    u: "2650"
  },
  {
    n: [
      "capricorn"
    ],
    u: "2651"
  },
  {
    n: [
      "aquarius"
    ],
    u: "2652"
  },
  {
    n: [
      "pisces"
    ],
    u: "2653"
  },
  {
    n: [
      "ophiuchus"
    ],
    u: "26ce"
  },
  {
    n: [
      "twisted rightwards arrows",
      "twisted_rightwards_arrows"
    ],
    u: "1f500"
  },
  {
    n: [
      "clockwise rightwards and leftwards open circle arrows",
      "repeat"
    ],
    u: "1f501"
  },
  {
    n: [
      "clockwise rightwards and leftwards open circle arrows with circled one overlay",
      "repeat_one"
    ],
    u: "1f502"
  },
  {
    n: [
      "black right-pointing triangle",
      "arrow_forward"
    ],
    u: "25b6-fe0f"
  },
  {
    n: [
      "black right-pointing double triangle",
      "fast_forward"
    ],
    u: "23e9"
  },
  {
    n: [
      "black_right_pointing_double_triangle_with_vertical_bar"
    ],
    u: "23ed-fe0f"
  },
  {
    n: [
      "black_right_pointing_triangle_with_double_vertical_bar"
    ],
    u: "23ef-fe0f"
  },
  {
    n: [
      "black left-pointing triangle",
      "arrow_backward"
    ],
    u: "25c0-fe0f"
  },
  {
    n: [
      "black left-pointing double triangle",
      "rewind"
    ],
    u: "23ea"
  },
  {
    n: [
      "black_left_pointing_double_triangle_with_vertical_bar"
    ],
    u: "23ee-fe0f"
  },
  {
    n: [
      "up-pointing small red triangle",
      "arrow_up_small"
    ],
    u: "1f53c"
  },
  {
    n: [
      "black up-pointing double triangle",
      "arrow_double_up"
    ],
    u: "23eb"
  },
  {
    n: [
      "down-pointing small red triangle",
      "arrow_down_small"
    ],
    u: "1f53d"
  },
  {
    n: [
      "black down-pointing double triangle",
      "arrow_double_down"
    ],
    u: "23ec"
  },
  {
    n: [
      "double_vertical_bar"
    ],
    u: "23f8-fe0f"
  },
  {
    n: [
      "black_square_for_stop"
    ],
    u: "23f9-fe0f"
  },
  {
    n: [
      "black_circle_for_record"
    ],
    u: "23fa-fe0f"
  },
  {
    n: [
      "eject"
    ],
    u: "23cf-fe0f"
  },
  {
    n: [
      "cinema"
    ],
    u: "1f3a6"
  },
  {
    n: [
      "low brightness symbol",
      "low_brightness"
    ],
    u: "1f505"
  },
  {
    n: [
      "high brightness symbol",
      "high_brightness"
    ],
    u: "1f506"
  },
  {
    n: [
      "antenna with bars",
      "signal_strength"
    ],
    u: "1f4f6"
  },
  {
    n: [
      "vibration mode",
      "vibration_mode"
    ],
    u: "1f4f3"
  },
  {
    n: [
      "mobile phone off",
      "mobile_phone_off"
    ],
    u: "1f4f4"
  },
  {
    n: [
      "female_sign"
    ],
    u: "2640-fe0f"
  },
  {
    n: [
      "male_sign"
    ],
    u: "2642-fe0f"
  },
  {
    n: [
      "medical_symbol",
      "staff_of_aesculapius"
    ],
    u: "2695-fe0f"
  },
  {
    n: [
      "black universal recycling symbol",
      "recycle"
    ],
    u: "267b-fe0f"
  },
  {
    n: [
      "fleur_de_lis"
    ],
    u: "269c-fe0f"
  },
  {
    n: [
      "trident emblem",
      "trident"
    ],
    u: "1f531"
  },
  {
    n: [
      "name badge",
      "name_badge"
    ],
    u: "1f4db"
  },
  {
    n: [
      "japanese symbol for beginner",
      "beginner"
    ],
    u: "1f530"
  },
  {
    n: [
      "heavy large circle",
      "o"
    ],
    u: "2b55"
  },
  {
    n: [
      "white heavy check mark",
      "white_check_mark"
    ],
    u: "2705"
  },
  {
    n: [
      "ballot box with check",
      "ballot_box_with_check"
    ],
    u: "2611-fe0f"
  },
  {
    n: [
      "heavy check mark",
      "heavy_check_mark"
    ],
    u: "2714-fe0f"
  },
  {
    n: [
      "heavy multiplication x",
      "heavy_multiplication_x"
    ],
    u: "2716-fe0f"
  },
  {
    n: [
      "cross mark",
      "x"
    ],
    u: "274c"
  },
  {
    n: [
      "negative squared cross mark",
      "negative_squared_cross_mark"
    ],
    u: "274e"
  },
  {
    n: [
      "heavy plus sign",
      "heavy_plus_sign"
    ],
    u: "2795"
  },
  {
    n: [
      "heavy minus sign",
      "heavy_minus_sign"
    ],
    u: "2796"
  },
  {
    n: [
      "heavy division sign",
      "heavy_division_sign"
    ],
    u: "2797"
  },
  {
    n: [
      "curly loop",
      "curly_loop"
    ],
    u: "27b0"
  },
  {
    n: [
      "double curly loop",
      "loop"
    ],
    u: "27bf"
  },
  {
    n: [
      "part alternation mark",
      "part_alternation_mark"
    ],
    u: "303d-fe0f"
  },
  {
    n: [
      "eight spoked asterisk",
      "eight_spoked_asterisk"
    ],
    u: "2733-fe0f"
  },
  {
    n: [
      "eight pointed black star",
      "eight_pointed_black_star"
    ],
    u: "2734-fe0f"
  },
  {
    n: [
      "sparkle"
    ],
    u: "2747-fe0f"
  },
  {
    n: [
      "double exclamation mark",
      "bangbang"
    ],
    u: "203c-fe0f"
  },
  {
    n: [
      "exclamation question mark",
      "interrobang"
    ],
    u: "2049-fe0f"
  },
  {
    n: [
      "black question mark ornament",
      "question"
    ],
    u: "2753"
  },
  {
    n: [
      "white question mark ornament",
      "grey_question"
    ],
    u: "2754"
  },
  {
    n: [
      "white exclamation mark ornament",
      "grey_exclamation"
    ],
    u: "2755"
  },
  {
    n: [
      "heavy exclamation mark symbol",
      "exclamation",
      "heavy_exclamation_mark"
    ],
    u: "2757"
  },
  {
    n: [
      "wavy dash",
      "wavy_dash"
    ],
    u: "3030-fe0f"
  },
  {
    n: [
      "copyright sign",
      "copyright"
    ],
    u: "00a9-fe0f"
  },
  {
    n: [
      "registered sign",
      "registered"
    ],
    u: "00ae-fe0f"
  },
  {
    n: [
      "trade mark sign",
      "tm"
    ],
    u: "2122-fe0f"
  },
  {
    n: [
      "hash key",
      "hash"
    ],
    u: "0023-fe0f-20e3"
  },
  {
    n: [
      "keycap_star"
    ],
    u: "002a-fe0f-20e3"
  },
  {
    n: [
      "keycap 0",
      "zero"
    ],
    u: "0030-fe0f-20e3"
  },
  {
    n: [
      "keycap 1",
      "one"
    ],
    u: "0031-fe0f-20e3"
  },
  {
    n: [
      "keycap 2",
      "two"
    ],
    u: "0032-fe0f-20e3"
  },
  {
    n: [
      "keycap 3",
      "three"
    ],
    u: "0033-fe0f-20e3"
  },
  {
    n: [
      "keycap 4",
      "four"
    ],
    u: "0034-fe0f-20e3"
  },
  {
    n: [
      "keycap 5",
      "five"
    ],
    u: "0035-fe0f-20e3"
  },
  {
    n: [
      "keycap 6",
      "six"
    ],
    u: "0036-fe0f-20e3"
  },
  {
    n: [
      "keycap 7",
      "seven"
    ],
    u: "0037-fe0f-20e3"
  },
  {
    n: [
      "keycap 8",
      "eight"
    ],
    u: "0038-fe0f-20e3"
  },
  {
    n: [
      "keycap 9",
      "nine"
    ],
    u: "0039-fe0f-20e3"
  },
  {
    n: [
      "keycap ten",
      "keycap_ten"
    ],
    u: "1f51f"
  },
  {
    n: [
      "hundred points symbol",
      "100"
    ],
    u: "1f4af"
  },
  {
    n: [
      "input symbol for latin capital letters",
      "capital_abcd"
    ],
    u: "1f520"
  },
  {
    n: [
      "input symbol for latin small letters",
      "abcd"
    ],
    u: "1f521"
  },
  {
    n: [
      "input symbol for numbers",
      "1234"
    ],
    u: "1f522"
  },
  {
    n: [
      "input symbol for symbols",
      "symbols"
    ],
    u: "1f523"
  },
  {
    n: [
      "input symbol for latin letters",
      "abc"
    ],
    u: "1f524"
  },
  {
    n: [
      "negative squared latin capital letter a",
      "a"
    ],
    u: "1f170-fe0f"
  },
  {
    n: [
      "negative squared ab",
      "ab"
    ],
    u: "1f18e"
  },
  {
    n: [
      "negative squared latin capital letter b",
      "b"
    ],
    u: "1f171-fe0f"
  },
  {
    n: [
      "squared cl",
      "cl"
    ],
    u: "1f191"
  },
  {
    n: [
      "squared cool",
      "cool"
    ],
    u: "1f192"
  },
  {
    n: [
      "squared free",
      "free"
    ],
    u: "1f193"
  },
  {
    n: [
      "information source",
      "information_source"
    ],
    u: "2139-fe0f"
  },
  {
    n: [
      "squared id",
      "id"
    ],
    u: "1f194"
  },
  {
    n: [
      "circled latin capital letter m",
      "m"
    ],
    u: "24c2-fe0f"
  },
  {
    n: [
      "squared new",
      "new"
    ],
    u: "1f195"
  },
  {
    n: [
      "squared ng",
      "ng"
    ],
    u: "1f196"
  },
  {
    n: [
      "negative squared latin capital letter o",
      "o2"
    ],
    u: "1f17e-fe0f"
  },
  {
    n: [
      "squared ok",
      "ok"
    ],
    u: "1f197"
  },
  {
    n: [
      "negative squared latin capital letter p",
      "parking"
    ],
    u: "1f17f-fe0f"
  },
  {
    n: [
      "squared sos",
      "sos"
    ],
    u: "1f198"
  },
  {
    n: [
      "squared up with exclamation mark",
      "up"
    ],
    u: "1f199"
  },
  {
    n: [
      "squared vs",
      "vs"
    ],
    u: "1f19a"
  },
  {
    n: [
      "squared katakana koko",
      "koko"
    ],
    u: "1f201"
  },
  {
    n: [
      "squared katakana sa",
      "sa"
    ],
    u: "1f202-fe0f"
  },
  {
    n: [
      "squared cjk unified ideograph-6708",
      "u6708"
    ],
    u: "1f237-fe0f"
  },
  {
    n: [
      "squared cjk unified ideograph-6709",
      "u6709"
    ],
    u: "1f236"
  },
  {
    n: [
      "squared cjk unified ideograph-6307",
      "u6307"
    ],
    u: "1f22f"
  },
  {
    n: [
      "circled ideograph advantage",
      "ideograph_advantage"
    ],
    u: "1f250"
  },
  {
    n: [
      "squared cjk unified ideograph-5272",
      "u5272"
    ],
    u: "1f239"
  },
  {
    n: [
      "squared cjk unified ideograph-7121",
      "u7121"
    ],
    u: "1f21a"
  },
  {
    n: [
      "squared cjk unified ideograph-7981",
      "u7981"
    ],
    u: "1f232"
  },
  {
    n: [
      "circled ideograph accept",
      "accept"
    ],
    u: "1f251"
  },
  {
    n: [
      "squared cjk unified ideograph-7533",
      "u7533"
    ],
    u: "1f238"
  },
  {
    n: [
      "squared cjk unified ideograph-5408",
      "u5408"
    ],
    u: "1f234"
  },
  {
    n: [
      "squared cjk unified ideograph-7a7a",
      "u7a7a"
    ],
    u: "1f233"
  },
  {
    n: [
      "circled ideograph congratulation",
      "congratulations"
    ],
    u: "3297-fe0f"
  },
  {
    n: [
      "circled ideograph secret",
      "secret"
    ],
    u: "3299-fe0f"
  },
  {
    n: [
      "squared cjk unified ideograph-55b6",
      "u55b6"
    ],
    u: "1f23a"
  },
  {
    n: [
      "squared cjk unified ideograph-6e80",
      "u6e80"
    ],
    u: "1f235"
  },
  {
    n: [
      "black small square",
      "black_small_square"
    ],
    u: "25aa-fe0f"
  },
  {
    n: [
      "white small square",
      "white_small_square"
    ],
    u: "25ab-fe0f"
  },
  {
    n: [
      "white medium square",
      "white_medium_square"
    ],
    u: "25fb-fe0f"
  },
  {
    n: [
      "black medium square",
      "black_medium_square"
    ],
    u: "25fc-fe0f"
  },
  {
    n: [
      "white medium small square",
      "white_medium_small_square"
    ],
    u: "25fd"
  },
  {
    n: [
      "black medium small square",
      "black_medium_small_square"
    ],
    u: "25fe"
  },
  {
    n: [
      "black large square",
      "black_large_square"
    ],
    u: "2b1b"
  },
  {
    n: [
      "white large square",
      "white_large_square"
    ],
    u: "2b1c"
  },
  {
    n: [
      "large orange diamond",
      "large_orange_diamond"
    ],
    u: "1f536"
  },
  {
    n: [
      "large blue diamond",
      "large_blue_diamond"
    ],
    u: "1f537"
  },
  {
    n: [
      "small orange diamond",
      "small_orange_diamond"
    ],
    u: "1f538"
  },
  {
    n: [
      "small blue diamond",
      "small_blue_diamond"
    ],
    u: "1f539"
  },
  {
    n: [
      "up-pointing red triangle",
      "small_red_triangle"
    ],
    u: "1f53a"
  },
  {
    n: [
      "down-pointing red triangle",
      "small_red_triangle_down"
    ],
    u: "1f53b"
  },
  {
    n: [
      "diamond shape with a dot inside",
      "diamond_shape_with_a_dot_inside"
    ],
    u: "1f4a0"
  },
  {
    n: [
      "radio button",
      "radio_button"
    ],
    u: "1f518"
  },
  {
    n: [
      "black square button",
      "black_square_button"
    ],
    u: "1f532"
  },
  {
    n: [
      "white square button",
      "white_square_button"
    ],
    u: "1f533"
  },
  {
    n: [
      "medium white circle",
      "white_circle"
    ],
    u: "26aa"
  },
  {
    n: [
      "medium black circle",
      "black_circle"
    ],
    u: "26ab"
  },
  {
    n: [
      "large red circle",
      "red_circle"
    ],
    u: "1f534"
  },
  {
    n: [
      "large blue circle",
      "large_blue_circle"
    ],
    u: "1f535"
  }
];
const flags$1 = [
  {
    n: [
      "chequered flag",
      "checkered_flag"
    ],
    u: "1f3c1"
  },
  {
    n: [
      "triangular flag on post",
      "triangular_flag_on_post"
    ],
    u: "1f6a9"
  },
  {
    n: [
      "crossed flags",
      "crossed_flags"
    ],
    u: "1f38c"
  },
  {
    n: [
      "waving black flag",
      "waving_black_flag"
    ],
    u: "1f3f4"
  },
  {
    n: [
      "waving_white_flag"
    ],
    u: "1f3f3-fe0f"
  },
  {
    n: [
      "rainbow-flag"
    ],
    u: "1f3f3-fe0f-200d-1f308"
  },
  {
    n: [
      "ascension island flag",
      "flag-ac"
    ],
    u: "1f1e6-1f1e8"
  },
  {
    n: [
      "andorra flag",
      "flag-ad"
    ],
    u: "1f1e6-1f1e9"
  },
  {
    n: [
      "united arab emirates flag",
      "flag-ae"
    ],
    u: "1f1e6-1f1ea"
  },
  {
    n: [
      "afghanistan flag",
      "flag-af"
    ],
    u: "1f1e6-1f1eb"
  },
  {
    n: [
      "antigua & barbuda flag",
      "flag-ag"
    ],
    u: "1f1e6-1f1ec"
  },
  {
    n: [
      "anguilla flag",
      "flag-ai"
    ],
    u: "1f1e6-1f1ee"
  },
  {
    n: [
      "albania flag",
      "flag-al"
    ],
    u: "1f1e6-1f1f1"
  },
  {
    n: [
      "armenia flag",
      "flag-am"
    ],
    u: "1f1e6-1f1f2"
  },
  {
    n: [
      "angola flag",
      "flag-ao"
    ],
    u: "1f1e6-1f1f4"
  },
  {
    n: [
      "antarctica flag",
      "flag-aq"
    ],
    u: "1f1e6-1f1f6"
  },
  {
    n: [
      "argentina flag",
      "flag-ar"
    ],
    u: "1f1e6-1f1f7"
  },
  {
    n: [
      "american samoa flag",
      "flag-as"
    ],
    u: "1f1e6-1f1f8"
  },
  {
    n: [
      "austria flag",
      "flag-at"
    ],
    u: "1f1e6-1f1f9"
  },
  {
    n: [
      "australia flag",
      "flag-au"
    ],
    u: "1f1e6-1f1fa"
  },
  {
    n: [
      "aruba flag",
      "flag-aw"
    ],
    u: "1f1e6-1f1fc"
  },
  {
    n: [
      "\xE5land islands flag",
      "flag-ax"
    ],
    u: "1f1e6-1f1fd"
  },
  {
    n: [
      "azerbaijan flag",
      "flag-az"
    ],
    u: "1f1e6-1f1ff"
  },
  {
    n: [
      "bosnia & herzegovina flag",
      "flag-ba"
    ],
    u: "1f1e7-1f1e6"
  },
  {
    n: [
      "barbados flag",
      "flag-bb"
    ],
    u: "1f1e7-1f1e7"
  },
  {
    n: [
      "bangladesh flag",
      "flag-bd"
    ],
    u: "1f1e7-1f1e9"
  },
  {
    n: [
      "belgium flag",
      "flag-be"
    ],
    u: "1f1e7-1f1ea"
  },
  {
    n: [
      "burkina faso flag",
      "flag-bf"
    ],
    u: "1f1e7-1f1eb"
  },
  {
    n: [
      "bulgaria flag",
      "flag-bg"
    ],
    u: "1f1e7-1f1ec"
  },
  {
    n: [
      "bahrain flag",
      "flag-bh"
    ],
    u: "1f1e7-1f1ed"
  },
  {
    n: [
      "burundi flag",
      "flag-bi"
    ],
    u: "1f1e7-1f1ee"
  },
  {
    n: [
      "benin flag",
      "flag-bj"
    ],
    u: "1f1e7-1f1ef"
  },
  {
    n: [
      "st. barth\xE9lemy flag",
      "flag-bl"
    ],
    u: "1f1e7-1f1f1"
  },
  {
    n: [
      "bermuda flag",
      "flag-bm"
    ],
    u: "1f1e7-1f1f2"
  },
  {
    n: [
      "brunei flag",
      "flag-bn"
    ],
    u: "1f1e7-1f1f3"
  },
  {
    n: [
      "bolivia flag",
      "flag-bo"
    ],
    u: "1f1e7-1f1f4"
  },
  {
    n: [
      "caribbean netherlands flag",
      "flag-bq"
    ],
    u: "1f1e7-1f1f6"
  },
  {
    n: [
      "brazil flag",
      "flag-br"
    ],
    u: "1f1e7-1f1f7"
  },
  {
    n: [
      "bahamas flag",
      "flag-bs"
    ],
    u: "1f1e7-1f1f8"
  },
  {
    n: [
      "bhutan flag",
      "flag-bt"
    ],
    u: "1f1e7-1f1f9"
  },
  {
    n: [
      "bouvet island flag",
      "flag-bv"
    ],
    u: "1f1e7-1f1fb"
  },
  {
    n: [
      "botswana flag",
      "flag-bw"
    ],
    u: "1f1e7-1f1fc"
  },
  {
    n: [
      "belarus flag",
      "flag-by"
    ],
    u: "1f1e7-1f1fe"
  },
  {
    n: [
      "belize flag",
      "flag-bz"
    ],
    u: "1f1e7-1f1ff"
  },
  {
    n: [
      "canada flag",
      "flag-ca"
    ],
    u: "1f1e8-1f1e6"
  },
  {
    n: [
      "cocos (keeling) islands flag",
      "flag-cc"
    ],
    u: "1f1e8-1f1e8"
  },
  {
    n: [
      "congo - kinshasa flag",
      "flag-cd"
    ],
    u: "1f1e8-1f1e9"
  },
  {
    n: [
      "central african republic flag",
      "flag-cf"
    ],
    u: "1f1e8-1f1eb"
  },
  {
    n: [
      "congo - brazzaville flag",
      "flag-cg"
    ],
    u: "1f1e8-1f1ec"
  },
  {
    n: [
      "switzerland flag",
      "flag-ch"
    ],
    u: "1f1e8-1f1ed"
  },
  {
    n: [
      "c\xF4te d\u2019ivoire flag",
      "flag-ci"
    ],
    u: "1f1e8-1f1ee"
  },
  {
    n: [
      "cook islands flag",
      "flag-ck"
    ],
    u: "1f1e8-1f1f0"
  },
  {
    n: [
      "chile flag",
      "flag-cl"
    ],
    u: "1f1e8-1f1f1"
  },
  {
    n: [
      "cameroon flag",
      "flag-cm"
    ],
    u: "1f1e8-1f1f2"
  },
  {
    n: [
      "china flag",
      "cn",
      "flag-cn"
    ],
    u: "1f1e8-1f1f3"
  },
  {
    n: [
      "colombia flag",
      "flag-co"
    ],
    u: "1f1e8-1f1f4"
  },
  {
    n: [
      "clipperton island flag",
      "flag-cp"
    ],
    u: "1f1e8-1f1f5"
  },
  {
    n: [
      "costa rica flag",
      "flag-cr"
    ],
    u: "1f1e8-1f1f7"
  },
  {
    n: [
      "cuba flag",
      "flag-cu"
    ],
    u: "1f1e8-1f1fa"
  },
  {
    n: [
      "cape verde flag",
      "flag-cv"
    ],
    u: "1f1e8-1f1fb"
  },
  {
    n: [
      "cura\xE7ao flag",
      "flag-cw"
    ],
    u: "1f1e8-1f1fc"
  },
  {
    n: [
      "christmas island flag",
      "flag-cx"
    ],
    u: "1f1e8-1f1fd"
  },
  {
    n: [
      "cyprus flag",
      "flag-cy"
    ],
    u: "1f1e8-1f1fe"
  },
  {
    n: [
      "czechia flag",
      "flag-cz"
    ],
    u: "1f1e8-1f1ff"
  },
  {
    n: [
      "germany flag",
      "de",
      "flag-de"
    ],
    u: "1f1e9-1f1ea"
  },
  {
    n: [
      "diego garcia flag",
      "flag-dg"
    ],
    u: "1f1e9-1f1ec"
  },
  {
    n: [
      "djibouti flag",
      "flag-dj"
    ],
    u: "1f1e9-1f1ef"
  },
  {
    n: [
      "denmark flag",
      "flag-dk"
    ],
    u: "1f1e9-1f1f0"
  },
  {
    n: [
      "dominica flag",
      "flag-dm"
    ],
    u: "1f1e9-1f1f2"
  },
  {
    n: [
      "dominican republic flag",
      "flag-do"
    ],
    u: "1f1e9-1f1f4"
  },
  {
    n: [
      "algeria flag",
      "flag-dz"
    ],
    u: "1f1e9-1f1ff"
  },
  {
    n: [
      "ceuta & melilla flag",
      "flag-ea"
    ],
    u: "1f1ea-1f1e6"
  },
  {
    n: [
      "ecuador flag",
      "flag-ec"
    ],
    u: "1f1ea-1f1e8"
  },
  {
    n: [
      "estonia flag",
      "flag-ee"
    ],
    u: "1f1ea-1f1ea"
  },
  {
    n: [
      "egypt flag",
      "flag-eg"
    ],
    u: "1f1ea-1f1ec"
  },
  {
    n: [
      "western sahara flag",
      "flag-eh"
    ],
    u: "1f1ea-1f1ed"
  },
  {
    n: [
      "eritrea flag",
      "flag-er"
    ],
    u: "1f1ea-1f1f7"
  },
  {
    n: [
      "spain flag",
      "es",
      "flag-es"
    ],
    u: "1f1ea-1f1f8"
  },
  {
    n: [
      "ethiopia flag",
      "flag-et"
    ],
    u: "1f1ea-1f1f9"
  },
  {
    n: [
      "european union flag",
      "flag-eu"
    ],
    u: "1f1ea-1f1fa"
  },
  {
    n: [
      "finland flag",
      "flag-fi"
    ],
    u: "1f1eb-1f1ee"
  },
  {
    n: [
      "fiji flag",
      "flag-fj"
    ],
    u: "1f1eb-1f1ef"
  },
  {
    n: [
      "falkland islands flag",
      "flag-fk"
    ],
    u: "1f1eb-1f1f0"
  },
  {
    n: [
      "micronesia flag",
      "flag-fm"
    ],
    u: "1f1eb-1f1f2"
  },
  {
    n: [
      "faroe islands flag",
      "flag-fo"
    ],
    u: "1f1eb-1f1f4"
  },
  {
    n: [
      "france flag",
      "fr",
      "flag-fr"
    ],
    u: "1f1eb-1f1f7"
  },
  {
    n: [
      "gabon flag",
      "flag-ga"
    ],
    u: "1f1ec-1f1e6"
  },
  {
    n: [
      "united kingdom flag",
      "gb",
      "uk",
      "flag-gb"
    ],
    u: "1f1ec-1f1e7"
  },
  {
    n: [
      "grenada flag",
      "flag-gd"
    ],
    u: "1f1ec-1f1e9"
  },
  {
    n: [
      "georgia flag",
      "flag-ge"
    ],
    u: "1f1ec-1f1ea"
  },
  {
    n: [
      "french guiana flag",
      "flag-gf"
    ],
    u: "1f1ec-1f1eb"
  },
  {
    n: [
      "guernsey flag",
      "flag-gg"
    ],
    u: "1f1ec-1f1ec"
  },
  {
    n: [
      "ghana flag",
      "flag-gh"
    ],
    u: "1f1ec-1f1ed"
  },
  {
    n: [
      "gibraltar flag",
      "flag-gi"
    ],
    u: "1f1ec-1f1ee"
  },
  {
    n: [
      "greenland flag",
      "flag-gl"
    ],
    u: "1f1ec-1f1f1"
  },
  {
    n: [
      "gambia flag",
      "flag-gm"
    ],
    u: "1f1ec-1f1f2"
  },
  {
    n: [
      "guinea flag",
      "flag-gn"
    ],
    u: "1f1ec-1f1f3"
  },
  {
    n: [
      "guadeloupe flag",
      "flag-gp"
    ],
    u: "1f1ec-1f1f5"
  },
  {
    n: [
      "equatorial guinea flag",
      "flag-gq"
    ],
    u: "1f1ec-1f1f6"
  },
  {
    n: [
      "greece flag",
      "flag-gr"
    ],
    u: "1f1ec-1f1f7"
  },
  {
    n: [
      "south georgia & south sandwich islands flag",
      "flag-gs"
    ],
    u: "1f1ec-1f1f8"
  },
  {
    n: [
      "guatemala flag",
      "flag-gt"
    ],
    u: "1f1ec-1f1f9"
  },
  {
    n: [
      "guam flag",
      "flag-gu"
    ],
    u: "1f1ec-1f1fa"
  },
  {
    n: [
      "guinea-bissau flag",
      "flag-gw"
    ],
    u: "1f1ec-1f1fc"
  },
  {
    n: [
      "guyana flag",
      "flag-gy"
    ],
    u: "1f1ec-1f1fe"
  },
  {
    n: [
      "hong kong sar china flag",
      "flag-hk"
    ],
    u: "1f1ed-1f1f0"
  },
  {
    n: [
      "heard & mcdonald islands flag",
      "flag-hm"
    ],
    u: "1f1ed-1f1f2"
  },
  {
    n: [
      "honduras flag",
      "flag-hn"
    ],
    u: "1f1ed-1f1f3"
  },
  {
    n: [
      "croatia flag",
      "flag-hr"
    ],
    u: "1f1ed-1f1f7"
  },
  {
    n: [
      "haiti flag",
      "flag-ht"
    ],
    u: "1f1ed-1f1f9"
  },
  {
    n: [
      "hungary flag",
      "flag-hu"
    ],
    u: "1f1ed-1f1fa"
  },
  {
    n: [
      "canary islands flag",
      "flag-ic"
    ],
    u: "1f1ee-1f1e8"
  },
  {
    n: [
      "indonesia flag",
      "flag-id"
    ],
    u: "1f1ee-1f1e9"
  },
  {
    n: [
      "ireland flag",
      "flag-ie"
    ],
    u: "1f1ee-1f1ea"
  },
  {
    n: [
      "israel flag",
      "flag-il"
    ],
    u: "1f1ee-1f1f1"
  },
  {
    n: [
      "isle of man flag",
      "flag-im"
    ],
    u: "1f1ee-1f1f2"
  },
  {
    n: [
      "india flag",
      "flag-in"
    ],
    u: "1f1ee-1f1f3"
  },
  {
    n: [
      "british indian ocean territory flag",
      "flag-io"
    ],
    u: "1f1ee-1f1f4"
  },
  {
    n: [
      "iraq flag",
      "flag-iq"
    ],
    u: "1f1ee-1f1f6"
  },
  {
    n: [
      "iran flag",
      "flag-ir"
    ],
    u: "1f1ee-1f1f7"
  },
  {
    n: [
      "iceland flag",
      "flag-is"
    ],
    u: "1f1ee-1f1f8"
  },
  {
    n: [
      "italy flag",
      "it",
      "flag-it"
    ],
    u: "1f1ee-1f1f9"
  },
  {
    n: [
      "jersey flag",
      "flag-je"
    ],
    u: "1f1ef-1f1ea"
  },
  {
    n: [
      "jamaica flag",
      "flag-jm"
    ],
    u: "1f1ef-1f1f2"
  },
  {
    n: [
      "jordan flag",
      "flag-jo"
    ],
    u: "1f1ef-1f1f4"
  },
  {
    n: [
      "japan flag",
      "jp",
      "flag-jp"
    ],
    u: "1f1ef-1f1f5"
  },
  {
    n: [
      "kenya flag",
      "flag-ke"
    ],
    u: "1f1f0-1f1ea"
  },
  {
    n: [
      "kyrgyzstan flag",
      "flag-kg"
    ],
    u: "1f1f0-1f1ec"
  },
  {
    n: [
      "cambodia flag",
      "flag-kh"
    ],
    u: "1f1f0-1f1ed"
  },
  {
    n: [
      "kiribati flag",
      "flag-ki"
    ],
    u: "1f1f0-1f1ee"
  },
  {
    n: [
      "comoros flag",
      "flag-km"
    ],
    u: "1f1f0-1f1f2"
  },
  {
    n: [
      "st. kitts & nevis flag",
      "flag-kn"
    ],
    u: "1f1f0-1f1f3"
  },
  {
    n: [
      "north korea flag",
      "flag-kp"
    ],
    u: "1f1f0-1f1f5"
  },
  {
    n: [
      "south korea flag",
      "kr",
      "flag-kr"
    ],
    u: "1f1f0-1f1f7"
  },
  {
    n: [
      "kuwait flag",
      "flag-kw"
    ],
    u: "1f1f0-1f1fc"
  },
  {
    n: [
      "cayman islands flag",
      "flag-ky"
    ],
    u: "1f1f0-1f1fe"
  },
  {
    n: [
      "kazakhstan flag",
      "flag-kz"
    ],
    u: "1f1f0-1f1ff"
  },
  {
    n: [
      "laos flag",
      "flag-la"
    ],
    u: "1f1f1-1f1e6"
  },
  {
    n: [
      "lebanon flag",
      "flag-lb"
    ],
    u: "1f1f1-1f1e7"
  },
  {
    n: [
      "st. lucia flag",
      "flag-lc"
    ],
    u: "1f1f1-1f1e8"
  },
  {
    n: [
      "liechtenstein flag",
      "flag-li"
    ],
    u: "1f1f1-1f1ee"
  },
  {
    n: [
      "sri lanka flag",
      "flag-lk"
    ],
    u: "1f1f1-1f1f0"
  },
  {
    n: [
      "liberia flag",
      "flag-lr"
    ],
    u: "1f1f1-1f1f7"
  },
  {
    n: [
      "lesotho flag",
      "flag-ls"
    ],
    u: "1f1f1-1f1f8"
  },
  {
    n: [
      "lithuania flag",
      "flag-lt"
    ],
    u: "1f1f1-1f1f9"
  },
  {
    n: [
      "luxembourg flag",
      "flag-lu"
    ],
    u: "1f1f1-1f1fa"
  },
  {
    n: [
      "latvia flag",
      "flag-lv"
    ],
    u: "1f1f1-1f1fb"
  },
  {
    n: [
      "libya flag",
      "flag-ly"
    ],
    u: "1f1f1-1f1fe"
  },
  {
    n: [
      "morocco flag",
      "flag-ma"
    ],
    u: "1f1f2-1f1e6"
  },
  {
    n: [
      "monaco flag",
      "flag-mc"
    ],
    u: "1f1f2-1f1e8"
  },
  {
    n: [
      "moldova flag",
      "flag-md"
    ],
    u: "1f1f2-1f1e9"
  },
  {
    n: [
      "montenegro flag",
      "flag-me"
    ],
    u: "1f1f2-1f1ea"
  },
  {
    n: [
      "st. martin flag",
      "flag-mf"
    ],
    u: "1f1f2-1f1eb"
  },
  {
    n: [
      "madagascar flag",
      "flag-mg"
    ],
    u: "1f1f2-1f1ec"
  },
  {
    n: [
      "marshall islands flag",
      "flag-mh"
    ],
    u: "1f1f2-1f1ed"
  },
  {
    n: [
      "macedonia flag",
      "flag-mk"
    ],
    u: "1f1f2-1f1f0"
  },
  {
    n: [
      "mali flag",
      "flag-ml"
    ],
    u: "1f1f2-1f1f1"
  },
  {
    n: [
      "myanmar (burma) flag",
      "flag-mm"
    ],
    u: "1f1f2-1f1f2"
  },
  {
    n: [
      "mongolia flag",
      "flag-mn"
    ],
    u: "1f1f2-1f1f3"
  },
  {
    n: [
      "macau sar china flag",
      "flag-mo"
    ],
    u: "1f1f2-1f1f4"
  },
  {
    n: [
      "northern mariana islands flag",
      "flag-mp"
    ],
    u: "1f1f2-1f1f5"
  },
  {
    n: [
      "martinique flag",
      "flag-mq"
    ],
    u: "1f1f2-1f1f6"
  },
  {
    n: [
      "mauritania flag",
      "flag-mr"
    ],
    u: "1f1f2-1f1f7"
  },
  {
    n: [
      "montserrat flag",
      "flag-ms"
    ],
    u: "1f1f2-1f1f8"
  },
  {
    n: [
      "malta flag",
      "flag-mt"
    ],
    u: "1f1f2-1f1f9"
  },
  {
    n: [
      "mauritius flag",
      "flag-mu"
    ],
    u: "1f1f2-1f1fa"
  },
  {
    n: [
      "maldives flag",
      "flag-mv"
    ],
    u: "1f1f2-1f1fb"
  },
  {
    n: [
      "malawi flag",
      "flag-mw"
    ],
    u: "1f1f2-1f1fc"
  },
  {
    n: [
      "mexico flag",
      "flag-mx"
    ],
    u: "1f1f2-1f1fd"
  },
  {
    n: [
      "malaysia flag",
      "flag-my"
    ],
    u: "1f1f2-1f1fe"
  },
  {
    n: [
      "mozambique flag",
      "flag-mz"
    ],
    u: "1f1f2-1f1ff"
  },
  {
    n: [
      "namibia flag",
      "flag-na"
    ],
    u: "1f1f3-1f1e6"
  },
  {
    n: [
      "new caledonia flag",
      "flag-nc"
    ],
    u: "1f1f3-1f1e8"
  },
  {
    n: [
      "niger flag",
      "flag-ne"
    ],
    u: "1f1f3-1f1ea"
  },
  {
    n: [
      "norfolk island flag",
      "flag-nf"
    ],
    u: "1f1f3-1f1eb"
  },
  {
    n: [
      "nigeria flag",
      "flag-ng"
    ],
    u: "1f1f3-1f1ec"
  },
  {
    n: [
      "nicaragua flag",
      "flag-ni"
    ],
    u: "1f1f3-1f1ee"
  },
  {
    n: [
      "netherlands flag",
      "flag-nl"
    ],
    u: "1f1f3-1f1f1"
  },
  {
    n: [
      "norway flag",
      "flag-no"
    ],
    u: "1f1f3-1f1f4"
  },
  {
    n: [
      "nepal flag",
      "flag-np"
    ],
    u: "1f1f3-1f1f5"
  },
  {
    n: [
      "nauru flag",
      "flag-nr"
    ],
    u: "1f1f3-1f1f7"
  },
  {
    n: [
      "niue flag",
      "flag-nu"
    ],
    u: "1f1f3-1f1fa"
  },
  {
    n: [
      "new zealand flag",
      "flag-nz"
    ],
    u: "1f1f3-1f1ff"
  },
  {
    n: [
      "oman flag",
      "flag-om"
    ],
    u: "1f1f4-1f1f2"
  },
  {
    n: [
      "panama flag",
      "flag-pa"
    ],
    u: "1f1f5-1f1e6"
  },
  {
    n: [
      "peru flag",
      "flag-pe"
    ],
    u: "1f1f5-1f1ea"
  },
  {
    n: [
      "french polynesia flag",
      "flag-pf"
    ],
    u: "1f1f5-1f1eb"
  },
  {
    n: [
      "papua new guinea flag",
      "flag-pg"
    ],
    u: "1f1f5-1f1ec"
  },
  {
    n: [
      "philippines flag",
      "flag-ph"
    ],
    u: "1f1f5-1f1ed"
  },
  {
    n: [
      "pakistan flag",
      "flag-pk"
    ],
    u: "1f1f5-1f1f0"
  },
  {
    n: [
      "poland flag",
      "flag-pl"
    ],
    u: "1f1f5-1f1f1"
  },
  {
    n: [
      "st. pierre & miquelon flag",
      "flag-pm"
    ],
    u: "1f1f5-1f1f2"
  },
  {
    n: [
      "pitcairn islands flag",
      "flag-pn"
    ],
    u: "1f1f5-1f1f3"
  },
  {
    n: [
      "puerto rico flag",
      "flag-pr"
    ],
    u: "1f1f5-1f1f7"
  },
  {
    n: [
      "palestinian territories flag",
      "flag-ps"
    ],
    u: "1f1f5-1f1f8"
  },
  {
    n: [
      "portugal flag",
      "flag-pt"
    ],
    u: "1f1f5-1f1f9"
  },
  {
    n: [
      "palau flag",
      "flag-pw"
    ],
    u: "1f1f5-1f1fc"
  },
  {
    n: [
      "paraguay flag",
      "flag-py"
    ],
    u: "1f1f5-1f1fe"
  },
  {
    n: [
      "qatar flag",
      "flag-qa"
    ],
    u: "1f1f6-1f1e6"
  },
  {
    n: [
      "r\xE9union flag",
      "flag-re"
    ],
    u: "1f1f7-1f1ea"
  },
  {
    n: [
      "romania flag",
      "flag-ro"
    ],
    u: "1f1f7-1f1f4"
  },
  {
    n: [
      "serbia flag",
      "flag-rs"
    ],
    u: "1f1f7-1f1f8"
  },
  {
    n: [
      "russia flag",
      "ru",
      "flag-ru"
    ],
    u: "1f1f7-1f1fa"
  },
  {
    n: [
      "rwanda flag",
      "flag-rw"
    ],
    u: "1f1f7-1f1fc"
  },
  {
    n: [
      "saudi arabia flag",
      "flag-sa"
    ],
    u: "1f1f8-1f1e6"
  },
  {
    n: [
      "solomon islands flag",
      "flag-sb"
    ],
    u: "1f1f8-1f1e7"
  },
  {
    n: [
      "seychelles flag",
      "flag-sc"
    ],
    u: "1f1f8-1f1e8"
  },
  {
    n: [
      "sudan flag",
      "flag-sd"
    ],
    u: "1f1f8-1f1e9"
  },
  {
    n: [
      "sweden flag",
      "flag-se"
    ],
    u: "1f1f8-1f1ea"
  },
  {
    n: [
      "singapore flag",
      "flag-sg"
    ],
    u: "1f1f8-1f1ec"
  },
  {
    n: [
      "st. helena flag",
      "flag-sh"
    ],
    u: "1f1f8-1f1ed"
  },
  {
    n: [
      "slovenia flag",
      "flag-si"
    ],
    u: "1f1f8-1f1ee"
  },
  {
    n: [
      "svalbard & jan mayen flag",
      "flag-sj"
    ],
    u: "1f1f8-1f1ef"
  },
  {
    n: [
      "slovakia flag",
      "flag-sk"
    ],
    u: "1f1f8-1f1f0"
  },
  {
    n: [
      "sierra leone flag",
      "flag-sl"
    ],
    u: "1f1f8-1f1f1"
  },
  {
    n: [
      "san marino flag",
      "flag-sm"
    ],
    u: "1f1f8-1f1f2"
  },
  {
    n: [
      "senegal flag",
      "flag-sn"
    ],
    u: "1f1f8-1f1f3"
  },
  {
    n: [
      "somalia flag",
      "flag-so"
    ],
    u: "1f1f8-1f1f4"
  },
  {
    n: [
      "suriname flag",
      "flag-sr"
    ],
    u: "1f1f8-1f1f7"
  },
  {
    n: [
      "south sudan flag",
      "flag-ss"
    ],
    u: "1f1f8-1f1f8"
  },
  {
    n: [
      "s\xE3o tom\xE9 & pr\xEDncipe flag",
      "flag-st"
    ],
    u: "1f1f8-1f1f9"
  },
  {
    n: [
      "el salvador flag",
      "flag-sv"
    ],
    u: "1f1f8-1f1fb"
  },
  {
    n: [
      "sint maarten flag",
      "flag-sx"
    ],
    u: "1f1f8-1f1fd"
  },
  {
    n: [
      "syria flag",
      "flag-sy"
    ],
    u: "1f1f8-1f1fe"
  },
  {
    n: [
      "swaziland flag",
      "flag-sz"
    ],
    u: "1f1f8-1f1ff"
  },
  {
    n: [
      "tristan da cunha flag",
      "flag-ta"
    ],
    u: "1f1f9-1f1e6"
  },
  {
    n: [
      "turks & caicos islands flag",
      "flag-tc"
    ],
    u: "1f1f9-1f1e8"
  },
  {
    n: [
      "chad flag",
      "flag-td"
    ],
    u: "1f1f9-1f1e9"
  },
  {
    n: [
      "french southern territories flag",
      "flag-tf"
    ],
    u: "1f1f9-1f1eb"
  },
  {
    n: [
      "togo flag",
      "flag-tg"
    ],
    u: "1f1f9-1f1ec"
  },
  {
    n: [
      "thailand flag",
      "flag-th"
    ],
    u: "1f1f9-1f1ed"
  },
  {
    n: [
      "tajikistan flag",
      "flag-tj"
    ],
    u: "1f1f9-1f1ef"
  },
  {
    n: [
      "tokelau flag",
      "flag-tk"
    ],
    u: "1f1f9-1f1f0"
  },
  {
    n: [
      "timor-leste flag",
      "flag-tl"
    ],
    u: "1f1f9-1f1f1"
  },
  {
    n: [
      "turkmenistan flag",
      "flag-tm"
    ],
    u: "1f1f9-1f1f2"
  },
  {
    n: [
      "tunisia flag",
      "flag-tn"
    ],
    u: "1f1f9-1f1f3"
  },
  {
    n: [
      "tonga flag",
      "flag-to"
    ],
    u: "1f1f9-1f1f4"
  },
  {
    n: [
      "turkey flag",
      "flag-tr"
    ],
    u: "1f1f9-1f1f7"
  },
  {
    n: [
      "trinidad & tobago flag",
      "flag-tt"
    ],
    u: "1f1f9-1f1f9"
  },
  {
    n: [
      "tuvalu flag",
      "flag-tv"
    ],
    u: "1f1f9-1f1fb"
  },
  {
    n: [
      "taiwan flag",
      "flag-tw"
    ],
    u: "1f1f9-1f1fc"
  },
  {
    n: [
      "tanzania flag",
      "flag-tz"
    ],
    u: "1f1f9-1f1ff"
  },
  {
    n: [
      "ukraine flag",
      "flag-ua"
    ],
    u: "1f1fa-1f1e6"
  },
  {
    n: [
      "uganda flag",
      "flag-ug"
    ],
    u: "1f1fa-1f1ec"
  },
  {
    n: [
      "u.s. outlying islands flag",
      "flag-um"
    ],
    u: "1f1fa-1f1f2"
  },
  {
    n: [
      "united nations flag",
      "flag-un"
    ],
    u: "1f1fa-1f1f3"
  },
  {
    n: [
      "united states flag",
      "us",
      "flag-us"
    ],
    u: "1f1fa-1f1f8"
  },
  {
    n: [
      "uruguay flag",
      "flag-uy"
    ],
    u: "1f1fa-1f1fe"
  },
  {
    n: [
      "uzbekistan flag",
      "flag-uz"
    ],
    u: "1f1fa-1f1ff"
  },
  {
    n: [
      "vatican city flag",
      "flag-va"
    ],
    u: "1f1fb-1f1e6"
  },
  {
    n: [
      "st. vincent & grenadines flag",
      "flag-vc"
    ],
    u: "1f1fb-1f1e8"
  },
  {
    n: [
      "venezuela flag",
      "flag-ve"
    ],
    u: "1f1fb-1f1ea"
  },
  {
    n: [
      "british virgin islands flag",
      "flag-vg"
    ],
    u: "1f1fb-1f1ec"
  },
  {
    n: [
      "u.s. virgin islands flag",
      "flag-vi"
    ],
    u: "1f1fb-1f1ee"
  },
  {
    n: [
      "vietnam flag",
      "flag-vn"
    ],
    u: "1f1fb-1f1f3"
  },
  {
    n: [
      "vanuatu flag",
      "flag-vu"
    ],
    u: "1f1fb-1f1fa"
  },
  {
    n: [
      "wallis & futuna flag",
      "flag-wf"
    ],
    u: "1f1fc-1f1eb"
  },
  {
    n: [
      "samoa flag",
      "flag-ws"
    ],
    u: "1f1fc-1f1f8"
  },
  {
    n: [
      "kosovo flag",
      "flag-xk"
    ],
    u: "1f1fd-1f1f0"
  },
  {
    n: [
      "yemen flag",
      "flag-ye"
    ],
    u: "1f1fe-1f1ea"
  },
  {
    n: [
      "mayotte flag",
      "flag-yt"
    ],
    u: "1f1fe-1f1f9"
  },
  {
    n: [
      "south africa flag",
      "flag-za"
    ],
    u: "1f1ff-1f1e6"
  },
  {
    n: [
      "zambia flag",
      "flag-zm"
    ],
    u: "1f1ff-1f1f2"
  },
  {
    n: [
      "zimbabwe flag",
      "flag-zw"
    ],
    u: "1f1ff-1f1fc"
  },
  {
    n: [
      "england flag",
      "flag-england"
    ],
    u: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f"
  },
  {
    n: [
      "scotland flag",
      "flag-scotland"
    ],
    u: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f"
  },
  {
    n: [
      "wales flag",
      "flag-wales"
    ],
    u: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f"
  }
];
var emojis = {
  smileys_people: smileys_people$1,
  animals_nature: animals_nature$1,
  food_drink: food_drink$1,
  activities: activities$1,
  travel_places: travel_places$1,
  objects: objects$1,
  symbols: symbols$1,
  flags: flags$1
};
var _groups = [
  {
    key: "recent",
    title: "Recently Used",
    u: "1f551"
  },
  {
    key: "smileys_people",
    title: "Smiles & People",
    u: "1f600"
  },
  {
    key: "animals_nature",
    title: "Animals & Nature",
    u: "1F431"
  },
  {
    key: "food_drink",
    title: "Food & Drink",
    u: "2615"
  },
  {
    key: "activities",
    title: "Activities",
    u: "26BD"
  },
  {
    key: "travel_places",
    title: "Travel & Places",
    u: "1F697"
  },
  {
    key: "objects",
    title: "Objects",
    u: "1F4A1"
  },
  {
    key: "symbols",
    title: "Symbols",
    u: "1f4af"
  },
  {
    key: "flags",
    title: "Flags",
    u: "1f3f3-fe0f"
  }
];
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const cursorRequestMap = /* @__PURE__ */ new WeakMap();
const transactionDoneMap = /* @__PURE__ */ new WeakMap();
const transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
const transformCache = /* @__PURE__ */ new WeakMap();
const reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
const DB_KEY = "EMJ";
const STORE_KEY = "emojis";
const DB_VERSION = 3;
async function initialize() {
  const db = await openDB(DB_KEY, DB_VERSION, {
    upgrade(db2, oldVersion) {
      if (!db2.objectStoreNames.contains(STORE_KEY)) {
        const store = db2.createObjectStore(STORE_KEY, {
          keyPath: "id",
          autoIncrement: true
        });
        store.createIndex("id", "id", {
          unique: true
        });
      }
    }
  });
  db.close();
}
initialize();
const defaultOptions = {
  native: false,
  hideSearch: true,
  hideGroupIcons: false,
  hideGroupNames: false,
  staticTexts: {},
  disabledGroups: [],
  groupNames: {},
  displayRecent: false,
  additionalGroups: {},
  groupOrder: [],
  groupIcons: {}
};
async function getRecentEmojis() {
  const db = await openDB(DB_KEY, DB_VERSION);
  const store = db.transaction(STORE_KEY, "readonly").objectStore(STORE_KEY);
  return await store.getAll();
}
function Store() {
  const state = reactive({
    search: "",
    emoji: DEFAULT_EMOJI,
    activeGroup: "",
    skinTone: SKIN_TONE_NEUTRAL,
    options: defaultOptions,
    additionalGroups: {},
    recent: [],
    get emojis() {
      return {
        recent: this.recent,
        ...this.options.additionalGroups,
        ...emojis
      };
    },
    get disabled() {
      let disabled = Array.isArray(this.options.disabledGroups) ? this.options.disabledGroups : [];
      if (!this.options.displayRecent) {
        disabled = ["recent", ...disabled];
      }
      return disabled;
    },
    get groups() {
      return _groups.filter(
        (group) => !this.disabled.includes(group.key)
      );
    },
    get orderedGroupKeys() {
      const keys = [
        ...this.options.groupOrder,
        ...Object.keys(this.options.additionalGroups),
        ..._groups.map((group) => group.key)
      ];
      return [...new Set(keys)].filter((key) => !this.disabled.includes(key));
    }
  });
  function initialize2() {
    if (state.options.displayRecent) {
      setInitialRecentEmojis();
    }
  }
  async function getRecent() {
    var _a;
    let recent2 = await getRecentEmojis();
    if (Array.isArray(recent2) && recent2.length) {
      recent2 = JSON.parse(((_a = recent2[0]) == null ? void 0 : _a.value) || "");
    } else {
      recent2 = [];
    }
    return recent2;
  }
  function setInitialRecentEmojis() {
    getRecent().then((recent2) => {
      state.recent = recent2;
      updateLocalStore();
    });
  }
  const updateSearch = (value) => {
    state.search = value;
  };
  const updateEmoji = (value) => {
    state.emoji = value;
  };
  const updateActiveGroup = (group) => {
    state.activeGroup = group;
  };
  const updateSkinTone = (tone = SKIN_TONE_NEUTRAL) => {
    state.skinTone = tone;
  };
  const updateOptions = (options) => {
    state.options = Object.assign({}, state.options, options);
    initialize2();
  };
  async function updateLocalStore() {
    const db = await openDB(DB_KEY, DB_VERSION);
    const store = db.transaction(STORE_KEY, "readwrite").objectStore(STORE_KEY);
    store.put({
      id: 0,
      value: JSON.stringify(state.recent)
    });
    return;
  }
  const updateSelect = (emoji) => {
    if (state.options.displayRecent !== true)
      return;
    const index2 = state.recent.findIndex((item) => item.u === emoji.u);
    if (index2 > 0)
      state.recent.splice(index2, 1);
    if (index2 === 0)
      return;
    const _emoji = { u: emoji.u, n: toRaw(emoji.n) };
    state.recent = [_emoji, ...state.recent];
    if (state.recent.length > 24)
      state.recent.length = 24;
    updateLocalStore();
  };
  return {
    state: readonly(state),
    updateSearch,
    updateEmoji,
    updateActiveGroup,
    updateSkinTone,
    updateOptions,
    updateSelect
  };
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style2 = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style2);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style2 = styleProperties.reduce(function(style22, property) {
        style22[property] = "";
        return style22;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style2);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
  var state = _ref4.state, options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll2 = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll2) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll2) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle(clippingParent).position !== "static" : true);
  });
}
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll2 = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll2 = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll2.scrollLeft - offsets.x,
    y: rect.top + scroll2.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions2;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions2, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index2 = 0; index2 < state.orderedModifiers.length; index2++) {
          if (state.reset === true) {
            state.reset = false;
            index2 = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index2], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var smileys_people = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxNiA0IEMgOS4zODI4MTMgNCA0IDkuMzgyODEzIDQgMTYgQyA0IDIyLjYxNzE4OCA5LjM4MjgxMyAyOCAxNiAyOCBDIDIyLjYxNzE4OCAyOCAyOCAyMi42MTcxODggMjggMTYgQyAyOCA5LjM4MjgxMyAyMi42MTcxODggNCAxNiA0IFogTSAxNiA2IEMgMjEuNTM1MTU2IDYgMjYgMTAuNDY0ODQ0IDI2IDE2IEMgMjYgMjEuNTM1MTU2IDIxLjUzNTE1NiAyNiAxNiAyNiBDIDEwLjQ2NDg0NCAyNiA2IDIxLjUzNTE1NiA2IDE2IEMgNiAxMC40NjQ4NDQgMTAuNDY0ODQ0IDYgMTYgNiBaIE0gMTEuNSAxMiBDIDEwLjY3MTg3NSAxMiAxMCAxMi42NzE4NzUgMTAgMTMuNSBDIDEwIDE0LjMyODEyNSAxMC42NzE4NzUgMTUgMTEuNSAxNSBDIDEyLjMyODEyNSAxNSAxMyAxNC4zMjgxMjUgMTMgMTMuNSBDIDEzIDEyLjY3MTg3NSAxMi4zMjgxMjUgMTIgMTEuNSAxMiBaIE0gMjAuNSAxMiBDIDE5LjY3MTg3NSAxMiAxOSAxMi42NzE4NzUgMTkgMTMuNSBDIDE5IDE0LjMyODEyNSAxOS42NzE4NzUgMTUgMjAuNSAxNSBDIDIxLjMyODEyNSAxNSAyMiAxNC4zMjgxMjUgMjIgMTMuNSBDIDIyIDEyLjY3MTg3NSAyMS4zMjgxMjUgMTIgMjAuNSAxMiBaIE0gMTAuODEyNSAxOSBMIDkuMDkzNzUgMjAgQyAxMC40NzY1NjMgMjIuMzg2NzE5IDEzLjA0Njg3NSAyNCAxNiAyNCBDIDE4Ljk1MzEyNSAyNCAyMS41MjM0MzggMjIuMzg2NzE5IDIyLjkwNjI1IDIwIEwgMjEuMTg3NSAxOSBDIDIwLjE0ODQzOCAyMC43OTI5NjkgMTguMjI2NTYzIDIyIDE2IDIyIEMgMTMuNzczNDM4IDIyIDExLjg1MTU2MyAyMC43OTI5NjkgMTAuODEyNSAxOSBaIi8+PC9zdmc+";
function unicodeToEmoji(unicode) {
  return unicode.split("-").map((hex) => parseInt(hex, 16)).map((hex) => String.fromCodePoint(hex)).join("");
}
function filterEmojis(emojis2, keyword, skinTone, disabledGroups = []) {
  const _emojiData = {};
  Object.keys(emojis2).forEach((key) => {
    if (disabledGroups.includes(key)) {
      return;
    }
    const _emojis = [];
    emojis2[key].forEach((emoji) => {
      var _a;
      if (emoji[EMOJI_NAME_KEY][0].includes(keyword.toLocaleLowerCase())) {
        let result = emoji[EMOJI_UNICODE_KEY];
        if (skinTone !== SKIN_TONE_NEUTRAL && Array.isArray(emoji[EMOJI_VARIATIONS_KEY])) {
          const v_index = ((_a = emoji[EMOJI_VARIATIONS_KEY]) == null ? void 0 : _a.findIndex(
            (v) => v.includes(skinTone)
          )) || -1;
          if (v_index !== -1 && emoji[EMOJI_VARIATIONS_KEY]) {
            result = emoji[EMOJI_VARIATIONS_KEY][v_index];
          }
        }
        return _emojis.push({
          ...emoji,
          [EMOJI_RESULT_KEY]: result
        });
      }
    });
    if (_emojis.length) {
      _emojiData[key] = _emojis;
    }
  });
  return _emojiData;
}
function isMac() {
  var _a;
  let platform = ((_a = navigator == null ? void 0 : navigator.userAgentData) == null ? void 0 : _a.platform) || (navigator == null ? void 0 : navigator.platform) || "unknown";
  return platform.toUpperCase().indexOf("MAC") !== -1;
}
function snakeToCapitalizedCase(string) {
  return string.replace(
    /^_*(.)|_+(.)/g,
    (s, c, d) => c ? c.toUpperCase() : " " + d.toUpperCase()
  );
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = defineComponent({
  name: "Body",
  emits: {
    select: (emoji) => true
  },
  setup() {
    const { state, updateEmoji, updateSelect } = inject("store");
    const bodyInner = ref(null);
    const emojis2 = computed(() => {
      return filterEmojis(
        state.emojis,
        state.search,
        state.skinTone,
        state.options.disabledGroups
      );
    });
    const _this = getCurrentInstance();
    const hasGroupNames = computed(() => !state.options.hideGroupNames);
    const isSticky = computed(() => !state.options.disableStickyGroupNames);
    const groupNames = toRaw(state.options.groupNames);
    const orderedKeys = state.orderedGroupKeys;
    if (state.options.additionalGroups) {
      Object.keys(state.options.additionalGroups).map((k) => {
        if (state.options.groupNames[k]) {
          groupNames[k] = state.options.groupNames[k];
        } else {
          groupNames[k] = snakeToCapitalizedCase(k);
        }
      });
    }
    const platform = isMac() ? "is-mac" : "";
    function handleMouseEnter(emoji) {
      updateEmoji(emoji);
    }
    function handleClick(emoji) {
      updateSelect(emoji);
      _this == null ? void 0 : _this.emit("select", {
        ...emoji,
        t: state.skinTone,
        i: unicodeToEmoji(emoji.r)
      });
    }
    function handleError(event, unicode) {
      var _a;
      const button = (_a = event == null ? void 0 : event.target) == null ? void 0 : _a.closest("button");
      if (button) {
        button.innerHTML = `<span>${unicodeToEmoji(unicode)}</span>`;
      }
    }
    watch(
      () => state.activeGroup,
      () => {
        var _a;
        const target = (_a = bodyInner.value) == null ? void 0 : _a.querySelector("#" + state.activeGroup);
        if (target) {
          target.parentNode.scrollTop = target.offsetTop - target.parentNode.offsetTop;
        }
      }
    );
    return {
      emojis: emojis2,
      bodyInner,
      EMOJI_REMOTE_SRC,
      GROUP_NAMES,
      handleClick,
      handleError,
      handleMouseEnter,
      native: state.options.native,
      unicodeToEmoji,
      EMOJI_RESULT_KEY,
      EMOJI_NAME_KEY,
      hasGroupNames,
      isSticky,
      platform,
      groupNames,
      orderedKeys
    };
  }
});
const _hoisted_1$3 = { class: "v3-body" };
const _hoisted_2$3 = ["id"];
const _hoisted_3$3 = { class: "v3-emojis" };
const _hoisted_4$3 = ["onMouseenter", "onClick"];
const _hoisted_5$3 = { key: 0 };
const _hoisted_6$2 = ["src", "alt", "onError"];
const _hoisted_7$1 = {
  key: 1,
  class: "v3-no-result"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", {
      ref: "bodyInner",
      class: normalizeClass([_ctx.platform, "v3-body-inner"])
    }, [
      _ctx.orderedKeys.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.orderedKeys, (key) => {
        return openBlock(), createElementBlock("div", {
          id: key,
          key,
          class: "v3-group"
        }, [
          _ctx.hasGroupNames ? withDirectives((openBlock(), createElementBlock("h5", {
            key: 0,
            class: normalizeClass(_ctx.isSticky ? `v3-sticky` : ``)
          }, toDisplayString(_ctx.groupNames[key]), 3)), [
            [vShow, _ctx.emojis[key]]
          ]) : createCommentVNode("", true),
          withDirectives(createBaseVNode("div", _hoisted_3$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.emojis[key], (emoji) => {
              return openBlock(), createElementBlock("button", {
                key: emoji.r,
                type: "button",
                onMouseenter: ($event) => _ctx.handleMouseEnter(emoji),
                onClick: ($event) => _ctx.handleClick(emoji)
              }, [
                _ctx.native ? (openBlock(), createElementBlock("span", _hoisted_5$3, toDisplayString(_ctx.unicodeToEmoji(emoji.r)), 1)) : (openBlock(), createElementBlock("img", {
                  key: 1,
                  src: _ctx.EMOJI_REMOTE_SRC + `/${emoji.r}.png`,
                  alt: emoji.n[0],
                  onError: ($event) => _ctx.handleError($event, emoji.r)
                }, null, 40, _hoisted_6$2))
              ], 40, _hoisted_4$3);
            }), 128))
          ], 512), [
            [vShow, _ctx.emojis[key]]
          ])
        ], 8, _hoisted_2$3);
      }), 128)) : (openBlock(), createElementBlock("span", _hoisted_7$1, " No emoji has been found! "))
    ], 2)
  ]);
}
var Body = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var animals_nature = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxMi41IDUgQyAxMS40Mjk2ODggNSAxMC41IDUuNjA5Mzc1IDkuOTA2MjUgNi40Mzc1IEMgOS4zMTI1IDcuMjY1NjI1IDkgOC4zMzk4NDQgOSA5LjUgQyA5IDEwLjY2MDE1NiA5LjMxMjUgMTEuNzM0Mzc1IDkuOTA2MjUgMTIuNTYyNSBDIDEwLjUgMTMuMzkwNjI1IDExLjQyOTY4OCAxNCAxMi41IDE0IEMgMTMuNTcwMzEzIDE0IDE0LjUgMTMuMzkwNjI1IDE1LjA5Mzc1IDEyLjU2MjUgQyAxNS42ODc1IDExLjczNDM3NSAxNiAxMC42NjAxNTYgMTYgOS41IEMgMTYgOC4zMzk4NDQgMTUuNjg3NSA3LjI2NTYyNSAxNS4wOTM3NSA2LjQzNzUgQyAxNC41IDUuNjA5Mzc1IDEzLjU3MDMxMyA1IDEyLjUgNSBaIE0gMTYgOS41IEMgMTYgMTAuNjYwMTU2IDE2LjMxMjUgMTEuNzM0Mzc1IDE2LjkwNjI1IDEyLjU2MjUgQyAxNy41IDEzLjM5MDYyNSAxOC40Mjk2ODggMTQgMTkuNSAxNCBDIDIwLjU3MDMxMyAxNCAyMS41IDEzLjM5MDYyNSAyMi4wOTM3NSAxMi41NjI1IEMgMjIuNjg3NSAxMS43MzQzNzUgMjMgMTAuNjYwMTU2IDIzIDkuNSBDIDIzIDguMzM5ODQ0IDIyLjY4NzUgNy4yNjU2MjUgMjIuMDkzNzUgNi40Mzc1IEMgMjEuNSA1LjYwOTM3NSAyMC41NzAzMTMgNSAxOS41IDUgQyAxOC40Mjk2ODggNSAxNy41IDUuNjA5Mzc1IDE2LjkwNjI1IDYuNDM3NSBDIDE2LjMxMjUgNy4yNjU2MjUgMTYgOC4zMzk4NDQgMTYgOS41IFogTSAxMi41IDcgQyAxMi44MTI1IDcgMTMuMTU2MjUgNy4xNTYyNSAxMy40Njg3NSA3LjU5Mzc1IEMgMTMuNzgxMjUgOC4wMzEyNSAxNCA4LjcyNjU2MyAxNCA5LjUgQyAxNCAxMC4yNzM0MzggMTMuNzgxMjUgMTAuOTY4NzUgMTMuNDY4NzUgMTEuNDA2MjUgQyAxMy4xNTYyNSAxMS44NDM3NSAxMi44MTI1IDEyIDEyLjUgMTIgQyAxMi4xODc1IDEyIDExLjg0Mzc1IDExLjg0Mzc1IDExLjUzMTI1IDExLjQwNjI1IEMgMTEuMjE4NzUgMTAuOTY4NzUgMTEgMTAuMjczNDM4IDExIDkuNSBDIDExIDguNzI2NTYzIDExLjIxODc1IDguMDMxMjUgMTEuNTMxMjUgNy41OTM3NSBDIDExLjg0Mzc1IDcuMTU2MjUgMTIuMTg3NSA3IDEyLjUgNyBaIE0gMTkuNSA3IEMgMTkuODEyNSA3IDIwLjE1NjI1IDcuMTU2MjUgMjAuNDY4NzUgNy41OTM3NSBDIDIwLjc4MTI1IDguMDMxMjUgMjEgOC43MjY1NjMgMjEgOS41IEMgMjEgMTAuMjczNDM4IDIwLjc4MTI1IDEwLjk2ODc1IDIwLjQ2ODc1IDExLjQwNjI1IEMgMjAuMTU2MjUgMTEuODQzNzUgMTkuODEyNSAxMiAxOS41IDEyIEMgMTkuMTg3NSAxMiAxOC44NDM3NSAxMS44NDM3NSAxOC41MzEyNSAxMS40MDYyNSBDIDE4LjIxODc1IDEwLjk2ODc1IDE4IDEwLjI3MzQzOCAxOCA5LjUgQyAxOCA4LjcyNjU2MyAxOC4yMTg3NSA4LjAzMTI1IDE4LjUzMTI1IDcuNTkzNzUgQyAxOC44NDM3NSA3LjE1NjI1IDE5LjE4NzUgNyAxOS41IDcgWiBNIDcuNSAxMiBDIDYuNDI5Njg4IDEyIDUuNSAxMi42MDkzNzUgNC45MDYyNSAxMy40Mzc1IEMgNC4zMTI1IDE0LjI2NTYyNSA0IDE1LjMzOTg0NCA0IDE2LjUgQyA0IDE3LjY2MDE1NiA0LjMxMjUgMTguNzM0Mzc1IDQuOTA2MjUgMTkuNTYyNSBDIDUuNSAyMC4zOTA2MjUgNi40Mjk2ODggMjEgNy41IDIxIEMgOC41NzAzMTMgMjEgOS41IDIwLjM5MDYyNSAxMC4wOTM3NSAxOS41NjI1IEMgMTAuNjg3NSAxOC43MzQzNzUgMTEgMTcuNjYwMTU2IDExIDE2LjUgQyAxMSAxNS4zMzk4NDQgMTAuNjg3NSAxNC4yNjU2MjUgMTAuMDkzNzUgMTMuNDM3NSBDIDkuNSAxMi42MDkzNzUgOC41NzAzMTMgMTIgNy41IDEyIFogTSAyNC41IDEyIEMgMjMuNDI5Njg4IDEyIDIyLjUgMTIuNjA5Mzc1IDIxLjkwNjI1IDEzLjQzNzUgQyAyMS4zMTI1IDE0LjI2NTYyNSAyMSAxNS4zMzk4NDQgMjEgMTYuNSBDIDIxIDE3LjY2MDE1NiAyMS4zMTI1IDE4LjczNDM3NSAyMS45MDYyNSAxOS41NjI1IEMgMjIuNSAyMC4zOTA2MjUgMjMuNDI5Njg4IDIxIDI0LjUgMjEgQyAyNS41NzAzMTMgMjEgMjYuNSAyMC4zOTA2MjUgMjcuMDkzNzUgMTkuNTYyNSBDIDI3LjY4NzUgMTguNzM0Mzc1IDI4IDE3LjY2MDE1NiAyOCAxNi41IEMgMjggMTUuMzM5ODQ0IDI3LjY4NzUgMTQuMjY1NjI1IDI3LjA5Mzc1IDEzLjQzNzUgQyAyNi41IDEyLjYwOTM3NSAyNS41NzAzMTMgMTIgMjQuNSAxMiBaIE0gNy41IDE0IEMgNy44MTI1IDE0IDguMTU2MjUgMTQuMTU2MjUgOC40Njg3NSAxNC41OTM3NSBDIDguNzgxMjUgMTUuMDMxMjUgOSAxNS43MjY1NjMgOSAxNi41IEMgOSAxNy4yNzM0MzggOC43ODEyNSAxNy45Njg3NSA4LjQ2ODc1IDE4LjQwNjI1IEMgOC4xNTYyNSAxOC44NDM3NSA3LjgxMjUgMTkgNy41IDE5IEMgNy4xODc1IDE5IDYuODQzNzUgMTguODQzNzUgNi41MzEyNSAxOC40MDYyNSBDIDYuMjE4NzUgMTcuOTY4NzUgNiAxNy4yNzM0MzggNiAxNi41IEMgNiAxNS43MjY1NjMgNi4yMTg3NSAxNS4wMzEyNSA2LjUzMTI1IDE0LjU5Mzc1IEMgNi44NDM3NSAxNC4xNTYyNSA3LjE4NzUgMTQgNy41IDE0IFogTSAyNC41IDE0IEMgMjQuODEyNSAxNCAyNS4xNTYyNSAxNC4xNTYyNSAyNS40Njg3NSAxNC41OTM3NSBDIDI1Ljc4MTI1IDE1LjAzMTI1IDI2IDE1LjcyNjU2MyAyNiAxNi41IEMgMjYgMTcuMjczNDM4IDI1Ljc4MTI1IDE3Ljk2ODc1IDI1LjQ2ODc1IDE4LjQwNjI1IEMgMjUuMTU2MjUgMTguODQzNzUgMjQuODEyNSAxOSAyNC41IDE5IEMgMjQuMTg3NSAxOSAyMy44NDM3NSAxOC44NDM3NSAyMy41MzEyNSAxOC40MDYyNSBDIDIzLjIxODc1IDE3Ljk2ODc1IDIzIDE3LjI3MzQzOCAyMyAxNi41IEMgMjMgMTUuNzI2NTYzIDIzLjIxODc1IDE1LjAzMTI1IDIzLjUzMTI1IDE0LjU5Mzc1IEMgMjMuODQzNzUgMTQuMTU2MjUgMjQuMTg3NSAxNCAyNC41IDE0IFogTSAxNiAxNiBDIDE0LjY2Nzk2OSAxNiAxMy43MzgyODEgMTYuODY3MTg4IDEzLjI4MTI1IDE3LjYyNSBDIDEyLjgyNDIxOSAxOC4zODI4MTMgMTIuNTQ2ODc1IDE5LjAxNTYyNSAxMi4yODEyNSAxOS4yODEyNSBDIDEyLjEyNSAxOS40Mzc1IDExLjE2MDE1NiAxOS44MDA3ODEgMTAuMTU2MjUgMjAuMzEyNSBDIDkuNjUyMzQ0IDIwLjU3MDMxMyA5LjE0NDUzMSAyMC45MTQwNjMgOC43MTg3NSAyMS40Mzc1IEMgOC4yOTI5NjkgMjEuOTYwOTM4IDggMjIuNjg3NSA4IDIzLjUgQyA4IDI1LjQyMTg3NSA5LjU3ODEyNSAyNyAxMS41IDI3IEMgMTIuMzY3MTg4IDI3IDEzLjI2OTUzMSAyNi43MjI2NTYgMTQuMTU2MjUgMjYuNDY4NzUgQyAxNS4wNDI5NjkgMjYuMjE0ODQ0IDE2IDI2IDE2IDI2IEMgMTYgMjYgMTYuOTU3MDMxIDI2LjIxNDg0NCAxNy44NDM3NSAyNi40Njg3NSBDIDE4LjczMDQ2OSAyNi43MjI2NTYgMTkuNjMyODEzIDI3IDIwLjUgMjcgQyAyMi40MjE4NzUgMjcgMjQgMjUuNDIxODc1IDI0IDIzLjUgQyAyNCAyMi43MDcwMzEgMjMuNzA3MDMxIDIxLjk4MDQ2OSAyMy4yODEyNSAyMS40Njg3NSBDIDIyLjg1NTQ2OSAyMC45NTcwMzEgMjIuMzQzNzUgMjAuNjQwNjI1IDIxLjg0Mzc1IDIwLjM3NSBDIDIwLjg0Mzc1IDE5Ljg0Mzc1IDE5Ljg1OTM3NSAxOS40MjE4NzUgMTkuNzE4NzUgMTkuMjgxMjUgQyAxOS40ODA0NjkgMTkuMDQyOTY5IDE5LjIxMDkzOCAxOC4zOTA2MjUgMTguNzUgMTcuNjI1IEMgMTguMjg5MDYzIDE2Ljg1OTM3NSAxNy4zMzk4NDQgMTYgMTYgMTYgWiBNIDE2IDE4IEMgMTYuNjYwMTU2IDE4IDE2LjczNDM3NSAxOC4xNjAxNTYgMTcuMDMxMjUgMTguNjU2MjUgQyAxNy4zMjgxMjUgMTkuMTUyMzQ0IDE3LjU1NDY4OCAxOS45OTIxODggMTguMjgxMjUgMjAuNzE4NzUgQyAxOS4xMDU0NjkgMjEuNTQyOTY5IDIwLjE0ODQzOCAyMS43MjI2NTYgMjAuOTA2MjUgMjIuMTI1IEMgMjEuMjg1MTU2IDIyLjMyODEyNSAyMS41NzgxMjUgMjIuNTQyOTY5IDIxLjc1IDIyLjc1IEMgMjEuOTIxODc1IDIyLjk1NzAzMSAyMiAyMy4xNDg0MzggMjIgMjMuNSBDIDIyIDI0LjMzOTg0NCAyMS4zMzk4NDQgMjUgMjAuNSAyNSBDIDIwLjIxMDkzOCAyNSAxOS4yNzczNDQgMjQuNzc3MzQ0IDE4LjQwNjI1IDI0LjUzMTI1IEMgMTcuNTM1MTU2IDI0LjI4NTE1NiAxNi44MTY0MDYgMjQgMTYgMjQgQyAxNS4xODM1OTQgMjQgMTQuNDY0ODQ0IDI0LjI4NTE1NiAxMy41OTM3NSAyNC41MzEyNSBDIDEyLjcyMjY1NiAyNC43NzczNDQgMTEuNzg5MDYzIDI1IDExLjUgMjUgQyAxMC42NjAxNTYgMjUgMTAgMjQuMzM5ODQ0IDEwIDIzLjUgQyAxMCAyMy4wOTc2NTYgMTAuMDgyMDMxIDIyLjg5MDYyNSAxMC4yNSAyMi42ODc1IEMgMTAuNDE3OTY5IDIyLjQ4NDM3NSAxMC43MjI2NTYgMjIuMjg1MTU2IDExLjA5Mzc1IDIyLjA5Mzc1IEMgMTEuODM5ODQ0IDIxLjcxNDg0NCAxMi44NzUgMjEuNTYyNSAxMy43MTg3NSAyMC43MTg3NSBDIDE0LjQ1MzEyNSAxOS45ODQzNzUgMTQuNjc1NzgxIDE5LjExNzE4OCAxNC45Njg3NSAxOC42MjUgQyAxNS4yNjE3MTkgMTguMTMyODEzIDE1LjMzMjAzMSAxOCAxNiAxOCBaIi8+PC9zdmc+";
var food_drink = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxMSAzIEwgMTEgNyBMIDEzIDcgTCAxMyAzIFogTSAxNSA0IEwgMTUgNyBMIDE3IDcgTCAxNyA0IFogTSA0Ljg3NSA4IEwgNSA5LjA5Mzc1IEwgNi44MTI1IDI2LjMxMjUgQyA2Ljk3MjY1NiAyNy44MzIwMzEgOC4yODUxNTYgMjkgOS44MTI1IDI5IEwgMTkuMTg3NSAyOSBDIDIwLjcxNDg0NCAyOSAyMi4wMjczNDQgMjcuODMyMDMxIDIyLjE4NzUgMjYuMzEyNSBMIDIyLjY1NjI1IDIyIEwgMjUgMjIgQyAyNi42NDQ1MzEgMjIgMjggMjAuNjQ0NTMxIDI4IDE5IEwgMjggMTYgQyAyOCAxNC4zNTU0NjkgMjYuNjQ0NTMxIDEzIDI1IDEzIEwgMjMuNTkzNzUgMTMgTCAyNCA5LjA5Mzc1IEwgMjQuMTI1IDggWiBNIDcuMTI1IDEwIEwgMjEuODc1IDEwIEwgMjAuMTg3NSAyNi4wOTM3NSBDIDIwLjEzMjgxMyAyNi42MTMyODEgMTkuNzA3MDMxIDI3IDE5LjE4NzUgMjcgTCA5LjgxMjUgMjcgQyA5LjI5Mjk2OSAyNyA4Ljg2NzE4OCAyNi42MTMyODEgOC44MTI1IDI2LjA5Mzc1IFogTSAyMy4zNzUgMTUgTCAyNSAxNSBDIDI1LjU2NjQwNiAxNSAyNiAxNS40MzM1OTQgMjYgMTYgTCAyNiAxOSBDIDI2IDE5LjU2NjQwNiAyNS41NjY0MDYgMjAgMjUgMjAgTCAyMi44NDM3NSAyMCBaIi8+PC9zdmc+";
var activities = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxNiAzIEMgOC44MzIwMzEgMyAzIDguODMyMDMxIDMgMTYgQyAzIDIzLjE2Nzk2OSA4LjgzMjAzMSAyOSAxNiAyOSBDIDIzLjE2Nzk2OSAyOSAyOSAyMy4xNjc5NjkgMjkgMTYgQyAyOSA4LjgzMjAzMSAyMy4xNjc5NjkgMyAxNiAzIFogTSAxNiA1IEMgMTYuNjAxNTYzIDUgMTcuMTc1NzgxIDUuMDYyNSAxNy43NSA1LjE1NjI1IEwgMTYgNi40MDYyNSBMIDE0LjI1IDUuMTU2MjUgQyAxNC44MjAzMTMgNS4wNjY0MDYgMTUuNDAyMzQ0IDUgMTYgNSBaIE0gMTEuODEyNSA1Ljg0Mzc1IEwgMTUuNDA2MjUgOC40Njg3NSBMIDE2IDguOTA2MjUgTCAxNi41OTM3NSA4LjQ2ODc1IEwgMjAuMTg3NSA1Ljg0Mzc1IEMgMjEuNzg1MTU2IDYuNTA3ODEzIDIzLjE5NTMxMyA3LjUyMzQzOCAyNC4zMTI1IDguODEyNSBMIDIyLjkzNzUgMTMuMDkzNzUgTCAyMi43MTg3NSAxMy43ODEyNSBMIDIzLjMxMjUgMTQuMTg3NSBMIDI2LjkzNzUgMTYuODQzNzUgQyAyNi44MDQ2ODggMTguNjA1NDY5IDI2LjI2NTYyNSAyMC4yNTc4MTMgMjUuNDA2MjUgMjEuNjg3NSBMIDIwLjEyNSAyMS42ODc1IEwgMTkuOTA2MjUgMjIuMzc1IEwgMTguNSAyNi43MTg3NSBDIDE3LjY5OTIxOSAyNi45MDYyNSAxNi44NTkzNzUgMjcgMTYgMjcgQyAxNS4xMDU0NjkgMjcgMTQuMjM4MjgxIDI2Ljg4NjcxOSAxMy40MDYyNSAyNi42ODc1IEwgMTIuMDMxMjUgMjIuNDA2MjUgTCAxMS44MTI1IDIxLjcxODc1IEwgNi41OTM3NSAyMS43MTg3NSBDIDUuNzE4NzUgMjAuMjgxMjUgNS4xOTkyMTkgMTguNjIxMDk0IDUuMDYyNSAxNi44NDM3NSBMIDguNjU2MjUgMTQuMjE4NzUgTCA5LjI1IDEzLjgxMjUgTCA5LjAzMTI1IDEzLjEyNSBMIDcuNjI1IDguODc1IEMgOC43NSA3LjU1NDY4OCAxMC4xODM1OTQgNi41MTU2MjUgMTEuODEyNSA1Ljg0Mzc1IFogTSAxNiAxMC4wOTM3NSBMIDE1LjQwNjI1IDEwLjUzMTI1IEwgMTAuODQzNzUgMTMuODQzNzUgTCAxMC4yODEyNSAxNC4yODEyNSBMIDEwLjUgMTQuOTY4NzUgTCAxMi4yNSAyMC4zMTI1IEwgMTIuNDY4NzUgMjEgTCAxOS41MzEyNSAyMSBMIDE5Ljc1IDIwLjMxMjUgTCAyMS41IDE0Ljk2ODc1IEwgMjEuNzE4NzUgMTQuMjgxMjUgTCAyMS4xNTYyNSAxMy44NDM3NSBMIDE2LjU5Mzc1IDEwLjUzMTI1IFogTSAyNS43NSAxMC45MDYyNSBDIDI2LjI5Njg3NSAxMS45NTMxMjUgMjYuNjU2MjUgMTMuMTAxNTYzIDI2Ljg0Mzc1IDE0LjMxMjUgTCAyNS4wNjI1IDEzLjAzMTI1IFogTSA2LjIxODc1IDEwLjk2ODc1IEwgNi45MDYyNSAxMy4wMzEyNSBMIDUuMTU2MjUgMTQuMzEyNSBDIDUuMzM5ODQ0IDEzLjEyNSA1LjY4NzUgMTIgNi4yMTg3NSAxMC45Njg3NSBaIE0gMTYgMTIuNTkzNzUgTCAxOS4zNzUgMTUuMDMxMjUgTCAxOC4wOTM3NSAxOSBMIDEzLjkwNjI1IDE5IEwgMTIuNjI1IDE1LjAzMTI1IFogTSAyMS41OTM3NSAyMy42ODc1IEwgMjMuODQzNzUgMjMuNjg3NSBDIDIyLjk5MjE4OCAyNC41NjY0MDYgMjIuMDExNzE5IDI1LjI5Mjk2OSAyMC45MDYyNSAyNS44NDM3NSBaIE0gOC4xNTYyNSAyMy43MTg3NSBMIDEwLjM0Mzc1IDIzLjcxODc1IEwgMTEuMDMxMjUgMjUuODEyNSBDIDkuOTYwOTM4IDI1LjI2OTUzMSA4Ljk4ODI4MSAyNC41NjI1IDguMTU2MjUgMjMuNzE4NzUgWiIvPjwvc3ZnPg==";
var travel_places = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSA5LjUgNiBDIDguMTc5Njg4IDYgNy4wMDM5MDYgNi44NTkzNzUgNi42MjUgOC4xMjUgTCA1LjI1IDEyLjcxODc1IEwgMy4zMTI1IDEyLjA2MjUgTCAyLjY4NzUgMTMuOTM3NSBMIDQuNjU2MjUgMTQuNTkzNzUgTCA0LjAzMTI1IDE2LjcxODc1IEMgNC4wMDc4MTMgMTYuODA4NTk0IDMuOTk2MDk0IDE2LjkwNjI1IDQgMTcgTCA0IDI0IEMgNCAyNC4wMzEyNSA0IDI0LjA2MjUgNCAyNC4wOTM3NSBMIDQgMjUgQyA0IDI1LjU1MDc4MSA0LjQ0OTIxOSAyNiA1IDI2IEwgOCAyNiBMIDguMzQzNzUgMjUgTCAyMy42NTYyNSAyNSBMIDI0IDI2IEwgMjcgMjYgQyAyNy41NTA3ODEgMjYgMjggMjUuNTUwNzgxIDI4IDI1IEwgMjggMjQuMTU2MjUgQyAyOC4wMDM5MDYgMjQuMTA1NDY5IDI4LjAwMzkwNiAyNC4wNTA3ODEgMjggMjQgTCAyOCAxNyBDIDI4LjAwMzkwNiAxNi45MDYyNSAyNy45OTIxODggMTYuODA4NTk0IDI3Ljk2ODc1IDE2LjcxODc1IEwgMjcuMzQzNzUgMTQuNTkzNzUgTCAyOS4zMTI1IDEzLjkzNzUgTCAyOC42ODc1IDEyLjA2MjUgTCAyNi43NSAxMi43MTg3NSBMIDI1LjM3NSA4LjEyNSBDIDI0Ljk5NjA5NCA2Ljg1OTM3NSAyMy44MjAzMTMgNiAyMi41IDYgWiBNIDkuNSA4IEwgMjIuNSA4IEMgMjIuOTQ1MzEzIDggMjMuMzM5ODQ0IDguMjkyOTY5IDIzLjQ2ODc1IDguNzE4NzUgTCAyNC43NSAxMyBMIDcuMjUgMTMgTCA4LjUzMTI1IDguNzE4NzUgQyA4LjY2MDE1NiA4LjI4OTA2MyA5LjA1NDY4OCA4IDkuNSA4IFogTSA2LjY1NjI1IDE1IEwgMjUuMzQzNzUgMTUgTCAyNiAxNy4xODc1IEwgMjYgMjMgTCA2IDIzIEwgNiAxNy4xODc1IFogTSA4LjUgMTYgQyA3LjY3MTg3NSAxNiA3IDE2LjY3MTg3NSA3IDE3LjUgQyA3IDE4LjMyODEyNSA3LjY3MTg3NSAxOSA4LjUgMTkgQyA5LjMyODEyNSAxOSAxMCAxOC4zMjgxMjUgMTAgMTcuNSBDIDEwIDE2LjY3MTg3NSA5LjMyODEyNSAxNiA4LjUgMTYgWiBNIDIzLjUgMTYgQyAyMi42NzE4NzUgMTYgMjIgMTYuNjcxODc1IDIyIDE3LjUgQyAyMiAxOC4zMjgxMjUgMjIuNjcxODc1IDE5IDIzLjUgMTkgQyAyNC4zMjgxMjUgMTkgMjUgMTguMzI4MTI1IDI1IDE3LjUgQyAyNSAxNi42NzE4NzUgMjQuMzI4MTI1IDE2IDIzLjUgMTYgWiBNIDEyIDE5IEwgMTAuNzUgMjIgTCAxMi45MDYyNSAyMiBMIDEzLjM0Mzc1IDIxIEwgMTguNjU2MjUgMjEgTCAxOS4wOTM3NSAyMiBMIDIxLjI1IDIyIEwgMjAgMTkgWiIvPjwvc3ZnPg==";
var objects = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxNiA0IEMgMTEuMDQyOTY5IDQgNyA4LjA0Mjk2OSA3IDEzIEMgNyAxNC45MTc5NjkgNy44NDM3NSAxNi45MDYyNSA5IDE4LjY4NzUgQyA5Ljg1OTM3NSAyMC4wMTE3MTkgMTAuODg2NzE5IDIxLjIzMDQ2OSAxMiAyMi4xNTYyNSBMIDEyIDI1IEMgMTIgMjYuMDkzNzUgMTIuOTA2MjUgMjcgMTQgMjcgTCAxNSAyOCBMIDE3IDI4IEwgMTggMjcgQyAxOS4wOTM3NSAyNyAyMCAyNi4wOTM3NSAyMCAyNSBMIDIwIDIyLjE1NjI1IEMgMjEuMTEzMjgxIDIxLjIzMDQ2OSAyMi4xNDA2MjUgMjAuMDExNzE5IDIzIDE4LjY4NzUgQyAyNC4xNTYyNSAxNi45MDYyNSAyNSAxNC45MTc5NjkgMjUgMTMgQyAyNSA4LjA0Mjk2OSAyMC45NTcwMzEgNCAxNiA0IFogTSAxNiA2IEMgMTkuODc4OTA2IDYgMjMgOS4xMjEwOTQgMjMgMTMgQyAyMyAxNC4zMDg1OTQgMjIuMzU1NDY5IDE2LjAzNTE1NiAyMS4zNDM3NSAxNy41OTM3NSBDIDIwLjQ0MTQwNiAxOC45ODQzNzUgMTkuMjUzOTA2IDIwLjIyMjY1NiAxOC4xNTYyNSAyMSBMIDEzLjg0Mzc1IDIxIEMgMTIuNzQ2MDk0IDIwLjIyMjY1NiAxMS41NTg1OTQgMTguOTg0Mzc1IDEwLjY1NjI1IDE3LjU5Mzc1IEMgOS42NDQ1MzEgMTYuMDM1MTU2IDkgMTQuMzA4NTk0IDkgMTMgQyA5IDkuMTIxMDk0IDEyLjEyMTA5NCA2IDE2IDYgWiBNIDE0LjI1IDIzIEwgMTcuNzUgMjMgQyAxNy44MjgxMjUgMjMuMDU0Njg4IDE3LjkxMDE1NiAyMy4wOTM3NSAxOCAyMy4xMjUgTCAxOCAyNSBMIDE0IDI1IEwgMTQgMjMuMTI1IEMgMTQuMDg5ODQ0IDIzLjA5Mzc1IDE0LjE3MTg3NSAyMy4wNTQ2ODggMTQuMjUgMjMgWiIvPjwvc3ZnPg==";
var symbols = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxMSA1IEwgMTEgMTEgTCA1IDExIEwgNSAxMyBMIDExIDEzIEwgMTEgMTkgTCA1IDE5IEwgNSAyMSBMIDExIDIxIEwgMTEgMjcgTCAxMyAyNyBMIDEzIDIxIEwgMTkgMjEgTCAxOSAyNyBMIDIxIDI3IEwgMjEgMjEgTCAyNyAyMSBMIDI3IDE5IEwgMjEgMTkgTCAyMSAxMyBMIDI3IDEzIEwgMjcgMTEgTCAyMSAxMSBMIDIxIDUgTCAxOSA1IEwgMTkgMTEgTCAxMyAxMSBMIDEzIDUgWiBNIDEzIDEzIEwgMTkgMTMgTCAxOSAxOSBMIDEzIDE5IFoiLz48L3N2Zz4=";
var flags = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSA5IDQgQyA3LjM0NiA0IDYgNS4zNDYgNiA3IEMgNiA4LjMwMTYwOTQgNi44Mzg3NDg2IDkuNDAyMTM5MSA4IDkuODE2NDA2MiBMIDggMTEuMzA0Njg4IEwgOCAyMy4yMDcwMzEgTCA4IDI3LjAyMzQzOCBDIDggMjcuNTYzNDM4IDguNDM2NTYyNSAyOCA4Ljk3NjU2MjUgMjggTCA5LjAyMzQzNzUgMjggQyA5LjU2MzQzNzUgMjggMTAgMjcuNTYzNDM3IDEwIDI3LjAyMzQzOCBMIDEwIDIyLjIyODUxNiBDIDEwLjMzNDcwNyAyMS44Mzk3NTYgMTEuMTM4NDIzIDIxLjA0Njg3NSAxMy40NDUzMTIgMjEuMDQ2ODc1IEMgMTQuNjY5MzEzIDIxLjA0Njg3NSAxNS42NzA0MjIgMjEuNDczNzgxIDE2LjczMjQyMiAyMS45MjU3ODEgQyAxNy43Njk0MjIgMjIuMzY3NzgxIDE4Ljg0MTg5MSAyMi44MjQyMTkgMjAuMDg3ODkxIDIyLjgyNDIxOSBDIDIyLjQ0Njg5MSAyMi44MjQyMTkgMjQuMDQ5Mzc1IDIxLjU4NDY4OCAyNC43MzQzNzUgMjEuMDU0Njg4IEwgMjQuODg2NzE5IDIwLjkzOTQ1MyBDIDI1LjQzNzcxOSAyMC41NDA0NTMgMjYgMTkuOTk2IDI2IDE5IEwgMjYgMTAuNjc1NzgxIEMgMjYgOS43Njc3ODEyIDI1LjIyMTgyOCA5IDI0LjI5ODgyOCA5IEMgMjMuODAzODI4IDkgMjMuNDQwNDA2IDkuMjg2NTkzNyAyMi45NDE0MDYgOS42ODM1OTM4IEMgMjIuMjc5NDA2IDEwLjIwNzU5NCAyMS4yODA4OTEgMTEgMjAuMDg3ODkxIDExIEMgMTkuMjcyODkxIDExIDE4LjQ3NzY4OCAxMC42MTk3MzQgMTcuNTU0Njg4IDEwLjE3NzczNCBDIDE2LjQwMzY4NyA5LjYyNTczNDQgMTUuMDk4MzU5IDkgMTMuNDQzMzU5IDkgQyAxMi4zMDgyNTcgOSAxMS40MjE2ODcgOS4xODgzMzkzIDEwLjcxMjg5MSA5LjQ1NzAzMTIgQyAxMS40ODkwNzEgOC45MTQxODI0IDEyIDguMDE2NzgwMiAxMiA3IEMgMTIgNS4zNDYgMTAuNjU0IDQgOSA0IHogTSA5IDYgQyA5LjU1MiA2IDEwIDYuNDQ5IDEwIDcgQyAxMCA3LjU1MSA5LjU1MiA4IDkgOCBDIDguNDQ4IDggOCA3LjU1MSA4IDcgQyA4IDYuNDQ5IDguNDQ4IDYgOSA2IHogTSAxMy40NDMzNTkgMTEgQyAxNC42NDUzNTkgMTEgMTUuNjM4NDA2IDExLjQ3NjQ2OSAxNi42OTE0MDYgMTEuOTgwNDY5IEMgMTcuNzM2NDA2IDEyLjQ4MjQ2OSAxOC44MTc4OTEgMTMgMjAuMDg3ODkxIDEzIEMgMjEuODQyODkxIDEzIDIzLjE1ODA0NyAxMi4wNTQ0ODQgMjMuOTk4MDQ3IDExLjM5NjQ4NCBMIDIzLjk5ODA0NyAxOS4wNjY0MDYgQyAyMy45OTcwNDcgMTkuMDcwNDA2IDIzLjk1Mjk4NCAxOS4xNDUyNjYgMjMuNzA4OTg0IDE5LjMyMjI2NiBMIDIzLjUwOTc2NiAxOS40NzQ2MDkgQyAyMi45NDI3NjYgMTkuOTEyNjA5IDIxLjc2Mjg5MSAyMC44MjQyMTkgMjAuMDg3ODkxIDIwLjgyNDIxOSBDIDE5LjI0OTg5MSAyMC44MjQyMTkgMTguNDQ2NjI1IDIwLjQ4MjkzNyAxNy41MTU2MjUgMjAuMDg1OTM4IEMgMTYuMzcyNjI1IDE5LjU5NzkzOCAxNS4wNzYzNTkgMTkuMDQ0OTIyIDEzLjQ0MzM1OSAxOS4wNDQ5MjIgQyAxMS44OTEzNTkgMTkuMDQ0OTIyIDEwLjc4NiAxOS4zNTggMTAgMTkuNzUgTCAxMCAxMi4zNjEzMjggQyAxMC4zNDUgMTEuOTA1MzI4IDExLjEzMjM1OSAxMSAxMy40NDMzNTkgMTEgeiIvPjwvc3ZnPg==";
var recent = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTSAxNiA0IEMgMTEuODMyMDMxIDQgOC4xNTIzNDQgNi4xMTMyODEgNiA5LjM0Mzc1IEwgNiA2IEwgNCA2IEwgNCAxMyBMIDExIDEzIEwgMTEgMTEgTCA3LjM3NSAxMSBDIDkuMTAxNTYzIDguMDE5NTMxIDEyLjI5Njg3NSA2IDE2IDYgQyAyMS41MzUxNTYgNiAyNiAxMC40NjQ4NDQgMjYgMTYgQyAyNiAyMS41MzUxNTYgMjEuNTM1MTU2IDI2IDE2IDI2IEMgMTAuNDY0ODQ0IDI2IDYgMjEuNTM1MTU2IDYgMTYgTCA0IDE2IEMgNCAyMi42MTcxODggOS4zODI4MTMgMjggMTYgMjggQyAyMi42MTcxODggMjggMjggMjIuNjE3MTg4IDI4IDE2IEMgMjggOS4zODI4MTMgMjIuNjE3MTg4IDQgMTYgNCBaIE0gMTUgOCBMIDE1IDE3IEwgMjIgMTcgTCAyMiAxNSBMIDE3IDE1IEwgMTcgOCBaIi8+PC9zdmc+Cg==";
const _sfc_main$3 = defineComponent({
  name: "Header",
  setup(props) {
    const { state, updateSearch, updateActiveGroup } = inject("store");
    const hasSearch = computed(() => !state.options.hideSearch);
    const hasGroupIcons = computed(() => !state.options.hideGroupIcons);
    const orderedKeys = JSON.parse(JSON.stringify(state.orderedGroupKeys));
    const placeholder = computed(
      () => state.options.staticTexts.placeholder || ""
    );
    const searchValue = computed({
      get: () => state.search,
      set: (value) => updateSearch(value)
    });
    const groups = [
      ...state.groups,
      ...Object.keys(state.options.additionalGroups).map((g) => ({
        key: g,
        title: state.options.groupNames[g] ? state.options.groupNames[g] : snakeToCapitalizedCase(g)
      }))
    ];
    const orderedGroups = [];
    orderedKeys.forEach((key) => {
      const index2 = groups.findIndex((group) => group.key === key);
      if (index2 === -1)
        return;
      orderedGroups.push(groups[index2]);
      groups.splice(index2, 1);
    });
    return {
      orderedGroups,
      orderedKeys,
      searchValue,
      updateActiveGroup,
      hasSearch,
      hasGroupIcons,
      placeholder,
      icons: {
        smileys_people,
        animals_nature,
        food_drink,
        activities,
        travel_places,
        objects,
        symbols,
        flags,
        ...state.options.groupIcons,
        recent
      }
    };
  }
});
const _hoisted_1$2 = {
  key: 0,
  class: "v3-header"
};
const _hoisted_2$2 = {
  key: 0,
  class: "v3-groups"
};
const _hoisted_3$2 = ["onClick"];
const _hoisted_4$2 = ["title"];
const _hoisted_5$2 = ["src"];
const _hoisted_6$1 = {
  key: 1,
  class: "v3-spacing"
};
const _hoisted_7$2 = {
  key: 2,
  class: "v3-search"
};
const _hoisted_8$1 = ["placeholder"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.hasGroupIcons || _ctx.hasSearch ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
    _ctx.hasGroupIcons ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.orderedGroups, (group) => {
        return openBlock(), createElementBlock("button", {
          key: group.key,
          type: "button",
          class: normalizeClass(["v3-group", {
            "v3-is-hidden": !_ctx.icons[group.key]
          }]),
          onClick: ($event) => _ctx.updateActiveGroup(group.key)
        }, [
          createBaseVNode("span", {
            title: group.title,
            class: "v3-icon"
          }, [
            createBaseVNode("img", {
              src: _ctx.icons[group.key],
              alt: ""
            }, null, 8, _hoisted_5$2)
          ], 8, _hoisted_4$2)
        ], 10, _hoisted_3$2);
      }), 128))
    ])) : createCommentVNode("", true),
    _ctx.hasGroupIcons && _ctx.hasSearch ? (openBlock(), createElementBlock("div", _hoisted_6$1)) : createCommentVNode("", true),
    _ctx.hasSearch ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchValue = $event),
        type: "text",
        placeholder: _ctx.placeholder
      }, null, 8, _hoisted_8$1), [
        [vModelText, _ctx.searchValue]
      ])
    ])) : createCommentVNode("", true)
  ])) : createCommentVNode("", true);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  name: "Header",
  setup() {
    const { state, updateSkinTone } = inject("store");
    const skinTone = ref(false);
    const hasError = ref(false);
    const stateSkinTone = computed(() => state.skinTone);
    const skinToneText = computed(
      () => state.options.staticTexts.skinTone || "Skin tone"
    );
    const hasSkinTones = computed(() => !state.options.disableSkinTones);
    const platform = isMac() ? "is-mac" : "";
    const emoji = computed(() => {
      return {
        ...state.emoji,
        src: EMOJI_REMOTE_SRC + "/" + state.emoji[EMOJI_RESULT_KEY] + ".png"
      };
    });
    function updateSkinToneState(open = true) {
      skinTone.value = open;
    }
    function toggleSkinToneState() {
      skinTone.value = !skinTone.value;
    }
    function selectSkinTone(tone) {
      updateSkinTone(tone);
      updateSkinToneState(false);
    }
    watch(
      () => state.emoji,
      () => {
        hasError.value = false;
      }
    );
    return {
      emoji,
      SKIN_TONES,
      updateSkinToneState,
      skinTone,
      stateSkinTone,
      selectSkinTone,
      toggleSkinToneState,
      EMOJI_RESULT_KEY,
      EMOJI_NAME_KEY,
      skinToneText,
      hasSkinTones,
      native: state.options.native,
      unicodeToEmoji,
      platform,
      hasError
    };
  }
});
const _hoisted_1$1 = { class: "v3-foot-left" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = ["alt", "src"];
const _hoisted_4$1 = { class: "v3-text" };
const _hoisted_5$1 = { class: "v3-text" };
const _hoisted_6$3 = ["onClick"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "v3-footer",
    onMouseleave: _cache[2] || (_cache[2] = ($event) => _ctx.updateSkinToneState(false))
  }, [
    createBaseVNode("div", _hoisted_1$1, [
      createBaseVNode("span", {
        class: normalizeClass([_ctx.platform, "v3-icon"])
      }, [
        _ctx.native || _ctx.hasError ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.unicodeToEmoji(_ctx.emoji.r)), 1)) : (openBlock(), createElementBlock("img", {
          key: 1,
          alt: _ctx.unicodeToEmoji(_ctx.emoji.r),
          src: _ctx.emoji.src,
          onError: _cache[0] || (_cache[0] = ($event) => _ctx.hasError = true)
        }, null, 40, _hoisted_3$1))
      ], 2),
      createBaseVNode("span", _hoisted_4$1, " :" + toDisplayString(_ctx.emoji[_ctx.EMOJI_NAME_KEY][1] || _ctx.emoji[_ctx.EMOJI_NAME_KEY][0]) + ": ", 1)
    ]),
    _ctx.hasSkinTones ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createBaseVNode("button", {
        type: "button",
        class: "v3-tone",
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.toggleSkinToneState && _ctx.toggleSkinToneState(...args))
      }, [
        createBaseVNode("span", _hoisted_5$1, toDisplayString(_ctx.skinToneText), 1),
        createBaseVNode("span", {
          class: normalizeClass(`v3-icon v3-tone-${_ctx.stateSkinTone}`)
        }, null, 2)
      ]),
      createBaseVNode("div", {
        class: normalizeClass([_ctx.skinTone ? "v3-is-open" : "", "v3-skin-tones"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.SKIN_TONES, (tone) => {
          return openBlock(), createElementBlock("button", {
            key: tone,
            type: "button",
            class: normalizeClass(["v3-skin-tone-" + tone, "v3-skin-tone"]),
            onClick: ($event) => _ctx.selectSkinTone(tone)
          }, null, 10, _hoisted_6$3);
        }), 128))
      ], 2)
    ], 64)) : createCommentVNode("", true)
  ], 32);
}
var Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = defineComponent({
  name: "PickerRoot",
  components: {
    Header,
    Body,
    Footer
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    additionalGroups: {
      type: Object,
      default: () => ({})
    },
    groupOrder: {
      type: Array,
      default: () => []
    },
    groupIcons: {
      type: Object,
      default: () => ({})
    },
    groupNames: {
      type: Object,
      default: () => ({})
    }
  },
  emits: {
    select: (emoji) => true,
    "update:text": (value) => true
  },
  setup(props, { emit }) {
    const elem = ref();
    const button = ref();
    const picker = ref();
    const open = ref(false);
    const input = ref(props.text);
    const isInputType = props.type === "input" || props.type === "textarea";
    let cursor = -1;
    const { state } = inject("store");
    const colorTheme = computed(() => state.options.colorTheme);
    function onSelect(emoji) {
      if (isInputType) {
        const mode = state.options.mode;
        if (mode === "prepend") {
          input.value = emoji.i + input.value;
        } else if (mode === "insert" && cursor !== -1) {
          input.value = `${input.value.slice(0, cursor)}${emoji.i}${input.value.slice(cursor)}`;
          cursor += emoji.i.length;
        } else {
          input.value += emoji.i;
        }
        emit("update:text", input.value);
      }
      emit("select", emoji);
    }
    function updateCursor() {
      var _a;
      if (elem.value) {
        cursor = ((_a = elem.value) == null ? void 0 : _a.selectionEnd) || -1;
      }
    }
    function clickListener(event) {
      var _a;
      const isOutside = !((_a = event.target) == null ? void 0 : _a.closest(
        ".v3-input-picker-wrap"
      ));
      if (isOutside && open.value) {
        open.value = false;
      }
    }
    function setupPopper() {
      if (button.value && picker.value && isInputType) {
        let offset2 = state.options.offset;
        if (typeof offset2 !== "number") {
          offset2 = 6;
        }
        createPopper(button.value, picker.value, {
          placement: "bottom-end",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, offset2]
              }
            }
          ]
        });
        document.body.addEventListener("click", clickListener);
      }
    }
    function onChangeText(event) {
      input.value = event.target.value || "";
      emit("update:text", input.value);
    }
    onMounted(() => {
      setupPopper();
    });
    onBeforeUnmount(() => {
      document.body.removeEventListener("click", clickListener);
    });
    return {
      face: smileys_people,
      open,
      onSelect,
      input,
      elem,
      updateCursor,
      button,
      picker,
      isInputType,
      onChangeText,
      colorTheme
    };
  }
});
const _hoisted_1$4 = {
  key: 0,
  class: "v3-input-emoji-picker"
};
const _hoisted_2$4 = { class: "v3-input-picker-root" };
const _hoisted_3$4 = ["value"];
const _hoisted_4$4 = ["value"];
const _hoisted_5$4 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_Body = resolveComponent("Body");
  const _component_Footer = resolveComponent("Footer");
  return _ctx.isInputType ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$4, [
      _ctx.type === "input" ? (openBlock(), createElementBlock("input", {
        key: 0,
        ref: "elem",
        value: _ctx.input,
        type: "text",
        class: "v3-emoji-picker-input",
        onInput: _cache[0] || (_cache[0] = (...args) => _ctx.onChangeText && _ctx.onChangeText(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.updateCursor && _ctx.updateCursor(...args))
      }, null, 40, _hoisted_3$4)) : (openBlock(), createElementBlock("textarea", {
        key: 1,
        ref: "elem",
        value: _ctx.input,
        class: "v3-emoji-picker-textarea",
        onInput: _cache[2] || (_cache[2] = (...args) => _ctx.onChangeText && _ctx.onChangeText(...args)),
        onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.updateCursor && _ctx.updateCursor(...args))
      }, null, 40, _hoisted_4$4)),
      createBaseVNode("div", {
        class: normalizeClass(["v3-input-picker-wrap", _ctx.open ? "v3-picker-is-open" : ""])
      }, [
        createBaseVNode("button", {
          ref: "button",
          type: "button",
          class: "v3-input-picker-icon",
          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.open = !_ctx.open)
        }, [
          createBaseVNode("img", {
            src: _ctx.face,
            alt: ""
          }, null, 8, _hoisted_5$4)
        ], 512),
        createBaseVNode("div", {
          ref: "picker",
          class: normalizeClass(["v3-emoji-picker", "v3-color-theme-" + _ctx.colorTheme])
        }, [
          createVNode(_component_Header),
          createVNode(_component_Body, { onSelect: _ctx.onSelect }, null, 8, ["onSelect"]),
          createVNode(_component_Footer)
        ], 2)
      ], 2)
    ])
  ])) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(["v3-emoji-picker", "v3-color-theme-" + _ctx.colorTheme])
  }, [
    createVNode(_component_Header),
    createVNode(_component_Body, { onSelect: _ctx.onSelect }, null, 8, ["onSelect"]),
    createVNode(_component_Footer)
  ], 2));
}
var PickerRoot = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main$5 = defineComponent({
  name: "Picker",
  components: {
    PickerRoot
  },
  props: {
    native: {
      type: Boolean,
      default: false
    },
    hideSearch: {
      type: Boolean,
      default: false
    },
    hideGroupIcons: {
      type: Boolean,
      default: false
    },
    hideGroupNames: {
      type: Boolean,
      default: false
    },
    staticTexts: {
      type: Object,
      default: () => ({})
    },
    disableStickyGroupNames: {
      type: Boolean,
      default: false
    },
    disabledGroups: {
      type: Array,
      default: () => []
    },
    groupNames: {
      type: Object,
      default: () => ({})
    },
    disableSkinTones: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "insert"
    },
    offset: {
      type: Number,
      default: 6
    },
    additionalGroups: {
      type: Object,
      default: () => ({})
    },
    groupOrder: {
      type: Array,
      default: () => []
    },
    groupIcons: {
      type: Object,
      default: () => ({})
    },
    pickerType: {
      type: String,
      default: ""
    },
    displayRecent: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "light"
    }
  },
  emits: {
    "update:text": (text) => true,
    select: (emoji) => true
  },
  setup(props, { emit }) {
    const input = ref(props.text);
    function onChangeText(text) {
      input.value = text || "";
      emit("update:text", input.value);
    }
    const store = Store();
    store.updateOptions({
      native: props.native,
      hideSearch: props.hideSearch,
      hideGroupIcons: props.hideGroupIcons,
      hideGroupNames: props.hideGroupNames,
      staticTexts: { ...STATIC_TEXTS, ...props.staticTexts },
      disableStickyGroupNames: props.disableStickyGroupNames,
      disabledGroups: props.disabledGroups,
      groupNames: { ...GROUP_NAMES, ...props.groupNames },
      disableSkinTones: props.disableSkinTones,
      displayRecent: props.displayRecent,
      additionalGroups: props.additionalGroups,
      mode: props.mode,
      offset: props.offset,
      groupOrder: props.groupOrder,
      groupIcons: props.groupIcons,
      colorTheme: COLOR_THEMES.includes(props.theme) ? props.theme : "light"
    });
    provide("store", store);
    return {
      type: props.pickerType,
      input,
      onChangeText
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker_root = resolveComponent("picker-root");
  return openBlock(), createBlock(_component_picker_root, {
    type: _ctx.type,
    text: _ctx.input,
    onSelect: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("select", $event)),
    "onUpdate:text": _ctx.onChangeText
  }, null, 8, ["type", "text", "onUpdate:text"]);
}
var Picker = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var style = "";
var browserSupportsTextareaTextNodes;
function canManipulateViaTextNodes(input) {
  if (input.nodeName !== "TEXTAREA") {
    return false;
  }
  if (typeof browserSupportsTextareaTextNodes === "undefined") {
    var textarea = document.createElement("textarea");
    textarea.value = 1;
    browserSupportsTextareaTextNodes = !!textarea.firstChild;
  }
  return browserSupportsTextareaTextNodes;
}
function index(input, text) {
  input.focus();
  if (document.selection) {
    var ieRange = document.selection.createRange();
    ieRange.text = text;
    ieRange.collapse(
      false
    );
    ieRange.select();
    return;
  }
  var isSuccess = document.execCommand("insertText", false, text);
  if (!isSuccess) {
    var start2 = input.selectionStart;
    var end2 = input.selectionEnd;
    if (typeof input.setRangeText === "function") {
      input.setRangeText(text);
    } else {
      var range = document.createRange();
      var textNode = document.createTextNode(text);
      if (canManipulateViaTextNodes(input)) {
        var node = input.firstChild;
        if (!node) {
          input.appendChild(textNode);
        } else {
          var offset2 = 0;
          var startNode = null;
          var endNode = null;
          while (node && (startNode === null || endNode === null)) {
            var nodeLength = node.nodeValue.length;
            if (start2 >= offset2 && start2 <= offset2 + nodeLength) {
              range.setStart(startNode = node, start2 - offset2);
            }
            if (end2 >= offset2 && end2 <= offset2 + nodeLength) {
              range.setEnd(endNode = node, end2 - offset2);
            }
            offset2 += nodeLength;
            node = node.nextSibling;
          }
          if (start2 !== end2) {
            range.deleteContents();
          }
        }
      }
      if (canManipulateViaTextNodes(input) && range.commonAncestorContainer.nodeName === "#text") {
        range.insertNode(textNode);
      } else {
        var value = input.value;
        input.value = value.slice(0, start2) + text + value.slice(end2);
      }
    }
    input.setSelectionRange(start2 + text.length, start2 + text.length);
    var e = document.createEvent("UIEvent");
    e.initEvent("input", true, false);
    input.dispatchEvent(e);
  }
}
var ChatConversation_vue_vue_type_style_index_0_lang = "";
const { getScrollTarget, setVerticalScrollPosition } = scroll;
const _sfc_main = {
  name: "ChatConversation",
  components: {
    EmojiPicker: Picker
  },
  data() {
    return {
      message: "",
      loading: false,
      conversation_id: "",
      data: [],
      user_typing_data: [],
      chating_with_user_uuid: "",
      user_uuid: "",
      user_data: [],
      participants: [],
      main_user_type: "",
      loading_user: true,
      is_typing: false,
      files: {},
      file_url: "",
      file_type: "",
      upload_loading: false,
      chat_api_url: config.api_base_url + "/chatapi/uploadimage",
      participant_user_uuid: "",
      order_id: ""
    };
  },
  mounted() {
    this.conversation_id = this.$route.query.doc_id;
    let user = auth.getUser();
    this.user_uuid = user.client_uuid;
    this.getMessages();
    this.getParticipant();
    this.getWhoIsTyping();
    this.getDocumentDetails();
  },
  computed: {
    getChatmessage() {
      return this.data;
    },
    hasMessageOld() {
      if (Object.keys(this.data).length > 0) {
        return true;
      }
      return false;
    },
    hasMessage() {
      if (!APIinterface.empty(this.message)) {
        return true;
      }
      if (Object.keys(this.files).length > 0) {
        return true;
      }
      return false;
    },
    hasChatDocID() {
      if (!empty(this.chating_with_user_uuid)) {
        return true;
      }
      return false;
    },
    hasUserData() {
      if (Object.keys(this.user_data).length > 0) {
        return true;
      }
      return false;
    },
    getUserData() {
      return this.user_data;
    },
    getUserTyping() {
      return this.user_typing_data;
    },
    hasConversation() {
      if (!APIinterface.empty(this.conversation_id)) {
        return true;
      }
      return false;
    }
  },
  watch: {
    is_typing(newval, oldval) {
      if (newval) {
        this.UpdateWhoistyping(true);
      } else {
        this.UpdateWhoistyping(false);
      }
    },
    message(newval, oldval) {
      if (!this.is_typing) {
        setTimeout(() => {
          this.is_typing = false;
        }, 1e3);
      }
      this.is_typing = true;
    }
  },
  methods: {
    scrollTobottom() {
      try {
        setTimeout(() => {
          let el = this.$refs.scroll_ref;
          if (!APIinterface.empty(el)) {
            const target = getScrollTarget(el);
            const offset2 = el.offsetTop;
            const duration = 1;
            setVerticalScrollPosition(target, offset2, duration);
          }
        }, 500);
      } catch (error) {
        console.log(error);
      }
    },
    onSelectEmoji(emoji) {
      index(document.querySelector("textarea"), emoji.i);
      this.$refs.proxy.hide();
    },
    getMessages() {
      this.loading = true;
      const chatDocRef = doc(
        firebaseDb,
        firebaseCollectionEnum.chats,
        this.conversation_id
      );
      const messagesQuery = query(
        collection(chatDocRef, "messages"),
        orderBy("timestamp", "asc"),
        limit(firebaseCollectionEnum.limit)
      );
      onSnapshot(
        messagesQuery,
        (querySnapshot) => {
          this.data = [];
          this.loading = false;
          querySnapshot.forEach((doc2) => {
            if (doc2.exists()) {
              const message = doc2.data();
              let timestamp = message.timestamp.toDate().toISOString();
              this.data.push({
                fileType: message.fileType,
                fileUrl: message.fileUrl,
                message: message.message,
                senderID: message.senderID,
                timestamp,
                time: date.formatDate(timestamp, "hh:mm a")
              });
            } else {
              console.log("Conversation document does not exist");
            }
          });
          this.scrollTobottom();
        },
        (error) => {
          this.loading = false;
          console.error("Error fetching messages:", error);
        }
      );
    },
    getWhoIsTyping() {
      const chatDocRef = doc(
        firebaseDb,
        firebaseCollectionEnum.chats,
        this.conversation_id
      );
      onSnapshot(
        chatDocRef,
        (docSnapshot) => {
          if (docSnapshot.exists()) {
            let results = docSnapshot.data();
            this.user_typing_data = results.isTyping || [];
            Object.entries(this.user_typing_data).forEach(
              ([userIID, isTYping]) => {
                if (isTYping && userIID != this.user_uuid) {
                  this.scrollTobottom();
                }
              }
            );
          } else {
            this.user_typing_data = [];
          }
        },
        (error) => {
          console.error("Error fetching chat document:", error);
        }
      );
    },
    async getParticipant() {
      try {
        const docRef = doc(
          firebaseDb,
          firebaseCollectionEnum.chats,
          this.conversation_id
        );
        const dataSnapshot = await getDoc(docRef);
        if (dataSnapshot.exists()) {
          this.participants = dataSnapshot.data().participants;
          let resp_participants = this.participants.filter(
            (i) => !i.includes(this.user_uuid)
          );
          this.participant_user_uuid = resp_participants[0] ? resp_participants[0] : null;
          this.getUser();
        } else {
          console.log("Conversation document does not exist");
        }
      } catch (error) {
        console.error("Error getting participants:", error);
      }
    },
    getUser() {
      this.loading_user = true;
      APIinterface.fetchDataChats("getUsers", {
        main_user_type: this.main_user_type,
        users: this.participants
      }).then((data) => {
        this.user_data = data.details;
      }).catch((error) => {
        this.user_data = [];
      }).then((data) => {
        this.loading_user = false;
      });
    },
    async UpdateWhoistyping(data) {
      try {
        const docRef = doc(
          firebaseDb,
          firebaseCollectionEnum.chats,
          this.conversation_id
        );
        await updateDoc(docRef, {
          [`isTyping.${this.user_uuid}`]: data
        });
      } catch (error) {
        console.error("Error updating typing status:", error);
      }
    },
    onSubmit() {
      if (Object.keys(this.files).length > 0) {
        this.$refs.uploader.upload();
      } else {
        this.saveChatMessage();
      }
    },
    async saveChatMessage() {
      this.loading = true;
      const messagesRef = collection(
        firebaseDb,
        firebaseCollectionEnum.chats,
        this.conversation_id,
        "messages"
      );
      try {
        await addDoc(messagesRef, {
          message: this.message,
          senderID: this.user_uuid,
          timestamp: Timestamp.now(),
          fileUrl: this.file_url,
          fileType: this.file_type
        });
        this.loading = false;
        this.documentLastUpdate(this.conversation_id);
        this.resetChat();
        this.notifyUser();
      } catch (error) {
        console.error("Error adding message to the conversation:", error);
        APIinterface.notify("dark", error, "error", this.$q);
      }
    },
    async documentLastUpdate(doc_id) {
      try {
        const chatRef = doc(firebaseDb, firebaseCollectionEnum.chats, doc_id);
        await updateDoc(chatRef, {
          lastUpdated: serverTimestamp()
        });
      } catch (error) {
        APIinterface.notify("dark", error, "error", this.$q);
      }
    },
    resetChat() {
      this.message = "";
      this.file_url = "";
      this.file_type = "";
      this.files = {};
      this.$refs.uploader.reset();
    },
    pickFiles() {
      this.$refs.uploader.pickFiles();
    },
    onRejectedFiles(data) {
      APIinterface.notify(
        "dark",
        this.$t("Invalid file type"),
        "error",
        this.$q
      );
    },
    afterAddedFiles(data) {
      Object.entries(data).forEach(([key, items]) => {
        this.files[items.name] = {
          name: items.name
        };
      });
    },
    afterRemoveFiles(data) {
      Object.entries(data).forEach(([key, items]) => {
        delete this.files[items.name];
      });
    },
    onUploadingFiles(data) {
      this.upload_loading = true;
    },
    afterUploaded(data) {
      if (data.xhr.status == 200) {
        let result = JSON.parse(data.xhr.response);
        let code = result.code || false;
        let details = result.details || [];
        let message = result.msg || "";
        if (code == 1) {
          this.file_url = details.file_url;
          this.file_type = details.file_type;
          this.saveChatMessage();
        } else {
          APIinterface.notify("dark", message, "error", this.$q);
          this.$refs.uploader.reset();
        }
      } else {
        APIinterface.notify(
          "dark",
          this.$t("IError uploading files"),
          "error",
          this.$q
        );
        this.$refs.uploader.reset();
      }
    },
    afterFinishUpload() {
      this.upload_loading = false;
    },
    notifyUser() {
      APIinterface.fetchDataChats("notifyUser", {
        from_user_uuid: this.user_uuid,
        user_uuid: this.participant_user_uuid
      }).then((data) => {
      }).catch((error) => {
      }).then((data) => {
      });
    },
    async getDocumentDetails() {
      const docRef = doc(
        firebaseDb,
        firebaseCollectionEnum.chats,
        this.conversation_id
      );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.order_id = docSnap.data().orderID;
      } else {
        this.order_id = "";
      }
    }
  }
};
const _hoisted_1 = ["src"];
const _hoisted_2 = {
  key: 0,
  class: "text-weight-bold"
};
const _hoisted_3 = {
  key: 1,
  class: "font11"
};
const _hoisted_4 = { style: { "width": "100%", "max-width": "400px" } };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  ref: "scroll_ref",
  class: "text-white q-pa-sm"
};
const _hoisted_7 = { class: "flex justify-start q-col-gutter-x-md" };
const _hoisted_8 = ["src"];
const _hoisted_9 = {
  class: "absolute-right",
  style: { "margin-right": "-10px", "margin-top": "-5px" }
};
const _hoisted_10 = { class: "q-gutter-sm" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EmojiPicker = resolveComponent("EmojiPicker");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(QHeader, {
      class: normalizeClass({
        "bg-mydark text-white": _ctx.$q.dark.mode,
        "bg-white text-dark": !_ctx.$q.dark.mode
      })
    }, {
      default: withCtx(() => [
        createVNode(QToolbar, null, {
          default: withCtx(() => [
            createVNode(QBtn, {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back()),
              flat: "",
              round: "",
              dense: "",
              icon: "las la-angle-left",
              class: "q-mr-sm",
              color: _ctx.$q.dark.mode ? "white" : "dark"
            }, null, 8, ["color"]),
            $data.loading_user ? (openBlock(), createBlock(QCircularProgress, {
              key: 0,
              indeterminate: "",
              rounded: "",
              size: "25px",
              color: "primary"
            })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createVNode(QAvatar, { size: "30px" }, {
                default: withCtx(() => [
                  $options.getUserData[$data.participant_user_uuid] ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: $options.getUserData[$data.participant_user_uuid].photo_url
                  }, null, 8, _hoisted_1)) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(QToolbarTitle, null, {
                default: withCtx(() => [
                  $options.getUserData[$data.participant_user_uuid] ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString($options.getUserData[$data.participant_user_uuid].first_name) + " " + toDisplayString($options.getUserData[$data.participant_user_uuid].last_name), 1)) : createCommentVNode("", true),
                  $data.order_id ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.$t("Order#")) + " " + toDisplayString($data.order_id), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ], 64))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(QPage, { class: "flex items-stretch content-end q-pa-md" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_4, [
          createVNode(QInnerLoading, {
            showing: $data.loading,
            color: "primary",
            label: _ctx.$t("Please wait"),
            "label-class": "text-dark",
            "label-style": "font-size: 1em"
          }, null, 8, ["showing", "label"]),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.getChatmessage, (items) => {
            return openBlock(), createBlock(QChatMessage, {
              key: items,
              name: $options.getUserData[items.senderID] ? items.senderID == $data.user_uuid ? _ctx.$t("You") : $options.getUserData[items.senderID].first_name : "",
              avatar: $options.getUserData[items.senderID] ? $options.getUserData[items.senderID].photo_url : "",
              stamp: items.time,
              "text-color": items.senderID == $data.user_uuid ? "white" : "dark",
              "bg-color": items.senderID == $data.user_uuid ? "blue" : "grey-2",
              sent: items.senderID == $data.user_uuid ? true : false
            }, {
              avatar: withCtx(() => [
                createVNode(QAvatar, { class: "q-ml-sm" }, {
                  default: withCtx(() => [
                    createVNode(QImg, {
                      src: $options.getUserData[items.senderID] ? $options.getUserData[items.senderID].photo_url : "",
                      "spinner-size": "sm",
                      "spinner-color": "primary",
                      style: { "height": "48px", "max-width": "48px", "min-width": "48px" },
                      fit: "cover",
                      loading: "lazy"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              default: withCtx(() => [
                items.message ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(items.message), 1)) : createCommentVNode("", true),
                items.fileUrl ? (openBlock(), createBlock(QImg, {
                  key: 1,
                  src: items.fileUrl,
                  "spinner-size": "sm",
                  "spinner-color": "primary",
                  style: { "min-height": "150px", "min-width": "150px", "max-width": "150px" }
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["name", "avatar", "stamp", "text-color", "bg-color", "sent"]);
          }), 128)),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.getUserTyping, (items, userUUID) => {
            return openBlock(), createElementBlock(Fragment, { key: items }, [
              items ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                userUUID != $data.user_uuid ? (openBlock(), createBlock(QChatMessage, {
                  key: 0,
                  name: $options.getUserData[userUUID] ? userUUID == $data.user_uuid ? _ctx.$t("You") : $options.getUserData[userUUID].first_name : "",
                  avatar: $options.getUserData[userUUID] ? $options.getUserData[userUUID].photo_url : "",
                  stamp: items.time,
                  "text-color": userUUID == $data.user_uuid ? "white" : "dark",
                  "bg-color": "amber",
                  sent: userUUID == $data.user_uuid ? true : false
                }, {
                  default: withCtx(() => [
                    createVNode(QSpinnerDots, { size: "2rem" })
                  ]),
                  _: 2
                }, 1032, ["name", "avatar", "stamp", "text-color", "sent"])) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true)
            ], 64);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_6, null, 512)
      ]),
      _: 1
    }),
    $options.hasConversation ? (openBlock(), createBlock(QFooter, {
      key: 0,
      class: "bg-white text-dark q-pl-sm q-pr-sm border-grey"
    }, {
      default: withCtx(() => [
        createVNode(QUploader, {
          url: $data.chat_api_url,
          multiple: "",
          ref: "uploader",
          flat: "",
          accept: ".jpg, image/*",
          "max-total-size": "10485760",
          "field-name": "file",
          onAdded: $options.afterAddedFiles,
          onRemoved: $options.afterRemoveFiles,
          onRejected: $options.onRejectedFiles,
          onUploading: $options.onUploadingFiles,
          onUploaded: $options.afterUploaded,
          onFinish: $options.afterFinishUpload
        }, {
          header: withCtx(() => [
            createVNode(QUploaderAddTrigger)
          ]),
          list: withCtx((scope) => [
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(scope.files, (file) => {
                return openBlock(), createElementBlock("div", {
                  key: file.__key,
                  class: "relative-position"
                }, [
                  createBaseVNode("img", {
                    src: file.__img.src,
                    style: { "max-width": "60px", "height": "60px" },
                    class: "radius10"
                  }, null, 8, _hoisted_8),
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(QBtn, {
                      unelevated: "",
                      round: "",
                      color: "blue",
                      icon: "close",
                      size: "xs",
                      onClick: ($event) => scope.removeFile(file)
                    }, null, 8, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["url", "onAdded", "onRemoved", "onRejected", "onUploading", "onUploaded", "onFinish"]),
        createVNode(QInput, {
          color: "blue",
          modelValue: $data.message,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.message = $event),
          label: _ctx.$t("Your message"),
          ref: "message",
          autogrow: "",
          borderless: ""
        }, {
          append: withCtx(() => [
            createBaseVNode("div", _hoisted_10, [
              createVNode(QBtn, {
                unelevated: "",
                round: "",
                color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                onClick: $options.pickFiles,
                dense: ""
              }, {
                default: withCtx(() => [
                  createVNode(QIcon, {
                    name: "attach_file",
                    class: "rotate-45"
                  })
                ]),
                _: 1
              }, 8, ["color", "text-color", "onClick"]),
              createVNode(QBtn, {
                unelevated: "",
                round: "",
                color: _ctx.$q.dark.mode ? "grey600" : "mygrey",
                "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                dense: ""
              }, {
                default: withCtx(() => [
                  createVNode(QIcon, { name: "emoji_emotions" }),
                  createVNode(QPopupProxy, { ref: "proxy" }, {
                    default: withCtx(() => [
                      createVNode(QCard, null, {
                        default: withCtx(() => [
                          createVNode(_component_EmojiPicker, {
                            native: true,
                            onSelect: $options.onSelectEmoji,
                            "disable-skin-tones": true
                          }, null, 8, ["onSelect"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 512)
                ]),
                _: 1
              }, 8, ["color", "text-color"]),
              createVNode(QBtn, {
                onClick: $options.onSubmit,
                disabled: !$options.hasMessage,
                flat: "",
                color: _ctx.$q.dark.mode ? "grey600" : "primary",
                "text-color": _ctx.$q.dark.mode ? "grey300" : "grey",
                label: _ctx.$t("Send"),
                "no-caps": "",
                size: "md"
              }, null, 8, ["onClick", "disabled", "color", "text-color", "label"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "label"])
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ], 64);
}
var ChatConversation = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["render", _sfc_render], ["__file", "ChatConversation.vue"]]);
export { ChatConversation as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhdENvbnZlcnNhdGlvbi5lMTQ3MzcyZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9jaGF0L1FDaGF0TWVzc2FnZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdXBsb2FkZXIvUVVwbG9hZGVyQWRkVHJpZ2dlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcG9wdXAtcHJveHkvUVBvcHVwUHJveHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlMy1lbW9qaS1waWNrZXIvZGlzdC9lbW9qaS1waWNrZXIuZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5zZXJ0LXRleHQtYXQtY3Vyc29yL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0FjY291bnQvQ2hhdENvbnZlcnNhdGlvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRWTm9kZXMgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnZtL3ZtLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUNoYXRNZXNzYWdlJyxcblxuICBwcm9wczoge1xuICAgIHNlbnQ6IEJvb2xlYW4sXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBiZ0NvbG9yOiBTdHJpbmcsXG4gICAgdGV4dENvbG9yOiBTdHJpbmcsXG4gICAgbmFtZTogU3RyaW5nLFxuICAgIGF2YXRhcjogU3RyaW5nLFxuICAgIHRleHQ6IEFycmF5LFxuICAgIHN0YW1wOiBTdHJpbmcsXG4gICAgc2l6ZTogU3RyaW5nLFxuICAgIGxhYmVsSHRtbDogQm9vbGVhbixcbiAgICBuYW1lSHRtbDogQm9vbGVhbixcbiAgICB0ZXh0SHRtbDogQm9vbGVhbixcbiAgICBzdGFtcEh0bWw6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IG9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnNlbnQgPT09IHRydWUgPyAnc2VudCcgOiAncmVjZWl2ZWQnKSlcblxuICAgIGNvbnN0IHRleHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1tZXNzYWdlLXRleHQtY29udGVudCBxLW1lc3NhZ2UtdGV4dC1jb250ZW50LS0keyBvcC52YWx1ZSB9YFxuICAgICAgKyAocHJvcHMudGV4dENvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgcHJvcHMudGV4dENvbG9yIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgbWVzc2FnZUNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLW1lc3NhZ2UtdGV4dCBxLW1lc3NhZ2UtdGV4dC0tJHsgb3AudmFsdWUgfWBcbiAgICAgICsgKHByb3BzLmJnQ29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBwcm9wcy5iZ0NvbG9yIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbWVzc2FnZS1jb250YWluZXIgcm93IGl0ZW1zLWVuZCBuby13cmFwJ1xuICAgICAgKyAocHJvcHMuc2VudCA9PT0gdHJ1ZSA/ICcgcmV2ZXJzZScgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBzaXplQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuc2l6ZSAhPT0gdm9pZCAwID8gYGNvbC0keyBwcm9wcy5zaXplIH1gIDogJycpKVxuXG4gICAgY29uc3QgZG9tUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgbXNnOiBwcm9wcy50ZXh0SHRtbCA9PT0gdHJ1ZSA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50JyxcbiAgICAgIHN0YW1wOiBwcm9wcy5zdGFtcEh0bWwgPT09IHRydWUgPyAnaW5uZXJIVE1MJyA6ICd0ZXh0Q29udGVudCcsXG4gICAgICBuYW1lOiBwcm9wcy5uYW1lSHRtbCA9PT0gdHJ1ZSA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50JyxcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbEh0bWwgPT09IHRydWUgPyAnaW5uZXJIVE1MJyA6ICd0ZXh0Q29udGVudCdcbiAgICB9KSlcblxuICAgIGZ1bmN0aW9uIHdyYXBTdGFtcCAobm9kZSkge1xuICAgICAgaWYgKHNsb3RzLnN0YW1wICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIFsgbm9kZSwgaCgnZGl2JywgeyBjbGFzczogJ3EtbWVzc2FnZS1zdGFtcCcgfSwgc2xvdHMuc3RhbXAoKSkgXVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc3RhbXApIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1tZXNzYWdlLXN0YW1wJyxcbiAgICAgICAgICAgIFsgZG9tUHJvcHMudmFsdWUuc3RhbXAgXTogcHJvcHMuc3RhbXBcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbIG5vZGUgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRleHQgKGNvbnRlbnRMaXN0LCB3aXRoU2xvdHMpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB3aXRoU2xvdHMgPT09IHRydWVcbiAgICAgICAgPyAoY29udGVudExpc3QubGVuZ3RoID4gMSA/IHRleHQgPT4gdGV4dCA6IHRleHQgPT4gaCgnZGl2JywgWyB0ZXh0IF0pKVxuICAgICAgICA6IHRleHQgPT4gaCgnZGl2JywgeyBbIGRvbVByb3BzLnZhbHVlLm1zZyBdOiB0ZXh0IH0pXG5cbiAgICAgIHJldHVybiBjb250ZW50TGlzdC5tYXAoKG1zZywgaW5kZXgpID0+IGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgY2xhc3M6IG1lc3NhZ2VDbGFzcy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiB0ZXh0Q2xhc3MudmFsdWUgfSwgd3JhcFN0YW1wKGNvbnRlbnQobXNnKSkpXG4gICAgICBdKSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gW11cblxuICAgICAgaWYgKHNsb3RzLmF2YXRhciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnRhaW5lci5wdXNoKHNsb3RzLmF2YXRhcigpKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAocHJvcHMuYXZhdGFyICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29udGFpbmVyLnB1c2goXG4gICAgICAgICAgaCgnaW1nJywge1xuICAgICAgICAgICAgY2xhc3M6IGBxLW1lc3NhZ2UtYXZhdGFyIHEtbWVzc2FnZS1hdmF0YXItLSR7IG9wLnZhbHVlIH1gLFxuICAgICAgICAgICAgc3JjOiBwcm9wcy5hdmF0YXIsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1zZyA9IFtdXG5cbiAgICAgIGlmIChzbG90cy5uYW1lICE9PSB2b2lkIDApIHtcbiAgICAgICAgbXNnLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogYHEtbWVzc2FnZS1uYW1lIHEtbWVzc2FnZS1uYW1lLS0keyBvcC52YWx1ZSB9YCB9LCBzbG90cy5uYW1lKCkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCkge1xuICAgICAgICBtc2cucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogYHEtbWVzc2FnZS1uYW1lIHEtbWVzc2FnZS1uYW1lLS0keyBvcC52YWx1ZSB9YCxcbiAgICAgICAgICAgIFsgZG9tUHJvcHMudmFsdWUubmFtZSBdOiBwcm9wcy5uYW1lXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2xvdHMuZGVmYXVsdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG1zZy5wdXNoKFxuICAgICAgICAgIGdldFRleHQoXG4gICAgICAgICAgICBnZXROb3JtYWxpemVkVk5vZGVzKHNsb3RzLmRlZmF1bHQoKSksXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwcm9wcy50ZXh0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbXNnLnB1c2goZ2V0VGV4dChwcm9wcy50ZXh0KSlcbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IHNpemVDbGFzcy52YWx1ZSB9LCBtc2cpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgaWYgKHNsb3RzLmxhYmVsICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1tZXNzYWdlLWxhYmVsJyB9LCBzbG90cy5sYWJlbCgpKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwcm9wcy5sYWJlbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLW1lc3NhZ2UtbGFiZWwnLFxuICAgICAgICAgICAgWyBkb21Qcm9wcy52YWx1ZS5sYWJlbCBdOiBwcm9wcy5sYWJlbFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogY29udGFpbmVyQ2xhc3MudmFsdWUgfSwgY29udGFpbmVyKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogYHEtbWVzc2FnZSBxLW1lc3NhZ2UtJHsgb3AudmFsdWUgfWBcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGluamVjdCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgdXBsb2FkZXJLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnN5bWJvbHMvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FVcGxvYWRlckFkZFRyaWdnZXInLFxuXG4gIHNldHVwICgpIHtcbiAgICBjb25zdCAkdHJpZ2dlciA9IGluamVjdCh1cGxvYWRlcktleSwgZW1wdHlSZW5kZXJGbilcblxuICAgIGlmICgkdHJpZ2dlciA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUVVwbG9hZGVyQWRkVHJpZ2dlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRVXBsb2FkZXInKVxuICAgIH1cblxuICAgIHJldHVybiAkdHJpZ2dlclxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFEaWFsb2cgZnJvbSAnLi4vZGlhbG9nL1FEaWFsb2cuanMnXG5pbXBvcnQgUU1lbnUgZnJvbSAnLi4vbWVudS9RTWVudS5qcydcblxuaW1wb3J0IHVzZUFuY2hvciwgeyB1c2VBbmNob3JQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWFuY2hvci91c2UtYW5jaG9yLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBpbmplY3RQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5pbmplY3Qtb2JqLXByb3AvaW5qZWN0LW9iai1wcm9wLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBvcHVwUHJveHknLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlQW5jaG9yUHJvcHMsXG5cbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA0NTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Nob3cnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQsIGF0dHJzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IHBvcHVwUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLmJyZWFrcG9pbnQsIDEwKSlcblxuICAgIGNvbnN0IHsgY2FuU2hvdyB9ID0gdXNlQW5jaG9yKHsgc2hvd2luZyB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSAoKSB7XG4gICAgICByZXR1cm4gJHEuc2NyZWVuLndpZHRoIDwgYnJlYWtwb2ludC52YWx1ZSB8fCAkcS5zY3JlZW4uaGVpZ2h0IDwgYnJlYWtwb2ludC52YWx1ZVxuICAgICAgICA/ICdkaWFsb2cnXG4gICAgICAgIDogJ21lbnUnXG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHJlZihnZXRUeXBlKCkpXG5cbiAgICBjb25zdCBwb3B1cFByb3BzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZS52YWx1ZSA9PT0gJ21lbnUnID8geyBtYXhIZWlnaHQ6ICc5OXZoJyB9IDoge30pXG4gICAgKVxuXG4gICAgd2F0Y2goKCkgPT4gZ2V0VHlwZSgpLCB2YWwgPT4ge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgdHlwZS52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvblNob3cgKGV2dCkge1xuICAgICAgc2hvd2luZy52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IaWRlIChldnQpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgdHlwZS52YWx1ZSA9IGdldFR5cGUoKVxuICAgICAgZW1pdCgnaGlkZScsIGV2dClcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBzaG93IChldnQpIHsgY2FuU2hvdyhldnQpID09PSB0cnVlICYmIHBvcHVwUmVmLnZhbHVlLnNob3coZXZ0KSB9LFxuICAgICAgaGlkZSAoZXZ0KSB7IHBvcHVwUmVmLnZhbHVlLmhpZGUoZXZ0KSB9LFxuICAgICAgdG9nZ2xlIChldnQpIHsgcG9wdXBSZWYudmFsdWUudG9nZ2xlKGV2dCkgfVxuICAgIH0pXG5cbiAgICBpbmplY3RQcm9wKHByb3h5LCAnY3VycmVudENvbXBvbmVudCcsICgpID0+ICh7XG4gICAgICB0eXBlOiB0eXBlLnZhbHVlLFxuICAgICAgcmVmOiBwb3B1cFJlZi52YWx1ZVxuICAgIH0pKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogcG9wdXBSZWYsXG4gICAgICAgIC4uLnBvcHVwUHJvcHMudmFsdWUsXG4gICAgICAgIC4uLmF0dHJzLFxuICAgICAgICBvblNob3csXG4gICAgICAgIG9uSGlkZVxuICAgICAgfVxuXG4gICAgICBsZXQgY29tcG9uZW50XG5cbiAgICAgIGlmICh0eXBlLnZhbHVlID09PSAnZGlhbG9nJykge1xuICAgICAgICBjb21wb25lbnQgPSBRRGlhbG9nXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50ID0gUU1lbnVcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXQsXG4gICAgICAgICAgY29udGV4dE1lbnU6IHByb3BzLmNvbnRleHRNZW51LFxuICAgICAgICAgIG5vUGFyZW50RXZlbnQ6IHRydWUsXG4gICAgICAgICAgc2VwYXJhdGVDbG9zZVBvcHVwOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKGNvbXBvbmVudCwgZGF0YSwgc2xvdHMuZGVmYXVsdClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWFjdGl2ZSwgcmVhZG9ubHksIHRvUmF3LCBkZWZpbmVDb21wb25lbnQsIGluamVjdCwgcmVmLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlLCB3YXRjaCwgb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUVsZW1lbnRWTm9kZSwgbm9ybWFsaXplQ2xhc3MsIEZyYWdtZW50LCByZW5kZXJMaXN0LCB3aXRoRGlyZWN0aXZlcywgdG9EaXNwbGF5U3RyaW5nLCB2U2hvdywgY3JlYXRlQ29tbWVudFZOb2RlLCB2TW9kZWxUZXh0LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgcmVzb2x2ZUNvbXBvbmVudCwgY3JlYXRlVk5vZGUsIHByb3ZpZGUsIGNyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiO1xuY29uc3QgRU1PSklfUkVNT1RFX1NSQyA9IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9lbW9qaS1kYXRhc291cmNlLWFwcGxlQDYuMC4xL2ltZy9hcHBsZS82NFwiO1xuY29uc3QgR1JPVVBfTkFNRVMgPSB7XG4gIHJlY2VudDogXCJSZWNlbnRseSB1c2VkXCIsXG4gIHNtaWxleXNfcGVvcGxlOiBcIlNtaWxlcyAmIFBlb3BsZVwiLFxuICBhbmltYWxzX25hdHVyZTogXCJBbmltYWxzICYgTmF0dXJlXCIsXG4gIGZvb2RfZHJpbms6IFwiRm9vZCAmIERyaW5rXCIsXG4gIGFjdGl2aXRpZXM6IFwiQWN0aXZpdGllc1wiLFxuICB0cmF2ZWxfcGxhY2VzOiBcIlRyYXZlbCBwbGFjZXNcIixcbiAgb2JqZWN0czogXCJPYmplY3RzXCIsXG4gIHN5bWJvbHM6IFwiU3ltYm9sc1wiLFxuICBmbGFnczogXCJGbGFnc1wiXG59O1xuY29uc3QgRU1PSklfVU5JQ09ERV9LRVkgPSBcInVcIjtcbmNvbnN0IEVNT0pJX05BTUVfS0VZID0gXCJuXCI7XG5jb25zdCBFTU9KSV9WQVJJQVRJT05TX0tFWSA9IFwidlwiO1xuY29uc3QgRU1PSklfUkVTVUxUX0tFWSA9IFwiclwiO1xuY29uc3QgREVGQVVMVF9FTU9KSSA9IHtcbiAgW0VNT0pJX05BTUVfS0VZXTogW1wiZ3Jpbm5pbmcgZmFjZVwiLCBcImdyaW5uaW5nXCJdLFxuICBbRU1PSklfVU5JQ09ERV9LRVldOiBcIjFmNjAwXCIsXG4gIFtFTU9KSV9SRVNVTFRfS0VZXTogXCIxZjYwMFwiXG59O1xuY29uc3QgU0tJTl9UT05FX05FVVRSQUwgPSBcIm5ldXRyYWxcIjtcbmNvbnN0IFNLSU5fVE9ORV9MSUdIVCA9IFwiMWYzZmJcIjtcbmNvbnN0IFNLSU5fVE9ORV9NRURJVU1fTElHSFQgPSBcIjFmM2ZjXCI7XG5jb25zdCBTS0lOX1RPTkVfTUVESVVNID0gXCIxZjNmZFwiO1xuY29uc3QgU0tJTl9UT05FX01FRElVTV9EQVJLID0gXCIxZjNmZVwiO1xuY29uc3QgU0tJTl9UT05FX0RBUksgPSBcIjFmM2ZmXCI7XG5jb25zdCBTS0lOX1RPTkVTID0gW1xuICBTS0lOX1RPTkVfTkVVVFJBTCxcbiAgU0tJTl9UT05FX0xJR0hULFxuICBTS0lOX1RPTkVfTUVESVVNX0xJR0hULFxuICBTS0lOX1RPTkVfTUVESVVNLFxuICBTS0lOX1RPTkVfTUVESVVNX0RBUkssXG4gIFNLSU5fVE9ORV9EQVJLXG5dO1xuY29uc3QgU1RBVElDX1RFWFRTID0ge1xuICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggZW1vamlcIixcbiAgc2tpblRvbmU6IFwiU2tpbiB0b25lXCJcbn07XG5jb25zdCBDT0xPUl9USEVNRVMgPSBbXCJsaWdodFwiLCBcImRhcmtcIiwgXCJhdXRvXCJdO1xuY29uc3Qgc21pbGV5c19wZW9wbGUkMSA9IFtcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3Jpbm5pbmcgZmFjZVwiLFxuICAgICAgXCJncmlubmluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjAwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3Jpbm5pbmcgZmFjZSB3aXRoIHNtaWxpbmcgZXllc1wiLFxuICAgICAgXCJncmluXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MDFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHdpdGggdGVhcnMgb2Ygam95XCIsXG4gICAgICBcImpveVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjAyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicm9sbGluZyBvbiB0aGUgZmxvb3IgbGF1Z2hpbmdcIixcbiAgICAgIFwicm9sbGluZ19vbl90aGVfZmxvb3JfbGF1Z2hpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjkyM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNtaWxpbmcgZmFjZSB3aXRoIG9wZW4gbW91dGhcIixcbiAgICAgIFwic21pbGV5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MDNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzbWlsaW5nIGZhY2Ugd2l0aCBvcGVuIG1vdXRoIGFuZCBzbWlsaW5nIGV5ZXNcIixcbiAgICAgIFwic21pbGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjYwNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNtaWxpbmcgZmFjZSB3aXRoIG9wZW4gbW91dGggYW5kIGNvbGQgc3dlYXRcIixcbiAgICAgIFwic3dlYXRfc21pbGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjYwNVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNtaWxpbmcgZmFjZSB3aXRoIG9wZW4gbW91dGggYW5kIHRpZ2h0bHktY2xvc2VkIGV5ZXNcIixcbiAgICAgIFwibGF1Z2hpbmdcIixcbiAgICAgIFwic2F0aXNmaWVkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MDZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3aW5raW5nIGZhY2VcIixcbiAgICAgIFwid2lua1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjA5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic21pbGluZyBmYWNlIHdpdGggc21pbGluZyBleWVzXCIsXG4gICAgICBcImJsdXNoXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MGFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHNhdm91cmluZyBkZWxpY2lvdXMgZm9vZFwiLFxuICAgICAgXCJ5dW1cIlxuICAgIF0sXG4gICAgdTogXCIxZjYwYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNtaWxpbmcgZmFjZSB3aXRoIHN1bmdsYXNzZXNcIixcbiAgICAgIFwic3VuZ2xhc3Nlc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjBlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic21pbGluZyBmYWNlIHdpdGggaGVhcnQtc2hhcGVkIGV5ZXNcIixcbiAgICAgIFwiaGVhcnRfZXllc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjBkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFjZSB0aHJvd2luZyBhIGtpc3NcIixcbiAgICAgIFwia2lzc2luZ19oZWFydFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjE4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2lzc2luZyBmYWNlXCIsXG4gICAgICBcImtpc3NpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjYxN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtpc3NpbmcgZmFjZSB3aXRoIHNtaWxpbmcgZXllc1wiLFxuICAgICAgXCJraXNzaW5nX3NtaWxpbmdfZXllc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjE5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2lzc2luZyBmYWNlIHdpdGggY2xvc2VkIGV5ZXNcIixcbiAgICAgIFwia2lzc2luZ19jbG9zZWRfZXllc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjFhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2hpdGUgc21pbGluZyBmYWNlXCIsXG4gICAgICBcInJlbGF4ZWRcIlxuICAgIF0sXG4gICAgdTogXCIyNjNhLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzbGlnaHRseSBzbWlsaW5nIGZhY2VcIixcbiAgICAgIFwic2xpZ2h0bHlfc21pbGluZ19mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2NDJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJodWdnaW5nIGZhY2VcIixcbiAgICAgIFwiaHVnZ2luZ19mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJncmlubmluZyBmYWNlIHdpdGggc3RhciBleWVzXCIsXG4gICAgICBcInN0YXItc3RydWNrXCIsXG4gICAgICBcImdyaW5uaW5nX2ZhY2Vfd2l0aF9zdGFyX2V5ZXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjkyOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRoaW5raW5nIGZhY2VcIixcbiAgICAgIFwidGhpbmtpbmdfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTE0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFjZSB3aXRoIG9uZSBleWVicm93IHJhaXNlZFwiLFxuICAgICAgXCJmYWNlX3dpdGhfcmFpc2VkX2V5ZWJyb3dcIixcbiAgICAgIFwiZmFjZV93aXRoX29uZV9leWVicm93X3JhaXNlZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTI4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmV1dHJhbCBmYWNlXCIsXG4gICAgICBcIm5ldXRyYWxfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjEwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZXhwcmVzc2lvbmxlc3MgZmFjZVwiLFxuICAgICAgXCJleHByZXNzaW9ubGVzc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjExXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFjZSB3aXRob3V0IG1vdXRoXCIsXG4gICAgICBcIm5vX21vdXRoXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MzZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHdpdGggcm9sbGluZyBleWVzXCIsXG4gICAgICBcImZhY2Vfd2l0aF9yb2xsaW5nX2V5ZXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjY0NFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNtaXJraW5nIGZhY2VcIixcbiAgICAgIFwic21pcmtcIlxuICAgIF0sXG4gICAgdTogXCIxZjYwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNldmVyaW5nIGZhY2VcIixcbiAgICAgIFwicGVyc2V2ZXJlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkaXNhcHBvaW50ZWQgYnV0IHJlbGlldmVkIGZhY2VcIixcbiAgICAgIFwiZGlzYXBwb2ludGVkX3JlbGlldmVkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHdpdGggb3BlbiBtb3V0aFwiLFxuICAgICAgXCJvcGVuX21vdXRoXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MmVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ6aXBwZXItbW91dGggZmFjZVwiLFxuICAgICAgXCJ6aXBwZXJfbW91dGhfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTEwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaHVzaGVkIGZhY2VcIixcbiAgICAgIFwiaHVzaGVkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzbGVlcHkgZmFjZVwiLFxuICAgICAgXCJzbGVlcHlcIlxuICAgIF0sXG4gICAgdTogXCIxZjYyYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRpcmVkIGZhY2VcIixcbiAgICAgIFwidGlyZWRfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjJiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2xlZXBpbmcgZmFjZVwiLFxuICAgICAgXCJzbGVlcGluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjM0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmVsaWV2ZWQgZmFjZVwiLFxuICAgICAgXCJyZWxpZXZlZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjBjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFjZSB3aXRoIHN0dWNrLW91dCB0b25ndWVcIixcbiAgICAgIFwic3R1Y2tfb3V0X3Rvbmd1ZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjFiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFjZSB3aXRoIHN0dWNrLW91dCB0b25ndWUgYW5kIHdpbmtpbmcgZXllXCIsXG4gICAgICBcInN0dWNrX291dF90b25ndWVfd2lua2luZ19leWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjYxY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZhY2Ugd2l0aCBzdHVjay1vdXQgdG9uZ3VlIGFuZCB0aWdodGx5LWNsb3NlZCBleWVzXCIsXG4gICAgICBcInN0dWNrX291dF90b25ndWVfY2xvc2VkX2V5ZXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjYxZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRyb29saW5nIGZhY2VcIixcbiAgICAgIFwiZHJvb2xpbmdfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTI0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidW5hbXVzZWQgZmFjZVwiLFxuICAgICAgXCJ1bmFtdXNlZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjEyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFjZSB3aXRoIGNvbGQgc3dlYXRcIixcbiAgICAgIFwic3dlYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjYxM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlbnNpdmUgZmFjZVwiLFxuICAgICAgXCJwZW5zaXZlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MTRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb25mdXNlZCBmYWNlXCIsXG4gICAgICBcImNvbmZ1c2VkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ1cHNpZGUtZG93biBmYWNlXCIsXG4gICAgICBcInVwc2lkZV9kb3duX2ZhY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjY0M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vbmV5LW1vdXRoIGZhY2VcIixcbiAgICAgIFwibW9uZXlfbW91dGhfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTExXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYXN0b25pc2hlZCBmYWNlXCIsXG4gICAgICBcImFzdG9uaXNoZWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjYzMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndoaXRlX2Zyb3duaW5nX2ZhY2VcIlxuICAgIF0sXG4gICAgdTogXCIyNjM5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzbGlnaHRseSBmcm93bmluZyBmYWNlXCIsXG4gICAgICBcInNsaWdodGx5X2Zyb3duaW5nX2ZhY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjY0MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNvbmZvdW5kZWQgZmFjZVwiLFxuICAgICAgXCJjb25mb3VuZGVkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkaXNhcHBvaW50ZWQgZmFjZVwiLFxuICAgICAgXCJkaXNhcHBvaW50ZWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjYxZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvcnJpZWQgZmFjZVwiLFxuICAgICAgXCJ3b3JyaWVkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MWZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHdpdGggbG9vayBvZiB0cml1bXBoXCIsXG4gICAgICBcInRyaXVtcGhcIlxuICAgIF0sXG4gICAgdTogXCIxZjYyNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNyeWluZyBmYWNlXCIsXG4gICAgICBcImNyeVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjIyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibG91ZGx5IGNyeWluZyBmYWNlXCIsXG4gICAgICBcInNvYlwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjJkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZnJvd25pbmcgZmFjZSB3aXRoIG9wZW4gbW91dGhcIixcbiAgICAgIFwiZnJvd25pbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjYyNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImFuZ3Vpc2hlZCBmYWNlXCIsXG4gICAgICBcImFuZ3Vpc2hlZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjI3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmVhcmZ1bCBmYWNlXCIsXG4gICAgICBcImZlYXJmdWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjYyOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndlYXJ5IGZhY2VcIixcbiAgICAgIFwid2VhcnlcIlxuICAgIF0sXG4gICAgdTogXCIxZjYyOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNob2NrZWQgZmFjZSB3aXRoIGV4cGxvZGluZyBoZWFkXCIsXG4gICAgICBcImV4cGxvZGluZ19oZWFkXCIsXG4gICAgICBcInNob2NrZWRfZmFjZV93aXRoX2V4cGxvZGluZ19oZWFkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJncmltYWNpbmcgZmFjZVwiLFxuICAgICAgXCJncmltYWNpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjYyY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZhY2Ugd2l0aCBvcGVuIG1vdXRoIGFuZCBjb2xkIHN3ZWF0XCIsXG4gICAgICBcImNvbGRfc3dlYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjYzMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZhY2Ugc2NyZWFtaW5nIGluIGZlYXJcIixcbiAgICAgIFwic2NyZWFtXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MzFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmbHVzaGVkIGZhY2VcIixcbiAgICAgIFwiZmx1c2hlZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjMzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3Jpbm5pbmcgZmFjZSB3aXRoIG9uZSBsYXJnZSBhbmQgb25lIHNtYWxsIGV5ZVwiLFxuICAgICAgXCJ6YW55X2ZhY2VcIixcbiAgICAgIFwiZ3Jpbm5pbmdfZmFjZV93aXRoX29uZV9sYXJnZV9hbmRfb25lX3NtYWxsX2V5ZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTJhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZGl6enkgZmFjZVwiLFxuICAgICAgXCJkaXp6eV9mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2MzVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwb3V0aW5nIGZhY2VcIixcbiAgICAgIFwicmFnZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjIxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYW5ncnkgZmFjZVwiLFxuICAgICAgXCJhbmdyeVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjIwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2VyaW91cyBmYWNlIHdpdGggc3ltYm9scyBjb3ZlcmluZyBtb3V0aFwiLFxuICAgICAgXCJmYWNlX3dpdGhfc3ltYm9sc19vbl9tb3V0aFwiLFxuICAgICAgXCJzZXJpb3VzX2ZhY2Vfd2l0aF9zeW1ib2xzX2NvdmVyaW5nX21vdXRoXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MmNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHdpdGggbWVkaWNhbCBtYXNrXCIsXG4gICAgICBcIm1hc2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjYzN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZhY2Ugd2l0aCB0aGVybW9tZXRlclwiLFxuICAgICAgXCJmYWNlX3dpdGhfdGhlcm1vbWV0ZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjkxMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZhY2Ugd2l0aCBoZWFkLWJhbmRhZ2VcIixcbiAgICAgIFwiZmFjZV93aXRoX2hlYWRfYmFuZGFnZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTE1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmF1c2VhdGVkIGZhY2VcIixcbiAgICAgIFwibmF1c2VhdGVkX2ZhY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjkyMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZhY2Ugd2l0aCBvcGVuIG1vdXRoIHZvbWl0aW5nXCIsXG4gICAgICBcImZhY2Vfdm9taXRpbmdcIixcbiAgICAgIFwiZmFjZV93aXRoX29wZW5fbW91dGhfdm9taXRpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjkyZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNuZWV6aW5nIGZhY2VcIixcbiAgICAgIFwic25lZXppbmdfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTI3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic21pbGluZyBmYWNlIHdpdGggaGFsb1wiLFxuICAgICAgXCJpbm5vY2VudFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjA3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFjZSB3aXRoIGNvd2JveSBoYXRcIixcbiAgICAgIFwiZmFjZV93aXRoX2Nvd2JveV9oYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjkyMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb3duIGZhY2VcIixcbiAgICAgIFwiY2xvd25fZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTIxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibHlpbmcgZmFjZVwiLFxuICAgICAgXCJseWluZ19mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHdpdGggZmluZ2VyIGNvdmVyaW5nIGNsb3NlZCBsaXBzXCIsXG4gICAgICBcInNodXNoaW5nX2ZhY2VcIixcbiAgICAgIFwiZmFjZV93aXRoX2Zpbmdlcl9jb3ZlcmluZ19jbG9zZWRfbGlwc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTJiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic21pbGluZyBmYWNlIHdpdGggc21pbGluZyBleWVzIGFuZCBoYW5kIGNvdmVyaW5nIG1vdXRoXCIsXG4gICAgICBcImZhY2Vfd2l0aF9oYW5kX292ZXJfbW91dGhcIixcbiAgICAgIFwic21pbGluZ19mYWNlX3dpdGhfc21pbGluZ19leWVzX2FuZF9oYW5kX2NvdmVyaW5nX21vdXRoXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MmRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHdpdGggbW9ub2NsZVwiLFxuICAgICAgXCJmYWNlX3dpdGhfbW9ub2NsZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWQwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmVyZCBmYWNlXCIsXG4gICAgICBcIm5lcmRfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTEzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic21pbGluZyBmYWNlIHdpdGggaG9ybnNcIixcbiAgICAgIFwic21pbGluZ19pbXBcIlxuICAgIF0sXG4gICAgdTogXCIxZjYwOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImltcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDdmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiamFwYW5lc2Ugb2dyZVwiLFxuICAgICAgXCJqYXBhbmVzZV9vZ3JlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NzlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJqYXBhbmVzZSBnb2JsaW5cIixcbiAgICAgIFwiamFwYW5lc2VfZ29ibGluXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0N2FcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJza3VsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDgwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2t1bGxfYW5kX2Nyb3NzYm9uZXNcIlxuICAgIF0sXG4gICAgdTogXCIyNjIwLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJnaG9zdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDdiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZXh0cmF0ZXJyZXN0cmlhbCBhbGllblwiLFxuICAgICAgXCJhbGllblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDdkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYWxpZW4gbW9uc3RlclwiLFxuICAgICAgXCJzcGFjZV9pbnZhZGVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0N2VcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyb2JvdCBmYWNlXCIsXG4gICAgICBcInJvYm90X2ZhY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjkxNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBpbGUgb2YgcG9vXCIsXG4gICAgICBcImhhbmtleVwiLFxuICAgICAgXCJwb29wXCIsXG4gICAgICBcInNoaXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjRhOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNtaWxpbmcgY2F0IGZhY2Ugd2l0aCBvcGVuIG1vdXRoXCIsXG4gICAgICBcInNtaWxleV9jYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjYzYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdyaW5uaW5nIGNhdCBmYWNlIHdpdGggc21pbGluZyBleWVzXCIsXG4gICAgICBcInNtaWxlX2NhdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjM4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2F0IGZhY2Ugd2l0aCB0ZWFycyBvZiBqb3lcIixcbiAgICAgIFwiam95X2NhdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjM5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic21pbGluZyBjYXQgZmFjZSB3aXRoIGhlYXJ0LXNoYXBlZCBleWVzXCIsXG4gICAgICBcImhlYXJ0X2V5ZXNfY2F0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2M2JcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjYXQgZmFjZSB3aXRoIHdyeSBzbWlsZVwiLFxuICAgICAgXCJzbWlya19jYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjYzY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtpc3NpbmcgY2F0IGZhY2Ugd2l0aCBjbG9zZWQgZXllc1wiLFxuICAgICAgXCJraXNzaW5nX2NhdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjNkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2VhcnkgY2F0IGZhY2VcIixcbiAgICAgIFwic2NyZWFtX2NhdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjQwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY3J5aW5nIGNhdCBmYWNlXCIsXG4gICAgICBcImNyeWluZ19jYXRfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjNmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicG91dGluZyBjYXQgZmFjZVwiLFxuICAgICAgXCJwb3V0aW5nX2NhdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjNlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2VlLW5vLWV2aWwgbW9ua2V5XCIsXG4gICAgICBcInNlZV9ub19ldmlsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2NDhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoZWFyLW5vLWV2aWwgbW9ua2V5XCIsXG4gICAgICBcImhlYXJfbm9fZXZpbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjQ5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3BlYWstbm8tZXZpbCBtb25rZXlcIixcbiAgICAgIFwic3BlYWtfbm9fZXZpbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjRhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFieVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDc2XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ3Ni0xZjNmYlwiLFxuICAgICAgXCIxZjQ3Ni0xZjNmY1wiLFxuICAgICAgXCIxZjQ3Ni0xZjNmZFwiLFxuICAgICAgXCIxZjQ3Ni0xZjNmZVwiLFxuICAgICAgXCIxZjQ3Ni0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGlsZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWQyXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjlkMi0xZjNmYlwiLFxuICAgICAgXCIxZjlkMi0xZjNmY1wiLFxuICAgICAgXCIxZjlkMi0xZjNmZFwiLFxuICAgICAgXCIxZjlkMi0xZjNmZVwiLFxuICAgICAgXCIxZjlkMi0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJib3lcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2NlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjYtMWYzZmJcIixcbiAgICAgIFwiMWY0NjYtMWYzZmNcIixcbiAgICAgIFwiMWY0NjYtMWYzZmRcIixcbiAgICAgIFwiMWY0NjYtMWYzZmVcIixcbiAgICAgIFwiMWY0NjYtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ2lybFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY3XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2Ny0xZjNmYlwiLFxuICAgICAgXCIxZjQ2Ny0xZjNmY1wiLFxuICAgICAgXCIxZjQ2Ny0xZjNmZFwiLFxuICAgICAgXCIxZjQ2Ny0xZjNmZVwiLFxuICAgICAgXCIxZjQ2Ny0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhZHVsdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWQxXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjlkMS0xZjNmYlwiLFxuICAgICAgXCIxZjlkMS0xZjNmY1wiLFxuICAgICAgXCIxZjlkMS0xZjNmZFwiLFxuICAgICAgXCIxZjlkMS0xZjNmZVwiLFxuICAgICAgXCIxZjlkMS0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjgtMWYzZmJcIixcbiAgICAgIFwiMWY0NjgtMWYzZmNcIixcbiAgICAgIFwiMWY0NjgtMWYzZmRcIixcbiAgICAgIFwiMWY0NjgtMWYzZmVcIixcbiAgICAgIFwiMWY0NjgtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjktMWYzZmJcIixcbiAgICAgIFwiMWY0NjktMWYzZmNcIixcbiAgICAgIFwiMWY0NjktMWYzZmRcIixcbiAgICAgIFwiMWY0NjktMWYzZmVcIixcbiAgICAgIFwiMWY0NjktMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib2xkZXIgYWR1bHRcIixcbiAgICAgIFwib2xkZXJfYWR1bHRcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkM1wiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZDMtMWYzZmJcIixcbiAgICAgIFwiMWY5ZDMtMWYzZmNcIixcbiAgICAgIFwiMWY5ZDMtMWYzZmRcIixcbiAgICAgIFwiMWY5ZDMtMWYzZmVcIixcbiAgICAgIFwiMWY5ZDMtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib2xkZXIgbWFuXCIsXG4gICAgICBcIm9sZGVyX21hblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDc0XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ3NC0xZjNmYlwiLFxuICAgICAgXCIxZjQ3NC0xZjNmY1wiLFxuICAgICAgXCIxZjQ3NC0xZjNmZFwiLFxuICAgICAgXCIxZjQ3NC0xZjNmZVwiLFxuICAgICAgXCIxZjQ3NC0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvbGRlciB3b21hblwiLFxuICAgICAgXCJvbGRlcl93b21hblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDc1XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ3NS0xZjNmYlwiLFxuICAgICAgXCIxZjQ3NS0xZjNmY1wiLFxuICAgICAgXCIxZjQ3NS0xZjNmZFwiLFxuICAgICAgXCIxZjQ3NS0xZjNmZVwiLFxuICAgICAgXCIxZjQ3NS0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYWxlLWRvY3RvclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMjY5NS1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OC0xZjNmYi0yMDBkLTI2OTUtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmYy0yMDBkLTI2OTUtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZC0yMDBkLTI2OTUtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZS0yMDBkLTI2OTUtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZi0yMDBkLTI2OTUtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGUtZG9jdG9yXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjktMjAwZC0yNjk1LWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY5LTFmM2ZiLTIwMGQtMjY5NS1mZTBmXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZjLTIwMGQtMjY5NS1mZTBmXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZkLTIwMGQtMjY5NS1mZTBmXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZlLTIwMGQtMjY5NS1mZTBmXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZmLTIwMGQtMjY5NS1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbGUtc3R1ZGVudFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMWYzOTNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY4LTFmM2ZiLTIwMGQtMWYzOTNcIixcbiAgICAgIFwiMWY0NjgtMWYzZmMtMjAwZC0xZjM5M1wiLFxuICAgICAgXCIxZjQ2OC0xZjNmZC0yMDBkLTFmMzkzXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZlLTIwMGQtMWYzOTNcIixcbiAgICAgIFwiMWY0NjgtMWYzZmYtMjAwZC0xZjM5M1wiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGUtc3R1ZGVudFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWYzOTNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY5LTFmM2ZiLTIwMGQtMWYzOTNcIixcbiAgICAgIFwiMWY0NjktMWYzZmMtMjAwZC0xZjM5M1wiLFxuICAgICAgXCIxZjQ2OS0xZjNmZC0yMDBkLTFmMzkzXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZlLTIwMGQtMWYzOTNcIixcbiAgICAgIFwiMWY0NjktMWYzZmYtMjAwZC0xZjM5M1wiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYWxlLXRlYWNoZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmM2ViXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OC0xZjNmYi0yMDBkLTFmM2ViXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZjLTIwMGQtMWYzZWJcIixcbiAgICAgIFwiMWY0NjgtMWYzZmQtMjAwZC0xZjNlYlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZS0yMDBkLTFmM2ViXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZmLTIwMGQtMWYzZWJcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmVtYWxlLXRlYWNoZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTFmM2ViXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OS0xZjNmYi0yMDBkLTFmM2ViXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZjLTIwMGQtMWYzZWJcIixcbiAgICAgIFwiMWY0NjktMWYzZmQtMjAwZC0xZjNlYlwiLFxuICAgICAgXCIxZjQ2OS0xZjNmZS0yMDBkLTFmM2ViXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZmLTIwMGQtMWYzZWJcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS1qdWRnZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMjY5Ni1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OC0xZjNmYi0yMDBkLTI2OTYtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmYy0yMDBkLTI2OTYtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZC0yMDBkLTI2OTYtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZS0yMDBkLTI2OTYtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZi0yMDBkLTI2OTYtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGUtanVkZ2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTI2OTYtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjktMWYzZmItMjAwZC0yNjk2LWZlMGZcIixcbiAgICAgIFwiMWY0NjktMWYzZmMtMjAwZC0yNjk2LWZlMGZcIixcbiAgICAgIFwiMWY0NjktMWYzZmQtMjAwZC0yNjk2LWZlMGZcIixcbiAgICAgIFwiMWY0NjktMWYzZmUtMjAwZC0yNjk2LWZlMGZcIixcbiAgICAgIFwiMWY0NjktMWYzZmYtMjAwZC0yNjk2LWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS1mYXJtZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmMzNlXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OC0xZjNmYi0yMDBkLTFmMzNlXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZjLTIwMGQtMWYzM2VcIixcbiAgICAgIFwiMWY0NjgtMWYzZmQtMjAwZC0xZjMzZVwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZS0yMDBkLTFmMzNlXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZmLTIwMGQtMWYzM2VcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmVtYWxlLWZhcm1lclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWYzM2VcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY5LTFmM2ZiLTIwMGQtMWYzM2VcIixcbiAgICAgIFwiMWY0NjktMWYzZmMtMjAwZC0xZjMzZVwiLFxuICAgICAgXCIxZjQ2OS0xZjNmZC0yMDBkLTFmMzNlXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZlLTIwMGQtMWYzM2VcIixcbiAgICAgIFwiMWY0NjktMWYzZmYtMjAwZC0xZjMzZVwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYWxlLWNvb2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmMzczXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OC0xZjNmYi0yMDBkLTFmMzczXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZjLTIwMGQtMWYzNzNcIixcbiAgICAgIFwiMWY0NjgtMWYzZmQtMjAwZC0xZjM3M1wiLFxuICAgICAgXCIxZjQ2OC0xZjNmZS0yMDBkLTFmMzczXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZmLTIwMGQtMWYzNzNcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmVtYWxlLWNvb2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTFmMzczXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OS0xZjNmYi0yMDBkLTFmMzczXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZjLTIwMGQtMWYzNzNcIixcbiAgICAgIFwiMWY0NjktMWYzZmQtMjAwZC0xZjM3M1wiLFxuICAgICAgXCIxZjQ2OS0xZjNmZS0yMDBkLTFmMzczXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZmLTIwMGQtMWYzNzNcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS1tZWNoYW5pY1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMWY1MjdcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY4LTFmM2ZiLTIwMGQtMWY1MjdcIixcbiAgICAgIFwiMWY0NjgtMWYzZmMtMjAwZC0xZjUyN1wiLFxuICAgICAgXCIxZjQ2OC0xZjNmZC0yMDBkLTFmNTI3XCIsXG4gICAgICBcIjFmNDY4LTFmM2ZlLTIwMGQtMWY1MjdcIixcbiAgICAgIFwiMWY0NjgtMWYzZmYtMjAwZC0xZjUyN1wiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGUtbWVjaGFuaWNcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTFmNTI3XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OS0xZjNmYi0yMDBkLTFmNTI3XCIsXG4gICAgICBcIjFmNDY5LTFmM2ZjLTIwMGQtMWY1MjdcIixcbiAgICAgIFwiMWY0NjktMWYzZmQtMjAwZC0xZjUyN1wiLFxuICAgICAgXCIxZjQ2OS0xZjNmZS0yMDBkLTFmNTI3XCIsXG4gICAgICBcIjFmNDY5LTFmM2ZmLTIwMGQtMWY1MjdcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS1mYWN0b3J5LXdvcmtlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMWYzZWRcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY4LTFmM2ZiLTIwMGQtMWYzZWRcIixcbiAgICAgIFwiMWY0NjgtMWYzZmMtMjAwZC0xZjNlZFwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZC0yMDBkLTFmM2VkXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZlLTIwMGQtMWYzZWRcIixcbiAgICAgIFwiMWY0NjgtMWYzZmYtMjAwZC0xZjNlZFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGUtZmFjdG9yeS13b3JrZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTFmM2VkXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OS0xZjNmYi0yMDBkLTFmM2VkXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZjLTIwMGQtMWYzZWRcIixcbiAgICAgIFwiMWY0NjktMWYzZmQtMjAwZC0xZjNlZFwiLFxuICAgICAgXCIxZjQ2OS0xZjNmZS0yMDBkLTFmM2VkXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZmLTIwMGQtMWYzZWRcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS1vZmZpY2Utd29ya2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjRiY1wiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjgtMWYzZmItMjAwZC0xZjRiY1wiLFxuICAgICAgXCIxZjQ2OC0xZjNmYy0yMDBkLTFmNGJjXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZkLTIwMGQtMWY0YmNcIixcbiAgICAgIFwiMWY0NjgtMWYzZmUtMjAwZC0xZjRiY1wiLFxuICAgICAgXCIxZjQ2OC0xZjNmZi0yMDBkLTFmNGJjXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZlbWFsZS1vZmZpY2Utd29ya2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjktMjAwZC0xZjRiY1wiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjktMWYzZmItMjAwZC0xZjRiY1wiLFxuICAgICAgXCIxZjQ2OS0xZjNmYy0yMDBkLTFmNGJjXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZkLTIwMGQtMWY0YmNcIixcbiAgICAgIFwiMWY0NjktMWYzZmUtMjAwZC0xZjRiY1wiLFxuICAgICAgXCIxZjQ2OS0xZjNmZi0yMDBkLTFmNGJjXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbGUtc2NpZW50aXN0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjUyY1wiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjgtMWYzZmItMjAwZC0xZjUyY1wiLFxuICAgICAgXCIxZjQ2OC0xZjNmYy0yMDBkLTFmNTJjXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZkLTIwMGQtMWY1MmNcIixcbiAgICAgIFwiMWY0NjgtMWYzZmUtMjAwZC0xZjUyY1wiLFxuICAgICAgXCIxZjQ2OC0xZjNmZi0yMDBkLTFmNTJjXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZlbWFsZS1zY2llbnRpc3RcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTFmNTJjXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OS0xZjNmYi0yMDBkLTFmNTJjXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZjLTIwMGQtMWY1MmNcIixcbiAgICAgIFwiMWY0NjktMWYzZmQtMjAwZC0xZjUyY1wiLFxuICAgICAgXCIxZjQ2OS0xZjNmZS0yMDBkLTFmNTJjXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZmLTIwMGQtMWY1MmNcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS10ZWNobm9sb2dpc3RcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmNGJiXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OC0xZjNmYi0yMDBkLTFmNGJiXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZjLTIwMGQtMWY0YmJcIixcbiAgICAgIFwiMWY0NjgtMWYzZmQtMjAwZC0xZjRiYlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZS0yMDBkLTFmNGJiXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZmLTIwMGQtMWY0YmJcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmVtYWxlLXRlY2hub2xvZ2lzdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY0YmJcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY5LTFmM2ZiLTIwMGQtMWY0YmJcIixcbiAgICAgIFwiMWY0NjktMWYzZmMtMjAwZC0xZjRiYlwiLFxuICAgICAgXCIxZjQ2OS0xZjNmZC0yMDBkLTFmNGJiXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZlLTIwMGQtMWY0YmJcIixcbiAgICAgIFwiMWY0NjktMWYzZmYtMjAwZC0xZjRiYlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYWxlLXNpbmdlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMWYzYTRcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY4LTFmM2ZiLTIwMGQtMWYzYTRcIixcbiAgICAgIFwiMWY0NjgtMWYzZmMtMjAwZC0xZjNhNFwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZC0yMDBkLTFmM2E0XCIsXG4gICAgICBcIjFmNDY4LTFmM2ZlLTIwMGQtMWYzYTRcIixcbiAgICAgIFwiMWY0NjgtMWYzZmYtMjAwZC0xZjNhNFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGUtc2luZ2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjktMjAwZC0xZjNhNFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjktMWYzZmItMjAwZC0xZjNhNFwiLFxuICAgICAgXCIxZjQ2OS0xZjNmYy0yMDBkLTFmM2E0XCIsXG4gICAgICBcIjFmNDY5LTFmM2ZkLTIwMGQtMWYzYTRcIixcbiAgICAgIFwiMWY0NjktMWYzZmUtMjAwZC0xZjNhNFwiLFxuICAgICAgXCIxZjQ2OS0xZjNmZi0yMDBkLTFmM2E0XCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbGUtYXJ0aXN0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjNhOFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjgtMWYzZmItMjAwZC0xZjNhOFwiLFxuICAgICAgXCIxZjQ2OC0xZjNmYy0yMDBkLTFmM2E4XCIsXG4gICAgICBcIjFmNDY4LTFmM2ZkLTIwMGQtMWYzYThcIixcbiAgICAgIFwiMWY0NjgtMWYzZmUtMjAwZC0xZjNhOFwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZi0yMDBkLTFmM2E4XCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZlbWFsZS1hcnRpc3RcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTFmM2E4XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OS0xZjNmYi0yMDBkLTFmM2E4XCIsXG4gICAgICBcIjFmNDY5LTFmM2ZjLTIwMGQtMWYzYThcIixcbiAgICAgIFwiMWY0NjktMWYzZmQtMjAwZC0xZjNhOFwiLFxuICAgICAgXCIxZjQ2OS0xZjNmZS0yMDBkLTFmM2E4XCIsXG4gICAgICBcIjFmNDY5LTFmM2ZmLTIwMGQtMWYzYThcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS1waWxvdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMjcwOC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OC0xZjNmYi0yMDBkLTI3MDgtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmYy0yMDBkLTI3MDgtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZC0yMDBkLTI3MDgtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZS0yMDBkLTI3MDgtZmUwZlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZi0yMDBkLTI3MDgtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGUtcGlsb3RcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTI3MDgtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjktMWYzZmItMjAwZC0yNzA4LWZlMGZcIixcbiAgICAgIFwiMWY0NjktMWYzZmMtMjAwZC0yNzA4LWZlMGZcIixcbiAgICAgIFwiMWY0NjktMWYzZmQtMjAwZC0yNzA4LWZlMGZcIixcbiAgICAgIFwiMWY0NjktMWYzZmUtMjAwZC0yNzA4LWZlMGZcIixcbiAgICAgIFwiMWY0NjktMWYzZmYtMjAwZC0yNzA4LWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS1hc3Ryb25hdXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmNjgwXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2OC0xZjNmYi0yMDBkLTFmNjgwXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZjLTIwMGQtMWY2ODBcIixcbiAgICAgIFwiMWY0NjgtMWYzZmQtMjAwZC0xZjY4MFwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZS0yMDBkLTFmNjgwXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZmLTIwMGQtMWY2ODBcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmVtYWxlLWFzdHJvbmF1dFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY2ODBcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY5LTFmM2ZiLTIwMGQtMWY2ODBcIixcbiAgICAgIFwiMWY0NjktMWYzZmMtMjAwZC0xZjY4MFwiLFxuICAgICAgXCIxZjQ2OS0xZjNmZC0yMDBkLTFmNjgwXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZlLTIwMGQtMWY2ODBcIixcbiAgICAgIFwiMWY0NjktMWYzZmYtMjAwZC0xZjY4MFwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYWxlLWZpcmVmaWdodGVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjY5MlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NjgtMWYzZmItMjAwZC0xZjY5MlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmYy0yMDBkLTFmNjkyXCIsXG4gICAgICBcIjFmNDY4LTFmM2ZkLTIwMGQtMWY2OTJcIixcbiAgICAgIFwiMWY0NjgtMWYzZmUtMjAwZC0xZjY5MlwiLFxuICAgICAgXCIxZjQ2OC0xZjNmZi0yMDBkLTFmNjkyXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZlbWFsZS1maXJlZmlnaHRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY2OTJcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDY5LTFmM2ZiLTIwMGQtMWY2OTJcIixcbiAgICAgIFwiMWY0NjktMWYzZmMtMjAwZC0xZjY5MlwiLFxuICAgICAgXCIxZjQ2OS0xZjNmZC0yMDBkLTFmNjkyXCIsXG4gICAgICBcIjFmNDY5LTFmM2ZlLTIwMGQtMWY2OTJcIixcbiAgICAgIFwiMWY0NjktMWYzZmYtMjAwZC0xZjY5MlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwb2xpY2Ugb2ZmaWNlclwiLFxuICAgICAgXCJjb3BcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2ZVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NmUtMWYzZmJcIixcbiAgICAgIFwiMWY0NmUtMWYzZmNcIixcbiAgICAgIFwiMWY0NmUtMWYzZmRcIixcbiAgICAgIFwiMWY0NmUtMWYzZmVcIixcbiAgICAgIFwiMWY0NmUtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS1wb2xpY2Utb2ZmaWNlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ2ZS0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ2ZS0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ2ZS0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ2ZS0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ2ZS0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGUtcG9saWNlLW9mZmljZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2ZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NmUtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0NmUtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0NmUtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0NmUtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0NmUtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2xldXRoX29yX3NweVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTc1LWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNTc1LTFmM2ZiXCIsXG4gICAgICBcIjFmNTc1LTFmM2ZjXCIsXG4gICAgICBcIjFmNTc1LTFmM2ZkXCIsXG4gICAgICBcIjFmNTc1LTFmM2ZlXCIsXG4gICAgICBcIjFmNTc1LTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbGUtZGV0ZWN0aXZlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NzUtZmUwZi0yMDBkLTI2NDItZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY1NzUtMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY1NzUtMWYzZmMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY1NzUtMWYzZmQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY1NzUtMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY1NzUtMWYzZmYtMjAwZC0yNjQyLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmVtYWxlLWRldGVjdGl2ZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTc1LWZlMGYtMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNTc1LTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNTc1LTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNTc1LTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNTc1LTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNTc1LTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImd1YXJkc21hblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDgyXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ4Mi0xZjNmYlwiLFxuICAgICAgXCIxZjQ4Mi0xZjNmY1wiLFxuICAgICAgXCIxZjQ4Mi0xZjNmZFwiLFxuICAgICAgXCIxZjQ4Mi0xZjNmZVwiLFxuICAgICAgXCIxZjQ4Mi0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYWxlLWd1YXJkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ODItMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDgyLTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDgyLTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDgyLTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDgyLTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDgyLTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZlbWFsZS1ndWFyZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDgyLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ4Mi0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ4Mi0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ4Mi0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ4Mi0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ4Mi0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb25zdHJ1Y3Rpb24gd29ya2VyXCIsXG4gICAgICBcImNvbnN0cnVjdGlvbl93b3JrZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ3N1wiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NzctMWYzZmJcIixcbiAgICAgIFwiMWY0NzctMWYzZmNcIixcbiAgICAgIFwiMWY0NzctMWYzZmRcIixcbiAgICAgIFwiMWY0NzctMWYzZmVcIixcbiAgICAgIFwiMWY0NzctMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZS1jb25zdHJ1Y3Rpb24td29ya2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NzctMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDc3LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDc3LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDc3LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDc3LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDc3LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZlbWFsZS1jb25zdHJ1Y3Rpb24td29ya2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NzctMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDc3LTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNDc3LTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNDc3LTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNDc3LTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNDc3LTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInByaW5jZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTM0XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkzNC0xZjNmYlwiLFxuICAgICAgXCIxZjkzNC0xZjNmY1wiLFxuICAgICAgXCIxZjkzNC0xZjNmZFwiLFxuICAgICAgXCIxZjkzNC0xZjNmZVwiLFxuICAgICAgXCIxZjkzNC0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwcmluY2Vzc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDc4XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ3OC0xZjNmYlwiLFxuICAgICAgXCIxZjQ3OC0xZjNmY1wiLFxuICAgICAgXCIxZjQ3OC0xZjNmZFwiLFxuICAgICAgXCIxZjQ3OC0xZjNmZVwiLFxuICAgICAgXCIxZjQ3OC0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4gd2l0aCB0dXJiYW5cIixcbiAgICAgIFwibWFuX3dpdGhfdHVyYmFuXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NzNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDczLTFmM2ZiXCIsXG4gICAgICBcIjFmNDczLTFmM2ZjXCIsXG4gICAgICBcIjFmNDczLTFmM2ZkXCIsXG4gICAgICBcIjFmNDczLTFmM2ZlXCIsXG4gICAgICBcIjFmNDczLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi13ZWFyaW5nLXR1cmJhblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDczLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ3My0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ3My0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ3My0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ3My0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ3My0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi13ZWFyaW5nLXR1cmJhblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDczLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ3My0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ3My0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ3My0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ3My0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ3My0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4gd2l0aCBndWEgcGkgbWFvXCIsXG4gICAgICBcIm1hbl93aXRoX2d1YV9waV9tYW9cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ3MlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NzItMWYzZmJcIixcbiAgICAgIFwiMWY0NzItMWYzZmNcIixcbiAgICAgIFwiMWY0NzItMWYzZmRcIixcbiAgICAgIFwiMWY0NzItMWYzZmVcIixcbiAgICAgIFwiMWY0NzItMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGVyc29uIHdpdGggaGVhZHNjYXJmXCIsXG4gICAgICBcInBlcnNvbl93aXRoX2hlYWRzY2FyZlwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWQ1XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjlkNS0xZjNmYlwiLFxuICAgICAgXCIxZjlkNS0xZjNmY1wiLFxuICAgICAgXCIxZjlkNS0xZjNmZFwiLFxuICAgICAgXCIxZjlkNS0xZjNmZVwiLFxuICAgICAgXCIxZjlkNS0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiZWFyZGVkIHBlcnNvblwiLFxuICAgICAgXCJiZWFyZGVkX3BlcnNvblwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWQ0XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjlkNC0xZjNmYlwiLFxuICAgICAgXCIxZjlkNC0xZjNmY1wiLFxuICAgICAgXCIxZjlkNC0xZjNmZFwiLFxuICAgICAgXCIxZjlkNC0xZjNmZVwiLFxuICAgICAgXCIxZjlkNC0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwZXJzb24gd2l0aCBibG9uZCBoYWlyXCIsXG4gICAgICBcInBlcnNvbl93aXRoX2Jsb25kX2hhaXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ3MVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NzEtMWYzZmJcIixcbiAgICAgIFwiMWY0NzEtMWYzZmNcIixcbiAgICAgIFwiMWY0NzEtMWYzZmRcIixcbiAgICAgIFwiMWY0NzEtMWYzZmVcIixcbiAgICAgIFwiMWY0NzEtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxvbmQtaGFpcmVkLW1hblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDcxLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ3MS0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ3MS0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ3MS0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ3MS0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ3MS0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibG9uZC1oYWlyZWQtd29tYW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ3MS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NzEtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0NzEtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0NzEtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0NzEtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0NzEtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuIGluIHR1eGVkb1wiLFxuICAgICAgXCJtYW5faW5fdHV4ZWRvXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MzVcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTM1LTFmM2ZiXCIsXG4gICAgICBcIjFmOTM1LTFmM2ZjXCIsXG4gICAgICBcIjFmOTM1LTFmM2ZkXCIsXG4gICAgICBcIjFmOTM1LTFmM2ZlXCIsXG4gICAgICBcIjFmOTM1LTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJyaWRlIHdpdGggdmVpbFwiLFxuICAgICAgXCJicmlkZV93aXRoX3ZlaWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ3MFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NzAtMWYzZmJcIixcbiAgICAgIFwiMWY0NzAtMWYzZmNcIixcbiAgICAgIFwiMWY0NzAtMWYzZmRcIixcbiAgICAgIFwiMWY0NzAtMWYzZmVcIixcbiAgICAgIFwiMWY0NzAtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicHJlZ25hbnQgd29tYW5cIixcbiAgICAgIFwicHJlZ25hbnRfd29tYW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjkzMFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5MzAtMWYzZmJcIixcbiAgICAgIFwiMWY5MzAtMWYzZmNcIixcbiAgICAgIFwiMWY5MzAtMWYzZmRcIixcbiAgICAgIFwiMWY5MzAtMWYzZmVcIixcbiAgICAgIFwiMWY5MzAtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnJlYXN0LWZlZWRpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjkzMVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5MzEtMWYzZmJcIixcbiAgICAgIFwiMWY5MzEtMWYzZmNcIixcbiAgICAgIFwiMWY5MzEtMWYzZmRcIixcbiAgICAgIFwiMWY5MzEtMWYzZmVcIixcbiAgICAgIFwiMWY5MzEtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFieSBhbmdlbFwiLFxuICAgICAgXCJhbmdlbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDdjXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ3Yy0xZjNmYlwiLFxuICAgICAgXCIxZjQ3Yy0xZjNmY1wiLFxuICAgICAgXCIxZjQ3Yy0xZjNmZFwiLFxuICAgICAgXCIxZjQ3Yy0xZjNmZVwiLFxuICAgICAgXCIxZjQ3Yy0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYXRoZXIgY2hyaXN0bWFzXCIsXG4gICAgICBcInNhbnRhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzODVcIixcbiAgICB2OiBbXG4gICAgICBcIjFmMzg1LTFmM2ZiXCIsXG4gICAgICBcIjFmMzg1LTFmM2ZjXCIsXG4gICAgICBcIjFmMzg1LTFmM2ZkXCIsXG4gICAgICBcIjFmMzg1LTFmM2ZlXCIsXG4gICAgICBcIjFmMzg1LTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vdGhlciBjaHJpc3RtYXNcIixcbiAgICAgIFwibXJzX2NsYXVzXCIsXG4gICAgICBcIm1vdGhlcl9jaHJpc3RtYXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjkzNlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5MzYtMWYzZmJcIixcbiAgICAgIFwiMWY5MzYtMWYzZmNcIixcbiAgICAgIFwiMWY5MzYtMWYzZmRcIixcbiAgICAgIFwiMWY5MzYtMWYzZmVcIixcbiAgICAgIFwiMWY5MzYtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFnZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWQ5XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjlkOS0xZjNmYlwiLFxuICAgICAgXCIxZjlkOS0xZjNmY1wiLFxuICAgICAgXCIxZjlkOS0xZjNmZFwiLFxuICAgICAgXCIxZjlkOS0xZjNmZVwiLFxuICAgICAgXCIxZjlkOS0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGVfbWFnZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWQ5LTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjlkOS0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjlkOS0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjlkOS0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjlkOS0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjlkOS0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYWxlX21hZ2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkOS0yMDBkLTI2NDItZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZDktMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZDktMWYzZmMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZDktMWYzZmQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZDktMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZDktMWYzZmYtMjAwZC0yNjQyLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFpcnlcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkYVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZGEtMWYzZmJcIixcbiAgICAgIFwiMWY5ZGEtMWYzZmNcIixcbiAgICAgIFwiMWY5ZGEtMWYzZmRcIixcbiAgICAgIFwiMWY5ZGEtMWYzZmVcIixcbiAgICAgIFwiMWY5ZGEtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmVtYWxlX2ZhaXJ5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZGEtMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOWRhLTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOWRhLTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOWRhLTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOWRhLTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOWRhLTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbGVfZmFpcnlcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkYS0yMDBkLTI2NDItZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZGEtMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZGEtMWYzZmMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZGEtMWYzZmQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZGEtMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZGEtMWYzZmYtMjAwZC0yNjQyLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidmFtcGlyZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWRiXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjlkYi0xZjNmYlwiLFxuICAgICAgXCIxZjlkYi0xZjNmY1wiLFxuICAgICAgXCIxZjlkYi0xZjNmZFwiLFxuICAgICAgXCIxZjlkYi0xZjNmZVwiLFxuICAgICAgXCIxZjlkYi0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGVfdmFtcGlyZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWRiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjlkYi0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjlkYi0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjlkYi0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjlkYi0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjlkYi0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYWxlX3ZhbXBpcmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZGItMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZGItMWYzZmMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZGItMWYzZmQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZGItMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5ZGItMWYzZmYtMjAwZC0yNjQyLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWVycGVyc29uXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZGNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOWRjLTFmM2ZiXCIsXG4gICAgICBcIjFmOWRjLTFmM2ZjXCIsXG4gICAgICBcIjFmOWRjLTFmM2ZkXCIsXG4gICAgICBcIjFmOWRjLTFmM2ZlXCIsXG4gICAgICBcIjFmOWRjLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1lcm1haWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZGMtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZGMtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZGMtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZGMtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZGMtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWVybWFuXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZGMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOWRjLTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWRjLTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWRjLTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWRjLTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWRjLTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVsZlwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWRkXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjlkZC0xZjNmYlwiLFxuICAgICAgXCIxZjlkZC0xZjNmY1wiLFxuICAgICAgXCIxZjlkZC0xZjNmZFwiLFxuICAgICAgXCIxZjlkZC0xZjNmZVwiLFxuICAgICAgXCIxZjlkZC0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGVfZWxmXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZGQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOWRkLTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOWRkLTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOWRkLTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOWRkLTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOWRkLTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbGVfZWxmXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZGQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOWRkLTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWRkLTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWRkLTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWRkLTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWRkLTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdlbmllXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZGVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW1hbGVfZ2VuaWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkZS0yMDBkLTI2NDAtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbGVfZ2VuaWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkZS0yMDBkLTI2NDItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInpvbWJpZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWRmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmVtYWxlX3pvbWJpZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWRmLTIwMGQtMjY0MC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZV96b21iaWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkZi0yMDBkLTI2NDItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNvbiBmcm93bmluZ1wiLFxuICAgICAgXCJwZXJzb25fZnJvd25pbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjY0ZFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2NGQtMWYzZmJcIixcbiAgICAgIFwiMWY2NGQtMWYzZmNcIixcbiAgICAgIFwiMWY2NGQtMWYzZmRcIixcbiAgICAgIFwiMWY2NGQtMWYzZmVcIixcbiAgICAgIFwiMWY2NGQtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLWZyb3duaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2NGQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNjRkLTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNjRkLTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNjRkLTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNjRkLTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNjRkLTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLWZyb3duaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2NGQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNjRkLTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNjRkLTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNjRkLTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNjRkLTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNjRkLTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNvbiB3aXRoIHBvdXRpbmcgZmFjZVwiLFxuICAgICAgXCJwZXJzb25fd2l0aF9wb3V0aW5nX2ZhY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjY0ZVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2NGUtMWYzZmJcIixcbiAgICAgIFwiMWY2NGUtMWYzZmNcIixcbiAgICAgIFwiMWY2NGUtMWYzZmRcIixcbiAgICAgIFwiMWY2NGUtMWYzZmVcIixcbiAgICAgIFwiMWY2NGUtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLXBvdXRpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjY0ZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2NGUtMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY2NGUtMWYzZmMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY2NGUtMWYzZmQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY2NGUtMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY2NGUtMWYzZmYtMjAwZC0yNjQyLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4tcG91dGluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjRlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjY0ZS0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjY0ZS0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjY0ZS0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjY0ZS0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjY0ZS0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHdpdGggbm8gZ29vZCBnZXN0dXJlXCIsXG4gICAgICBcIm5vX2dvb2RcIlxuICAgIF0sXG4gICAgdTogXCIxZjY0NVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2NDUtMWYzZmJcIixcbiAgICAgIFwiMWY2NDUtMWYzZmNcIixcbiAgICAgIFwiMWY2NDUtMWYzZmRcIixcbiAgICAgIFwiMWY2NDUtMWYzZmVcIixcbiAgICAgIFwiMWY2NDUtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLWdlc3R1cmluZy1ub1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjQ1LTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjY0NS0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjY0NS0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjY0NS0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjY0NS0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjY0NS0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1nZXN0dXJpbmctbm9cIlxuICAgIF0sXG4gICAgdTogXCIxZjY0NS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2NDUtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2NDUtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2NDUtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2NDUtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2NDUtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFjZSB3aXRoIG9rIGdlc3R1cmVcIixcbiAgICAgIFwib2tfd29tYW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjY0NlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2NDYtMWYzZmJcIixcbiAgICAgIFwiMWY2NDYtMWYzZmNcIixcbiAgICAgIFwiMWY2NDYtMWYzZmRcIixcbiAgICAgIFwiMWY2NDYtMWYzZmVcIixcbiAgICAgIFwiMWY2NDYtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLWdlc3R1cmluZy1va1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjQ2LTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjY0Ni0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjY0Ni0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjY0Ni0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjY0Ni0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjY0Ni0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1nZXN0dXJpbmctb2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjY0Ni0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2NDYtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2NDYtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2NDYtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2NDYtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2NDYtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaW5mb3JtYXRpb24gZGVzayBwZXJzb25cIixcbiAgICAgIFwiaW5mb3JtYXRpb25fZGVza19wZXJzb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ4MVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0ODEtMWYzZmJcIixcbiAgICAgIFwiMWY0ODEtMWYzZmNcIixcbiAgICAgIFwiMWY0ODEtMWYzZmRcIixcbiAgICAgIFwiMWY0ODEtMWYzZmVcIixcbiAgICAgIFwiMWY0ODEtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLXRpcHBpbmctaGFuZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDgxLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ4MS0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ4MS0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ4MS0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ4MS0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjQ4MS0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi10aXBwaW5nLWhhbmRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ4MS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0ODEtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0ODEtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0ODEtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0ODEtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY0ODEtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGFwcHkgcGVyc29uIHJhaXNpbmcgb25lIGhhbmRcIixcbiAgICAgIFwicmFpc2luZ19oYW5kXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2NGJcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNjRiLTFmM2ZiXCIsXG4gICAgICBcIjFmNjRiLTFmM2ZjXCIsXG4gICAgICBcIjFmNjRiLTFmM2ZkXCIsXG4gICAgICBcIjFmNjRiLTFmM2ZlXCIsXG4gICAgICBcIjFmNjRiLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1yYWlzaW5nLWhhbmRcIlxuICAgIF0sXG4gICAgdTogXCIxZjY0Yi0yMDBkLTI2NDItZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2NGItMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY2NGItMWYzZmMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY2NGItMWYzZmQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY2NGItMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY2NGItMWYzZmYtMjAwZC0yNjQyLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4tcmFpc2luZy1oYW5kXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2NGItMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNjRiLTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNjRiLTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNjRiLTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNjRiLTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNjRiLTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNvbiBib3dpbmcgZGVlcGx5XCIsXG4gICAgICBcImJvd1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjQ3XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjY0Ny0xZjNmYlwiLFxuICAgICAgXCIxZjY0Ny0xZjNmY1wiLFxuICAgICAgXCIxZjY0Ny0xZjNmZFwiLFxuICAgICAgXCIxZjY0Ny0xZjNmZVwiLFxuICAgICAgXCIxZjY0Ny0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4tYm93aW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2NDctMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNjQ3LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNjQ3LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNjQ3LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNjQ3LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNjQ3LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLWJvd2luZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjQ3LTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjY0Ny0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjY0Ny0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjY0Ny0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjY0Ny0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjY0Ny0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIHBhbG1cIixcbiAgICAgIFwiZmFjZV9wYWxtXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MjZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTI2LTFmM2ZiXCIsXG4gICAgICBcIjFmOTI2LTFmM2ZjXCIsXG4gICAgICBcIjFmOTI2LTFmM2ZkXCIsXG4gICAgICBcIjFmOTI2LTFmM2ZlXCIsXG4gICAgICBcIjFmOTI2LTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1mYWNlcGFsbWluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTI2LTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkyNi0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjkyNi0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjkyNi0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjkyNi0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjkyNi0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1mYWNlcGFsbWluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTI2LTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkyNi0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkyNi0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkyNi0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkyNi0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkyNi0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaHJ1Z1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTM3XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkzNy0xZjNmYlwiLFxuICAgICAgXCIxZjkzNy0xZjNmY1wiLFxuICAgICAgXCIxZjkzNy0xZjNmZFwiLFxuICAgICAgXCIxZjkzNy0xZjNmZVwiLFxuICAgICAgXCIxZjkzNy0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4tc2hydWdnaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MzctMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTM3LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM3LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM3LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM3LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM3LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLXNocnVnZ2luZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTM3LTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkzNy0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkzNy0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkzNy0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkzNy0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkzNy0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmYWNlIG1hc3NhZ2VcIixcbiAgICAgIFwibWFzc2FnZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDg2XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ4Ni0xZjNmYlwiLFxuICAgICAgXCIxZjQ4Ni0xZjNmY1wiLFxuICAgICAgXCIxZjQ4Ni0xZjNmZFwiLFxuICAgICAgXCIxZjQ4Ni0xZjNmZVwiLFxuICAgICAgXCIxZjQ4Ni0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4tZ2V0dGluZy1tYXNzYWdlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ODYtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDg2LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDg2LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDg2LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDg2LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNDg2LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLWdldHRpbmctbWFzc2FnZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDg2LTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ4Ni0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ4Ni0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ4Ni0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ4Ni0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjQ4Ni0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoYWlyY3V0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ODdcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDg3LTFmM2ZiXCIsXG4gICAgICBcIjFmNDg3LTFmM2ZjXCIsXG4gICAgICBcIjFmNDg3LTFmM2ZkXCIsXG4gICAgICBcIjFmNDg3LTFmM2ZlXCIsXG4gICAgICBcIjFmNDg3LTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1nZXR0aW5nLWhhaXJjdXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ4Ny0yMDBkLTI2NDItZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0ODctMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY0ODctMWYzZmMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY0ODctMWYzZmQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY0ODctMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY0ODctMWYzZmYtMjAwZC0yNjQyLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4tZ2V0dGluZy1oYWlyY3V0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ODctMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDg3LTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNDg3LTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNDg3LTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNDg3LTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNDg3LTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlZGVzdHJpYW5cIixcbiAgICAgIFwid2Fsa2luZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmI2XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjZiNi0xZjNmYlwiLFxuICAgICAgXCIxZjZiNi0xZjNmY1wiLFxuICAgICAgXCIxZjZiNi0xZjNmZFwiLFxuICAgICAgXCIxZjZiNi0xZjNmZVwiLFxuICAgICAgXCIxZjZiNi0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4td2Fsa2luZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmI2LTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjZiNi0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZiNi0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZiNi0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZiNi0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZiNi0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi13YWxraW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YjYtMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNmI2LTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNmI2LTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNmI2LTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNmI2LTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmNmI2LTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJ1bm5lclwiLFxuICAgICAgXCJydW5uaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYzNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmM2MzLTFmM2ZiXCIsXG4gICAgICBcIjFmM2MzLTFmM2ZjXCIsXG4gICAgICBcIjFmM2MzLTFmM2ZkXCIsXG4gICAgICBcIjFmM2MzLTFmM2ZlXCIsXG4gICAgICBcIjFmM2MzLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1ydW5uaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYzMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmM2MzLTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmM2MzLTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmM2MzLTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmM2MzLTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmM2MzLTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLXJ1bm5pbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjNjMy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWYzYzMtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWYzYzMtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWYzYzMtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWYzYzMtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWYzYzMtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZGFuY2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ODNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDgzLTFmM2ZiXCIsXG4gICAgICBcIjFmNDgzLTFmM2ZjXCIsXG4gICAgICBcIjFmNDgzLTFmM2ZkXCIsXG4gICAgICBcIjFmNDgzLTFmM2ZlXCIsXG4gICAgICBcIjFmNDgzLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbiBkYW5jaW5nXCIsXG4gICAgICBcIm1hbl9kYW5jaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1N2FcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNTdhLTFmM2ZiXCIsXG4gICAgICBcIjFmNTdhLTFmM2ZjXCIsXG4gICAgICBcIjFmNTdhLTFmM2ZkXCIsXG4gICAgICBcIjFmNTdhLTFmM2ZlXCIsXG4gICAgICBcIjFmNTdhLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuIHdpdGggYnVubnkgZWFyc1wiLFxuICAgICAgXCJkYW5jZXJzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4td2l0aC1idW5ueS1lYXJzLXBhcnR5aW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NmYtMjAwZC0yNjQyLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi13aXRoLWJ1bm55LWVhcnMtcGFydHlpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2Zi0yMDBkLTI2NDAtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNvbiBpbiBzdGVhbXkgcm9vbVwiLFxuICAgICAgXCJwZXJzb25faW5fc3RlYW15X3Jvb21cIlxuICAgIF0sXG4gICAgdTogXCIxZjlkNlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZDYtMWYzZmJcIixcbiAgICAgIFwiMWY5ZDYtMWYzZmNcIixcbiAgICAgIFwiMWY5ZDYtMWYzZmRcIixcbiAgICAgIFwiMWY5ZDYtMWYzZmVcIixcbiAgICAgIFwiMWY5ZDYtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW5faW5fc3RlYW15X3Jvb21cIlxuICAgIF0sXG4gICAgdTogXCIxZjlkNi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZDYtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDYtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDYtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDYtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDYtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuX2luX3N0ZWFteV9yb29tXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZDYtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOWQ2LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ2LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ2LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ2LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ2LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNvbiBjbGltYmluZ1wiLFxuICAgICAgXCJwZXJzb25fY2xpbWJpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkN1wiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZDctMWYzZmJcIixcbiAgICAgIFwiMWY5ZDctMWYzZmNcIixcbiAgICAgIFwiMWY5ZDctMWYzZmRcIixcbiAgICAgIFwiMWY5ZDctMWYzZmVcIixcbiAgICAgIFwiMWY5ZDctMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW5fY2xpbWJpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjlkNy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZDctMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDctMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDctMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDctMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDctMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuX2NsaW1iaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZDctMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOWQ3LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ3LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ3LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ3LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ3LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNvbiBpbiBsb3R1cyBwb3NpdGlvblwiLFxuICAgICAgXCJwZXJzb25faW5fbG90dXNfcG9zaXRpb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjlkOFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZDgtMWYzZmJcIixcbiAgICAgIFwiMWY5ZDgtMWYzZmNcIixcbiAgICAgIFwiMWY5ZDgtMWYzZmRcIixcbiAgICAgIFwiMWY5ZDgtMWYzZmVcIixcbiAgICAgIFwiMWY5ZDgtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW5faW5fbG90dXNfcG9zaXRpb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjlkOC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5ZDgtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDgtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDgtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDgtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5ZDgtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuX2luX2xvdHVzX3Bvc2l0aW9uXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZDgtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOWQ4LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ4LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ4LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ4LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOWQ4LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJhdGhcIlxuICAgIF0sXG4gICAgdTogXCIxZjZjMFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2YzAtMWYzZmJcIixcbiAgICAgIFwiMWY2YzAtMWYzZmNcIixcbiAgICAgIFwiMWY2YzAtMWYzZmRcIixcbiAgICAgIFwiMWY2YzAtMWYzZmVcIixcbiAgICAgIFwiMWY2YzAtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2xlZXBpbmcgYWNjb21tb2RhdGlvblwiLFxuICAgICAgXCJzbGVlcGluZ19hY2NvbW1vZGF0aW9uXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2Y2NcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNmNjLTFmM2ZiXCIsXG4gICAgICBcIjFmNmNjLTFmM2ZjXCIsXG4gICAgICBcIjFmNmNjLTFmM2ZkXCIsXG4gICAgICBcIjFmNmNjLTFmM2ZlXCIsXG4gICAgICBcIjFmNmNjLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbl9pbl9idXNpbmVzc19zdWl0X2xldml0YXRpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjU3NC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjU3NC0xZjNmYlwiLFxuICAgICAgXCIxZjU3NC0xZjNmY1wiLFxuICAgICAgXCIxZjU3NC0xZjNmZFwiLFxuICAgICAgXCIxZjU3NC0xZjNmZVwiLFxuICAgICAgXCIxZjU3NC0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcGVha2luZ19oZWFkX2luX3NpbGhvdWV0dGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjVlMy1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnVzdCBpbiBzaWxob3VldHRlXCIsXG4gICAgICBcImJ1c3RfaW5fc2lsaG91ZXR0ZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnVzdHMgaW4gc2lsaG91ZXR0ZVwiLFxuICAgICAgXCJidXN0c19pbl9zaWxob3VldHRlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZW5jZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjkzYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvcnNlIHJhY2luZ1wiLFxuICAgICAgXCJob3JzZV9yYWNpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjNjN1wiLFxuICAgIHY6IFtcbiAgICAgIFwiMWYzYzctMWYzZmJcIixcbiAgICAgIFwiMWYzYzctMWYzZmNcIixcbiAgICAgIFwiMWYzYzctMWYzZmRcIixcbiAgICAgIFwiMWYzYzctMWYzZmVcIixcbiAgICAgIFwiMWYzYzctMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2tpZXJcIlxuICAgIF0sXG4gICAgdTogXCIyNmY3LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzbm93Ym9hcmRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2MyXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjNjMi0xZjNmYlwiLFxuICAgICAgXCIxZjNjMi0xZjNmY1wiLFxuICAgICAgXCIxZjNjMi0xZjNmZFwiLFxuICAgICAgXCIxZjNjMi0xZjNmZVwiLFxuICAgICAgXCIxZjNjMi0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJnb2xmZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjNjYy1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjNjYy0xZjNmYlwiLFxuICAgICAgXCIxZjNjYy0xZjNmY1wiLFxuICAgICAgXCIxZjNjYy0xZjNmZFwiLFxuICAgICAgXCIxZjNjYy0xZjNmZVwiLFxuICAgICAgXCIxZjNjYy0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4tZ29sZmluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2NjLWZlMGYtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmM2NjLTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmM2NjLTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmM2NjLTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmM2NjLTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmM2NjLTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLWdvbGZpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjNjYy1mZTBmLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjNjYy0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYy0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYy0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYy0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYy0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdXJmZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjNjNFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWYzYzQtMWYzZmJcIixcbiAgICAgIFwiMWYzYzQtMWYzZmNcIixcbiAgICAgIFwiMWYzYzQtMWYzZmRcIixcbiAgICAgIFwiMWYzYzQtMWYzZmVcIixcbiAgICAgIFwiMWYzYzQtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLXN1cmZpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjNjNC0yMDBkLTI2NDItZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWYzYzQtMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWYzYzQtMWYzZmMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWYzYzQtMWYzZmQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWYzYzQtMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWYzYzQtMWYzZmYtMjAwZC0yNjQyLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4tc3VyZmluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2M0LTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjNjNC0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjNC0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjNC0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjNC0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjNC0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyb3dib2F0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YTNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNmEzLTFmM2ZiXCIsXG4gICAgICBcIjFmNmEzLTFmM2ZjXCIsXG4gICAgICBcIjFmNmEzLTFmM2ZkXCIsXG4gICAgICBcIjFmNmEzLTFmM2ZlXCIsXG4gICAgICBcIjFmNmEzLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1yb3dpbmctYm9hdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmEzLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjZhMy0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZhMy0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZhMy0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZhMy0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZhMy0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1yb3dpbmctYm9hdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmEzLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjZhMy0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjZhMy0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjZhMy0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjZhMy0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjZhMy0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzd2ltbWVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzY2FcIixcbiAgICB2OiBbXG4gICAgICBcIjFmM2NhLTFmM2ZiXCIsXG4gICAgICBcIjFmM2NhLTFmM2ZjXCIsXG4gICAgICBcIjFmM2NhLTFmM2ZkXCIsXG4gICAgICBcIjFmM2NhLTFmM2ZlXCIsXG4gICAgICBcIjFmM2NhLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1zd2ltbWluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2NhLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjNjYS0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjNjYS0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjNjYS0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjNjYS0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjNjYS0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1zd2ltbWluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2NhLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjNjYS0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYS0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYS0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYS0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYS0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwZXJzb25fd2l0aF9iYWxsXCJcbiAgICBdLFxuICAgIHU6IFwiMjZmOS1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIyNmY5LTFmM2ZiXCIsXG4gICAgICBcIjI2ZjktMWYzZmNcIixcbiAgICAgIFwiMjZmOS0xZjNmZFwiLFxuICAgICAgXCIyNmY5LTFmM2ZlXCIsXG4gICAgICBcIjI2ZjktMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLWJvdW5jaW5nLWJhbGxcIlxuICAgIF0sXG4gICAgdTogXCIyNmY5LWZlMGYtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjI2ZjktMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMjZmOS0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIyNmY5LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjI2ZjktMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMjZmOS0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1ib3VuY2luZy1iYWxsXCJcbiAgICBdLFxuICAgIHU6IFwiMjZmOS1mZTBmLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIyNmY5LTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjI2ZjktMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMjZmOS0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIyNmY5LTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjI2ZjktMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2VpZ2h0X2xpZnRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2NiLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmM2NiLTFmM2ZiXCIsXG4gICAgICBcIjFmM2NiLTFmM2ZjXCIsXG4gICAgICBcIjFmM2NiLTFmM2ZkXCIsXG4gICAgICBcIjFmM2NiLTFmM2ZlXCIsXG4gICAgICBcIjFmM2NiLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1saWZ0aW5nLXdlaWdodHNcIlxuICAgIF0sXG4gICAgdTogXCIxZjNjYi1mZTBmLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjNjYi0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjNjYi0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjNjYi0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjNjYi0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjNjYi0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1saWZ0aW5nLXdlaWdodHNcIlxuICAgIF0sXG4gICAgdTogXCIxZjNjYi1mZTBmLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjNjYi0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYi0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYi0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYi0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjNjYi0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiaWN5Y2xpc3RcIlxuICAgIF0sXG4gICAgdTogXCIxZjZiNFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2YjQtMWYzZmJcIixcbiAgICAgIFwiMWY2YjQtMWYzZmNcIixcbiAgICAgIFwiMWY2YjQtMWYzZmRcIixcbiAgICAgIFwiMWY2YjQtMWYzZmVcIixcbiAgICAgIFwiMWY2YjQtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLWJpa2luZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmI0LTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjZiNC0xZjNmYi0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZiNC0xZjNmYy0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZiNC0xZjNmZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZiNC0xZjNmZS0yMDBkLTI2NDItZmUwZlwiLFxuICAgICAgXCIxZjZiNC0xZjNmZi0yMDBkLTI2NDItZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1iaWtpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjZiNC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY2YjQtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2YjQtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2YjQtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2YjQtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY2YjQtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibW91bnRhaW4gYmljeWNsaXN0XCIsXG4gICAgICBcIm1vdW50YWluX2JpY3ljbGlzdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmI1XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjZiNS0xZjNmYlwiLFxuICAgICAgXCIxZjZiNS0xZjNmY1wiLFxuICAgICAgXCIxZjZiNS0xZjNmZFwiLFxuICAgICAgXCIxZjZiNS0xZjNmZVwiLFxuICAgICAgXCIxZjZiNS0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4tbW91bnRhaW4tYmlraW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YjUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNmI1LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNmI1LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNmI1LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNmI1LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmNmI1LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLW1vdW50YWluLWJpa2luZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmI1LTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjZiNS0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjZiNS0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjZiNS0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjZiNS0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjZiNS0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyYWNpbmdfY2FyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzY2UtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJhY2luZ19tb3RvcmN5Y2xlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzY2QtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNvbiBkb2luZyBjYXJ0d2hlZWxcIixcbiAgICAgIFwicGVyc29uX2RvaW5nX2NhcnR3aGVlbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTM4XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkzOC0xZjNmYlwiLFxuICAgICAgXCIxZjkzOC0xZjNmY1wiLFxuICAgICAgXCIxZjkzOC0xZjNmZFwiLFxuICAgICAgXCIxZjkzOC0xZjNmZVwiLFxuICAgICAgXCIxZjkzOC0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4tY2FydHdoZWVsaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MzgtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTM4LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM4LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM4LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM4LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM4LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLWNhcnR3aGVlbGluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTM4LTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkzOC0xZjNmYi0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkzOC0xZjNmYy0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkzOC0xZjNmZC0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkzOC0xZjNmZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgICAgXCIxZjkzOC0xZjNmZi0yMDBkLTI2NDAtZmUwZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3cmVzdGxlcnNcIlxuICAgIF0sXG4gICAgdTogXCIxZjkzY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi13cmVzdGxpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjkzYy0yMDBkLTI2NDItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLXdyZXN0bGluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTNjLTIwMGQtMjY0MC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2F0ZXIgcG9sb1wiLFxuICAgICAgXCJ3YXRlcl9wb2xvXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5M2RcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTNkLTFmM2ZiXCIsXG4gICAgICBcIjFmOTNkLTFmM2ZjXCIsXG4gICAgICBcIjFmOTNkLTFmM2ZkXCIsXG4gICAgICBcIjFmOTNkLTFmM2ZlXCIsXG4gICAgICBcIjFmOTNkLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1wbGF5aW5nLXdhdGVyLXBvbG9cIlxuICAgIF0sXG4gICAgdTogXCIxZjkzZC0yMDBkLTI2NDItZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5M2QtMWYzZmItMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5M2QtMWYzZmMtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5M2QtMWYzZmQtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5M2QtMWYzZmUtMjAwZC0yNjQyLWZlMGZcIixcbiAgICAgIFwiMWY5M2QtMWYzZmYtMjAwZC0yNjQyLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4tcGxheWluZy13YXRlci1wb2xvXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5M2QtMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTNkLTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOTNkLTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOTNkLTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOTNkLTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOTNkLTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhhbmRiYWxsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5M2VcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTNlLTFmM2ZiXCIsXG4gICAgICBcIjFmOTNlLTFmM2ZjXCIsXG4gICAgICBcIjFmOTNlLTFmM2ZkXCIsXG4gICAgICBcIjFmOTNlLTFmM2ZlXCIsXG4gICAgICBcIjFmOTNlLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1wbGF5aW5nLWhhbmRiYWxsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5M2UtMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTNlLTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTNlLTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTNlLTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTNlLTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTNlLTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLXBsYXlpbmctaGFuZGJhbGxcIlxuICAgIF0sXG4gICAgdTogXCIxZjkzZS0yMDBkLTI2NDAtZmUwZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5M2UtMWYzZmItMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5M2UtMWYzZmMtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5M2UtMWYzZmQtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5M2UtMWYzZmUtMjAwZC0yNjQwLWZlMGZcIixcbiAgICAgIFwiMWY5M2UtMWYzZmYtMjAwZC0yNjQwLWZlMGZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwianVnZ2xpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjkzOVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5MzktMWYzZmJcIixcbiAgICAgIFwiMWY5MzktMWYzZmNcIixcbiAgICAgIFwiMWY5MzktMWYzZmRcIixcbiAgICAgIFwiMWY5MzktMWYzZmVcIixcbiAgICAgIFwiMWY5MzktMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLWp1Z2dsaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MzktMjAwZC0yNjQyLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTM5LTFmM2ZiLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM5LTFmM2ZjLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM5LTFmM2ZkLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM5LTFmM2ZlLTIwMGQtMjY0Mi1mZTBmXCIsXG4gICAgICBcIjFmOTM5LTFmM2ZmLTIwMGQtMjY0Mi1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLWp1Z2dsaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MzktMjAwZC0yNjQwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTM5LTFmM2ZiLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOTM5LTFmM2ZjLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOTM5LTFmM2ZkLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOTM5LTFmM2ZlLTIwMGQtMjY0MC1mZTBmXCIsXG4gICAgICBcIjFmOTM5LTFmM2ZmLTIwMGQtMjY0MC1mZTBmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbiBhbmQgd29tYW4gaG9sZGluZyBoYW5kc1wiLFxuICAgICAgXCJjb3VwbGVcIixcbiAgICAgIFwibWFuX2FuZF93b21hbl9ob2xkaW5nX2hhbmRzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NmJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0d28gbWVuIGhvbGRpbmcgaGFuZHNcIixcbiAgICAgIFwidHdvX21lbl9ob2xkaW5nX2hhbmRzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NmNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0d28gd29tZW4gaG9sZGluZyBoYW5kc1wiLFxuICAgICAgXCJ0d29fd29tZW5faG9sZGluZ19oYW5kc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDZkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2lzc1wiLFxuICAgICAgXCJjb3VwbGVraXNzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0OGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1raXNzLW1hblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMjc2NC1mZTBmLTIwMGQtMWY0OGItMjAwZC0xZjQ2OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1raXNzLW1hblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMjc2NC1mZTBmLTIwMGQtMWY0OGItMjAwZC0xZjQ2OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLWtpc3Mtd29tYW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTI3NjQtZmUwZi0yMDBkLTFmNDhiLTIwMGQtMWY0NjlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb3VwbGUgd2l0aCBoZWFydFwiLFxuICAgICAgXCJjb3VwbGVfd2l0aF9oZWFydFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDkxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4taGVhcnQtbWFuXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjktMjAwZC0yNzY0LWZlMGYtMjAwZC0xZjQ2OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1oZWFydC1tYW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTI3NjQtZmUwZi0yMDBkLTFmNDY4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4taGVhcnQtd29tYW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTI3NjQtZmUwZi0yMDBkLTFmNDY5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFtaWx5XCIsXG4gICAgICBcIm1hbi13b21hbi1ib3lcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2YVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi13b21hbi1ib3lcIixcbiAgICAgIFwiZmFtaWx5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjQ2OS0yMDBkLTFmNDY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLXdvbWFuLWdpcmxcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmNDY5LTIwMGQtMWY0NjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4td29tYW4tZ2lybC1ib3lcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmNDY5LTIwMGQtMWY0NjctMjAwZC0xZjQ2NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi13b21hbi1ib3ktYm95XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjQ2OS0yMDBkLTFmNDY2LTIwMGQtMWY0NjZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4td29tYW4tZ2lybC1naXJsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjQ2OS0yMDBkLTFmNDY3LTIwMGQtMWY0NjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4tbWFuLWJveVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMWY0NjgtMjAwZC0xZjQ2NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1tYW4tZ2lybFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMWY0NjgtMjAwZC0xZjQ2N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1tYW4tZ2lybC1ib3lcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmNDY4LTIwMGQtMWY0NjctMjAwZC0xZjQ2NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1tYW4tYm95LWJveVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMWY0NjgtMjAwZC0xZjQ2Ni0yMDBkLTFmNDY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLW1hbi1naXJsLWdpcmxcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmNDY4LTIwMGQtMWY0NjctMjAwZC0xZjQ2N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLXdvbWFuLWJveVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY0NjktMjAwZC0xZjQ2NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLXdvbWFuLWdpcmxcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OS0yMDBkLTFmNDY5LTIwMGQtMWY0NjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi13b21hbi1naXJsLWJveVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY0NjktMjAwZC0xZjQ2Ny0yMDBkLTFmNDY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4td29tYW4tYm95LWJveVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY0NjktMjAwZC0xZjQ2Ni0yMDBkLTFmNDY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4td29tYW4tZ2lybC1naXJsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjktMjAwZC0xZjQ2OS0yMDBkLTFmNDY3LTIwMGQtMWY0NjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYW4tYm95XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjQ2NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbi1ib3ktYm95XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjQ2Ni0yMDBkLTFmNDY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLWdpcmxcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2OC0yMDBkLTFmNDY3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLWdpcmwtYm95XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjgtMjAwZC0xZjQ2Ny0yMDBkLTFmNDY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFuLWdpcmwtZ2lybFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY4LTIwMGQtMWY0NjctMjAwZC0xZjQ2N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLWJveVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY0NjZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1ib3ktYm95XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjktMjAwZC0xZjQ2Ni0yMDBkLTFmNDY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW4tZ2lybFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY0NjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbi1naXJsLWJveVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY0NjctMjAwZC0xZjQ2NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvbWFuLWdpcmwtZ2lybFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDY5LTIwMGQtMWY0NjctMjAwZC0xZjQ2N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNlbGZpZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTMzXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkzMy0xZjNmYlwiLFxuICAgICAgXCIxZjkzMy0xZjNmY1wiLFxuICAgICAgXCIxZjkzMy0xZjNmZFwiLFxuICAgICAgXCIxZjkzMy0xZjNmZVwiLFxuICAgICAgXCIxZjkzMy0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmbGV4ZWQgYmljZXBzXCIsXG4gICAgICBcIm11c2NsZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGFhXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjRhYS0xZjNmYlwiLFxuICAgICAgXCIxZjRhYS0xZjNmY1wiLFxuICAgICAgXCIxZjRhYS0xZjNmZFwiLFxuICAgICAgXCIxZjRhYS0xZjNmZVwiLFxuICAgICAgXCIxZjRhYS0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3aGl0ZSBsZWZ0IHBvaW50aW5nIGJhY2toYW5kIGluZGV4XCIsXG4gICAgICBcInBvaW50X2xlZnRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ0OFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NDgtMWYzZmJcIixcbiAgICAgIFwiMWY0NDgtMWYzZmNcIixcbiAgICAgIFwiMWY0NDgtMWYzZmRcIixcbiAgICAgIFwiMWY0NDgtMWYzZmVcIixcbiAgICAgIFwiMWY0NDgtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2hpdGUgcmlnaHQgcG9pbnRpbmcgYmFja2hhbmQgaW5kZXhcIixcbiAgICAgIFwicG9pbnRfcmlnaHRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ0OVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NDktMWYzZmJcIixcbiAgICAgIFwiMWY0NDktMWYzZmNcIixcbiAgICAgIFwiMWY0NDktMWYzZmRcIixcbiAgICAgIFwiMWY0NDktMWYzZmVcIixcbiAgICAgIFwiMWY0NDktMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2hpdGUgdXAgcG9pbnRpbmcgaW5kZXhcIixcbiAgICAgIFwicG9pbnRfdXBcIlxuICAgIF0sXG4gICAgdTogXCIyNjFkLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjI2MWQtMWYzZmJcIixcbiAgICAgIFwiMjYxZC0xZjNmY1wiLFxuICAgICAgXCIyNjFkLTFmM2ZkXCIsXG4gICAgICBcIjI2MWQtMWYzZmVcIixcbiAgICAgIFwiMjYxZC0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3aGl0ZSB1cCBwb2ludGluZyBiYWNraGFuZCBpbmRleFwiLFxuICAgICAgXCJwb2ludF91cF8yXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NDZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDQ2LTFmM2ZiXCIsXG4gICAgICBcIjFmNDQ2LTFmM2ZjXCIsXG4gICAgICBcIjFmNDQ2LTFmM2ZkXCIsXG4gICAgICBcIjFmNDQ2LTFmM2ZlXCIsXG4gICAgICBcIjFmNDQ2LTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJldmVyc2VkIGhhbmQgd2l0aCBtaWRkbGUgZmluZ2VyIGV4dGVuZGVkXCIsXG4gICAgICBcIm1pZGRsZV9maW5nZXJcIixcbiAgICAgIFwicmV2ZXJzZWRfaGFuZF93aXRoX21pZGRsZV9maW5nZXJfZXh0ZW5kZWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjU5NVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY1OTUtMWYzZmJcIixcbiAgICAgIFwiMWY1OTUtMWYzZmNcIixcbiAgICAgIFwiMWY1OTUtMWYzZmRcIixcbiAgICAgIFwiMWY1OTUtMWYzZmVcIixcbiAgICAgIFwiMWY1OTUtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2hpdGUgZG93biBwb2ludGluZyBiYWNraGFuZCBpbmRleFwiLFxuICAgICAgXCJwb2ludF9kb3duXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NDdcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDQ3LTFmM2ZiXCIsXG4gICAgICBcIjFmNDQ3LTFmM2ZjXCIsXG4gICAgICBcIjFmNDQ3LTFmM2ZkXCIsXG4gICAgICBcIjFmNDQ3LTFmM2ZlXCIsXG4gICAgICBcIjFmNDQ3LTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInZpY3RvcnkgaGFuZFwiLFxuICAgICAgXCJ2XCJcbiAgICBdLFxuICAgIHU6IFwiMjcwYy1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIyNzBjLTFmM2ZiXCIsXG4gICAgICBcIjI3MGMtMWYzZmNcIixcbiAgICAgIFwiMjcwYy0xZjNmZFwiLFxuICAgICAgXCIyNzBjLTFmM2ZlXCIsXG4gICAgICBcIjI3MGMtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGFuZCB3aXRoIGluZGV4IGFuZCBtaWRkbGUgZmluZ2VycyBjcm9zc2VkXCIsXG4gICAgICBcImNyb3NzZWRfZmluZ2Vyc1wiLFxuICAgICAgXCJoYW5kX3dpdGhfaW5kZXhfYW5kX21pZGRsZV9maW5nZXJzX2Nyb3NzZWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjkxZVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5MWUtMWYzZmJcIixcbiAgICAgIFwiMWY5MWUtMWYzZmNcIixcbiAgICAgIFwiMWY5MWUtMWYzZmRcIixcbiAgICAgIFwiMWY5MWUtMWYzZmVcIixcbiAgICAgIFwiMWY5MWUtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmFpc2VkIGhhbmQgd2l0aCBwYXJ0IGJldHdlZW4gbWlkZGxlIGFuZCByaW5nIGZpbmdlcnNcIixcbiAgICAgIFwic3BvY2staGFuZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTk2XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjU5Ni0xZjNmYlwiLFxuICAgICAgXCIxZjU5Ni0xZjNmY1wiLFxuICAgICAgXCIxZjU5Ni0xZjNmZFwiLFxuICAgICAgXCIxZjU5Ni0xZjNmZVwiLFxuICAgICAgXCIxZjU5Ni0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaWduIG9mIHRoZSBob3Juc1wiLFxuICAgICAgXCJ0aGVfaG9ybnNcIixcbiAgICAgIFwic2lnbl9vZl90aGVfaG9ybnNcIlxuICAgIF0sXG4gICAgdTogXCIxZjkxOFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5MTgtMWYzZmJcIixcbiAgICAgIFwiMWY5MTgtMWYzZmNcIixcbiAgICAgIFwiMWY5MTgtMWYzZmRcIixcbiAgICAgIFwiMWY5MTgtMWYzZmVcIixcbiAgICAgIFwiMWY5MTgtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2FsbCBtZSBoYW5kXCIsXG4gICAgICBcImNhbGxfbWVfaGFuZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTE5XCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkxOS0xZjNmYlwiLFxuICAgICAgXCIxZjkxOS0xZjNmY1wiLFxuICAgICAgXCIxZjkxOS0xZjNmZFwiLFxuICAgICAgXCIxZjkxOS0xZjNmZVwiLFxuICAgICAgXCIxZjkxOS0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyYWlzZWRfaGFuZF93aXRoX2ZpbmdlcnNfc3BsYXllZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTkwLWZlMGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNTkwLTFmM2ZiXCIsXG4gICAgICBcIjFmNTkwLTFmM2ZjXCIsXG4gICAgICBcIjFmNTkwLTFmM2ZkXCIsXG4gICAgICBcIjFmNTkwLTFmM2ZlXCIsXG4gICAgICBcIjFmNTkwLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJhaXNlZCBoYW5kXCIsXG4gICAgICBcImhhbmRcIixcbiAgICAgIFwicmFpc2VkX2hhbmRcIlxuICAgIF0sXG4gICAgdTogXCIyNzBiXCIsXG4gICAgdjogW1xuICAgICAgXCIyNzBiLTFmM2ZiXCIsXG4gICAgICBcIjI3MGItMWYzZmNcIixcbiAgICAgIFwiMjcwYi0xZjNmZFwiLFxuICAgICAgXCIyNzBiLTFmM2ZlXCIsXG4gICAgICBcIjI3MGItMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib2sgaGFuZCBzaWduXCIsXG4gICAgICBcIm9rX2hhbmRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ0Y1wiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NGMtMWYzZmJcIixcbiAgICAgIFwiMWY0NGMtMWYzZmNcIixcbiAgICAgIFwiMWY0NGMtMWYzZmRcIixcbiAgICAgIFwiMWY0NGMtMWYzZmVcIixcbiAgICAgIFwiMWY0NGMtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidGh1bWJzIHVwIHNpZ25cIixcbiAgICAgIFwiKzFcIixcbiAgICAgIFwidGh1bWJzdXBcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ0ZFwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NGQtMWYzZmJcIixcbiAgICAgIFwiMWY0NGQtMWYzZmNcIixcbiAgICAgIFwiMWY0NGQtMWYzZmRcIixcbiAgICAgIFwiMWY0NGQtMWYzZmVcIixcbiAgICAgIFwiMWY0NGQtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidGh1bWJzIGRvd24gc2lnblwiLFxuICAgICAgXCItMVwiLFxuICAgICAgXCJ0aHVtYnNkb3duXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NGVcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDRlLTFmM2ZiXCIsXG4gICAgICBcIjFmNDRlLTFmM2ZjXCIsXG4gICAgICBcIjFmNDRlLTFmM2ZkXCIsXG4gICAgICBcIjFmNDRlLTFmM2ZlXCIsXG4gICAgICBcIjFmNDRlLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJhaXNlZCBmaXN0XCIsXG4gICAgICBcImZpc3RcIlxuICAgIF0sXG4gICAgdTogXCIyNzBhXCIsXG4gICAgdjogW1xuICAgICAgXCIyNzBhLTFmM2ZiXCIsXG4gICAgICBcIjI3MGEtMWYzZmNcIixcbiAgICAgIFwiMjcwYS0xZjNmZFwiLFxuICAgICAgXCIyNzBhLTFmM2ZlXCIsXG4gICAgICBcIjI3MGEtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmlzdGVkIGhhbmQgc2lnblwiLFxuICAgICAgXCJmYWNlcHVuY2hcIixcbiAgICAgIFwicHVuY2hcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ0YVwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NGEtMWYzZmJcIixcbiAgICAgIFwiMWY0NGEtMWYzZmNcIixcbiAgICAgIFwiMWY0NGEtMWYzZmRcIixcbiAgICAgIFwiMWY0NGEtMWYzZmVcIixcbiAgICAgIFwiMWY0NGEtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGVmdC1mYWNpbmcgZmlzdFwiLFxuICAgICAgXCJsZWZ0LWZhY2luZ19maXN0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MWJcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTFiLTFmM2ZiXCIsXG4gICAgICBcIjFmOTFiLTFmM2ZjXCIsXG4gICAgICBcIjFmOTFiLTFmM2ZkXCIsXG4gICAgICBcIjFmOTFiLTFmM2ZlXCIsXG4gICAgICBcIjFmOTFiLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJpZ2h0LWZhY2luZyBmaXN0XCIsXG4gICAgICBcInJpZ2h0LWZhY2luZ19maXN0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MWNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTFjLTFmM2ZiXCIsXG4gICAgICBcIjFmOTFjLTFmM2ZjXCIsXG4gICAgICBcIjFmOTFjLTFmM2ZkXCIsXG4gICAgICBcIjFmOTFjLTFmM2ZlXCIsXG4gICAgICBcIjFmOTFjLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJhaXNlZCBiYWNrIG9mIGhhbmRcIixcbiAgICAgIFwicmFpc2VkX2JhY2tfb2ZfaGFuZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTFhXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjkxYS0xZjNmYlwiLFxuICAgICAgXCIxZjkxYS0xZjNmY1wiLFxuICAgICAgXCIxZjkxYS0xZjNmZFwiLFxuICAgICAgXCIxZjkxYS0xZjNmZVwiLFxuICAgICAgXCIxZjkxYS0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3YXZpbmcgaGFuZCBzaWduXCIsXG4gICAgICBcIndhdmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ0YlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY0NGItMWYzZmJcIixcbiAgICAgIFwiMWY0NGItMWYzZmNcIixcbiAgICAgIFwiMWY0NGItMWYzZmRcIixcbiAgICAgIFwiMWY0NGItMWYzZmVcIixcbiAgICAgIFwiMWY0NGItMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaSBsb3ZlIHlvdSBoYW5kIHNpZ25cIixcbiAgICAgIFwiaV9sb3ZlX3lvdV9oYW5kX3NpZ25cIlxuICAgIF0sXG4gICAgdTogXCIxZjkxZlwiLFxuICAgIHY6IFtcbiAgICAgIFwiMWY5MWYtMWYzZmJcIixcbiAgICAgIFwiMWY5MWYtMWYzZmNcIixcbiAgICAgIFwiMWY5MWYtMWYzZmRcIixcbiAgICAgIFwiMWY5MWYtMWYzZmVcIixcbiAgICAgIFwiMWY5MWYtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid3JpdGluZ19oYW5kXCJcbiAgICBdLFxuICAgIHU6IFwiMjcwZC1mZTBmXCIsXG4gICAgdjogW1xuICAgICAgXCIyNzBkLTFmM2ZiXCIsXG4gICAgICBcIjI3MGQtMWYzZmNcIixcbiAgICAgIFwiMjcwZC0xZjNmZFwiLFxuICAgICAgXCIyNzBkLTFmM2ZlXCIsXG4gICAgICBcIjI3MGQtMWYzZmZcIlxuICAgIF1cbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xhcHBpbmcgaGFuZHMgc2lnblwiLFxuICAgICAgXCJjbGFwXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDRmLTFmM2ZiXCIsXG4gICAgICBcIjFmNDRmLTFmM2ZjXCIsXG4gICAgICBcIjFmNDRmLTFmM2ZkXCIsXG4gICAgICBcIjFmNDRmLTFmM2ZlXCIsXG4gICAgICBcIjFmNDRmLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm9wZW4gaGFuZHMgc2lnblwiLFxuICAgICAgXCJvcGVuX2hhbmRzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NTBcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDUwLTFmM2ZiXCIsXG4gICAgICBcIjFmNDUwLTFmM2ZjXCIsXG4gICAgICBcIjFmNDUwLTFmM2ZkXCIsXG4gICAgICBcIjFmNDUwLTFmM2ZlXCIsXG4gICAgICBcIjFmNDUwLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNvbiByYWlzaW5nIGJvdGggaGFuZHMgaW4gY2VsZWJyYXRpb25cIixcbiAgICAgIFwicmFpc2VkX2hhbmRzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2NGNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNjRjLTFmM2ZiXCIsXG4gICAgICBcIjFmNjRjLTFmM2ZjXCIsXG4gICAgICBcIjFmNjRjLTFmM2ZkXCIsXG4gICAgICBcIjFmNjRjLTFmM2ZlXCIsXG4gICAgICBcIjFmNjRjLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBhbG1zIHVwIHRvZ2V0aGVyXCIsXG4gICAgICBcInBhbG1zX3VwX3RvZ2V0aGVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5MzJcIixcbiAgICB2OiBbXG4gICAgICBcIjFmOTMyLTFmM2ZiXCIsXG4gICAgICBcIjFmOTMyLTFmM2ZjXCIsXG4gICAgICBcIjFmOTMyLTFmM2ZkXCIsXG4gICAgICBcIjFmOTMyLTFmM2ZlXCIsXG4gICAgICBcIjFmOTMyLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlcnNvbiB3aXRoIGZvbGRlZCBoYW5kc1wiLFxuICAgICAgXCJwcmF5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2NGZcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNjRmLTFmM2ZiXCIsXG4gICAgICBcIjFmNjRmLTFmM2ZjXCIsXG4gICAgICBcIjFmNjRmLTFmM2ZkXCIsXG4gICAgICBcIjFmNjRmLTFmM2ZlXCIsXG4gICAgICBcIjFmNjRmLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhhbmRzaGFrZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTFkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmFpbCBwb2xpc2hcIixcbiAgICAgIFwibmFpbF9jYXJlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ODVcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDg1LTFmM2ZiXCIsXG4gICAgICBcIjFmNDg1LTFmM2ZjXCIsXG4gICAgICBcIjFmNDg1LTFmM2ZkXCIsXG4gICAgICBcIjFmNDg1LTFmM2ZlXCIsXG4gICAgICBcIjFmNDg1LTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVhclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDQyXCIsXG4gICAgdjogW1xuICAgICAgXCIxZjQ0Mi0xZjNmYlwiLFxuICAgICAgXCIxZjQ0Mi0xZjNmY1wiLFxuICAgICAgXCIxZjQ0Mi0xZjNmZFwiLFxuICAgICAgXCIxZjQ0Mi0xZjNmZVwiLFxuICAgICAgXCIxZjQ0Mi0xZjNmZlwiXG4gICAgXVxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJub3NlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NDNcIixcbiAgICB2OiBbXG4gICAgICBcIjFmNDQzLTFmM2ZiXCIsXG4gICAgICBcIjFmNDQzLTFmM2ZjXCIsXG4gICAgICBcIjFmNDQzLTFmM2ZkXCIsXG4gICAgICBcIjFmNDQzLTFmM2ZlXCIsXG4gICAgICBcIjFmNDQzLTFmM2ZmXCJcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZvb3RwcmludHNcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImV5ZXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ0MFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImV5ZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDQxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJleWUtaW4tc3BlZWNoLWJ1YmJsZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDQxLWZlMGYtMjAwZC0xZjVlOC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnJhaW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjllMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRvbmd1ZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDQ1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibW91dGhcIixcbiAgICAgIFwibGlwc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDQ0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2lzcyBtYXJrXCIsXG4gICAgICBcImtpc3NcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ4YlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlYXJ0IHdpdGggYXJyb3dcIixcbiAgICAgIFwiY3VwaWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ5OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlYXZ5IGJsYWNrIGhlYXJ0XCIsXG4gICAgICBcImhlYXJ0XCJcbiAgICBdLFxuICAgIHU6IFwiMjc2NC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmVhdGluZyBoZWFydFwiLFxuICAgICAgXCJoZWFydGJlYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ5M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJyb2tlbiBoZWFydFwiLFxuICAgICAgXCJicm9rZW5faGVhcnRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ5NFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInR3byBoZWFydHNcIixcbiAgICAgIFwidHdvX2hlYXJ0c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDk1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3BhcmtsaW5nIGhlYXJ0XCIsXG4gICAgICBcInNwYXJrbGluZ19oZWFydFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDk2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3Jvd2luZyBoZWFydFwiLFxuICAgICAgXCJoZWFydHB1bHNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0OTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibHVlIGhlYXJ0XCIsXG4gICAgICBcImJsdWVfaGVhcnRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ5OVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdyZWVuIGhlYXJ0XCIsXG4gICAgICBcImdyZWVuX2hlYXJ0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0OWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ5ZWxsb3cgaGVhcnRcIixcbiAgICAgIFwieWVsbG93X2hlYXJ0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0OWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvcmFuZ2UgaGVhcnRcIixcbiAgICAgIFwib3JhbmdlX2hlYXJ0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ZTFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwdXJwbGUgaGVhcnRcIixcbiAgICAgIFwicHVycGxlX2hlYXJ0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0OWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayBoZWFydFwiLFxuICAgICAgXCJibGFja19oZWFydFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWE0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGVhcnQgd2l0aCByaWJib25cIixcbiAgICAgIFwiZ2lmdF9oZWFydFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDlkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmV2b2x2aW5nIGhlYXJ0c1wiLFxuICAgICAgXCJyZXZvbHZpbmdfaGVhcnRzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0OWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoZWFydCBkZWNvcmF0aW9uXCIsXG4gICAgICBcImhlYXJ0X2RlY29yYXRpb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ5ZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlYXZ5X2hlYXJ0X2V4Y2xhbWF0aW9uX21hcmtfb3JuYW1lbnRcIlxuICAgIF0sXG4gICAgdTogXCIyNzYzLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsb3ZlIGxldHRlclwiLFxuICAgICAgXCJsb3ZlX2xldHRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDhjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2xlZXBpbmcgc3ltYm9sXCIsXG4gICAgICBcInp6elwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGE0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYW5nZXIgc3ltYm9sXCIsXG4gICAgICBcImFuZ2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YTJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJib21iXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb2xsaXNpb24gc3ltYm9sXCIsXG4gICAgICBcImJvb21cIixcbiAgICAgIFwiY29sbGlzaW9uXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcGxhc2hpbmcgc3dlYXQgc3ltYm9sXCIsXG4gICAgICBcInN3ZWF0X2Ryb3BzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkYXNoIHN5bWJvbFwiLFxuICAgICAgXCJkYXNoXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkaXp6eSBzeW1ib2xcIixcbiAgICAgIFwiZGl6enlcIlxuICAgIF0sXG4gICAgdTogXCIxZjRhYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNwZWVjaCBiYWxsb29uXCIsXG4gICAgICBcInNwZWVjaF9iYWxsb29uXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsZWZ0X3NwZWVjaF9idWJibGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjVlOC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmlnaHRfYW5nZXJfYnViYmxlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1ZWYtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRob3VnaHQgYmFsbG9vblwiLFxuICAgICAgXCJ0aG91Z2h0X2JhbGxvb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjRhZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvbGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjU3My1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZXllZ2xhc3Nlc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDUzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZGFya19zdW5nbGFzc2VzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NzYtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5lY2t0aWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ1NFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInQtc2hpcnRcIixcbiAgICAgIFwic2hpcnRcIixcbiAgICAgIFwidHNoaXJ0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJqZWFuc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDU2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2NhcmZcIlxuICAgIF0sXG4gICAgdTogXCIxZjllM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdsb3Zlc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOWU0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY29hdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWU1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic29ja3NcIlxuICAgIF0sXG4gICAgdTogXCIxZjllNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRyZXNzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJraW1vbm9cIlxuICAgIF0sXG4gICAgdTogXCIxZjQ1OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJpa2luaVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDU5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW5zIGNsb3RoZXNcIixcbiAgICAgIFwid29tYW5zX2Nsb3RoZXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ1YVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInB1cnNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoYW5kYmFnXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwb3VjaFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDVkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2hvcHBpbmdfYmFnc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmNkLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzY2hvb2wgc2F0Y2hlbFwiLFxuICAgICAgXCJzY2hvb2xfc2F0Y2hlbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzkyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFucyBzaG9lXCIsXG4gICAgICBcIm1hbnNfc2hvZVwiLFxuICAgICAgXCJzaG9lXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhdGhsZXRpYyBzaG9lXCIsXG4gICAgICBcImF0aGxldGljX3Nob2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ1ZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhpZ2gtaGVlbGVkIHNob2VcIixcbiAgICAgIFwiaGlnaF9oZWVsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NjBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbnMgc2FuZGFsXCIsXG4gICAgICBcInNhbmRhbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDYxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tYW5zIGJvb3RzXCIsXG4gICAgICBcImJvb3RcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ2MlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNyb3duXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0NTFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3b21hbnMgaGF0XCIsXG4gICAgICBcIndvbWFuc19oYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ1MlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRvcCBoYXRcIixcbiAgICAgIFwidG9waGF0XCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYTlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJncmFkdWF0aW9uIGNhcFwiLFxuICAgICAgXCJtb3J0YXJfYm9hcmRcIlxuICAgIF0sXG4gICAgdTogXCIxZjM5M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJpbGxlZCBjYXBcIixcbiAgICAgIFwiYmlsbGVkX2NhcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOWUyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGVsbWV0X3dpdGhfd2hpdGVfY3Jvc3NcIlxuICAgIF0sXG4gICAgdTogXCIyNmQxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwcmF5ZXIgYmVhZHNcIixcbiAgICAgIFwicHJheWVyX2JlYWRzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsaXBzdGlja1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDg0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDhkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ2VtIHN0b25lXCIsXG4gICAgICBcImdlbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDhlXCJcbiAgfVxuXTtcbmNvbnN0IGFuaW1hbHNfbmF0dXJlJDEgPSBbXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vbmtleSBmYWNlXCIsXG4gICAgICBcIm1vbmtleV9mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MzVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb25rZXlcIlxuICAgIF0sXG4gICAgdTogXCIxZjQxMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdvcmlsbGFcIlxuICAgIF0sXG4gICAgdTogXCIxZjk4ZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRvZyBmYWNlXCIsXG4gICAgICBcImRvZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDM2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZG9nXCIsXG4gICAgICBcImRvZzJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQxNVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBvb2RsZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDI5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29sZiBmYWNlXCIsXG4gICAgICBcIndvbGZcIlxuICAgIF0sXG4gICAgdTogXCIxZjQzYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZveCBmYWNlXCIsXG4gICAgICBcImZveF9mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5OGFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjYXQgZmFjZVwiLFxuICAgICAgXCJjYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQzMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNhdFwiLFxuICAgICAgXCJjYXQyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MDhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsaW9uIGZhY2VcIixcbiAgICAgIFwibGlvbl9mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ODFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0aWdlciBmYWNlXCIsXG4gICAgICBcInRpZ2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0aWdlclwiLFxuICAgICAgXCJ0aWdlcjJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQwNVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxlb3BhcmRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQwNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvcnNlIGZhY2VcIixcbiAgICAgIFwiaG9yc2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjQzNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvcnNlXCIsXG4gICAgICBcInJhY2Vob3JzZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDBlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidW5pY29ybiBmYWNlXCIsXG4gICAgICBcInVuaWNvcm5fZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTg0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiemVicmEgZmFjZVwiLFxuICAgICAgXCJ6ZWJyYV9mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5OTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkZWVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5OGNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb3cgZmFjZVwiLFxuICAgICAgXCJjb3dcIlxuICAgIF0sXG4gICAgdTogXCIxZjQyZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm94XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MDJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3YXRlciBidWZmYWxvXCIsXG4gICAgICBcIndhdGVyX2J1ZmZhbG9cIlxuICAgIF0sXG4gICAgdTogXCIxZjQwM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNvd1wiLFxuICAgICAgXCJjb3cyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MDRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwaWcgZmFjZVwiLFxuICAgICAgXCJwaWdcIlxuICAgIF0sXG4gICAgdTogXCIxZjQzN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBpZ1wiLFxuICAgICAgXCJwaWcyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJib2FyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwaWcgbm9zZVwiLFxuICAgICAgXCJwaWdfbm9zZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDNkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmFtXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaGVlcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDExXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ29hdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDEwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZHJvbWVkYXJ5IGNhbWVsXCIsXG4gICAgICBcImRyb21lZGFyeV9jYW1lbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDJhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFjdHJpYW4gY2FtZWxcIixcbiAgICAgIFwiY2FtZWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjQyYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdpcmFmZmUgZmFjZVwiLFxuICAgICAgXCJnaXJhZmZlX2ZhY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjk5MlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVsZXBoYW50XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyaGlub2Nlcm9zXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5OGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb3VzZSBmYWNlXCIsXG4gICAgICBcIm1vdXNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MmRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb3VzZVwiLFxuICAgICAgXCJtb3VzZTJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQwMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJhdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDAwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGFtc3RlciBmYWNlXCIsXG4gICAgICBcImhhbXN0ZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQzOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJhYmJpdCBmYWNlXCIsXG4gICAgICBcInJhYmJpdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDMwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmFiYml0XCIsXG4gICAgICBcInJhYmJpdDJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQwN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNoaXBtdW5rXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0M2YtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlZGdlaG9nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5OTRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjk4N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJlYXIgZmFjZVwiLFxuICAgICAgXCJiZWFyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0M2JcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJrb2FsYVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDI4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGFuZGEgZmFjZVwiLFxuICAgICAgXCJwYW5kYV9mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0M2NcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwYXcgcHJpbnRzXCIsXG4gICAgICBcImZlZXRcIixcbiAgICAgIFwicGF3X3ByaW50c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDNlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHVya2V5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ODNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGlja2VuXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MTRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyb29zdGVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoYXRjaGluZyBjaGlja1wiLFxuICAgICAgXCJoYXRjaGluZ19jaGlja1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDIzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFieSBjaGlja1wiLFxuICAgICAgXCJiYWJ5X2NoaWNrXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MjRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmcm9udC1mYWNpbmcgYmFieSBjaGlja1wiLFxuICAgICAgXCJoYXRjaGVkX2NoaWNrXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiaXJkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MjZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwZW5ndWluXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkb3ZlX29mX3BlYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NGEtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVhZ2xlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ODVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkdWNrXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ODZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvd2xcIlxuICAgIF0sXG4gICAgdTogXCIxZjk4OVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZyb2cgZmFjZVwiLFxuICAgICAgXCJmcm9nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MzhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjcm9jb2RpbGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjQwYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInR1cnRsZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDIyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGl6YXJkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5OGVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzbmFrZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDBkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZHJhZ29uIGZhY2VcIixcbiAgICAgIFwiZHJhZ29uX2ZhY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjQzMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRyYWdvblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDA5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2F1cm9wb2RcIlxuICAgIF0sXG4gICAgdTogXCIxZjk5NVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInQtcmV4XCJcbiAgICBdLFxuICAgIHU6IFwiMWY5OTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcG91dGluZyB3aGFsZVwiLFxuICAgICAgXCJ3aGFsZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDMzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2hhbGVcIixcbiAgICAgIFwid2hhbGUyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MGJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkb2xwaGluXCIsXG4gICAgICBcImZsaXBwZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjQyY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZpc2hcIlxuICAgIF0sXG4gICAgdTogXCIxZjQxZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRyb3BpY2FsIGZpc2hcIixcbiAgICAgIFwidHJvcGljYWxfZmlzaFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDIwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxvd2Zpc2hcIlxuICAgIF0sXG4gICAgdTogXCIxZjQyMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNoYXJrXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5ODhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvY3RvcHVzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MTlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcGlyYWwgc2hlbGxcIixcbiAgICAgIFwic2hlbGxcIlxuICAgIF0sXG4gICAgdTogXCIxZjQxYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNyYWJcIlxuICAgIF0sXG4gICAgdTogXCIxZjk4MFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNocmltcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTkwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3F1aWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjk5MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNuYWlsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MGNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJidXR0ZXJmbHlcIlxuICAgIF0sXG4gICAgdTogXCIxZjk4YlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJ1Z1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNDFiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYW50XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0MWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJob25leWJlZVwiLFxuICAgICAgXCJiZWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjQxZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxhZHkgYmVldGxlXCIsXG4gICAgICBcImJlZXRsZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDFlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY3JpY2tldFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTk3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3BpZGVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NzctZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNwaWRlcl93ZWJcIlxuICAgIF0sXG4gICAgdTogXCIxZjU3OC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2NvcnBpb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjk4MlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJvdXF1ZXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ5MFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNoZXJyeSBibG9zc29tXCIsXG4gICAgICBcImNoZXJyeV9ibG9zc29tXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMzhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3aGl0ZSBmbG93ZXJcIixcbiAgICAgIFwid2hpdGVfZmxvd2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyb3NldHRlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZjUtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJvc2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjMzOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndpbHRlZCBmbG93ZXJcIixcbiAgICAgIFwid2lsdGVkX2Zsb3dlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTQwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGliaXNjdXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjMzYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInN1bmZsb3dlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzNiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxvc3NvbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzNjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHVsaXBcIlxuICAgIF0sXG4gICAgdTogXCIxZjMzN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNlZWRsaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMzFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJldmVyZ3JlZW4gdHJlZVwiLFxuICAgICAgXCJldmVyZ3JlZW5fdHJlZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzMyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZGVjaWR1b3VzIHRyZWVcIixcbiAgICAgIFwiZGVjaWR1b3VzX3RyZWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjMzM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBhbG0gdHJlZVwiLFxuICAgICAgXCJwYWxtX3RyZWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjMzNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNhY3R1c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzM1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZWFyIG9mIHJpY2VcIixcbiAgICAgIFwiZWFyX29mX3JpY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjMzZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlcmJcIlxuICAgIF0sXG4gICAgdTogXCIxZjMzZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNoYW1yb2NrXCJcbiAgICBdLFxuICAgIHU6IFwiMjYxOC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZm91ciBsZWFmIGNsb3ZlclwiLFxuICAgICAgXCJmb3VyX2xlYWZfY2xvdmVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNDBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYXBsZSBsZWFmXCIsXG4gICAgICBcIm1hcGxlX2xlYWZcIlxuICAgIF0sXG4gICAgdTogXCIxZjM0MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZhbGxlbiBsZWFmXCIsXG4gICAgICBcImZhbGxlbl9sZWFmXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNDJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsZWFmIGZsdXR0ZXJpbmcgaW4gd2luZFwiLFxuICAgICAgXCJsZWF2ZXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjM0M1wiXG4gIH1cbl07XG5jb25zdCBmb29kX2RyaW5rJDEgPSBbXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdyYXBlc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzQ3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWVsb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjM0OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndhdGVybWVsb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjM0OVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRhbmdlcmluZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzRhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGVtb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjM0YlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJhbmFuYVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzRjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGluZWFwcGxlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNGRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyZWQgYXBwbGVcIixcbiAgICAgIFwiYXBwbGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjM0ZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdyZWVuIGFwcGxlXCIsXG4gICAgICBcImdyZWVuX2FwcGxlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwZWFyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNTBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwZWFjaFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzUxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2hlcnJpZXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjM1MlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInN0cmF3YmVycnlcIlxuICAgIF0sXG4gICAgdTogXCIxZjM1M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtpd2lmcnVpdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTVkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidG9tYXRvXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNDVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb2NvbnV0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhdm9jYWRvXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NTFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhdWJlcmdpbmVcIixcbiAgICAgIFwiZWdncGxhbnRcIlxuICAgIF0sXG4gICAgdTogXCIxZjM0NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBvdGF0b1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTU0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2Fycm90XCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJlYXIgb2YgbWFpemVcIixcbiAgICAgIFwiY29yblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzNkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaG90X3BlcHBlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzM2LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjdWN1bWJlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTUyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnJvY2NvbGlcIlxuICAgIF0sXG4gICAgdTogXCIxZjk2NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm11c2hyb29tXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNDRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwZWFudXRzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGVzdG51dFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzMwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnJlYWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjM1ZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNyb2lzc2FudFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTUwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFndWV0dGUgYnJlYWRcIixcbiAgICAgIFwiYmFndWV0dGVfYnJlYWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjk1NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInByZXR6ZWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjk2OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBhbmNha2VzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGVlc2Ugd2VkZ2VcIixcbiAgICAgIFwiY2hlZXNlX3dlZGdlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5YzBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtZWF0IG9uIGJvbmVcIixcbiAgICAgIFwibWVhdF9vbl9ib25lXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwb3VsdHJ5IGxlZ1wiLFxuICAgICAgXCJwb3VsdHJ5X2xlZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzU3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY3V0IG9mIG1lYXRcIixcbiAgICAgIFwiY3V0X29mX21lYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjk2OVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJhY29uXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoYW1idXJnZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjM1NFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZyZW5jaCBmcmllc1wiLFxuICAgICAgXCJmcmllc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzVmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2xpY2Ugb2YgcGl6emFcIixcbiAgICAgIFwicGl6emFcIlxuICAgIF0sXG4gICAgdTogXCIxZjM1NVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvdCBkb2dcIixcbiAgICAgIFwiaG90ZG9nXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMmRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzYW5kd2ljaFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTZhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidGFjb1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzJlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnVycml0b1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzJmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3R1ZmZlZCBmbGF0YnJlYWRcIixcbiAgICAgIFwic3R1ZmZlZF9mbGF0YnJlYWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjk1OVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVnZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTVhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY29va2luZ1wiLFxuICAgICAgXCJmcmllZF9lZ2dcIlxuICAgIF0sXG4gICAgdTogXCIxZjM3M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNoYWxsb3cgcGFuIG9mIGZvb2RcIixcbiAgICAgIFwic2hhbGxvd19wYW5fb2ZfZm9vZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTU4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicG90IG9mIGZvb2RcIixcbiAgICAgIFwic3Rld1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzcyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYm93bCB3aXRoIHNwb29uXCIsXG4gICAgICBcImJvd2xfd2l0aF9zcG9vblwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTYzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3JlZW4gc2FsYWRcIixcbiAgICAgIFwiZ3JlZW5fc2FsYWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjk1N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBvcGNvcm5cIlxuICAgIF0sXG4gICAgdTogXCIxZjM3ZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNhbm5lZCBmb29kXCIsXG4gICAgICBcImNhbm5lZF9mb29kXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NmJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiZW50byBib3hcIixcbiAgICAgIFwiYmVudG9cIlxuICAgIF0sXG4gICAgdTogXCIxZjM3MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJpY2UgY3JhY2tlclwiLFxuICAgICAgXCJyaWNlX2NyYWNrZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjM1OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJpY2UgYmFsbFwiLFxuICAgICAgXCJyaWNlX2JhbGxcIlxuICAgIF0sXG4gICAgdTogXCIxZjM1OVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNvb2tlZCByaWNlXCIsXG4gICAgICBcInJpY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjM1YVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImN1cnJ5IGFuZCByaWNlXCIsXG4gICAgICBcImN1cnJ5XCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdGVhbWluZyBib3dsXCIsXG4gICAgICBcInJhbWVuXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcGFnaGV0dGlcIlxuICAgIF0sXG4gICAgdTogXCIxZjM1ZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJvYXN0ZWQgc3dlZXQgcG90YXRvXCIsXG4gICAgICBcInN3ZWV0X3BvdGF0b1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzYwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib2RlblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzYyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3VzaGlcIlxuICAgIF0sXG4gICAgdTogXCIxZjM2M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZyaWVkIHNocmltcFwiLFxuICAgICAgXCJmcmllZF9zaHJpbXBcIlxuICAgIF0sXG4gICAgdTogXCIxZjM2NFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZpc2ggY2FrZSB3aXRoIHN3aXJsIGRlc2lnblwiLFxuICAgICAgXCJmaXNoX2Nha2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjM2NVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRhbmdvXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNjFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkdW1wbGluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTVmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZm9ydHVuZSBjb29raWVcIixcbiAgICAgIFwiZm9ydHVuZV9jb29raWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjk2MFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRha2VvdXQgYm94XCIsXG4gICAgICBcInRha2VvdXRfYm94XCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NjFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzb2Z0IGljZSBjcmVhbVwiLFxuICAgICAgXCJpY2VjcmVhbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2hhdmVkIGljZVwiLFxuICAgICAgXCJzaGF2ZWRfaWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJpY2UgY3JlYW1cIixcbiAgICAgIFwiaWNlX2NyZWFtXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNjhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkb3VnaG51dFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzY5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY29va2llXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNmFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiaXJ0aGRheSBjYWtlXCIsXG4gICAgICBcImJpcnRoZGF5XCJcbiAgICBdLFxuICAgIHU6IFwiMWYzODJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaG9ydGNha2VcIixcbiAgICAgIFwiY2FrZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzcwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGllXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaG9jb2xhdGUgYmFyXCIsXG4gICAgICBcImNob2NvbGF0ZV9iYXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjM2YlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNhbmR5XCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNmNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsb2xsaXBvcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzZkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY3VzdGFyZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzZlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaG9uZXkgcG90XCIsXG4gICAgICBcImhvbmV5X3BvdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzZmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFieSBib3R0bGVcIixcbiAgICAgIFwiYmFieV9ib3R0bGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjM3Y1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdsYXNzIG9mIG1pbGtcIixcbiAgICAgIFwiZ2xhc3Nfb2ZfbWlsa1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTViXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaG90IGJldmVyYWdlXCIsXG4gICAgICBcImNvZmZlZVwiXG4gICAgXSxcbiAgICB1OiBcIjI2MTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0ZWFjdXAgd2l0aG91dCBoYW5kbGVcIixcbiAgICAgIFwidGVhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNzVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzYWtlIGJvdHRsZSBhbmQgY3VwXCIsXG4gICAgICBcInNha2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjM3NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJvdHRsZSB3aXRoIHBvcHBpbmcgY29ya1wiLFxuICAgICAgXCJjaGFtcGFnbmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjM3ZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndpbmUgZ2xhc3NcIixcbiAgICAgIFwid2luZV9nbGFzc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzc3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY29ja3RhaWwgZ2xhc3NcIixcbiAgICAgIFwiY29ja3RhaWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjM3OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRyb3BpY2FsIGRyaW5rXCIsXG4gICAgICBcInRyb3BpY2FsX2RyaW5rXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzNzlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiZWVyIG11Z1wiLFxuICAgICAgXCJiZWVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzN2FcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbGlua2luZyBiZWVyIG11Z3NcIixcbiAgICAgIFwiYmVlcnNcIlxuICAgIF0sXG4gICAgdTogXCIxZjM3YlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsaW5raW5nIGdsYXNzZXNcIixcbiAgICAgIFwiY2xpbmtpbmdfZ2xhc3Nlc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTQyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHVtYmxlciBnbGFzc1wiLFxuICAgICAgXCJ0dW1ibGVyX2dsYXNzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NDNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjdXAgd2l0aCBzdHJhd1wiLFxuICAgICAgXCJjdXBfd2l0aF9zdHJhd1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTY0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2hvcHN0aWNrc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmOTYyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia25pZmVfZm9ya19wbGF0ZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzdkLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmb3JrIGFuZCBrbmlmZVwiLFxuICAgICAgXCJmb3JrX2FuZF9rbmlmZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzc0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3Bvb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjk0NFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvY2hvXCIsXG4gICAgICBcImtuaWZlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MmFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhbXBob3JhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZmFcIlxuICB9XG5dO1xuY29uc3QgYWN0aXZpdGllcyQxID0gW1xuICB7XG4gICAgbjogW1xuICAgICAgXCJqYWNrLW8tbGFudGVyblwiLFxuICAgICAgXCJqYWNrX29fbGFudGVyblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzgzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2hyaXN0bWFzIHRyZWVcIixcbiAgICAgIFwiY2hyaXN0bWFzX3RyZWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjM4NFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZpcmV3b3Jrc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzg2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmlyZXdvcmsgc3BhcmtsZXJcIixcbiAgICAgIFwic3BhcmtsZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjM4N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNwYXJrbGVzXCJcbiAgICBdLFxuICAgIHU6IFwiMjcyOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJhbGxvb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjM4OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBhcnR5IHBvcHBlclwiLFxuICAgICAgXCJ0YWRhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzODlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb25mZXR0aSBiYWxsXCIsXG4gICAgICBcImNvbmZldHRpX2JhbGxcIlxuICAgIF0sXG4gICAgdTogXCIxZjM4YVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRhbmFiYXRhIHRyZWVcIixcbiAgICAgIFwidGFuYWJhdGFfdHJlZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzhiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGluZSBkZWNvcmF0aW9uXCIsXG4gICAgICBcImJhbWJvb1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzhkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiamFwYW5lc2UgZG9sbHNcIixcbiAgICAgIFwiZG9sbHNcIlxuICAgIF0sXG4gICAgdTogXCIxZjM4ZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNhcnAgc3RyZWFtZXJcIixcbiAgICAgIFwiZmxhZ3NcIlxuICAgIF0sXG4gICAgdTogXCIxZjM4ZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndpbmQgY2hpbWVcIixcbiAgICAgIFwid2luZF9jaGltZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzkwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibW9vbiB2aWV3aW5nIGNlcmVtb255XCIsXG4gICAgICBcInJpY2Vfc2NlbmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjM5MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJpYmJvblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzgwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid3JhcHBlZCBwcmVzZW50XCIsXG4gICAgICBcImdpZnRcIlxuICAgIF0sXG4gICAgdTogXCIxZjM4MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJlbWluZGVyX3JpYmJvblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzk3LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhZG1pc3Npb25fdGlja2V0c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzlmLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0aWNrZXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjNhYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1lZGFsXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzOTYtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRyb3BoeVwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2M2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3BvcnRzIG1lZGFsXCIsXG4gICAgICBcInNwb3J0c19tZWRhbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2M1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmlyc3QgcGxhY2UgbWVkYWxcIixcbiAgICAgIFwiZmlyc3RfcGxhY2VfbWVkYWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjk0N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNlY29uZCBwbGFjZSBtZWRhbFwiLFxuICAgICAgXCJzZWNvbmRfcGxhY2VfbWVkYWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjk0OFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRoaXJkIHBsYWNlIG1lZGFsXCIsXG4gICAgICBcInRoaXJkX3BsYWNlX21lZGFsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NDlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzb2NjZXIgYmFsbFwiLFxuICAgICAgXCJzb2NjZXJcIlxuICAgIF0sXG4gICAgdTogXCIyNmJkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFzZWJhbGxcIlxuICAgIF0sXG4gICAgdTogXCIyNmJlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFza2V0YmFsbCBhbmQgaG9vcFwiLFxuICAgICAgXCJiYXNrZXRiYWxsXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYzBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ2b2xsZXliYWxsXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZDBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhbWVyaWNhbiBmb290YmFsbFwiLFxuICAgICAgXCJmb290YmFsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2M4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicnVnYnkgZm9vdGJhbGxcIixcbiAgICAgIFwicnVnYnlfZm9vdGJhbGxcIlxuICAgIF0sXG4gICAgdTogXCIxZjNjOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRlbm5pcyByYWNxdWV0IGFuZCBiYWxsXCIsXG4gICAgICBcInRlbm5pc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2JlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmlsbGlhcmRzXCIsXG4gICAgICBcIjhiYWxsXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYjFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJib3dsaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjcmlja2V0IGJhdCBhbmQgYmFsbFwiLFxuICAgICAgXCJjcmlja2V0X2JhdF9hbmRfYmFsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2NmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmllbGQgaG9ja2V5IHN0aWNrIGFuZCBiYWxsXCIsXG4gICAgICBcImZpZWxkX2hvY2tleV9zdGlja19hbmRfYmFsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2QxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaWNlIGhvY2tleSBzdGljayBhbmQgcHVja1wiLFxuICAgICAgXCJpY2VfaG9ja2V5X3N0aWNrX2FuZF9wdWNrXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZDJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0YWJsZSB0ZW5uaXMgcGFkZGxlIGFuZCBiYWxsXCIsXG4gICAgICBcInRhYmxlX3Rlbm5pc19wYWRkbGVfYW5kX2JhbGxcIlxuICAgIF0sXG4gICAgdTogXCIxZjNkM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJhZG1pbnRvbiByYWNxdWV0IGFuZCBzaHV0dGxlY29ja1wiLFxuICAgICAgXCJiYWRtaW50b25fcmFjcXVldF9hbmRfc2h1dHRsZWNvY2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjNmOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJveGluZyBnbG92ZVwiLFxuICAgICAgXCJib3hpbmdfZ2xvdmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjk0YVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hcnRpYWwgYXJ0cyB1bmlmb3JtXCIsXG4gICAgICBcIm1hcnRpYWxfYXJ0c191bmlmb3JtXCJcbiAgICBdLFxuICAgIHU6IFwiMWY5NGJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJnb2FsIG5ldFwiLFxuICAgICAgXCJnb2FsX25ldFwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTQ1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZGlyZWN0IGhpdFwiLFxuICAgICAgXCJkYXJ0XCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYWZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmbGFnIGluIGhvbGVcIixcbiAgICAgIFwiZ29sZlwiXG4gICAgXSxcbiAgICB1OiBcIjI2ZjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJpY2Vfc2thdGVcIlxuICAgIF0sXG4gICAgdTogXCIyNmY4LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmaXNoaW5nIHBvbGUgYW5kIGZpc2hcIixcbiAgICAgIFwiZmlzaGluZ19wb2xlX2FuZF9maXNoXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJydW5uaW5nIHNoaXJ0IHdpdGggc2FzaFwiLFxuICAgICAgXCJydW5uaW5nX3NoaXJ0X3dpdGhfc2FzaFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2JkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2tpIGFuZCBza2kgYm9vdFwiLFxuICAgICAgXCJza2lcIlxuICAgIF0sXG4gICAgdTogXCIxZjNiZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNsZWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjZmN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImN1cmxpbmcgc3RvbmVcIixcbiAgICAgIFwiY3VybGluZ19zdG9uZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmOTRjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidmlkZW8gZ2FtZVwiLFxuICAgICAgXCJ2aWRlb19nYW1lXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJqb3lzdGlja1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNTc5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJnYW1lIGRpZVwiLFxuICAgICAgXCJnYW1lX2RpZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2IyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxhY2sgc3BhZGUgc3VpdFwiLFxuICAgICAgXCJzcGFkZXNcIlxuICAgIF0sXG4gICAgdTogXCIyNjYwLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayBoZWFydCBzdWl0XCIsXG4gICAgICBcImhlYXJ0c1wiXG4gICAgXSxcbiAgICB1OiBcIjI2NjUtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJsYWNrIGRpYW1vbmQgc3VpdFwiLFxuICAgICAgXCJkaWFtb25kc1wiXG4gICAgXSxcbiAgICB1OiBcIjI2NjYtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJsYWNrIGNsdWIgc3VpdFwiLFxuICAgICAgXCJjbHVic1wiXG4gICAgXSxcbiAgICB1OiBcIjI2NjMtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBsYXlpbmcgY2FyZCBibGFjayBqb2tlclwiLFxuICAgICAgXCJibGFja19qb2tlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmMGNmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFoam9uZyB0aWxlIHJlZCBkcmFnb25cIixcbiAgICAgIFwibWFoam9uZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMDA0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmxvd2VyIHBsYXlpbmcgY2FyZHNcIixcbiAgICAgIFwiZmxvd2VyX3BsYXlpbmdfY2FyZHNcIlxuICAgIF0sXG4gICAgdTogXCIxZjNiNFwiXG4gIH1cbl07XG5jb25zdCB0cmF2ZWxfcGxhY2VzJDEgPSBbXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVhcnRoIGdsb2JlIGV1cm9wZS1hZnJpY2FcIixcbiAgICAgIFwiZWFydGhfYWZyaWNhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMGRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJlYXJ0aCBnbG9iZSBhbWVyaWNhc1wiLFxuICAgICAgXCJlYXJ0aF9hbWVyaWNhc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzBlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZWFydGggZ2xvYmUgYXNpYS1hdXN0cmFsaWFcIixcbiAgICAgIFwiZWFydGhfYXNpYVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ2xvYmUgd2l0aCBtZXJpZGlhbnNcIixcbiAgICAgIFwiZ2xvYmVfd2l0aF9tZXJpZGlhbnNcIlxuICAgIF0sXG4gICAgdTogXCIxZjMxMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndvcmxkX21hcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWZhLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaWxob3VldHRlIG9mIGphcGFuXCIsXG4gICAgICBcImphcGFuXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1ZmVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzbm93X2NhcHBlZF9tb3VudGFpblwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2Q0LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb3VudGFpblwiXG4gICAgXSxcbiAgICB1OiBcIjI2ZjAtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInZvbGNhbm9cIlxuICAgIF0sXG4gICAgdTogXCIxZjMwYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vdW50IGZ1amlcIixcbiAgICAgIFwibW91bnRfZnVqaVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWZiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2FtcGluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2Q1LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiZWFjaF93aXRoX3VtYnJlbGxhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZDYtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRlc2VydFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2RjLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkZXNlcnRfaXNsYW5kXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZGQtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5hdGlvbmFsX3BhcmtcIlxuICAgIF0sXG4gICAgdTogXCIxZjNkZS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3RhZGl1bVwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2RmLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbGFzc2ljYWxfYnVpbGRpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjNkYi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnVpbGRpbmdfY29uc3RydWN0aW9uXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZDctZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvdXNlX2J1aWxkaW5nc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2Q4LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaXR5c2NhcGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjNkOS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZGVyZWxpY3RfaG91c2VfYnVpbGRpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjNkYS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaG91c2UgYnVpbGRpbmdcIixcbiAgICAgIFwiaG91c2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjNlMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvdXNlIHdpdGggZ2FyZGVuXCIsXG4gICAgICBcImhvdXNlX3dpdGhfZ2FyZGVuXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZTFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvZmZpY2UgYnVpbGRpbmdcIixcbiAgICAgIFwib2ZmaWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZTJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJqYXBhbmVzZSBwb3N0IG9mZmljZVwiLFxuICAgICAgXCJwb3N0X29mZmljZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2UzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZXVyb3BlYW4gcG9zdCBvZmZpY2VcIixcbiAgICAgIFwiZXVyb3BlYW5fcG9zdF9vZmZpY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjNlNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvc3BpdGFsXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiYW5rXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJob3RlbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2U4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibG92ZSBob3RlbFwiLFxuICAgICAgXCJsb3ZlX2hvdGVsXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZTlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb252ZW5pZW5jZSBzdG9yZVwiLFxuICAgICAgXCJjb252ZW5pZW5jZV9zdG9yZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2VhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2Nob29sXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkZXBhcnRtZW50IHN0b3JlXCIsXG4gICAgICBcImRlcGFydG1lbnRfc3RvcmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjNlY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZhY3RvcnlcIlxuICAgIF0sXG4gICAgdTogXCIxZjNlZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImphcGFuZXNlIGNhc3RsZVwiLFxuICAgICAgXCJqYXBhbmVzZV9jYXN0bGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjNlZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImV1cm9wZWFuIGNhc3RsZVwiLFxuICAgICAgXCJldXJvcGVhbl9jYXN0bGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjNmMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndlZGRpbmdcIlxuICAgIF0sXG4gICAgdTogXCIxZjQ5MlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRva3lvIHRvd2VyXCIsXG4gICAgICBcInRva3lvX3Rvd2VyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1ZmNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdGF0dWUgb2YgbGliZXJ0eVwiLFxuICAgICAgXCJzdGF0dWVfb2ZfbGliZXJ0eVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWZkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2h1cmNoXCJcbiAgICBdLFxuICAgIHU6IFwiMjZlYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vc3F1ZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTRjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3luYWdvZ3VlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NGRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaGludG9fc2hyaW5lXCJcbiAgICBdLFxuICAgIHU6IFwiMjZlOS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2FhYmFcIlxuICAgIF0sXG4gICAgdTogXCIxZjU0YlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZvdW50YWluXCJcbiAgICBdLFxuICAgIHU6IFwiMjZmMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRlbnRcIlxuICAgIF0sXG4gICAgdTogXCIyNmZhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZm9nZ3lcIlxuICAgIF0sXG4gICAgdTogXCIxZjMwMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5pZ2h0IHdpdGggc3RhcnNcIixcbiAgICAgIFwibmlnaHRfd2l0aF9zdGFyc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzAzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3VucmlzZSBvdmVyIG1vdW50YWluc1wiLFxuICAgICAgXCJzdW5yaXNlX292ZXJfbW91bnRhaW5zXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMDRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdW5yaXNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMDVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaXR5c2NhcGUgYXQgZHVza1wiLFxuICAgICAgXCJjaXR5X3N1bnNldFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzA2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3Vuc2V0IG92ZXIgYnVpbGRpbmdzXCIsXG4gICAgICBcImNpdHlfc3VucmlzZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzA3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnJpZGdlIGF0IG5pZ2h0XCIsXG4gICAgICBcImJyaWRnZV9hdF9uaWdodFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzA5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaG90IHNwcmluZ3NcIixcbiAgICAgIFwiaG90c3ByaW5nc1wiXG4gICAgXSxcbiAgICB1OiBcIjI2NjgtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1pbGt5IHdheVwiLFxuICAgICAgXCJtaWxreV93YXlcIlxuICAgIF0sXG4gICAgdTogXCIxZjMwY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNhcm91c2VsIGhvcnNlXCIsXG4gICAgICBcImNhcm91c2VsX2hvcnNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYTBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZXJyaXMgd2hlZWxcIixcbiAgICAgIFwiZmVycmlzX3doZWVsXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYTFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyb2xsZXIgY29hc3RlclwiLFxuICAgICAgXCJyb2xsZXJfY29hc3RlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2EyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFyYmVyIHBvbGVcIixcbiAgICAgIFwiYmFyYmVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ODhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaXJjdXMgdGVudFwiLFxuICAgICAgXCJjaXJjdXNfdGVudFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2FhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGVyZm9ybWluZyBhcnRzXCIsXG4gICAgICBcInBlcmZvcm1pbmdfYXJ0c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2FkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZnJhbWVfd2l0aF9waWN0dXJlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1YmMtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImFydGlzdCBwYWxldHRlXCIsXG4gICAgICBcImFydFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2E4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2xvdCBtYWNoaW5lXCIsXG4gICAgICBcInNsb3RfbWFjaGluZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2IwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3RlYW0gbG9jb21vdGl2ZVwiLFxuICAgICAgXCJzdGVhbV9sb2NvbW90aXZlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2ODJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyYWlsd2F5IGNhclwiLFxuICAgICAgXCJyYWlsd2F5X2NhclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjgzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGlnaC1zcGVlZCB0cmFpblwiLFxuICAgICAgXCJidWxsZXR0cmFpbl9zaWRlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2ODRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoaWdoLXNwZWVkIHRyYWluIHdpdGggYnVsbGV0IG5vc2VcIixcbiAgICAgIFwiYnVsbGV0dHJhaW5fZnJvbnRcIlxuICAgIF0sXG4gICAgdTogXCIxZjY4NVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRyYWluXCIsXG4gICAgICBcInRyYWluMlwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjg2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWV0cm9cIlxuICAgIF0sXG4gICAgdTogXCIxZjY4N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxpZ2h0IHJhaWxcIixcbiAgICAgIFwibGlnaHRfcmFpbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjg4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3RhdGlvblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjg5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHJhbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjhhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibW9ub3JhaWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjY5ZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vdW50YWluIHJhaWx3YXlcIixcbiAgICAgIFwibW91bnRhaW5fcmFpbHdheVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjllXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHJhbSBjYXJcIixcbiAgICAgIFwidHJhaW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjY4YlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJ1c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjhjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib25jb21pbmcgYnVzXCIsXG4gICAgICBcIm9uY29taW5nX2J1c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjhkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHJvbGxleWJ1c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjhlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWluaWJ1c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNjkwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYW1idWxhbmNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2OTFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmaXJlIGVuZ2luZVwiLFxuICAgICAgXCJmaXJlX2VuZ2luZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjkyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicG9saWNlIGNhclwiLFxuICAgICAgXCJwb2xpY2VfY2FyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2OTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvbmNvbWluZyBwb2xpY2UgY2FyXCIsXG4gICAgICBcIm9uY29taW5nX3BvbGljZV9jYXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjY5NFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRheGlcIlxuICAgIF0sXG4gICAgdTogXCIxZjY5NVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm9uY29taW5nIHRheGlcIixcbiAgICAgIFwib25jb21pbmdfdGF4aVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjk2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYXV0b21vYmlsZVwiLFxuICAgICAgXCJjYXJcIixcbiAgICAgIFwicmVkX2NhclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjk3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib25jb21pbmcgYXV0b21vYmlsZVwiLFxuICAgICAgXCJvbmNvbWluZ19hdXRvbW9iaWxlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2OThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyZWNyZWF0aW9uYWwgdmVoaWNsZVwiLFxuICAgICAgXCJibHVlX2NhclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjk5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZGVsaXZlcnkgdHJ1Y2tcIixcbiAgICAgIFwidHJ1Y2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjY5YVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImFydGljdWxhdGVkIGxvcnJ5XCIsXG4gICAgICBcImFydGljdWxhdGVkX2xvcnJ5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2OWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0cmFjdG9yXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2OWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiaWN5Y2xlXCIsXG4gICAgICBcImJpa2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjZiMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNjb290ZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjZmNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vdG9yIHNjb290ZXJcIixcbiAgICAgIFwibW90b3Jfc2Nvb3RlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmY1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnVzIHN0b3BcIixcbiAgICAgIFwiYnVzc3RvcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjhmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibW90b3J3YXlcIlxuICAgIF0sXG4gICAgdTogXCIxZjZlMy1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmFpbHdheV90cmFja1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmU0LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmdWVsIHB1bXBcIixcbiAgICAgIFwiZnVlbHB1bXBcIlxuICAgIF0sXG4gICAgdTogXCIyNmZkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicG9saWNlIGNhcnMgcmV2b2x2aW5nIGxpZ2h0XCIsXG4gICAgICBcInJvdGF0aW5nX2xpZ2h0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJob3Jpem9udGFsIHRyYWZmaWMgbGlnaHRcIixcbiAgICAgIFwidHJhZmZpY19saWdodFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmE1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidmVydGljYWwgdHJhZmZpYyBsaWdodFwiLFxuICAgICAgXCJ2ZXJ0aWNhbF90cmFmZmljX2xpZ2h0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb25zdHJ1Y3Rpb24gc2lnblwiLFxuICAgICAgXCJjb25zdHJ1Y3Rpb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjZhN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm9jdGFnb25hbCBzaWduXCIsXG4gICAgICBcIm9jdGFnb25hbF9zaWduXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2ZDFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhbmNob3JcIlxuICAgIF0sXG4gICAgdTogXCIyNjkzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2FpbGJvYXRcIixcbiAgICAgIFwiYm9hdFwiXG4gICAgXSxcbiAgICB1OiBcIjI2ZjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjYW5vZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3BlZWRib2F0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YTRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwYXNzZW5nZXJfc2hpcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmYzLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmZXJyeVwiXG4gICAgXSxcbiAgICB1OiBcIjI2ZjQtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vdG9yX2JvYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjZlNS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2hpcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmEyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYWlycGxhbmVcIlxuICAgIF0sXG4gICAgdTogXCIyNzA4LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzbWFsbF9haXJwbGFuZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmU5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhaXJwbGFuZSBkZXBhcnR1cmVcIixcbiAgICAgIFwiYWlycGxhbmVfZGVwYXJ0dXJlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2ZWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhaXJwbGFuZSBhcnJpdmluZ1wiLFxuICAgICAgXCJhaXJwbGFuZV9hcnJpdmluZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmVjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2VhdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGJhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGVsaWNvcHRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjgxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3VzcGVuc2lvbiByYWlsd2F5XCIsXG4gICAgICBcInN1c3BlbnNpb25fcmFpbHdheVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNjlmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibW91bnRhaW4gY2FibGV3YXlcIixcbiAgICAgIFwibW91bnRhaW5fY2FibGV3YXlcIlxuICAgIF0sXG4gICAgdTogXCIxZjZhMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImFlcmlhbCB0cmFtd2F5XCIsXG4gICAgICBcImFlcmlhbF90cmFtd2F5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YTFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzYXRlbGxpdGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjZmMC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicm9ja2V0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2ODBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmbHlpbmcgc2F1Y2VyXCIsXG4gICAgICBcImZseWluZ19zYXVjZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjZmOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJlbGxob3BfYmVsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmNlLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkb29yXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiZWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjZjZi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY291Y2hfYW5kX2xhbXBcIlxuICAgIF0sXG4gICAgdTogXCIxZjZjYi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidG9pbGV0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YmRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaG93ZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjZiZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJhdGh0dWJcIlxuICAgIF0sXG4gICAgdTogXCIxZjZjMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvdXJnbGFzc1wiXG4gICAgXSxcbiAgICB1OiBcIjIzMWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJob3VyZ2xhc3Mgd2l0aCBmbG93aW5nIHNhbmRcIixcbiAgICAgIFwiaG91cmdsYXNzX2Zsb3dpbmdfc2FuZFwiXG4gICAgXSxcbiAgICB1OiBcIjIzZjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3YXRjaFwiXG4gICAgXSxcbiAgICB1OiBcIjIzMWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhbGFybSBjbG9ja1wiLFxuICAgICAgXCJhbGFybV9jbG9ja1wiXG4gICAgXSxcbiAgICB1OiBcIjIzZjBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdG9wd2F0Y2hcIlxuICAgIF0sXG4gICAgdTogXCIyM2YxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0aW1lcl9jbG9ja1wiXG4gICAgXSxcbiAgICB1OiBcIjIzZjItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbnRlbHBpZWNlX2Nsb2NrXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NzAtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2NrIGZhY2UgdHdlbHZlIG9jbG9ja1wiLFxuICAgICAgXCJjbG9jazEyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9jayBmYWNlIHR3ZWx2ZS10aGlydHlcIixcbiAgICAgIFwiY2xvY2sxMjMwXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9jayBmYWNlIG9uZSBvY2xvY2tcIixcbiAgICAgIFwiY2xvY2sxXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NTBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9jayBmYWNlIG9uZS10aGlydHlcIixcbiAgICAgIFwiY2xvY2sxMzBcIlxuICAgIF0sXG4gICAgdTogXCIxZjU1Y1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2NrIGZhY2UgdHdvIG9jbG9ja1wiLFxuICAgICAgXCJjbG9jazJcIlxuICAgIF0sXG4gICAgdTogXCIxZjU1MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2NrIGZhY2UgdHdvLXRoaXJ0eVwiLFxuICAgICAgXCJjbG9jazIzMFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTVkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xvY2sgZmFjZSB0aHJlZSBvY2xvY2tcIixcbiAgICAgIFwiY2xvY2szXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NTJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9jayBmYWNlIHRocmVlLXRoaXJ0eVwiLFxuICAgICAgXCJjbG9jazMzMFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTVlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xvY2sgZmFjZSBmb3VyIG9jbG9ja1wiLFxuICAgICAgXCJjbG9jazRcIlxuICAgIF0sXG4gICAgdTogXCIxZjU1M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2NrIGZhY2UgZm91ci10aGlydHlcIixcbiAgICAgIFwiY2xvY2s0MzBcIlxuICAgIF0sXG4gICAgdTogXCIxZjU1ZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2NrIGZhY2UgZml2ZSBvY2xvY2tcIixcbiAgICAgIFwiY2xvY2s1XCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NTRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9jayBmYWNlIGZpdmUtdGhpcnR5XCIsXG4gICAgICBcImNsb2NrNTMwXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NjBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9jayBmYWNlIHNpeCBvY2xvY2tcIixcbiAgICAgIFwiY2xvY2s2XCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9jayBmYWNlIHNpeC10aGlydHlcIixcbiAgICAgIFwiY2xvY2s2MzBcIlxuICAgIF0sXG4gICAgdTogXCIxZjU2MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2NrIGZhY2Ugc2V2ZW4gb2Nsb2NrXCIsXG4gICAgICBcImNsb2NrN1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNTU2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xvY2sgZmFjZSBzZXZlbi10aGlydHlcIixcbiAgICAgIFwiY2xvY2s3MzBcIlxuICAgIF0sXG4gICAgdTogXCIxZjU2MlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2NrIGZhY2UgZWlnaHQgb2Nsb2NrXCIsXG4gICAgICBcImNsb2NrOFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTU3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xvY2sgZmFjZSBlaWdodC10aGlydHlcIixcbiAgICAgIFwiY2xvY2s4MzBcIlxuICAgIF0sXG4gICAgdTogXCIxZjU2M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2NrIGZhY2UgbmluZSBvY2xvY2tcIixcbiAgICAgIFwiY2xvY2s5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9jayBmYWNlIG5pbmUtdGhpcnR5XCIsXG4gICAgICBcImNsb2NrOTMwXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NjRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9jayBmYWNlIHRlbiBvY2xvY2tcIixcbiAgICAgIFwiY2xvY2sxMFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTU5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xvY2sgZmFjZSB0ZW4tdGhpcnR5XCIsXG4gICAgICBcImNsb2NrMTAzMFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTY1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xvY2sgZmFjZSBlbGV2ZW4gb2Nsb2NrXCIsXG4gICAgICBcImNsb2NrMTFcIlxuICAgIF0sXG4gICAgdTogXCIxZjU1YVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2NrIGZhY2UgZWxldmVuLXRoaXJ0eVwiLFxuICAgICAgXCJjbG9jazExMzBcIlxuICAgIF0sXG4gICAgdTogXCIxZjU2NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5ldyBtb29uIHN5bWJvbFwiLFxuICAgICAgXCJuZXdfbW9vblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzExXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2F4aW5nIGNyZXNjZW50IG1vb24gc3ltYm9sXCIsXG4gICAgICBcIndheGluZ19jcmVzY2VudF9tb29uXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMTJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmaXJzdCBxdWFydGVyIG1vb24gc3ltYm9sXCIsXG4gICAgICBcImZpcnN0X3F1YXJ0ZXJfbW9vblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzEzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2F4aW5nIGdpYmJvdXMgbW9vbiBzeW1ib2xcIixcbiAgICAgIFwibW9vblwiLFxuICAgICAgXCJ3YXhpbmdfZ2liYm91c19tb29uXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMTRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmdWxsIG1vb24gc3ltYm9sXCIsXG4gICAgICBcImZ1bGxfbW9vblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzE1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2FuaW5nIGdpYmJvdXMgbW9vbiBzeW1ib2xcIixcbiAgICAgIFwid2FuaW5nX2dpYmJvdXNfbW9vblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzE2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGFzdCBxdWFydGVyIG1vb24gc3ltYm9sXCIsXG4gICAgICBcImxhc3RfcXVhcnRlcl9tb29uXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3YW5pbmcgY3Jlc2NlbnQgbW9vbiBzeW1ib2xcIixcbiAgICAgIFwid2FuaW5nX2NyZXNjZW50X21vb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjMxOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNyZXNjZW50IG1vb25cIixcbiAgICAgIFwiY3Jlc2NlbnRfbW9vblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzE5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmV3IG1vb24gd2l0aCBmYWNlXCIsXG4gICAgICBcIm5ld19tb29uX3dpdGhfZmFjZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzFhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmlyc3QgcXVhcnRlciBtb29uIHdpdGggZmFjZVwiLFxuICAgICAgXCJmaXJzdF9xdWFydGVyX21vb25fd2l0aF9mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsYXN0IHF1YXJ0ZXIgbW9vbiB3aXRoIGZhY2VcIixcbiAgICAgIFwibGFzdF9xdWFydGVyX21vb25fd2l0aF9mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0aGVybW9tZXRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzIxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayBzdW4gd2l0aCByYXlzXCIsXG4gICAgICBcInN1bm55XCJcbiAgICBdLFxuICAgIHU6IFwiMjYwMC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZnVsbCBtb29uIHdpdGggZmFjZVwiLFxuICAgICAgXCJmdWxsX21vb25fd2l0aF9mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMWRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdW4gd2l0aCBmYWNlXCIsXG4gICAgICBcInN1bl93aXRoX2ZhY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjMxZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndoaXRlIG1lZGl1bSBzdGFyXCIsXG4gICAgICBcInN0YXJcIlxuICAgIF0sXG4gICAgdTogXCIyYjUwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ2xvd2luZyBzdGFyXCIsXG4gICAgICBcInN0YXIyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMWZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaG9vdGluZyBzdGFyXCIsXG4gICAgICBcInN0YXJzXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMjBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG91ZFwiXG4gICAgXSxcbiAgICB1OiBcIjI2MDEtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInN1biBiZWhpbmQgY2xvdWRcIixcbiAgICAgIFwicGFydGx5X3N1bm55XCJcbiAgICBdLFxuICAgIHU6IFwiMjZjNVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRodW5kZXJfY2xvdWRfYW5kX3JhaW5cIlxuICAgIF0sXG4gICAgdTogXCIyNmM4LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb3N0bHlfc3VubnlcIixcbiAgICAgIFwic3VuX3NtYWxsX2Nsb3VkXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMjQtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJhcmVseV9zdW5ueVwiLFxuICAgICAgXCJzdW5fYmVoaW5kX2Nsb3VkXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMjUtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBhcnRseV9zdW5ueV9yYWluXCIsXG4gICAgICBcInN1bl9iZWhpbmRfcmFpbl9jbG91ZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzI2LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyYWluX2Nsb3VkXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMjctZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNub3dfY2xvdWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjMyOC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGlnaHRuaW5nXCIsXG4gICAgICBcImxpZ2h0bmluZ19jbG91ZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzI5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0b3JuYWRvXCIsXG4gICAgICBcInRvcm5hZG9fY2xvdWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjMyYS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZm9nXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMmItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndpbmRfYmxvd2luZ19mYWNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzMmMtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImN5Y2xvbmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjMwMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJhaW5ib3dcIlxuICAgIF0sXG4gICAgdTogXCIxZjMwOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb3NlZCB1bWJyZWxsYVwiLFxuICAgICAgXCJjbG9zZWRfdW1icmVsbGFcIlxuICAgIF0sXG4gICAgdTogXCIxZjMwMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInVtYnJlbGxhXCJcbiAgICBdLFxuICAgIHU6IFwiMjYwMi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidW1icmVsbGEgd2l0aCByYWluIGRyb3BzXCIsXG4gICAgICBcInVtYnJlbGxhX3dpdGhfcmFpbl9kcm9wc1wiXG4gICAgXSxcbiAgICB1OiBcIjI2MTRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ1bWJyZWxsYV9vbl9ncm91bmRcIlxuICAgIF0sXG4gICAgdTogXCIyNmYxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoaWdoIHZvbHRhZ2Ugc2lnblwiLFxuICAgICAgXCJ6YXBcIlxuICAgIF0sXG4gICAgdTogXCIyNmExXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic25vd2ZsYWtlXCJcbiAgICBdLFxuICAgIHU6IFwiMjc0NC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic25vd21hblwiXG4gICAgXSxcbiAgICB1OiBcIjI2MDMtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNub3dtYW4gd2l0aG91dCBzbm93XCIsXG4gICAgICBcInNub3dtYW5fd2l0aG91dF9zbm93XCJcbiAgICBdLFxuICAgIHU6IFwiMjZjNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNvbWV0XCJcbiAgICBdLFxuICAgIHU6IFwiMjYwNC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmlyZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTI1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZHJvcGxldFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGE3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2F0ZXIgd2F2ZVwiLFxuICAgICAgXCJvY2VhblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzBhXCJcbiAgfVxuXTtcbmNvbnN0IG9iamVjdHMkMSA9IFtcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3BlYWtlciB3aXRoIGNhbmNlbGxhdGlvbiBzdHJva2VcIixcbiAgICAgIFwibXV0ZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTA3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3BlYWtlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTA4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3BlYWtlciB3aXRoIG9uZSBzb3VuZCB3YXZlXCIsXG4gICAgICBcInNvdW5kXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MDlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcGVha2VyIHdpdGggdGhyZWUgc291bmQgd2F2ZXNcIixcbiAgICAgIFwibG91ZF9zb3VuZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTBhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicHVibGljIGFkZHJlc3MgbG91ZHNwZWFrZXJcIixcbiAgICAgIFwibG91ZHNwZWFrZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjRlMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNoZWVyaW5nIG1lZ2FwaG9uZVwiLFxuICAgICAgXCJtZWdhXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwb3N0YWwgaG9yblwiLFxuICAgICAgXCJwb3N0YWxfaG9yblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGVmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmVsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTE0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmVsbCB3aXRoIGNhbmNlbGxhdGlvbiBzdHJva2VcIixcbiAgICAgIFwibm9fYmVsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTE1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibXVzaWNhbCBzY29yZVwiLFxuICAgICAgXCJtdXNpY2FsX3Njb3JlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYmNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtdXNpY2FsIG5vdGVcIixcbiAgICAgIFwibXVzaWNhbF9ub3RlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtdWx0aXBsZSBtdXNpY2FsIG5vdGVzXCIsXG4gICAgICBcIm5vdGVzXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYjZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdHVkaW9fbWljcm9waG9uZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMzk5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsZXZlbF9zbGlkZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjM5YS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY29udHJvbF9rbm9ic1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzliLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtaWNyb3Bob25lXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYTRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoZWFkcGhvbmVcIixcbiAgICAgIFwiaGVhZHBob25lc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2E3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmFkaW9cIlxuICAgIF0sXG4gICAgdTogXCIxZjRmYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNheG9waG9uZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2I3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3VpdGFyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYjhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtdXNpY2FsIGtleWJvYXJkXCIsXG4gICAgICBcIm11c2ljYWxfa2V5Ym9hcmRcIlxuICAgIF0sXG4gICAgdTogXCIxZjNiOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRydW1wZXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjNiYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInZpb2xpblwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2JiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZHJ1bSB3aXRoIGRydW1zdGlja3NcIixcbiAgICAgIFwiZHJ1bV93aXRoX2RydW1zdGlja3NcIlxuICAgIF0sXG4gICAgdTogXCIxZjk0MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vYmlsZSBwaG9uZVwiLFxuICAgICAgXCJpcGhvbmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjRmMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vYmlsZSBwaG9uZSB3aXRoIHJpZ2h0d2FyZHMgYXJyb3cgYXQgbGVmdFwiLFxuICAgICAgXCJjYWxsaW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZjJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayB0ZWxlcGhvbmVcIixcbiAgICAgIFwicGhvbmVcIixcbiAgICAgIFwidGVsZXBob25lXCJcbiAgICBdLFxuICAgIHU6IFwiMjYwZS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidGVsZXBob25lIHJlY2VpdmVyXCIsXG4gICAgICBcInRlbGVwaG9uZV9yZWNlaXZlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGRlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGFnZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjRkZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZheCBtYWNoaW5lXCIsXG4gICAgICBcImZheFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGUwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmF0dGVyeVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTBiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZWxlY3RyaWMgcGx1Z1wiLFxuICAgICAgXCJlbGVjdHJpY19wbHVnXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MGNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwZXJzb25hbCBjb21wdXRlclwiLFxuICAgICAgXCJjb21wdXRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGJiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZGVza3RvcF9jb21wdXRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWE1LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwcmludGVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1YTgtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtleWJvYXJkXCJcbiAgICBdLFxuICAgIHU6IFwiMjMyOC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidGhyZWVfYnV0dG9uX21vdXNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1YjEtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRyYWNrYmFsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWIyLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtaW5pZGlzY1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNGJkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmxvcHB5IGRpc2tcIixcbiAgICAgIFwiZmxvcHB5X2Rpc2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjRiZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm9wdGljYWwgZGlzY1wiLFxuICAgICAgXCJjZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGJmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZHZkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YzBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb3ZpZSBjYW1lcmFcIixcbiAgICAgIFwibW92aWVfY2FtZXJhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmaWxtX2ZyYW1lc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzllLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmaWxtX3Byb2plY3RvclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGZkLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbGFwcGVyIGJvYXJkXCIsXG4gICAgICBcImNsYXBwZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjNhY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRlbGV2aXNpb25cIixcbiAgICAgIFwidHZcIlxuICAgIF0sXG4gICAgdTogXCIxZjRmYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNhbWVyYVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGY3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2FtZXJhIHdpdGggZmxhc2hcIixcbiAgICAgIFwiY2FtZXJhX3dpdGhfZmxhc2hcIlxuICAgIF0sXG4gICAgdTogXCIxZjRmOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInZpZGVvIGNhbWVyYVwiLFxuICAgICAgXCJ2aWRlb19jYW1lcmFcIlxuICAgIF0sXG4gICAgdTogXCIxZjRmOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInZpZGVvY2Fzc2V0dGVcIixcbiAgICAgIFwidmhzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZmNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsZWZ0LXBvaW50aW5nIG1hZ25pZnlpbmcgZ2xhc3NcIixcbiAgICAgIFwibWFnXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MGRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyaWdodC1wb2ludGluZyBtYWduaWZ5aW5nIGdsYXNzXCIsXG4gICAgICBcIm1hZ19yaWdodFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTBlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWljcm9zY29wZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTJjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidGVsZXNjb3BlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MmRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzYXRlbGxpdGUgYW50ZW5uYVwiLFxuICAgICAgXCJzYXRlbGxpdGVfYW50ZW5uYVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGUxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2FuZGxlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NmYtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVsZWN0cmljIGxpZ2h0IGJ1bGJcIixcbiAgICAgIFwiYnVsYlwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGExXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZWxlY3RyaWMgdG9yY2hcIixcbiAgICAgIFwiZmxhc2hsaWdodFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTI2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaXpha2F5YSBsYW50ZXJuXCIsXG4gICAgICBcIml6YWtheWFfbGFudGVyblwiLFxuICAgICAgXCJsYW50ZXJuXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJub3RlYm9vayB3aXRoIGRlY29yYXRpdmUgY292ZXJcIixcbiAgICAgIFwibm90ZWJvb2tfd2l0aF9kZWNvcmF0aXZlX2NvdmVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZDRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9zZWQgYm9va1wiLFxuICAgICAgXCJjbG9zZWRfYm9va1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNGQ1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib3BlbiBib29rXCIsXG4gICAgICBcImJvb2tcIixcbiAgICAgIFwib3Blbl9ib29rXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZDZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJncmVlbiBib29rXCIsXG4gICAgICBcImdyZWVuX2Jvb2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjRkN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJsdWUgYm9va1wiLFxuICAgICAgXCJibHVlX2Jvb2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjRkOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm9yYW5nZSBib29rXCIsXG4gICAgICBcIm9yYW5nZV9ib29rXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZDlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJib29rc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNGRhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibm90ZWJvb2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjRkM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxlZGdlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGQyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGFnZSB3aXRoIGN1cmxcIixcbiAgICAgIFwicGFnZV93aXRoX2N1cmxcIlxuICAgIF0sXG4gICAgdTogXCIxZjRjM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNjcm9sbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGRjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGFnZSBmYWNpbmcgdXBcIixcbiAgICAgIFwicGFnZV9mYWNpbmdfdXBcIlxuICAgIF0sXG4gICAgdTogXCIxZjRjNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5ld3NwYXBlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGYwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicm9sbGVkX3VwX25ld3NwYXBlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWRlLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJib29rbWFyayB0YWJzXCIsXG4gICAgICBcImJvb2ttYXJrX3RhYnNcIlxuICAgIF0sXG4gICAgdTogXCIxZjRkMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJvb2ttYXJrXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsYWJlbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2Y3LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb25leSBiYWdcIixcbiAgICAgIFwibW9uZXliYWdcIlxuICAgIF0sXG4gICAgdTogXCIxZjRiMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJhbmtub3RlIHdpdGggeWVuIHNpZ25cIixcbiAgICAgIFwieWVuXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YjRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiYW5rbm90ZSB3aXRoIGRvbGxhciBzaWduXCIsXG4gICAgICBcImRvbGxhclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGI1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFua25vdGUgd2l0aCBldXJvIHNpZ25cIixcbiAgICAgIFwiZXVyb1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNGI2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFua25vdGUgd2l0aCBwb3VuZCBzaWduXCIsXG4gICAgICBcInBvdW5kXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb25leSB3aXRoIHdpbmdzXCIsXG4gICAgICBcIm1vbmV5X3dpdGhfd2luZ3NcIlxuICAgIF0sXG4gICAgdTogXCIxZjRiOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNyZWRpdCBjYXJkXCIsXG4gICAgICBcImNyZWRpdF9jYXJkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGFydCB3aXRoIHVwd2FyZHMgdHJlbmQgYW5kIHllbiBzaWduXCIsXG4gICAgICBcImNoYXJ0XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YjlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjdXJyZW5jeSBleGNoYW5nZVwiLFxuICAgICAgXCJjdXJyZW5jeV9leGNoYW5nZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGIxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGVhdnkgZG9sbGFyIHNpZ25cIixcbiAgICAgIFwiaGVhdnlfZG9sbGFyX3NpZ25cIlxuICAgIF0sXG4gICAgdTogXCIxZjRiMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVudmVsb3BlXCIsXG4gICAgICBcImVtYWlsXCJcbiAgICBdLFxuICAgIHU6IFwiMjcwOS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZS1tYWlsIHN5bWJvbFwiLFxuICAgICAgXCJlLW1haWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjRlN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImluY29taW5nIGVudmVsb3BlXCIsXG4gICAgICBcImluY29taW5nX2VudmVsb3BlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJlbnZlbG9wZSB3aXRoIGRvd253YXJkcyBhcnJvdyBhYm92ZVwiLFxuICAgICAgXCJlbnZlbG9wZV93aXRoX2Fycm93XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZTlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvdXRib3ggdHJheVwiLFxuICAgICAgXCJvdXRib3hfdHJheVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGU0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaW5ib3ggdHJheVwiLFxuICAgICAgXCJpbmJveF90cmF5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwYWNrYWdlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9zZWQgbWFpbGJveCB3aXRoIHJhaXNlZCBmbGFnXCIsXG4gICAgICBcIm1haWxib3hcIlxuICAgIF0sXG4gICAgdTogXCIxZjRlYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb3NlZCBtYWlsYm94IHdpdGggbG93ZXJlZCBmbGFnXCIsXG4gICAgICBcIm1haWxib3hfY2xvc2VkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvcGVuIG1haWxib3ggd2l0aCByYWlzZWQgZmxhZ1wiLFxuICAgICAgXCJtYWlsYm94X3dpdGhfbWFpbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGVjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib3BlbiBtYWlsYm94IHdpdGggbG93ZXJlZCBmbGFnXCIsXG4gICAgICBcIm1haWxib3hfd2l0aF9ub19tYWlsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZWRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwb3N0Ym94XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiYWxsb3RfYm94X3dpdGhfYmFsbG90XCJcbiAgICBdLFxuICAgIHU6IFwiMWY1ZjMtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlbmNpbFwiLFxuICAgICAgXCJwZW5jaWwyXCJcbiAgICBdLFxuICAgIHU6IFwiMjcwZi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxhY2sgbmliXCIsXG4gICAgICBcImJsYWNrX25pYlwiXG4gICAgXSxcbiAgICB1OiBcIjI3MTItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxvd2VyX2xlZnRfZm91bnRhaW5fcGVuXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1OGItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxvd2VyX2xlZnRfYmFsbHBvaW50X3BlblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNThhLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsb3dlcl9sZWZ0X3BhaW50YnJ1c2hcIlxuICAgIF0sXG4gICAgdTogXCIxZjU4Yy1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibG93ZXJfbGVmdF9jcmF5b25cIlxuICAgIF0sXG4gICAgdTogXCIxZjU4ZC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWVtb1wiLFxuICAgICAgXCJwZW5jaWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjRkZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJyaWVmY2FzZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGJjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmlsZSBmb2xkZXJcIixcbiAgICAgIFwiZmlsZV9mb2xkZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjRjMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm9wZW4gZmlsZSBmb2xkZXJcIixcbiAgICAgIFwib3Blbl9maWxlX2ZvbGRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGMyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2FyZF9pbmRleF9kaXZpZGVyc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNWMyLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjYWxlbmRhclwiLFxuICAgICAgXCJkYXRlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YzVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0ZWFyLW9mZiBjYWxlbmRhclwiLFxuICAgICAgXCJjYWxlbmRhclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGM2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3BpcmFsX25vdGVfcGFkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1ZDItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNwaXJhbF9jYWxlbmRhcl9wYWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjVkMy1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2FyZCBpbmRleFwiLFxuICAgICAgXCJjYXJkX2luZGV4XCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YzdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGFydCB3aXRoIHVwd2FyZHMgdHJlbmRcIixcbiAgICAgIFwiY2hhcnRfd2l0aF91cHdhcmRzX3RyZW5kXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0YzhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGFydCB3aXRoIGRvd253YXJkcyB0cmVuZFwiLFxuICAgICAgXCJjaGFydF93aXRoX2Rvd253YXJkc190cmVuZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGM5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFyIGNoYXJ0XCIsXG4gICAgICBcImJhcl9jaGFydFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGNhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xpcGJvYXJkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0Y2JcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwdXNocGluXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0Y2NcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyb3VuZCBwdXNocGluXCIsXG4gICAgICBcInJvdW5kX3B1c2hwaW5cIlxuICAgIF0sXG4gICAgdTogXCIxZjRjZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBhcGVyY2xpcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGNlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGlua2VkX3BhcGVyY2xpcHNcIlxuICAgIF0sXG4gICAgdTogXCIxZjU4Ny1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3RyYWlnaHQgcnVsZXJcIixcbiAgICAgIFwic3RyYWlnaHRfcnVsZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjRjZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRyaWFuZ3VsYXIgcnVsZXJcIixcbiAgICAgIFwidHJpYW5ndWxhcl9ydWxlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGQwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxhY2sgc2Npc3NvcnNcIixcbiAgICAgIFwic2Npc3NvcnNcIlxuICAgIF0sXG4gICAgdTogXCIyNzAyLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjYXJkX2ZpbGVfYm94XCJcbiAgICBdLFxuICAgIHU6IFwiMWY1YzMtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZpbGVfY2FiaW5ldFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWM0LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3YXN0ZWJhc2tldFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWQxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsb2NrXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MTJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvcGVuIGxvY2tcIixcbiAgICAgIFwidW5sb2NrXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsb2NrIHdpdGggaW5rIHBlblwiLFxuICAgICAgXCJsb2NrX3dpdGhfaW5rX3BlblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xvc2VkIGxvY2sgd2l0aCBrZXlcIixcbiAgICAgIFwiY2xvc2VkX2xvY2tfd2l0aF9rZXlcIlxuICAgIF0sXG4gICAgdTogXCIxZjUxMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtleVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTExXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib2xkX2tleVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWRkLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoYW1tZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjUyOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBpY2tcIlxuICAgIF0sXG4gICAgdTogXCIyNmNmLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoYW1tZXJfYW5kX3BpY2tcIlxuICAgIF0sXG4gICAgdTogXCIyNjkyLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoYW1tZXJfYW5kX3dyZW5jaFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmUwLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJkYWdnZXJfa25pZmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjVlMS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY3Jvc3NlZF9zd29yZHNcIlxuICAgIF0sXG4gICAgdTogXCIyNjk0LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwaXN0b2xcIixcbiAgICAgIFwiZ3VuXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MmJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJib3cgYW5kIGFycm93XCIsXG4gICAgICBcImJvd19hbmRfYXJyb3dcIlxuICAgIF0sXG4gICAgdTogXCIxZjNmOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNoaWVsZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmUxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3cmVuY2hcIlxuICAgIF0sXG4gICAgdTogXCIxZjUyN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm51dCBhbmQgYm9sdFwiLFxuICAgICAgXCJudXRfYW5kX2JvbHRcIlxuICAgIF0sXG4gICAgdTogXCIxZjUyOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdlYXJcIlxuICAgIF0sXG4gICAgdTogXCIyNjk5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb21wcmVzc2lvblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWRjLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhbGVtYmljXCJcbiAgICBdLFxuICAgIHU6IFwiMjY5Ny1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2NhbGVzXCJcbiAgICBdLFxuICAgIHU6IFwiMjY5Ni1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGluayBzeW1ib2xcIixcbiAgICAgIFwibGlua1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNTE3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2hhaW5zXCJcbiAgICBdLFxuICAgIHU6IFwiMjZkMy1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3lyaW5nZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDg5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGlsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNDhhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic21va2luZyBzeW1ib2xcIixcbiAgICAgIFwic21va2luZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmFjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY29mZmluXCJcbiAgICBdLFxuICAgIHU6IFwiMjZiMC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZnVuZXJhbF91cm5cIlxuICAgIF0sXG4gICAgdTogXCIyNmIxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb3lhaVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNWZmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib2lsX2RydW1cIlxuICAgIF0sXG4gICAgdTogXCIxZjZlMi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY3J5c3RhbCBiYWxsXCIsXG4gICAgICBcImNyeXN0YWxfYmFsbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTJlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2hvcHBpbmcgdHJvbGxleVwiLFxuICAgICAgXCJzaG9wcGluZ190cm9sbGV5XCJcbiAgICBdLFxuICAgIHU6IFwiMWY2ZDJcIlxuICB9XG5dO1xuY29uc3Qgc3ltYm9scyQxID0gW1xuICB7XG4gICAgbjogW1xuICAgICAgXCJhdXRvbWF0ZWQgdGVsbGVyIG1hY2hpbmVcIixcbiAgICAgIFwiYXRtXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwdXQgbGl0dGVyIGluIGl0cyBwbGFjZSBzeW1ib2xcIixcbiAgICAgIFwicHV0X2xpdHRlcl9pbl9pdHNfcGxhY2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjZhZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBvdGFibGUgd2F0ZXIgc3ltYm9sXCIsXG4gICAgICBcInBvdGFibGVfd2F0ZXJcIlxuICAgIF0sXG4gICAgdTogXCIxZjZiMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndoZWVsY2hhaXIgc3ltYm9sXCIsXG4gICAgICBcIndoZWVsY2hhaXJcIlxuICAgIF0sXG4gICAgdTogXCIyNjdmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWVucyBzeW1ib2xcIixcbiAgICAgIFwibWVuc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmI5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid29tZW5zIHN5bWJvbFwiLFxuICAgICAgXCJ3b21lbnNcIlxuICAgIF0sXG4gICAgdTogXCIxZjZiYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJlc3Ryb29tXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YmJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiYWJ5IHN5bWJvbFwiLFxuICAgICAgXCJiYWJ5X3N5bWJvbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmJjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2F0ZXIgY2xvc2V0XCIsXG4gICAgICBcIndjXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YmVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwYXNzcG9ydCBjb250cm9sXCIsXG4gICAgICBcInBhc3Nwb3J0X2NvbnRyb2xcIlxuICAgIF0sXG4gICAgdTogXCIxZjZjMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImN1c3RvbXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjZjM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJhZ2dhZ2UgY2xhaW1cIixcbiAgICAgIFwiYmFnZ2FnZV9jbGFpbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmM0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGVmdCBsdWdnYWdlXCIsXG4gICAgICBcImxlZnRfbHVnZ2FnZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmM1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2FybmluZyBzaWduXCIsXG4gICAgICBcIndhcm5pbmdcIlxuICAgIF0sXG4gICAgdTogXCIyNmEwLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGlsZHJlbiBjcm9zc2luZ1wiLFxuICAgICAgXCJjaGlsZHJlbl9jcm9zc2luZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmI4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibm8gZW50cnlcIixcbiAgICAgIFwibm9fZW50cnlcIlxuICAgIF0sXG4gICAgdTogXCIyNmQ0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibm8gZW50cnkgc2lnblwiLFxuICAgICAgXCJub19lbnRyeV9zaWduXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJubyBiaWN5Y2xlc1wiLFxuICAgICAgXCJub19iaWN5Y2xlc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmIzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibm8gc21va2luZyBzeW1ib2xcIixcbiAgICAgIFwibm9fc21va2luZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmFkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZG8gbm90IGxpdHRlciBzeW1ib2xcIixcbiAgICAgIFwiZG9fbm90X2xpdHRlclwiXG4gICAgXSxcbiAgICB1OiBcIjFmNmFmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibm9uLXBvdGFibGUgd2F0ZXIgc3ltYm9sXCIsXG4gICAgICBcIm5vbi1wb3RhYmxlX3dhdGVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY2YjFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJubyBwZWRlc3RyaWFuc1wiLFxuICAgICAgXCJub19wZWRlc3RyaWFuc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmNmI3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibm8gbW9iaWxlIHBob25lc1wiLFxuICAgICAgXCJub19tb2JpbGVfcGhvbmVzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJubyBvbmUgdW5kZXIgZWlnaHRlZW4gc3ltYm9sXCIsXG4gICAgICBcInVuZGVyYWdlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyYWRpb2FjdGl2ZV9zaWduXCJcbiAgICBdLFxuICAgIHU6IFwiMjYyMi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmlvaGF6YXJkX3NpZ25cIlxuICAgIF0sXG4gICAgdTogXCIyNjIzLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ1cHdhcmRzIGJsYWNrIGFycm93XCIsXG4gICAgICBcImFycm93X3VwXCJcbiAgICBdLFxuICAgIHU6IFwiMmIwNi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibm9ydGggZWFzdCBhcnJvd1wiLFxuICAgICAgXCJhcnJvd191cHBlcl9yaWdodFwiXG4gICAgXSxcbiAgICB1OiBcIjIxOTctZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJsYWNrIHJpZ2h0d2FyZHMgYXJyb3dcIixcbiAgICAgIFwiYXJyb3dfcmlnaHRcIlxuICAgIF0sXG4gICAgdTogXCIyN2ExLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzb3V0aCBlYXN0IGFycm93XCIsXG4gICAgICBcImFycm93X2xvd2VyX3JpZ2h0XCJcbiAgICBdLFxuICAgIHU6IFwiMjE5OC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZG93bndhcmRzIGJsYWNrIGFycm93XCIsXG4gICAgICBcImFycm93X2Rvd25cIlxuICAgIF0sXG4gICAgdTogXCIyYjA3LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzb3V0aCB3ZXN0IGFycm93XCIsXG4gICAgICBcImFycm93X2xvd2VyX2xlZnRcIlxuICAgIF0sXG4gICAgdTogXCIyMTk5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsZWZ0d2FyZHMgYmxhY2sgYXJyb3dcIixcbiAgICAgIFwiYXJyb3dfbGVmdFwiXG4gICAgXSxcbiAgICB1OiBcIjJiMDUtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5vcnRoIHdlc3QgYXJyb3dcIixcbiAgICAgIFwiYXJyb3dfdXBwZXJfbGVmdFwiXG4gICAgXSxcbiAgICB1OiBcIjIxOTYtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInVwIGRvd24gYXJyb3dcIixcbiAgICAgIFwiYXJyb3dfdXBfZG93blwiXG4gICAgXSxcbiAgICB1OiBcIjIxOTUtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxlZnQgcmlnaHQgYXJyb3dcIixcbiAgICAgIFwibGVmdF9yaWdodF9hcnJvd1wiXG4gICAgXSxcbiAgICB1OiBcIjIxOTQtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxlZnR3YXJkcyBhcnJvdyB3aXRoIGhvb2tcIixcbiAgICAgIFwibGVmdHdhcmRzX2Fycm93X3dpdGhfaG9va1wiXG4gICAgXSxcbiAgICB1OiBcIjIxYTktZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJpZ2h0d2FyZHMgYXJyb3cgd2l0aCBob29rXCIsXG4gICAgICBcImFycm93X3JpZ2h0X2hvb2tcIlxuICAgIF0sXG4gICAgdTogXCIyMWFhLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhcnJvdyBwb2ludGluZyByaWdodHdhcmRzIHRoZW4gY3VydmluZyB1cHdhcmRzXCIsXG4gICAgICBcImFycm93X2hlYWRpbmdfdXBcIlxuICAgIF0sXG4gICAgdTogXCIyOTM0LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhcnJvdyBwb2ludGluZyByaWdodHdhcmRzIHRoZW4gY3VydmluZyBkb3dud2FyZHNcIixcbiAgICAgIFwiYXJyb3dfaGVhZGluZ19kb3duXCJcbiAgICBdLFxuICAgIHU6IFwiMjkzNS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xvY2t3aXNlIGRvd253YXJkcyBhbmQgdXB3YXJkcyBvcGVuIGNpcmNsZSBhcnJvd3NcIixcbiAgICAgIFwiYXJyb3dzX2Nsb2Nrd2lzZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTAzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYW50aWNsb2Nrd2lzZSBkb3dud2FyZHMgYW5kIHVwd2FyZHMgb3BlbiBjaXJjbGUgYXJyb3dzXCIsXG4gICAgICBcImFycm93c19jb3VudGVyY2xvY2t3aXNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MDRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiYWNrIHdpdGggbGVmdHdhcmRzIGFycm93IGFib3ZlXCIsXG4gICAgICBcImJhY2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjUxOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVuZCB3aXRoIGxlZnR3YXJkcyBhcnJvdyBhYm92ZVwiLFxuICAgICAgXCJlbmRcIlxuICAgIF0sXG4gICAgdTogXCIxZjUxYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm9uIHdpdGggZXhjbGFtYXRpb24gbWFyayB3aXRoIGxlZnQgcmlnaHQgYXJyb3cgYWJvdmVcIixcbiAgICAgIFwib25cIlxuICAgIF0sXG4gICAgdTogXCIxZjUxYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNvb24gd2l0aCByaWdodHdhcmRzIGFycm93IGFib3ZlXCIsXG4gICAgICBcInNvb25cIlxuICAgIF0sXG4gICAgdTogXCIxZjUxY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRvcCB3aXRoIHVwd2FyZHMgYXJyb3cgYWJvdmVcIixcbiAgICAgIFwidG9wXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MWRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwbGFjZSBvZiB3b3JzaGlwXCIsXG4gICAgICBcInBsYWNlX29mX3dvcnNoaXBcIlxuICAgIF0sXG4gICAgdTogXCIxZjZkMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImF0b21fc3ltYm9sXCJcbiAgICBdLFxuICAgIHU6IFwiMjY5Yi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib21fc3ltYm9sXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NDktZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInN0YXJfb2ZfZGF2aWRcIlxuICAgIF0sXG4gICAgdTogXCIyNzIxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3aGVlbF9vZl9kaGFybWFcIlxuICAgIF0sXG4gICAgdTogXCIyNjM4LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ5aW5feWFuZ1wiXG4gICAgXSxcbiAgICB1OiBcIjI2MmYtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxhdGluX2Nyb3NzXCJcbiAgICBdLFxuICAgIHU6IFwiMjcxZC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwib3J0aG9kb3hfY3Jvc3NcIlxuICAgIF0sXG4gICAgdTogXCIyNjI2LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdGFyX2FuZF9jcmVzY2VudFwiXG4gICAgXSxcbiAgICB1OiBcIjI2MmEtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBlYWNlX3N5bWJvbFwiXG4gICAgXSxcbiAgICB1OiBcIjI2MmUtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1lbm9yYWggd2l0aCBuaW5lIGJyYW5jaGVzXCIsXG4gICAgICBcIm1lbm9yYWhfd2l0aF9uaW5lX2JyYW5jaGVzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1NGVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaXggcG9pbnRlZCBzdGFyIHdpdGggbWlkZGxlIGRvdFwiLFxuICAgICAgXCJzaXhfcG9pbnRlZF9zdGFyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhcmllc1wiXG4gICAgXSxcbiAgICB1OiBcIjI2NDhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0YXVydXNcIlxuICAgIF0sXG4gICAgdTogXCIyNjQ5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ2VtaW5pXCJcbiAgICBdLFxuICAgIHU6IFwiMjY0YVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNhbmNlclwiXG4gICAgXSxcbiAgICB1OiBcIjI2NGJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsZW9cIlxuICAgIF0sXG4gICAgdTogXCIyNjRjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidmlyZ29cIlxuICAgIF0sXG4gICAgdTogXCIyNjRkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGlicmFcIlxuICAgIF0sXG4gICAgdTogXCIyNjRlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2NvcnBpdXNcIlxuICAgIF0sXG4gICAgdTogXCIyNjRmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2FnaXR0YXJpdXNcIlxuICAgIF0sXG4gICAgdTogXCIyNjUwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2Fwcmljb3JuXCJcbiAgICBdLFxuICAgIHU6IFwiMjY1MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImFxdWFyaXVzXCJcbiAgICBdLFxuICAgIHU6IFwiMjY1MlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBpc2Nlc1wiXG4gICAgXSxcbiAgICB1OiBcIjI2NTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvcGhpdWNodXNcIlxuICAgIF0sXG4gICAgdTogXCIyNmNlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHdpc3RlZCByaWdodHdhcmRzIGFycm93c1wiLFxuICAgICAgXCJ0d2lzdGVkX3JpZ2h0d2FyZHNfYXJyb3dzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MDBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjbG9ja3dpc2UgcmlnaHR3YXJkcyBhbmQgbGVmdHdhcmRzIG9wZW4gY2lyY2xlIGFycm93c1wiLFxuICAgICAgXCJyZXBlYXRcIlxuICAgIF0sXG4gICAgdTogXCIxZjUwMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNsb2Nrd2lzZSByaWdodHdhcmRzIGFuZCBsZWZ0d2FyZHMgb3BlbiBjaXJjbGUgYXJyb3dzIHdpdGggY2lyY2xlZCBvbmUgb3ZlcmxheVwiLFxuICAgICAgXCJyZXBlYXRfb25lXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MDJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayByaWdodC1wb2ludGluZyB0cmlhbmdsZVwiLFxuICAgICAgXCJhcnJvd19mb3J3YXJkXCJcbiAgICBdLFxuICAgIHU6IFwiMjViNi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxhY2sgcmlnaHQtcG9pbnRpbmcgZG91YmxlIHRyaWFuZ2xlXCIsXG4gICAgICBcImZhc3RfZm9yd2FyZFwiXG4gICAgXSxcbiAgICB1OiBcIjIzZTlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFja19yaWdodF9wb2ludGluZ19kb3VibGVfdHJpYW5nbGVfd2l0aF92ZXJ0aWNhbF9iYXJcIlxuICAgIF0sXG4gICAgdTogXCIyM2VkLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFja19yaWdodF9wb2ludGluZ190cmlhbmdsZV93aXRoX2RvdWJsZV92ZXJ0aWNhbF9iYXJcIlxuICAgIF0sXG4gICAgdTogXCIyM2VmLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayBsZWZ0LXBvaW50aW5nIHRyaWFuZ2xlXCIsXG4gICAgICBcImFycm93X2JhY2t3YXJkXCJcbiAgICBdLFxuICAgIHU6IFwiMjVjMC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxhY2sgbGVmdC1wb2ludGluZyBkb3VibGUgdHJpYW5nbGVcIixcbiAgICAgIFwicmV3aW5kXCJcbiAgICBdLFxuICAgIHU6IFwiMjNlYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJsYWNrX2xlZnRfcG9pbnRpbmdfZG91YmxlX3RyaWFuZ2xlX3dpdGhfdmVydGljYWxfYmFyXCJcbiAgICBdLFxuICAgIHU6IFwiMjNlZS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidXAtcG9pbnRpbmcgc21hbGwgcmVkIHRyaWFuZ2xlXCIsXG4gICAgICBcImFycm93X3VwX3NtYWxsXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1M2NcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayB1cC1wb2ludGluZyBkb3VibGUgdHJpYW5nbGVcIixcbiAgICAgIFwiYXJyb3dfZG91YmxlX3VwXCJcbiAgICBdLFxuICAgIHU6IFwiMjNlYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRvd24tcG9pbnRpbmcgc21hbGwgcmVkIHRyaWFuZ2xlXCIsXG4gICAgICBcImFycm93X2Rvd25fc21hbGxcIlxuICAgIF0sXG4gICAgdTogXCIxZjUzZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJsYWNrIGRvd24tcG9pbnRpbmcgZG91YmxlIHRyaWFuZ2xlXCIsXG4gICAgICBcImFycm93X2RvdWJsZV9kb3duXCJcbiAgICBdLFxuICAgIHU6IFwiMjNlY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRvdWJsZV92ZXJ0aWNhbF9iYXJcIlxuICAgIF0sXG4gICAgdTogXCIyM2Y4LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFja19zcXVhcmVfZm9yX3N0b3BcIlxuICAgIF0sXG4gICAgdTogXCIyM2Y5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFja19jaXJjbGVfZm9yX3JlY29yZFwiXG4gICAgXSxcbiAgICB1OiBcIjIzZmEtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVqZWN0XCJcbiAgICBdLFxuICAgIHU6IFwiMjNjZi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2luZW1hXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzYTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsb3cgYnJpZ2h0bmVzcyBzeW1ib2xcIixcbiAgICAgIFwibG93X2JyaWdodG5lc3NcIlxuICAgIF0sXG4gICAgdTogXCIxZjUwNVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhpZ2ggYnJpZ2h0bmVzcyBzeW1ib2xcIixcbiAgICAgIFwiaGlnaF9icmlnaHRuZXNzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MDZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhbnRlbm5hIHdpdGggYmFyc1wiLFxuICAgICAgXCJzaWduYWxfc3RyZW5ndGhcIlxuICAgIF0sXG4gICAgdTogXCIxZjRmNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInZpYnJhdGlvbiBtb2RlXCIsXG4gICAgICBcInZpYnJhdGlvbl9tb2RlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb2JpbGUgcGhvbmUgb2ZmXCIsXG4gICAgICBcIm1vYmlsZV9waG9uZV9vZmZcIlxuICAgIF0sXG4gICAgdTogXCIxZjRmNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZlbWFsZV9zaWduXCJcbiAgICBdLFxuICAgIHU6IFwiMjY0MC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsZV9zaWduXCJcbiAgICBdLFxuICAgIHU6IFwiMjY0Mi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWVkaWNhbF9zeW1ib2xcIixcbiAgICAgIFwic3RhZmZfb2ZfYWVzY3VsYXBpdXNcIlxuICAgIF0sXG4gICAgdTogXCIyNjk1LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayB1bml2ZXJzYWwgcmVjeWNsaW5nIHN5bWJvbFwiLFxuICAgICAgXCJyZWN5Y2xlXCJcbiAgICBdLFxuICAgIHU6IFwiMjY3Yi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmxldXJfZGVfbGlzXCJcbiAgICBdLFxuICAgIHU6IFwiMjY5Yy1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHJpZGVudCBlbWJsZW1cIixcbiAgICAgIFwidHJpZGVudFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTMxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmFtZSBiYWRnZVwiLFxuICAgICAgXCJuYW1lX2JhZGdlXCJcbiAgICBdLFxuICAgIHU6IFwiMWY0ZGJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJqYXBhbmVzZSBzeW1ib2wgZm9yIGJlZ2lubmVyXCIsXG4gICAgICBcImJlZ2lubmVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MzBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoZWF2eSBsYXJnZSBjaXJjbGVcIixcbiAgICAgIFwib1wiXG4gICAgXSxcbiAgICB1OiBcIjJiNTVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3aGl0ZSBoZWF2eSBjaGVjayBtYXJrXCIsXG4gICAgICBcIndoaXRlX2NoZWNrX21hcmtcIlxuICAgIF0sXG4gICAgdTogXCIyNzA1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFsbG90IGJveCB3aXRoIGNoZWNrXCIsXG4gICAgICBcImJhbGxvdF9ib3hfd2l0aF9jaGVja1wiXG4gICAgXSxcbiAgICB1OiBcIjI2MTEtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlYXZ5IGNoZWNrIG1hcmtcIixcbiAgICAgIFwiaGVhdnlfY2hlY2tfbWFya1wiXG4gICAgXSxcbiAgICB1OiBcIjI3MTQtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlYXZ5IG11bHRpcGxpY2F0aW9uIHhcIixcbiAgICAgIFwiaGVhdnlfbXVsdGlwbGljYXRpb25feFwiXG4gICAgXSxcbiAgICB1OiBcIjI3MTYtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNyb3NzIG1hcmtcIixcbiAgICAgIFwieFwiXG4gICAgXSxcbiAgICB1OiBcIjI3NGNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJuZWdhdGl2ZSBzcXVhcmVkIGNyb3NzIG1hcmtcIixcbiAgICAgIFwibmVnYXRpdmVfc3F1YXJlZF9jcm9zc19tYXJrXCJcbiAgICBdLFxuICAgIHU6IFwiMjc0ZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlYXZ5IHBsdXMgc2lnblwiLFxuICAgICAgXCJoZWF2eV9wbHVzX3NpZ25cIlxuICAgIF0sXG4gICAgdTogXCIyNzk1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGVhdnkgbWludXMgc2lnblwiLFxuICAgICAgXCJoZWF2eV9taW51c19zaWduXCJcbiAgICBdLFxuICAgIHU6IFwiMjc5NlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlYXZ5IGRpdmlzaW9uIHNpZ25cIixcbiAgICAgIFwiaGVhdnlfZGl2aXNpb25fc2lnblwiXG4gICAgXSxcbiAgICB1OiBcIjI3OTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjdXJseSBsb29wXCIsXG4gICAgICBcImN1cmx5X2xvb3BcIlxuICAgIF0sXG4gICAgdTogXCIyN2IwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZG91YmxlIGN1cmx5IGxvb3BcIixcbiAgICAgIFwibG9vcFwiXG4gICAgXSxcbiAgICB1OiBcIjI3YmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwYXJ0IGFsdGVybmF0aW9uIG1hcmtcIixcbiAgICAgIFwicGFydF9hbHRlcm5hdGlvbl9tYXJrXCJcbiAgICBdLFxuICAgIHU6IFwiMzAzZC1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZWlnaHQgc3Bva2VkIGFzdGVyaXNrXCIsXG4gICAgICBcImVpZ2h0X3Nwb2tlZF9hc3Rlcmlza1wiXG4gICAgXSxcbiAgICB1OiBcIjI3MzMtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVpZ2h0IHBvaW50ZWQgYmxhY2sgc3RhclwiLFxuICAgICAgXCJlaWdodF9wb2ludGVkX2JsYWNrX3N0YXJcIlxuICAgIF0sXG4gICAgdTogXCIyNzM0LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcGFya2xlXCJcbiAgICBdLFxuICAgIHU6IFwiMjc0Ny1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZG91YmxlIGV4Y2xhbWF0aW9uIG1hcmtcIixcbiAgICAgIFwiYmFuZ2JhbmdcIlxuICAgIF0sXG4gICAgdTogXCIyMDNjLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJleGNsYW1hdGlvbiBxdWVzdGlvbiBtYXJrXCIsXG4gICAgICBcImludGVycm9iYW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMjA0OS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxhY2sgcXVlc3Rpb24gbWFyayBvcm5hbWVudFwiLFxuICAgICAgXCJxdWVzdGlvblwiXG4gICAgXSxcbiAgICB1OiBcIjI3NTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3aGl0ZSBxdWVzdGlvbiBtYXJrIG9ybmFtZW50XCIsXG4gICAgICBcImdyZXlfcXVlc3Rpb25cIlxuICAgIF0sXG4gICAgdTogXCIyNzU0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2hpdGUgZXhjbGFtYXRpb24gbWFyayBvcm5hbWVudFwiLFxuICAgICAgXCJncmV5X2V4Y2xhbWF0aW9uXCJcbiAgICBdLFxuICAgIHU6IFwiMjc1NVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhlYXZ5IGV4Y2xhbWF0aW9uIG1hcmsgc3ltYm9sXCIsXG4gICAgICBcImV4Y2xhbWF0aW9uXCIsXG4gICAgICBcImhlYXZ5X2V4Y2xhbWF0aW9uX21hcmtcIlxuICAgIF0sXG4gICAgdTogXCIyNzU3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2F2eSBkYXNoXCIsXG4gICAgICBcIndhdnlfZGFzaFwiXG4gICAgXSxcbiAgICB1OiBcIjMwMzAtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNvcHlyaWdodCBzaWduXCIsXG4gICAgICBcImNvcHlyaWdodFwiXG4gICAgXSxcbiAgICB1OiBcIjAwYTktZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJlZ2lzdGVyZWQgc2lnblwiLFxuICAgICAgXCJyZWdpc3RlcmVkXCJcbiAgICBdLFxuICAgIHU6IFwiMDBhZS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHJhZGUgbWFyayBzaWduXCIsXG4gICAgICBcInRtXCJcbiAgICBdLFxuICAgIHU6IFwiMjEyMi1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaGFzaCBrZXlcIixcbiAgICAgIFwiaGFzaFwiXG4gICAgXSxcbiAgICB1OiBcIjAwMjMtZmUwZi0yMGUzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2V5Y2FwX3N0YXJcIlxuICAgIF0sXG4gICAgdTogXCIwMDJhLWZlMGYtMjBlM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtleWNhcCAwXCIsXG4gICAgICBcInplcm9cIlxuICAgIF0sXG4gICAgdTogXCIwMDMwLWZlMGYtMjBlM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtleWNhcCAxXCIsXG4gICAgICBcIm9uZVwiXG4gICAgXSxcbiAgICB1OiBcIjAwMzEtZmUwZi0yMGUzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2V5Y2FwIDJcIixcbiAgICAgIFwidHdvXCJcbiAgICBdLFxuICAgIHU6IFwiMDAzMi1mZTBmLTIwZTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJrZXljYXAgM1wiLFxuICAgICAgXCJ0aHJlZVwiXG4gICAgXSxcbiAgICB1OiBcIjAwMzMtZmUwZi0yMGUzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2V5Y2FwIDRcIixcbiAgICAgIFwiZm91clwiXG4gICAgXSxcbiAgICB1OiBcIjAwMzQtZmUwZi0yMGUzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2V5Y2FwIDVcIixcbiAgICAgIFwiZml2ZVwiXG4gICAgXSxcbiAgICB1OiBcIjAwMzUtZmUwZi0yMGUzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2V5Y2FwIDZcIixcbiAgICAgIFwic2l4XCJcbiAgICBdLFxuICAgIHU6IFwiMDAzNi1mZTBmLTIwZTNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJrZXljYXAgN1wiLFxuICAgICAgXCJzZXZlblwiXG4gICAgXSxcbiAgICB1OiBcIjAwMzctZmUwZi0yMGUzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2V5Y2FwIDhcIixcbiAgICAgIFwiZWlnaHRcIlxuICAgIF0sXG4gICAgdTogXCIwMDM4LWZlMGYtMjBlM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtleWNhcCA5XCIsXG4gICAgICBcIm5pbmVcIlxuICAgIF0sXG4gICAgdTogXCIwMDM5LWZlMGYtMjBlM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtleWNhcCB0ZW5cIixcbiAgICAgIFwia2V5Y2FwX3RlblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTFmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaHVuZHJlZCBwb2ludHMgc3ltYm9sXCIsXG4gICAgICBcIjEwMFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGFmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaW5wdXQgc3ltYm9sIGZvciBsYXRpbiBjYXBpdGFsIGxldHRlcnNcIixcbiAgICAgIFwiY2FwaXRhbF9hYmNkXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MjBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJpbnB1dCBzeW1ib2wgZm9yIGxhdGluIHNtYWxsIGxldHRlcnNcIixcbiAgICAgIFwiYWJjZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTIxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaW5wdXQgc3ltYm9sIGZvciBudW1iZXJzXCIsXG4gICAgICBcIjEyMzRcIlxuICAgIF0sXG4gICAgdTogXCIxZjUyMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImlucHV0IHN5bWJvbCBmb3Igc3ltYm9sc1wiLFxuICAgICAgXCJzeW1ib2xzXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJpbnB1dCBzeW1ib2wgZm9yIGxhdGluIGxldHRlcnNcIixcbiAgICAgIFwiYWJjXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MjRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJuZWdhdGl2ZSBzcXVhcmVkIGxhdGluIGNhcGl0YWwgbGV0dGVyIGFcIixcbiAgICAgIFwiYVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMTcwLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJuZWdhdGl2ZSBzcXVhcmVkIGFiXCIsXG4gICAgICBcImFiXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxOGVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJuZWdhdGl2ZSBzcXVhcmVkIGxhdGluIGNhcGl0YWwgbGV0dGVyIGJcIixcbiAgICAgIFwiYlwiXG4gICAgXSxcbiAgICB1OiBcIjFmMTcxLWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcXVhcmVkIGNsXCIsXG4gICAgICBcImNsXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxOTFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcXVhcmVkIGNvb2xcIixcbiAgICAgIFwiY29vbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMTkyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3F1YXJlZCBmcmVlXCIsXG4gICAgICBcImZyZWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjE5M1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImluZm9ybWF0aW9uIHNvdXJjZVwiLFxuICAgICAgXCJpbmZvcm1hdGlvbl9zb3VyY2VcIlxuICAgIF0sXG4gICAgdTogXCIyMTM5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcXVhcmVkIGlkXCIsXG4gICAgICBcImlkXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxOTRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaXJjbGVkIGxhdGluIGNhcGl0YWwgbGV0dGVyIG1cIixcbiAgICAgIFwibVwiXG4gICAgXSxcbiAgICB1OiBcIjI0YzItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgbmV3XCIsXG4gICAgICBcIm5ld1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMTk1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3F1YXJlZCBuZ1wiLFxuICAgICAgXCJuZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMTk2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmVnYXRpdmUgc3F1YXJlZCBsYXRpbiBjYXBpdGFsIGxldHRlciBvXCIsXG4gICAgICBcIm8yXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxN2UtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgb2tcIixcbiAgICAgIFwib2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjE5N1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5lZ2F0aXZlIHNxdWFyZWQgbGF0aW4gY2FwaXRhbCBsZXR0ZXIgcFwiLFxuICAgICAgXCJwYXJraW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxN2YtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgc29zXCIsXG4gICAgICBcInNvc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMTk4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3F1YXJlZCB1cCB3aXRoIGV4Y2xhbWF0aW9uIG1hcmtcIixcbiAgICAgIFwidXBcIlxuICAgIF0sXG4gICAgdTogXCIxZjE5OVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgdnNcIixcbiAgICAgIFwidnNcIlxuICAgIF0sXG4gICAgdTogXCIxZjE5YVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQga2F0YWthbmEga29rb1wiLFxuICAgICAgXCJrb2tvXCJcbiAgICBdLFxuICAgIHU6IFwiMWYyMDFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcXVhcmVkIGthdGFrYW5hIHNhXCIsXG4gICAgICBcInNhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYyMDItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgY2prIHVuaWZpZWQgaWRlb2dyYXBoLTY3MDhcIixcbiAgICAgIFwidTY3MDhcIlxuICAgIF0sXG4gICAgdTogXCIxZjIzNy1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3F1YXJlZCBjamsgdW5pZmllZCBpZGVvZ3JhcGgtNjcwOVwiLFxuICAgICAgXCJ1NjcwOVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMjM2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3F1YXJlZCBjamsgdW5pZmllZCBpZGVvZ3JhcGgtNjMwN1wiLFxuICAgICAgXCJ1NjMwN1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMjJmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2lyY2xlZCBpZGVvZ3JhcGggYWR2YW50YWdlXCIsXG4gICAgICBcImlkZW9ncmFwaF9hZHZhbnRhZ2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjI1MFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgY2prIHVuaWZpZWQgaWRlb2dyYXBoLTUyNzJcIixcbiAgICAgIFwidTUyNzJcIlxuICAgIF0sXG4gICAgdTogXCIxZjIzOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgY2prIHVuaWZpZWQgaWRlb2dyYXBoLTcxMjFcIixcbiAgICAgIFwidTcxMjFcIlxuICAgIF0sXG4gICAgdTogXCIxZjIxYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgY2prIHVuaWZpZWQgaWRlb2dyYXBoLTc5ODFcIixcbiAgICAgIFwidTc5ODFcIlxuICAgIF0sXG4gICAgdTogXCIxZjIzMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNpcmNsZWQgaWRlb2dyYXBoIGFjY2VwdFwiLFxuICAgICAgXCJhY2NlcHRcIlxuICAgIF0sXG4gICAgdTogXCIxZjI1MVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgY2prIHVuaWZpZWQgaWRlb2dyYXBoLTc1MzNcIixcbiAgICAgIFwidTc1MzNcIlxuICAgIF0sXG4gICAgdTogXCIxZjIzOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgY2prIHVuaWZpZWQgaWRlb2dyYXBoLTU0MDhcIixcbiAgICAgIFwidTU0MDhcIlxuICAgIF0sXG4gICAgdTogXCIxZjIzNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNxdWFyZWQgY2prIHVuaWZpZWQgaWRlb2dyYXBoLTdhN2FcIixcbiAgICAgIFwidTdhN2FcIlxuICAgIF0sXG4gICAgdTogXCIxZjIzM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNpcmNsZWQgaWRlb2dyYXBoIGNvbmdyYXR1bGF0aW9uXCIsXG4gICAgICBcImNvbmdyYXR1bGF0aW9uc1wiXG4gICAgXSxcbiAgICB1OiBcIjMyOTctZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNpcmNsZWQgaWRlb2dyYXBoIHNlY3JldFwiLFxuICAgICAgXCJzZWNyZXRcIlxuICAgIF0sXG4gICAgdTogXCIzMjk5LWZlMGZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcXVhcmVkIGNqayB1bmlmaWVkIGlkZW9ncmFwaC01NWI2XCIsXG4gICAgICBcInU1NWI2XCJcbiAgICBdLFxuICAgIHU6IFwiMWYyM2FcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcXVhcmVkIGNqayB1bmlmaWVkIGlkZW9ncmFwaC02ZTgwXCIsXG4gICAgICBcInU2ZTgwXCJcbiAgICBdLFxuICAgIHU6IFwiMWYyMzVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayBzbWFsbCBzcXVhcmVcIixcbiAgICAgIFwiYmxhY2tfc21hbGxfc3F1YXJlXCJcbiAgICBdLFxuICAgIHU6IFwiMjVhYS1mZTBmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2hpdGUgc21hbGwgc3F1YXJlXCIsXG4gICAgICBcIndoaXRlX3NtYWxsX3NxdWFyZVwiXG4gICAgXSxcbiAgICB1OiBcIjI1YWItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndoaXRlIG1lZGl1bSBzcXVhcmVcIixcbiAgICAgIFwid2hpdGVfbWVkaXVtX3NxdWFyZVwiXG4gICAgXSxcbiAgICB1OiBcIjI1ZmItZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJsYWNrIG1lZGl1bSBzcXVhcmVcIixcbiAgICAgIFwiYmxhY2tfbWVkaXVtX3NxdWFyZVwiXG4gICAgXSxcbiAgICB1OiBcIjI1ZmMtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndoaXRlIG1lZGl1bSBzbWFsbCBzcXVhcmVcIixcbiAgICAgIFwid2hpdGVfbWVkaXVtX3NtYWxsX3NxdWFyZVwiXG4gICAgXSxcbiAgICB1OiBcIjI1ZmRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJibGFjayBtZWRpdW0gc21hbGwgc3F1YXJlXCIsXG4gICAgICBcImJsYWNrX21lZGl1bV9zbWFsbF9zcXVhcmVcIlxuICAgIF0sXG4gICAgdTogXCIyNWZlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxhY2sgbGFyZ2Ugc3F1YXJlXCIsXG4gICAgICBcImJsYWNrX2xhcmdlX3NxdWFyZVwiXG4gICAgXSxcbiAgICB1OiBcIjJiMWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3aGl0ZSBsYXJnZSBzcXVhcmVcIixcbiAgICAgIFwid2hpdGVfbGFyZ2Vfc3F1YXJlXCJcbiAgICBdLFxuICAgIHU6IFwiMmIxY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxhcmdlIG9yYW5nZSBkaWFtb25kXCIsXG4gICAgICBcImxhcmdlX29yYW5nZV9kaWFtb25kXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MzZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsYXJnZSBibHVlIGRpYW1vbmRcIixcbiAgICAgIFwibGFyZ2VfYmx1ZV9kaWFtb25kXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MzdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzbWFsbCBvcmFuZ2UgZGlhbW9uZFwiLFxuICAgICAgXCJzbWFsbF9vcmFuZ2VfZGlhbW9uZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTM4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic21hbGwgYmx1ZSBkaWFtb25kXCIsXG4gICAgICBcInNtYWxsX2JsdWVfZGlhbW9uZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTM5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidXAtcG9pbnRpbmcgcmVkIHRyaWFuZ2xlXCIsXG4gICAgICBcInNtYWxsX3JlZF90cmlhbmdsZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTNhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZG93bi1wb2ludGluZyByZWQgdHJpYW5nbGVcIixcbiAgICAgIFwic21hbGxfcmVkX3RyaWFuZ2xlX2Rvd25cIlxuICAgIF0sXG4gICAgdTogXCIxZjUzYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRpYW1vbmQgc2hhcGUgd2l0aCBhIGRvdCBpbnNpZGVcIixcbiAgICAgIFwiZGlhbW9uZF9zaGFwZV93aXRoX2FfZG90X2luc2lkZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNGEwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicmFkaW8gYnV0dG9uXCIsXG4gICAgICBcInJhZGlvX2J1dHRvblwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTE4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmxhY2sgc3F1YXJlIGJ1dHRvblwiLFxuICAgICAgXCJibGFja19zcXVhcmVfYnV0dG9uXCJcbiAgICBdLFxuICAgIHU6IFwiMWY1MzJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3aGl0ZSBzcXVhcmUgYnV0dG9uXCIsXG4gICAgICBcIndoaXRlX3NxdWFyZV9idXR0b25cIlxuICAgIF0sXG4gICAgdTogXCIxZjUzM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1lZGl1bSB3aGl0ZSBjaXJjbGVcIixcbiAgICAgIFwid2hpdGVfY2lyY2xlXCJcbiAgICBdLFxuICAgIHU6IFwiMjZhYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1lZGl1bSBibGFjayBjaXJjbGVcIixcbiAgICAgIFwiYmxhY2tfY2lyY2xlXCJcbiAgICBdLFxuICAgIHU6IFwiMjZhYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxhcmdlIHJlZCBjaXJjbGVcIixcbiAgICAgIFwicmVkX2NpcmNsZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmNTM0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGFyZ2UgYmx1ZSBjaXJjbGVcIixcbiAgICAgIFwibGFyZ2VfYmx1ZV9jaXJjbGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjUzNVwiXG4gIH1cbl07XG5jb25zdCBmbGFncyQxID0gW1xuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGVxdWVyZWQgZmxhZ1wiLFxuICAgICAgXCJjaGVja2VyZWRfZmxhZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2MxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHJpYW5ndWxhciBmbGFnIG9uIHBvc3RcIixcbiAgICAgIFwidHJpYW5ndWxhcl9mbGFnX29uX3Bvc3RcIlxuICAgIF0sXG4gICAgdTogXCIxZjZhOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNyb3NzZWQgZmxhZ3NcIixcbiAgICAgIFwiY3Jvc3NlZF9mbGFnc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMzhjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2F2aW5nIGJsYWNrIGZsYWdcIixcbiAgICAgIFwid2F2aW5nX2JsYWNrX2ZsYWdcIlxuICAgIF0sXG4gICAgdTogXCIxZjNmNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIndhdmluZ193aGl0ZV9mbGFnXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZjMtZmUwZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJhaW5ib3ctZmxhZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmM2YzLWZlMGYtMjAwZC0xZjMwOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImFzY2Vuc2lvbiBpc2xhbmQgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWFjXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTYtMWYxZThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhbmRvcnJhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1hZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU2LTFmMWU5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidW5pdGVkIGFyYWIgZW1pcmF0ZXMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWFlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTYtMWYxZWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhZmdoYW5pc3RhbiBmbGFnXCIsXG4gICAgICBcImZsYWctYWZcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNi0xZjFlYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImFudGlndWEgJiBiYXJidWRhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1hZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU2LTFmMWVjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYW5ndWlsbGEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWFpXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTYtMWYxZWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhbGJhbmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1hbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU2LTFmMWYxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYXJtZW5pYSBmbGFnXCIsXG4gICAgICBcImZsYWctYW1cIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNi0xZjFmMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImFuZ29sYSBmbGFnXCIsXG4gICAgICBcImZsYWctYW9cIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNi0xZjFmNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImFudGFyY3RpY2EgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWFxXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTYtMWYxZjZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhcmdlbnRpbmEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWFyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTYtMWYxZjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhbWVyaWNhbiBzYW1vYSBmbGFnXCIsXG4gICAgICBcImZsYWctYXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNi0xZjFmOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImF1c3RyaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWF0XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTYtMWYxZjlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhdXN0cmFsaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWF1XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTYtMWYxZmFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJhcnViYSBmbGFnXCIsXG4gICAgICBcImZsYWctYXdcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNi0xZjFmY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIlxceEU1bGFuZCBpc2xhbmRzIGZsYWdcIixcbiAgICAgIFwiZmxhZy1heFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU2LTFmMWZkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYXplcmJhaWphbiBmbGFnXCIsXG4gICAgICBcImZsYWctYXpcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNi0xZjFmZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJvc25pYSAmIGhlcnplZ292aW5hIGZsYWdcIixcbiAgICAgIFwiZmxhZy1iYVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU3LTFmMWU2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFyYmFkb3MgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWJiXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTctMWYxZTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiYW5nbGFkZXNoIGZsYWdcIixcbiAgICAgIFwiZmxhZy1iZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU3LTFmMWU5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmVsZ2l1bSBmbGFnXCIsXG4gICAgICBcImZsYWctYmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNy0xZjFlYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJ1cmtpbmEgZmFzbyBmbGFnXCIsXG4gICAgICBcImZsYWctYmZcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNy0xZjFlYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJ1bGdhcmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1iZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU3LTFmMWVjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFocmFpbiBmbGFnXCIsXG4gICAgICBcImZsYWctYmhcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNy0xZjFlZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJ1cnVuZGkgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWJpXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTctMWYxZWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiZW5pbiBmbGFnXCIsXG4gICAgICBcImZsYWctYmpcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNy0xZjFlZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInN0LiBiYXJ0aFxceEU5bGVteSBmbGFnXCIsXG4gICAgICBcImZsYWctYmxcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNy0xZjFmMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJlcm11ZGEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWJtXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTctMWYxZjJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJicnVuZWkgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWJuXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTctMWYxZjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJib2xpdmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1ib1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU3LTFmMWY0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2FyaWJiZWFuIG5ldGhlcmxhbmRzIGZsYWdcIixcbiAgICAgIFwiZmxhZy1icVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU3LTFmMWY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnJhemlsIGZsYWdcIixcbiAgICAgIFwiZmxhZy1iclwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU3LTFmMWY3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYmFoYW1hcyBmbGFnXCIsXG4gICAgICBcImZsYWctYnNcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNy0xZjFmOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJodXRhbiBmbGFnXCIsXG4gICAgICBcImZsYWctYnRcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNy0xZjFmOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJvdXZldCBpc2xhbmQgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWJ2XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTctMWYxZmJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJib3Rzd2FuYSBmbGFnXCIsXG4gICAgICBcImZsYWctYndcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlNy0xZjFmY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImJlbGFydXMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWJ5XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTctMWYxZmVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJiZWxpemUgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWJ6XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTctMWYxZmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjYW5hZGEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWNhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTgtMWYxZTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb2NvcyAoa2VlbGluZykgaXNsYW5kcyBmbGFnXCIsXG4gICAgICBcImZsYWctY2NcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOC0xZjFlOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNvbmdvIC0ga2luc2hhc2EgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWNkXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTgtMWYxZTlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjZW50cmFsIGFmcmljYW4gcmVwdWJsaWMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWNmXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTgtMWYxZWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb25nbyAtIGJyYXp6YXZpbGxlIGZsYWdcIixcbiAgICAgIFwiZmxhZy1jZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU4LTFmMWVjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3dpdHplcmxhbmQgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWNoXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTgtMWYxZWRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjXFx4RjR0ZSBkXFx1MjAxOWl2b2lyZSBmbGFnXCIsXG4gICAgICBcImZsYWctY2lcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOC0xZjFlZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNvb2sgaXNsYW5kcyBmbGFnXCIsXG4gICAgICBcImZsYWctY2tcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOC0xZjFmMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNoaWxlIGZsYWdcIixcbiAgICAgIFwiZmxhZy1jbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU4LTFmMWYxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2FtZXJvb24gZmxhZ1wiLFxuICAgICAgXCJmbGFnLWNtXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTgtMWYxZjJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGluYSBmbGFnXCIsXG4gICAgICBcImNuXCIsXG4gICAgICBcImZsYWctY25cIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOC0xZjFmM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNvbG9tYmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1jb1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU4LTFmMWY0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY2xpcHBlcnRvbiBpc2xhbmQgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWNwXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTgtMWYxZjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjb3N0YSByaWNhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1jclwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU4LTFmMWY3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY3ViYSBmbGFnXCIsXG4gICAgICBcImZsYWctY3VcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOC0xZjFmYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNhcGUgdmVyZGUgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWN2XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTgtMWYxZmJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjdXJhXFx4RTdhbyBmbGFnXCIsXG4gICAgICBcImZsYWctY3dcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOC0xZjFmY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNocmlzdG1hcyBpc2xhbmQgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWN4XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTgtMWYxZmRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjeXBydXMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWN5XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZTgtMWYxZmVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjemVjaGlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1jelwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU4LTFmMWZmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ2VybWFueSBmbGFnXCIsXG4gICAgICBcImRlXCIsXG4gICAgICBcImZsYWctZGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOS0xZjFlYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRpZWdvIGdhcmNpYSBmbGFnXCIsXG4gICAgICBcImZsYWctZGdcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOS0xZjFlY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRqaWJvdXRpIGZsYWdcIixcbiAgICAgIFwiZmxhZy1kalwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU5LTFmMWVmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZGVubWFyayBmbGFnXCIsXG4gICAgICBcImZsYWctZGtcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOS0xZjFmMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImRvbWluaWNhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1kbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU5LTFmMWYyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZG9taW5pY2FuIHJlcHVibGljIGZsYWdcIixcbiAgICAgIFwiZmxhZy1kb1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWU5LTFmMWY0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYWxnZXJpYSBmbGFnXCIsXG4gICAgICBcImZsYWctZHpcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlOS0xZjFmZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNldXRhICYgbWVsaWxsYSBmbGFnXCIsXG4gICAgICBcImZsYWctZWFcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYS0xZjFlNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVjdWFkb3IgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWVjXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWEtMWYxZThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJlc3RvbmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1lZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVhLTFmMWVhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZWd5cHQgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWVnXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWEtMWYxZWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ3ZXN0ZXJuIHNhaGFyYSBmbGFnXCIsXG4gICAgICBcImZsYWctZWhcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYS0xZjFlZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVyaXRyZWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWVyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWEtMWYxZjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzcGFpbiBmbGFnXCIsXG4gICAgICBcImVzXCIsXG4gICAgICBcImZsYWctZXNcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYS0xZjFmOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImV0aGlvcGlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1ldFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVhLTFmMWY5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZXVyb3BlYW4gdW5pb24gZmxhZ1wiLFxuICAgICAgXCJmbGFnLWV1XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWEtMWYxZmFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJmaW5sYW5kIGZsYWdcIixcbiAgICAgIFwiZmxhZy1maVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWViLTFmMWVlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmlqaSBmbGFnXCIsXG4gICAgICBcImZsYWctZmpcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYi0xZjFlZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZhbGtsYW5kIGlzbGFuZHMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWZrXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWItMWYxZjBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtaWNyb25lc2lhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1mbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWViLTFmMWYyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZmFyb2UgaXNsYW5kcyBmbGFnXCIsXG4gICAgICBcImZsYWctZm9cIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYi0xZjFmNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZyYW5jZSBmbGFnXCIsXG4gICAgICBcImZyXCIsXG4gICAgICBcImZsYWctZnJcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYi0xZjFmN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdhYm9uIGZsYWdcIixcbiAgICAgIFwiZmxhZy1nYVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWU2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidW5pdGVkIGtpbmdkb20gZmxhZ1wiLFxuICAgICAgXCJnYlwiLFxuICAgICAgXCJ1a1wiLFxuICAgICAgXCJmbGFnLWdiXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWMtMWYxZTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJncmVuYWRhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1nZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWU5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ2VvcmdpYSBmbGFnXCIsXG4gICAgICBcImZsYWctZ2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYy0xZjFlYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZyZW5jaCBndWlhbmEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWdmXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWMtMWYxZWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJndWVybnNleSBmbGFnXCIsXG4gICAgICBcImZsYWctZ2dcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYy0xZjFlY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImdoYW5hIGZsYWdcIixcbiAgICAgIFwiZmxhZy1naFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWVkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ2licmFsdGFyIGZsYWdcIixcbiAgICAgIFwiZmxhZy1naVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWVlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3JlZW5sYW5kIGZsYWdcIixcbiAgICAgIFwiZmxhZy1nbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWYxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ2FtYmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1nbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWYyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3VpbmVhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1nblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWYzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3VhZGVsb3VwZSBmbGFnXCIsXG4gICAgICBcImZsYWctZ3BcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYy0xZjFmNVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVxdWF0b3JpYWwgZ3VpbmVhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1ncVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWY2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3JlZWNlIGZsYWdcIixcbiAgICAgIFwiZmxhZy1nclwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWY3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic291dGggZ2VvcmdpYSAmIHNvdXRoIHNhbmR3aWNoIGlzbGFuZHMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWdzXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWMtMWYxZjhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJndWF0ZW1hbGEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWd0XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWMtMWYxZjlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJndWFtIGZsYWdcIixcbiAgICAgIFwiZmxhZy1ndVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVjLTFmMWZhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZ3VpbmVhLWJpc3NhdSBmbGFnXCIsXG4gICAgICBcImZsYWctZ3dcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYy0xZjFmY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImd1eWFuYSBmbGFnXCIsXG4gICAgICBcImZsYWctZ3lcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlYy0xZjFmZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImhvbmcga29uZyBzYXIgY2hpbmEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWhrXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWQtMWYxZjBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoZWFyZCAmIG1jZG9uYWxkIGlzbGFuZHMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWhtXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWQtMWYxZjJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJob25kdXJhcyBmbGFnXCIsXG4gICAgICBcImZsYWctaG5cIlxuICAgIF0sXG4gICAgdTogXCIxZjFlZC0xZjFmM1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNyb2F0aWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWhyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWQtMWYxZjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJoYWl0aSBmbGFnXCIsXG4gICAgICBcImZsYWctaHRcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlZC0xZjFmOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImh1bmdhcnkgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWh1XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWQtMWYxZmFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjYW5hcnkgaXNsYW5kcyBmbGFnXCIsXG4gICAgICBcImZsYWctaWNcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlZS0xZjFlOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImluZG9uZXNpYSBmbGFnXCIsXG4gICAgICBcImZsYWctaWRcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlZS0xZjFlOVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImlyZWxhbmQgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWllXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWUtMWYxZWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJpc3JhZWwgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWlsXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWUtMWYxZjFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJpc2xlIG9mIG1hbiBmbGFnXCIsXG4gICAgICBcImZsYWctaW1cIlxuICAgIF0sXG4gICAgdTogXCIxZjFlZS0xZjFmMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImluZGlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1pblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVlLTFmMWYzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiYnJpdGlzaCBpbmRpYW4gb2NlYW4gdGVycml0b3J5IGZsYWdcIixcbiAgICAgIFwiZmxhZy1pb1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVlLTFmMWY0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaXJhcSBmbGFnXCIsXG4gICAgICBcImZsYWctaXFcIlxuICAgIF0sXG4gICAgdTogXCIxZjFlZS0xZjFmNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImlyYW4gZmxhZ1wiLFxuICAgICAgXCJmbGFnLWlyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWUtMWYxZjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJpY2VsYW5kIGZsYWdcIixcbiAgICAgIFwiZmxhZy1pc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVlLTFmMWY4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiaXRhbHkgZmxhZ1wiLFxuICAgICAgXCJpdFwiLFxuICAgICAgXCJmbGFnLWl0XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWUtMWYxZjlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJqZXJzZXkgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWplXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWYtMWYxZWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJqYW1haWNhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1qbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVmLTFmMWYyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiam9yZGFuIGZsYWdcIixcbiAgICAgIFwiZmxhZy1qb1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWVmLTFmMWY0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiamFwYW4gZmxhZ1wiLFxuICAgICAgXCJqcFwiLFxuICAgICAgXCJmbGFnLWpwXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZWYtMWYxZjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJrZW55YSBmbGFnXCIsXG4gICAgICBcImZsYWcta2VcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMC0xZjFlYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImt5cmd5enN0YW4gZmxhZ1wiLFxuICAgICAgXCJmbGFnLWtnXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjAtMWYxZWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjYW1ib2RpYSBmbGFnXCIsXG4gICAgICBcImZsYWcta2hcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMC0xZjFlZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImtpcmliYXRpIGZsYWdcIixcbiAgICAgIFwiZmxhZy1raVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYwLTFmMWVlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiY29tb3JvcyBmbGFnXCIsXG4gICAgICBcImZsYWcta21cIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMC0xZjFmMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInN0LiBraXR0cyAmIG5ldmlzIGZsYWdcIixcbiAgICAgIFwiZmxhZy1rblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYwLTFmMWYzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibm9ydGgga29yZWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWtwXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjAtMWYxZjVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzb3V0aCBrb3JlYSBmbGFnXCIsXG4gICAgICBcImtyXCIsXG4gICAgICBcImZsYWcta3JcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMC0xZjFmN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImt1d2FpdCBmbGFnXCIsXG4gICAgICBcImZsYWcta3dcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMC0xZjFmY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImNheW1hbiBpc2xhbmRzIGZsYWdcIixcbiAgICAgIFwiZmxhZy1reVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYwLTFmMWZlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwia2F6YWtoc3RhbiBmbGFnXCIsXG4gICAgICBcImZsYWcta3pcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMC0xZjFmZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxhb3MgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWxhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjEtMWYxZTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsZWJhbm9uIGZsYWdcIixcbiAgICAgIFwiZmxhZy1sYlwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYxLTFmMWU3XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3QuIGx1Y2lhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1sY1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYxLTFmMWU4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGllY2h0ZW5zdGVpbiBmbGFnXCIsXG4gICAgICBcImZsYWctbGlcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMS0xZjFlZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNyaSBsYW5rYSBmbGFnXCIsXG4gICAgICBcImZsYWctbGtcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMS0xZjFmMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxpYmVyaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWxyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjEtMWYxZjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJsZXNvdGhvIGZsYWdcIixcbiAgICAgIFwiZmxhZy1sc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYxLTFmMWY4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibGl0aHVhbmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1sdFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYxLTFmMWY5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibHV4ZW1ib3VyZyBmbGFnXCIsXG4gICAgICBcImZsYWctbHVcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMS0xZjFmYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxhdHZpYSBmbGFnXCIsXG4gICAgICBcImZsYWctbHZcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMS0xZjFmYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImxpYnlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1seVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYxLTFmMWZlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibW9yb2NjbyBmbGFnXCIsXG4gICAgICBcImZsYWctbWFcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFlNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vbmFjbyBmbGFnXCIsXG4gICAgICBcImZsYWctbWNcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFlOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vbGRvdmEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW1kXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjItMWYxZTlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb250ZW5lZ3JvIGZsYWdcIixcbiAgICAgIFwiZmxhZy1tZVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYyLTFmMWVhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3QuIG1hcnRpbiBmbGFnXCIsXG4gICAgICBcImZsYWctbWZcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFlYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hZGFnYXNjYXIgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW1nXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjItMWYxZWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYXJzaGFsbCBpc2xhbmRzIGZsYWdcIixcbiAgICAgIFwiZmxhZy1taFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYyLTFmMWVkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFjZWRvbmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1ta1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYyLTFmMWYwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsaSBmbGFnXCIsXG4gICAgICBcImZsYWctbWxcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFmMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm15YW5tYXIgKGJ1cm1hKSBmbGFnXCIsXG4gICAgICBcImZsYWctbW1cIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFmMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1vbmdvbGlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1tblwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYyLTFmMWYzXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFjYXUgc2FyIGNoaW5hIGZsYWdcIixcbiAgICAgIFwiZmxhZy1tb1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYyLTFmMWY0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibm9ydGhlcm4gbWFyaWFuYSBpc2xhbmRzIGZsYWdcIixcbiAgICAgIFwiZmxhZy1tcFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYyLTFmMWY1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFydGluaXF1ZSBmbGFnXCIsXG4gICAgICBcImZsYWctbXFcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFmNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hdXJpdGFuaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW1yXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjItMWYxZjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtb250c2VycmF0IGZsYWdcIixcbiAgICAgIFwiZmxhZy1tc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYyLTFmMWY4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibWFsdGEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW10XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjItMWYxZjlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYXVyaXRpdXMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW11XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjItMWYxZmFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJtYWxkaXZlcyBmbGFnXCIsXG4gICAgICBcImZsYWctbXZcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFmYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbGF3aSBmbGFnXCIsXG4gICAgICBcImZsYWctbXdcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFmY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1leGljbyBmbGFnXCIsXG4gICAgICBcImZsYWctbXhcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFmZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1hbGF5c2lhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1teVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYyLTFmMWZlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibW96YW1iaXF1ZSBmbGFnXCIsXG4gICAgICBcImZsYWctbXpcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMi0xZjFmZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5hbWliaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW5hXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjMtMWYxZTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJuZXcgY2FsZWRvbmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1uY1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYzLTFmMWU4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmlnZXIgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW5lXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjMtMWYxZWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJub3Jmb2xrIGlzbGFuZCBmbGFnXCIsXG4gICAgICBcImZsYWctbmZcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMy0xZjFlYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5pZ2VyaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW5nXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjMtMWYxZWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJuaWNhcmFndWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW5pXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjMtMWYxZWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJuZXRoZXJsYW5kcyBmbGFnXCIsXG4gICAgICBcImZsYWctbmxcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMy0xZjFmMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5vcndheSBmbGFnXCIsXG4gICAgICBcImZsYWctbm9cIlxuICAgIF0sXG4gICAgdTogXCIxZjFmMy0xZjFmNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm5lcGFsIGZsYWdcIixcbiAgICAgIFwiZmxhZy1ucFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYzLTFmMWY1XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmF1cnUgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW5yXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjMtMWYxZjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJuaXVlIGZsYWdcIixcbiAgICAgIFwiZmxhZy1udVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWYzLTFmMWZhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwibmV3IHplYWxhbmQgZmxhZ1wiLFxuICAgICAgXCJmbGFnLW56XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjMtMWYxZmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJvbWFuIGZsYWdcIixcbiAgICAgIFwiZmxhZy1vbVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY0LTFmMWYyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGFuYW1hIGZsYWdcIixcbiAgICAgIFwiZmxhZy1wYVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY1LTFmMWU2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGVydSBmbGFnXCIsXG4gICAgICBcImZsYWctcGVcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmNS0xZjFlYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImZyZW5jaCBwb2x5bmVzaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXBmXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjUtMWYxZWJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwYXB1YSBuZXcgZ3VpbmVhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1wZ1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY1LTFmMWVjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicGhpbGlwcGluZXMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXBoXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjUtMWYxZWRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwYWtpc3RhbiBmbGFnXCIsXG4gICAgICBcImZsYWctcGtcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmNS0xZjFmMFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBvbGFuZCBmbGFnXCIsXG4gICAgICBcImZsYWctcGxcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmNS0xZjFmMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInN0LiBwaWVycmUgJiBtaXF1ZWxvbiBmbGFnXCIsXG4gICAgICBcImZsYWctcG1cIlxuICAgIF0sXG4gICAgdTogXCIxZjFmNS0xZjFmMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBpdGNhaXJuIGlzbGFuZHMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXBuXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjUtMWYxZjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwdWVydG8gcmljbyBmbGFnXCIsXG4gICAgICBcImZsYWctcHJcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmNS0xZjFmN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBhbGVzdGluaWFuIHRlcnJpdG9yaWVzIGZsYWdcIixcbiAgICAgIFwiZmxhZy1wc1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY1LTFmMWY4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicG9ydHVnYWwgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXB0XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjUtMWYxZjlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJwYWxhdSBmbGFnXCIsXG4gICAgICBcImZsYWctcHdcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmNS0xZjFmY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInBhcmFndWF5IGZsYWdcIixcbiAgICAgIFwiZmxhZy1weVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY1LTFmMWZlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwicWF0YXIgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXFhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjYtMWYxZTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyXFx4RTl1bmlvbiBmbGFnXCIsXG4gICAgICBcImZsYWctcmVcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmNy0xZjFlYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInJvbWFuaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXJvXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjctMWYxZjRcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzZXJiaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXJzXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjctMWYxZjhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJydXNzaWEgZmxhZ1wiLFxuICAgICAgXCJydVwiLFxuICAgICAgXCJmbGFnLXJ1XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjctMWYxZmFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJyd2FuZGEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXJ3XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjctMWYxZmNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzYXVkaSBhcmFiaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXNhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjgtMWYxZTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzb2xvbW9uIGlzbGFuZHMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXNiXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjgtMWYxZTdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzZXljaGVsbGVzIGZsYWdcIixcbiAgICAgIFwiZmxhZy1zY1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY4LTFmMWU4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3VkYW4gZmxhZ1wiLFxuICAgICAgXCJmbGFnLXNkXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjgtMWYxZTlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzd2VkZW4gZmxhZ1wiLFxuICAgICAgXCJmbGFnLXNlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjgtMWYxZWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzaW5nYXBvcmUgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXNnXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjgtMWYxZWNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdC4gaGVsZW5hIGZsYWdcIixcbiAgICAgIFwiZmxhZy1zaFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY4LTFmMWVkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2xvdmVuaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXNpXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjgtMWYxZWVcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdmFsYmFyZCAmIGphbiBtYXllbiBmbGFnXCIsXG4gICAgICBcImZsYWctc2pcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOC0xZjFlZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNsb3Zha2lhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1za1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY4LTFmMWYwXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2llcnJhIGxlb25lIGZsYWdcIixcbiAgICAgIFwiZmxhZy1zbFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY4LTFmMWYxXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2FuIG1hcmlubyBmbGFnXCIsXG4gICAgICBcImZsYWctc21cIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOC0xZjFmMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNlbmVnYWwgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXNuXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjgtMWYxZjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzb21hbGlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1zb1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY4LTFmMWY0XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3VyaW5hbWUgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXNyXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjgtMWYxZjdcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzb3V0aCBzdWRhbiBmbGFnXCIsXG4gICAgICBcImZsYWctc3NcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOC0xZjFmOFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNcXHhFM28gdG9tXFx4RTkgJiBwclxceEVEbmNpcGUgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXN0XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjgtMWYxZjlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJlbCBzYWx2YWRvciBmbGFnXCIsXG4gICAgICBcImZsYWctc3ZcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOC0xZjFmYlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNpbnQgbWFhcnRlbiBmbGFnXCIsXG4gICAgICBcImZsYWctc3hcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOC0xZjFmZFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInN5cmlhIGZsYWdcIixcbiAgICAgIFwiZmxhZy1zeVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY4LTFmMWZlXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic3dhemlsYW5kIGZsYWdcIixcbiAgICAgIFwiZmxhZy1zelwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY4LTFmMWZmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHJpc3RhbiBkYSBjdW5oYSBmbGFnXCIsXG4gICAgICBcImZsYWctdGFcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOS0xZjFlNlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInR1cmtzICYgY2FpY29zIGlzbGFuZHMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXRjXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjktMWYxZThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJjaGFkIGZsYWdcIixcbiAgICAgIFwiZmxhZy10ZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY5LTFmMWU5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwiZnJlbmNoIHNvdXRoZXJuIHRlcnJpdG9yaWVzIGZsYWdcIixcbiAgICAgIFwiZmxhZy10ZlwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY5LTFmMWViXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidG9nbyBmbGFnXCIsXG4gICAgICBcImZsYWctdGdcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOS0xZjFlY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRoYWlsYW5kIGZsYWdcIixcbiAgICAgIFwiZmxhZy10aFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY5LTFmMWVkXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidGFqaWtpc3RhbiBmbGFnXCIsXG4gICAgICBcImZsYWctdGpcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOS0xZjFlZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRva2VsYXUgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXRrXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjktMWYxZjBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0aW1vci1sZXN0ZSBmbGFnXCIsXG4gICAgICBcImZsYWctdGxcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOS0xZjFmMVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInR1cmttZW5pc3RhbiBmbGFnXCIsXG4gICAgICBcImZsYWctdG1cIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOS0xZjFmMlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInR1bmlzaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXRuXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjktMWYxZjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ0b25nYSBmbGFnXCIsXG4gICAgICBcImZsYWctdG9cIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOS0xZjFmNFwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInR1cmtleSBmbGFnXCIsXG4gICAgICBcImZsYWctdHJcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmOS0xZjFmN1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInRyaW5pZGFkICYgdG9iYWdvIGZsYWdcIixcbiAgICAgIFwiZmxhZy10dFwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY5LTFmMWY5XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidHV2YWx1IGZsYWdcIixcbiAgICAgIFwiZmxhZy10dlwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY5LTFmMWZiXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidGFpd2FuIGZsYWdcIixcbiAgICAgIFwiZmxhZy10d1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWY5LTFmMWZjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidGFuemFuaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXR6XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZjktMWYxZmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ1a3JhaW5lIGZsYWdcIixcbiAgICAgIFwiZmxhZy11YVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWZhLTFmMWU2XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidWdhbmRhIGZsYWdcIixcbiAgICAgIFwiZmxhZy11Z1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWZhLTFmMWVjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidS5zLiBvdXRseWluZyBpc2xhbmRzIGZsYWdcIixcbiAgICAgIFwiZmxhZy11bVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWZhLTFmMWYyXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidW5pdGVkIG5hdGlvbnMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXVuXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmEtMWYxZjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ1bml0ZWQgc3RhdGVzIGZsYWdcIixcbiAgICAgIFwidXNcIixcbiAgICAgIFwiZmxhZy11c1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWZhLTFmMWY4XCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidXJ1Z3VheSBmbGFnXCIsXG4gICAgICBcImZsYWctdXlcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmYS0xZjFmZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInV6YmVraXN0YW4gZmxhZ1wiLFxuICAgICAgXCJmbGFnLXV6XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmEtMWYxZmZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ2YXRpY2FuIGNpdHkgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXZhXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmItMWYxZTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzdC4gdmluY2VudCAmIGdyZW5hZGluZXMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXZjXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmItMWYxZThcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ2ZW5lenVlbGEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXZlXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmItMWYxZWFcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJicml0aXNoIHZpcmdpbiBpc2xhbmRzIGZsYWdcIixcbiAgICAgIFwiZmxhZy12Z1wiXG4gICAgXSxcbiAgICB1OiBcIjFmMWZiLTFmMWVjXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwidS5zLiB2aXJnaW4gaXNsYW5kcyBmbGFnXCIsXG4gICAgICBcImZsYWctdmlcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmYi0xZjFlZVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInZpZXRuYW0gZmxhZ1wiLFxuICAgICAgXCJmbGFnLXZuXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmItMWYxZjNcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ2YW51YXR1IGZsYWdcIixcbiAgICAgIFwiZmxhZy12dVwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWZiLTFmMWZhXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2FsbGlzICYgZnV0dW5hIGZsYWdcIixcbiAgICAgIFwiZmxhZy13ZlwiXG4gICAgXSxcbiAgICB1OiBcIjFmMWZjLTFmMWViXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwic2Ftb2EgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXdzXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmMtMWYxZjhcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJrb3Nvdm8gZmxhZ1wiLFxuICAgICAgXCJmbGFnLXhrXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmQtMWYxZjBcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ5ZW1lbiBmbGFnXCIsXG4gICAgICBcImZsYWcteWVcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmZS0xZjFlYVwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcIm1heW90dGUgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXl0XCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmUtMWYxZjlcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJzb3V0aCBhZnJpY2EgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXphXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmYtMWYxZTZcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ6YW1iaWEgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXptXCJcbiAgICBdLFxuICAgIHU6IFwiMWYxZmYtMWYxZjJcIlxuICB9LFxuICB7XG4gICAgbjogW1xuICAgICAgXCJ6aW1iYWJ3ZSBmbGFnXCIsXG4gICAgICBcImZsYWctendcIlxuICAgIF0sXG4gICAgdTogXCIxZjFmZi0xZjFmY1wiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcImVuZ2xhbmQgZmxhZ1wiLFxuICAgICAgXCJmbGFnLWVuZ2xhbmRcIlxuICAgIF0sXG4gICAgdTogXCIxZjNmNC1lMDA2Ny1lMDA2Mi1lMDA2NS1lMDA2ZS1lMDA2Ny1lMDA3ZlwiXG4gIH0sXG4gIHtcbiAgICBuOiBbXG4gICAgICBcInNjb3RsYW5kIGZsYWdcIixcbiAgICAgIFwiZmxhZy1zY290bGFuZFwiXG4gICAgXSxcbiAgICB1OiBcIjFmM2Y0LWUwMDY3LWUwMDYyLWUwMDczLWUwMDYzLWUwMDc0LWUwMDdmXCJcbiAgfSxcbiAge1xuICAgIG46IFtcbiAgICAgIFwid2FsZXMgZmxhZ1wiLFxuICAgICAgXCJmbGFnLXdhbGVzXCJcbiAgICBdLFxuICAgIHU6IFwiMWYzZjQtZTAwNjctZTAwNjItZTAwNzctZTAwNmMtZTAwNzMtZTAwN2ZcIlxuICB9XG5dO1xudmFyIGVtb2ppcyA9IHtcbiAgc21pbGV5c19wZW9wbGU6IHNtaWxleXNfcGVvcGxlJDEsXG4gIGFuaW1hbHNfbmF0dXJlOiBhbmltYWxzX25hdHVyZSQxLFxuICBmb29kX2RyaW5rOiBmb29kX2RyaW5rJDEsXG4gIGFjdGl2aXRpZXM6IGFjdGl2aXRpZXMkMSxcbiAgdHJhdmVsX3BsYWNlczogdHJhdmVsX3BsYWNlcyQxLFxuICBvYmplY3RzOiBvYmplY3RzJDEsXG4gIHN5bWJvbHM6IHN5bWJvbHMkMSxcbiAgZmxhZ3M6IGZsYWdzJDFcbn07XG52YXIgX2dyb3VwcyA9IFtcbiAge1xuICAgIGtleTogXCJyZWNlbnRcIixcbiAgICB0aXRsZTogXCJSZWNlbnRseSBVc2VkXCIsXG4gICAgdTogXCIxZjU1MVwiXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwic21pbGV5c19wZW9wbGVcIixcbiAgICB0aXRsZTogXCJTbWlsZXMgJiBQZW9wbGVcIixcbiAgICB1OiBcIjFmNjAwXCJcbiAgfSxcbiAge1xuICAgIGtleTogXCJhbmltYWxzX25hdHVyZVwiLFxuICAgIHRpdGxlOiBcIkFuaW1hbHMgJiBOYXR1cmVcIixcbiAgICB1OiBcIjFGNDMxXCJcbiAgfSxcbiAge1xuICAgIGtleTogXCJmb29kX2RyaW5rXCIsXG4gICAgdGl0bGU6IFwiRm9vZCAmIERyaW5rXCIsXG4gICAgdTogXCIyNjE1XCJcbiAgfSxcbiAge1xuICAgIGtleTogXCJhY3Rpdml0aWVzXCIsXG4gICAgdGl0bGU6IFwiQWN0aXZpdGllc1wiLFxuICAgIHU6IFwiMjZCRFwiXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwidHJhdmVsX3BsYWNlc1wiLFxuICAgIHRpdGxlOiBcIlRyYXZlbCAmIFBsYWNlc1wiLFxuICAgIHU6IFwiMUY2OTdcIlxuICB9LFxuICB7XG4gICAga2V5OiBcIm9iamVjdHNcIixcbiAgICB0aXRsZTogXCJPYmplY3RzXCIsXG4gICAgdTogXCIxRjRBMVwiXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwic3ltYm9sc1wiLFxuICAgIHRpdGxlOiBcIlN5bWJvbHNcIixcbiAgICB1OiBcIjFmNGFmXCJcbiAgfSxcbiAge1xuICAgIGtleTogXCJmbGFnc1wiLFxuICAgIHRpdGxlOiBcIkZsYWdzXCIsXG4gICAgdTogXCIxZjNmMy1mZTBmXCJcbiAgfVxuXTtcbmNvbnN0IGluc3RhbmNlT2ZBbnkgPSAob2JqZWN0LCBjb25zdHJ1Y3RvcnMpID0+IGNvbnN0cnVjdG9ycy5zb21lKChjKSA9PiBvYmplY3QgaW5zdGFuY2VvZiBjKTtcbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbmZ1bmN0aW9uIGdldElkYlByb3h5YWJsZVR5cGVzKCkge1xuICByZXR1cm4gaWRiUHJveHlhYmxlVHlwZXMgfHwgKGlkYlByb3h5YWJsZVR5cGVzID0gW1xuICAgIElEQkRhdGFiYXNlLFxuICAgIElEQk9iamVjdFN0b3JlLFxuICAgIElEQkluZGV4LFxuICAgIElEQkN1cnNvcixcbiAgICBJREJUcmFuc2FjdGlvblxuICBdKTtcbn1cbmZ1bmN0aW9uIGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkge1xuICByZXR1cm4gY3Vyc29yQWR2YW5jZU1ldGhvZHMgfHwgKGN1cnNvckFkdmFuY2VNZXRob2RzID0gW1xuICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlLFxuICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWVQcmltYXJ5S2V5XG4gIF0pO1xufVxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25Eb25lTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VjY2Vzc1wiLCBzdWNjZXNzKTtcbiAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGVycm9yKTtcbiAgICB9O1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHdyYXAocmVxdWVzdC5yZXN1bHQpKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWNjZXNzXCIsIHN1Y2Nlc3MpO1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGVycm9yKTtcbiAgfSk7XG4gIHByb21pc2UudGhlbigodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJDdXJzb3IpIHtcbiAgICAgIGN1cnNvclJlcXVlc3RNYXAuc2V0KHZhbHVlLCByZXF1ZXN0KTtcbiAgICB9XG4gIH0pLmNhdGNoKCgpID0+IHtcbiAgfSk7XG4gIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gIGlmICh0cmFuc2FjdGlvbkRvbmVNYXAuaGFzKHR4KSlcbiAgICByZXR1cm47XG4gIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29tcGxldGVcIiwgY29tcGxldGUpO1xuICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBlcnJvcik7XG4gICAgfTtcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKFwiQWJvcnRFcnJvclwiLCBcIkFib3J0RXJyb3JcIikpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLCBjb21wbGV0ZSk7XG4gICAgdHguYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGVycm9yKTtcbiAgICB0eC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgZXJyb3IpO1xuICB9KTtcbiAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5sZXQgaWRiUHJveHlUcmFwcyA9IHtcbiAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgIGlmIChwcm9wID09PSBcImRvbmVcIilcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRG9uZU1hcC5nZXQodGFyZ2V0KTtcbiAgICAgIGlmIChwcm9wID09PSBcIm9iamVjdFN0b3JlTmFtZXNcIikge1xuICAgICAgICByZXR1cm4gdGFyZ2V0Lm9iamVjdFN0b3JlTmFtZXMgfHwgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwLmdldCh0YXJnZXQpO1xuICAgICAgfVxuICAgICAgaWYgKHByb3AgPT09IFwic3RvcmVcIikge1xuICAgICAgICByZXR1cm4gcmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1sxXSA/IHZvaWQgMCA6IHJlY2VpdmVyLm9iamVjdFN0b3JlKHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gd3JhcCh0YXJnZXRbcHJvcF0pO1xuICB9LFxuICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmIChwcm9wID09PSBcImRvbmVcIiB8fCBwcm9wID09PSBcInN0b3JlXCIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0O1xuICB9XG59O1xuZnVuY3Rpb24gcmVwbGFjZVRyYXBzKGNhbGxiYWNrKSB7XG4gIGlkYlByb3h5VHJhcHMgPSBjYWxsYmFjayhpZGJQcm94eVRyYXBzKTtcbn1cbmZ1bmN0aW9uIHdyYXBGdW5jdGlvbihmdW5jKSB7XG4gIGlmIChmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiYgIShcIm9iamVjdFN0b3JlTmFtZXNcIiBpbiBJREJUcmFuc2FjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0b3JlTmFtZXMsIC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KHR4LCBzdG9yZU5hbWVzLnNvcnQgPyBzdG9yZU5hbWVzLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSk7XG4gICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgfTtcbiAgfVxuICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIilcbiAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHZhbHVlKTtcbiAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGlkYlByb3h5VHJhcHMpO1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB3cmFwKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIElEQlJlcXVlc3QpXG4gICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICBpZiAodHJhbnNmb3JtQ2FjaGUuaGFzKHZhbHVlKSlcbiAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgY29uc3QgbmV3VmFsdWUgPSB0cmFuc2Zvcm1DYWNoYWJsZVZhbHVlKHZhbHVlKTtcbiAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgIHRyYW5zZm9ybUNhY2hlLnNldCh2YWx1ZSwgbmV3VmFsdWUpO1xuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gbmV3VmFsdWU7XG59XG5jb25zdCB1bndyYXAgPSAodmFsdWUpID0+IHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuZnVuY3Rpb24gb3BlbkRCKG5hbWUsIHZlcnNpb24sIHsgYmxvY2tlZCwgdXBncmFkZSwgYmxvY2tpbmcsIHRlcm1pbmF0ZWQgfSA9IHt9KSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgY29uc3Qgb3BlblByb21pc2UgPSB3cmFwKHJlcXVlc3QpO1xuICBpZiAodXBncmFkZSkge1xuICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcInVwZ3JhZGVuZWVkZWRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pLCBldmVudCk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGJsb2NrZWQpIHtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJibG9ja2VkXCIsIChldmVudCkgPT4gYmxvY2tlZChcbiAgICAgIGV2ZW50Lm9sZFZlcnNpb24sXG4gICAgICBldmVudC5uZXdWZXJzaW9uLFxuICAgICAgZXZlbnRcbiAgICApKTtcbiAgfVxuICBvcGVuUHJvbWlzZS50aGVuKChkYikgPT4ge1xuICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IHRlcm1pbmF0ZWQoKSk7XG4gICAgaWYgKGJsb2NraW5nKSB7XG4gICAgICBkYi5hZGRFdmVudExpc3RlbmVyKFwidmVyc2lvbmNoYW5nZVwiLCAoZXZlbnQpID0+IGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgfVxuICB9KS5jYXRjaCgoKSA9PiB7XG4gIH0pO1xuICByZXR1cm4gb3BlblByb21pc2U7XG59XG5jb25zdCByZWFkTWV0aG9kcyA9IFtcImdldFwiLCBcImdldEtleVwiLCBcImdldEFsbFwiLCBcImdldEFsbEtleXNcIiwgXCJjb3VudFwiXTtcbmNvbnN0IHdyaXRlTWV0aG9kcyA9IFtcInB1dFwiLCBcImFkZFwiLCBcImRlbGV0ZVwiLCBcImNsZWFyXCJdO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB7XG4gIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIElEQkRhdGFiYXNlICYmICEocHJvcCBpbiB0YXJnZXQpICYmIHR5cGVvZiBwcm9wID09PSBcInN0cmluZ1wiKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoY2FjaGVkTWV0aG9kcy5nZXQocHJvcCkpXG4gICAgcmV0dXJuIGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApO1xuICBjb25zdCB0YXJnZXRGdW5jTmFtZSA9IHByb3AucmVwbGFjZSgvRnJvbUluZGV4JC8sIFwiXCIpO1xuICBjb25zdCB1c2VJbmRleCA9IHByb3AgIT09IHRhcmdldEZ1bmNOYW1lO1xuICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgaWYgKCEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fCAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBtZXRob2QgPSBhc3luYyBmdW5jdGlvbihzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICBjb25zdCB0eCA9IHRoaXMudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCBpc1dyaXRlID8gXCJyZWFkd3JpdGVcIiA6IFwicmVhZG9ubHlcIik7XG4gICAgbGV0IHRhcmdldDIgPSB0eC5zdG9yZTtcbiAgICBpZiAodXNlSW5kZXgpXG4gICAgICB0YXJnZXQyID0gdGFyZ2V0Mi5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGFyZ2V0Mlt0YXJnZXRGdW5jTmFtZV0oLi4uYXJncyksXG4gICAgICBpc1dyaXRlICYmIHR4LmRvbmVcbiAgICBdKSlbMF07XG4gIH07XG4gIGNhY2hlZE1ldGhvZHMuc2V0KHByb3AsIG1ldGhvZCk7XG4gIHJldHVybiBtZXRob2Q7XG59XG5yZXBsYWNlVHJhcHMoKG9sZFRyYXBzKSA9PiAoe1xuICAuLi5vbGRUcmFwcyxcbiAgZ2V0OiAodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikgPT4gZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpLFxuICBoYXM6ICh0YXJnZXQsIHByb3ApID0+ICEhZ2V0TWV0aG9kKHRhcmdldCwgcHJvcCkgfHwgb2xkVHJhcHMuaGFzKHRhcmdldCwgcHJvcClcbn0pKTtcbmNvbnN0IERCX0tFWSA9IFwiRU1KXCI7XG5jb25zdCBTVE9SRV9LRVkgPSBcImVtb2ppc1wiO1xuY29uc3QgREJfVkVSU0lPTiA9IDM7XG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EQihEQl9LRVksIERCX1ZFUlNJT04sIHtcbiAgICB1cGdyYWRlKGRiMiwgb2xkVmVyc2lvbikge1xuICAgICAgaWYgKCFkYjIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhTVE9SRV9LRVkpKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gZGIyLmNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFX0tFWSwge1xuICAgICAgICAgIGtleVBhdGg6IFwiaWRcIixcbiAgICAgICAgICBhdXRvSW5jcmVtZW50OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBzdG9yZS5jcmVhdGVJbmRleChcImlkXCIsIFwiaWRcIiwge1xuICAgICAgICAgIHVuaXF1ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBkYi5jbG9zZSgpO1xufVxuaW5pdGlhbGl6ZSgpO1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIG5hdGl2ZTogZmFsc2UsXG4gIGhpZGVTZWFyY2g6IHRydWUsXG4gIGhpZGVHcm91cEljb25zOiBmYWxzZSxcbiAgaGlkZUdyb3VwTmFtZXM6IGZhbHNlLFxuICBzdGF0aWNUZXh0czoge30sXG4gIGRpc2FibGVkR3JvdXBzOiBbXSxcbiAgZ3JvdXBOYW1lczoge30sXG4gIGRpc3BsYXlSZWNlbnQ6IGZhbHNlLFxuICBhZGRpdGlvbmFsR3JvdXBzOiB7fSxcbiAgZ3JvdXBPcmRlcjogW10sXG4gIGdyb3VwSWNvbnM6IHt9XG59O1xuYXN5bmMgZnVuY3Rpb24gZ2V0UmVjZW50RW1vamlzKCkge1xuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EQihEQl9LRVksIERCX1ZFUlNJT04pO1xuICBjb25zdCBzdG9yZSA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFX0tFWSwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShTVE9SRV9LRVkpO1xuICByZXR1cm4gYXdhaXQgc3RvcmUuZ2V0QWxsKCk7XG59XG5mdW5jdGlvbiBTdG9yZSgpIHtcbiAgY29uc3Qgc3RhdGUgPSByZWFjdGl2ZSh7XG4gICAgc2VhcmNoOiBcIlwiLFxuICAgIGVtb2ppOiBERUZBVUxUX0VNT0pJLFxuICAgIGFjdGl2ZUdyb3VwOiBcIlwiLFxuICAgIHNraW5Ub25lOiBTS0lOX1RPTkVfTkVVVFJBTCxcbiAgICBvcHRpb25zOiBkZWZhdWx0T3B0aW9ucyxcbiAgICBhZGRpdGlvbmFsR3JvdXBzOiB7fSxcbiAgICByZWNlbnQ6IFtdLFxuICAgIGdldCBlbW9qaXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWNlbnQ6IHRoaXMucmVjZW50LFxuICAgICAgICAuLi50aGlzLm9wdGlvbnMuYWRkaXRpb25hbEdyb3VwcyxcbiAgICAgICAgLi4uZW1vamlzXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0IGRpc2FibGVkKCkge1xuICAgICAgbGV0IGRpc2FibGVkID0gQXJyYXkuaXNBcnJheSh0aGlzLm9wdGlvbnMuZGlzYWJsZWRHcm91cHMpID8gdGhpcy5vcHRpb25zLmRpc2FibGVkR3JvdXBzIDogW107XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNwbGF5UmVjZW50KSB7XG4gICAgICAgIGRpc2FibGVkID0gW1wicmVjZW50XCIsIC4uLmRpc2FibGVkXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaXNhYmxlZDtcbiAgICB9LFxuICAgIGdldCBncm91cHMoKSB7XG4gICAgICByZXR1cm4gX2dyb3Vwcy5maWx0ZXIoXG4gICAgICAgIChncm91cCkgPT4gIXRoaXMuZGlzYWJsZWQuaW5jbHVkZXMoZ3JvdXAua2V5KVxuICAgICAgKTtcbiAgICB9LFxuICAgIGdldCBvcmRlcmVkR3JvdXBLZXlzKCkge1xuICAgICAgY29uc3Qga2V5cyA9IFtcbiAgICAgICAgLi4udGhpcy5vcHRpb25zLmdyb3VwT3JkZXIsXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5hZGRpdGlvbmFsR3JvdXBzKSxcbiAgICAgICAgLi4uX2dyb3Vwcy5tYXAoKGdyb3VwKSA9PiBncm91cC5rZXkpXG4gICAgICBdO1xuICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KGtleXMpXS5maWx0ZXIoKGtleSkgPT4gIXRoaXMuZGlzYWJsZWQuaW5jbHVkZXMoa2V5KSk7XG4gICAgfVxuICB9KTtcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZTIoKSB7XG4gICAgaWYgKHN0YXRlLm9wdGlvbnMuZGlzcGxheVJlY2VudCkge1xuICAgICAgc2V0SW5pdGlhbFJlY2VudEVtb2ppcygpO1xuICAgIH1cbiAgfVxuICBhc3luYyBmdW5jdGlvbiBnZXRSZWNlbnQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGxldCByZWNlbnQyID0gYXdhaXQgZ2V0UmVjZW50RW1vamlzKCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVjZW50MikgJiYgcmVjZW50Mi5sZW5ndGgpIHtcbiAgICAgIHJlY2VudDIgPSBKU09OLnBhcnNlKCgoX2EgPSByZWNlbnQyWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX2EudmFsdWUpIHx8IFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNlbnQyID0gW107XG4gICAgfVxuICAgIHJldHVybiByZWNlbnQyO1xuICB9XG4gIGZ1bmN0aW9uIHNldEluaXRpYWxSZWNlbnRFbW9qaXMoKSB7XG4gICAgZ2V0UmVjZW50KCkudGhlbigocmVjZW50MikgPT4ge1xuICAgICAgc3RhdGUucmVjZW50ID0gcmVjZW50MjtcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmUoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCB1cGRhdGVTZWFyY2ggPSAodmFsdWUpID0+IHtcbiAgICBzdGF0ZS5zZWFyY2ggPSB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlRW1vamkgPSAodmFsdWUpID0+IHtcbiAgICBzdGF0ZS5lbW9qaSA9IHZhbHVlO1xuICB9O1xuICBjb25zdCB1cGRhdGVBY3RpdmVHcm91cCA9IChncm91cCkgPT4ge1xuICAgIHN0YXRlLmFjdGl2ZUdyb3VwID0gZ3JvdXA7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZVNraW5Ub25lID0gKHRvbmUgPSBTS0lOX1RPTkVfTkVVVFJBTCkgPT4ge1xuICAgIHN0YXRlLnNraW5Ub25lID0gdG9uZTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IChvcHRpb25zKSA9PiB7XG4gICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIGluaXRpYWxpemUyKCk7XG4gIH07XG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmUoKSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBvcGVuREIoREJfS0VZLCBEQl9WRVJTSU9OKTtcbiAgICBjb25zdCBzdG9yZSA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFX0tFWSwgXCJyZWFkd3JpdGVcIikub2JqZWN0U3RvcmUoU1RPUkVfS0VZKTtcbiAgICBzdG9yZS5wdXQoe1xuICAgICAgaWQ6IDAsXG4gICAgICB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoc3RhdGUucmVjZW50KVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB1cGRhdGVTZWxlY3QgPSAoZW1vamkpID0+IHtcbiAgICBpZiAoc3RhdGUub3B0aW9ucy5kaXNwbGF5UmVjZW50ICE9PSB0cnVlKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGluZGV4MiA9IHN0YXRlLnJlY2VudC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0udSA9PT0gZW1vamkudSk7XG4gICAgaWYgKGluZGV4MiA+IDApXG4gICAgICBzdGF0ZS5yZWNlbnQuc3BsaWNlKGluZGV4MiwgMSk7XG4gICAgaWYgKGluZGV4MiA9PT0gMClcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBfZW1vamkgPSB7IHU6IGVtb2ppLnUsIG46IHRvUmF3KGVtb2ppLm4pIH07XG4gICAgc3RhdGUucmVjZW50ID0gW19lbW9qaSwgLi4uc3RhdGUucmVjZW50XTtcbiAgICBpZiAoc3RhdGUucmVjZW50Lmxlbmd0aCA+IDI0KVxuICAgICAgc3RhdGUucmVjZW50Lmxlbmd0aCA9IDI0O1xuICAgIHVwZGF0ZUxvY2FsU3RvcmUoKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0ZTogcmVhZG9ubHkoc3RhdGUpLFxuICAgIHVwZGF0ZVNlYXJjaCxcbiAgICB1cGRhdGVFbW9qaSxcbiAgICB1cGRhdGVBY3RpdmVHcm91cCxcbiAgICB1cGRhdGVTa2luVG9uZSxcbiAgICB1cGRhdGVPcHRpb25zLFxuICAgIHVwZGF0ZVNlbGVjdFxuICB9O1xufVxudmFyIHRvcCA9IFwidG9wXCI7XG52YXIgYm90dG9tID0gXCJib3R0b21cIjtcbnZhciByaWdodCA9IFwicmlnaHRcIjtcbnZhciBsZWZ0ID0gXCJsZWZ0XCI7XG52YXIgYXV0byA9IFwiYXV0b1wiO1xudmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG52YXIgc3RhcnQgPSBcInN0YXJ0XCI7XG52YXIgZW5kID0gXCJlbmRcIjtcbnZhciBjbGlwcGluZ1BhcmVudHMgPSBcImNsaXBwaW5nUGFyZW50c1wiO1xudmFyIHZpZXdwb3J0ID0gXCJ2aWV3cG9ydFwiO1xudmFyIHBvcHBlciA9IFwicG9wcGVyXCI7XG52YXIgcmVmZXJlbmNlID0gXCJyZWZlcmVuY2VcIjtcbnZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyogQF9fUFVSRV9fICovIGJhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbihhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbnZhciBwbGFjZW1lbnRzID0gLyogQF9fUFVSRV9fICovIFtdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbnZhciBiZWZvcmVSZWFkID0gXCJiZWZvcmVSZWFkXCI7XG52YXIgcmVhZCA9IFwicmVhZFwiO1xudmFyIGFmdGVyUmVhZCA9IFwiYWZ0ZXJSZWFkXCI7XG52YXIgYmVmb3JlTWFpbiA9IFwiYmVmb3JlTWFpblwiO1xudmFyIG1haW4gPSBcIm1haW5cIjtcbnZhciBhZnRlck1haW4gPSBcImFmdGVyTWFpblwiO1xudmFyIGJlZm9yZVdyaXRlID0gXCJiZWZvcmVXcml0ZVwiO1xudmFyIHdyaXRlID0gXCJ3cml0ZVwiO1xudmFyIGFmdGVyV3JpdGUgPSBcImFmdGVyV3JpdGVcIjtcbnZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTtcbmZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09IFwiW29iamVjdCBXaW5kb3ddXCIpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24obmFtZTIpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZTJdO1xuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lMiwgdmFsdWUgPT09IHRydWUgPyBcIlwiIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGVmZmVjdCQyKF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogXCIwXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgbWFyZ2luOiBcIjBcIlxuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCJcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge31cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7XG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uKHN0eWxlMiwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGUyW3Byb3BlcnR5XSA9IFwiXCI7XG4gICAgICAgIHJldHVybiBzdHlsZTI7XG4gICAgICB9LCB7fSk7XG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxudmFyIGFwcGx5U3R5bGVzJDEgPSB7XG4gIG5hbWU6IFwiYXBwbHlTdHlsZXNcIixcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6IFwid3JpdGVcIixcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCQyLFxuICByZXF1aXJlczogW1wiY29tcHV0ZVN0eWxlc1wiXVxufTtcbmZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoXCItXCIpWzBdO1xufVxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gMTtcbiAgdmFyIHNjYWxlWSA9IDE7XG4gIGlmIChpc0hUTUxFbGVtZW50KGVsZW1lbnQpICYmIGluY2x1ZGVTY2FsZSkge1xuICAgIHZhciBvZmZzZXRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB2YXIgb2Zmc2V0V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGlmIChvZmZzZXRXaWR0aCA+IDApIHtcbiAgICAgIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gb2Zmc2V0V2lkdGggfHwgMTtcbiAgICB9XG4gICAgaWYgKG9mZnNldEhlaWdodCA+IDApIHtcbiAgICAgIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIG9mZnNldEhlaWdodCB8fCAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoIC8gc2NhbGVYLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQgLyBzY2FsZVksXG4gICAgdG9wOiByZWN0LnRvcCAvIHNjYWxlWSxcbiAgICByaWdodDogcmVjdC5yaWdodCAvIHNjYWxlWCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tIC8gc2NhbGVZLFxuICAgIGxlZnQ6IHJlY3QubGVmdCAvIHNjYWxlWCxcbiAgICB4OiByZWN0LmxlZnQgLyBzY2FsZVgsXG4gICAgeTogcmVjdC50b3AgLyBzY2FsZVlcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodFxuICB9O1xufVxuZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpO1xuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICB2YXIgbmV4dCA9IGNoaWxkO1xuICAgIGRvIHtcbiAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgfSB3aGlsZSAobmV4dCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFtcInRhYmxlXCIsIFwidGRcIiwgXCJ0aFwiXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufVxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSBcImh0bWxcIikge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIHJldHVybiBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCBlbGVtZW50LnBhcmVudE5vZGUgfHwgKGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufVxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiZmlyZWZveFwiKSAhPT0gLTE7XG4gIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudFwiKSAhPT0gLTE7XG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09IFwiZml4ZWRcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbXCJodG1sXCIsIFwiYm9keVwiXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpO1xuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSBcIm5vbmVcIiB8fCBjc3MucGVyc3BlY3RpdmUgIT09IFwibm9uZVwiIHx8IGNzcy5jb250YWluID09PSBcInBhaW50XCIgfHwgW1widHJhbnNmb3JtXCIsIFwicGVyc3BlY3RpdmVcIl0uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gXCJmaWx0ZXJcIiB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSBcIm5vbmVcIikge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdzIgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09IFwiaHRtbFwiIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09IFwiYm9keVwiICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikpIHtcbiAgICByZXR1cm4gd2luZG93MjtcbiAgfVxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3cyO1xufVxuZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gW1widG9wXCIsIFwiYm90dG9tXCJdLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gXCJ4XCIgOiBcInlcIjtcbn1cbmZ1bmN0aW9uIHdpdGhpbihtaW4kMSwgdmFsdWUsIG1heCQxKSB7XG4gIHJldHVybiBtYXgobWluJDEsIG1pbih2YWx1ZSwgbWF4JDEpKTtcbn1cbmZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbjIsIHZhbHVlLCBtYXgyKSB7XG4gIHZhciB2ID0gd2l0aGluKG1pbjIsIHZhbHVlLCBtYXgyKTtcbiAgcmV0dXJuIHYgPiBtYXgyID8gbWF4MiA6IHY7XG59XG5mdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59XG5mdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufVxuZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbihoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufVxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdDIocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSBcImZ1bmN0aW9uXCIgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gXCJudW1iZXJcIiA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsIG5hbWUgPSBfcmVmLm5hbWUsIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMyID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gXCJoZWlnaHRcIiA6IFwid2lkdGhcIjtcbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09IFwieVwiID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSBcInlcIiA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0czJbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHMyW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09IFwieVwiID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyO1xuICB2YXIgbWluMiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXgyID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQyID0gd2l0aGluKG1pbjIsIGNlbnRlciwgbWF4Mik7XG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0MiAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cbmZ1bmN0aW9uIGVmZmVjdCQxKF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLCBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/IFwiW2RhdGEtcG9wcGVyLWFycm93XVwiIDogX29wdGlvbnMkZWxlbWVudDtcbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn1cbnZhciBhcnJvdyQxID0ge1xuICBuYW1lOiBcImFycm93XCIsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiBcIm1haW5cIixcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCQxLFxuICByZXF1aXJlczogW1wicG9wcGVyT2Zmc2V0c1wiXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogW1wicHJldmVudE92ZXJmbG93XCJdXG59O1xuZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KFwiLVwiKVsxXTtcbn1cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6IFwiYXV0b1wiLFxuICByaWdodDogXCJhdXRvXCIsXG4gIGJvdHRvbTogXCJhdXRvXCIsXG4gIGxlZnQ6IFwiYXV0b1wiXG59O1xuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICB2YXIgeCA9IF9yZWYueCwgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcbiAgICB5OiByb3VuZCh5ICogZHByKSAvIGRwciB8fCAwXG4gIH07XG59XG5mdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuICB2YXIgcG9wcGVyMiA9IF9yZWYyLnBvcHBlciwgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCwgdmFyaWF0aW9uID0gX3JlZjIudmFyaWF0aW9uLCBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cywgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbiwgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLCBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLCByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHMsIGlzRml4ZWQgPSBfcmVmMi5pc0ZpeGVkO1xuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09IFwiZnVuY3Rpb25cIiA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsIF9yZWYzJHggPSBfcmVmMy54LCB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsIF9yZWYzJHkgPSBfcmVmMy55LCB5ID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHk7XG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eShcInhcIik7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eShcInlcIik7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9IFwiY2xpZW50SGVpZ2h0XCI7XG4gICAgdmFyIHdpZHRoUHJvcCA9IFwiY2xpZW50V2lkdGhcIjtcbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyMikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIyKTtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09IFwic3RhdGljXCIgJiYgcG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIikge1xuICAgICAgICBoZWlnaHRQcm9wID0gXCJzY3JvbGxIZWlnaHRcIjtcbiAgICAgICAgd2lkdGhQcm9wID0gXCJzY3JvbGxXaWR0aFwiO1xuICAgICAgfVxuICAgIH1cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wIHx8IChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVZID0gYm90dG9tO1xuICAgICAgdmFyIG9mZnNldFkgPSBpc0ZpeGVkICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC5oZWlnaHQgOiBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICB5IC09IG9mZnNldFkgLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/IFwiMFwiIDogXCJcIiwgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/IFwiMFwiIDogXCJcIiwgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDw9IDEgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogXCJcIiwgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogXCJcIiwgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9IFwiXCIsIF9PYmplY3QkYXNzaWduMikpO1xufVxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSwgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbiwgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LCBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSwgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICB2YXJpYXRpb246IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb24sXG4gICAgaXNGaXhlZDogc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gXCJmaXhlZFwiXG4gIH07XG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICBcImRhdGEtcG9wcGVyLXBsYWNlbWVudFwiOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59XG52YXIgY29tcHV0ZVN0eWxlcyQxID0ge1xuICBuYW1lOiBcImNvbXB1dGVTdHlsZXNcIixcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6IFwiYmVmb3JlV3JpdGVcIixcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59O1xudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLCBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCwgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLCBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSwgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93MiA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93Mi5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbihzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59XG52YXIgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gIG5hbWU6IFwiZXZlbnRMaXN0ZW5lcnNcIixcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6IFwid3JpdGVcIixcbiAgZm46IGZ1bmN0aW9uIGZuKCkge1xuICB9LFxuICBlZmZlY3QsXG4gIGRhdGE6IHt9XG59O1xudmFyIGhhc2gkMSA9IHtcbiAgbGVmdDogXCJyaWdodFwiLFxuICByaWdodDogXCJsZWZ0XCIsXG4gIGJvdHRvbTogXCJ0b3BcIixcbiAgdG9wOiBcImJvdHRvbVwiXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaCQxW21hdGNoZWRdO1xuICB9KTtcbn1cbnZhciBoYXNoID0ge1xuICBzdGFydDogXCJlbmRcIixcbiAgZW5kOiBcInN0YXJ0XCJcbn07XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24obWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wXG4gIH07XG59XG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cbmZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0O1xuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5XG4gIH07XG59XG5mdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gXCJydGxcIikge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSwgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdywgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLCBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufVxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFtcImh0bWxcIiwgXCJib2R5XCIsIFwiI2RvY3VtZW50XCJdLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufVxuZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59XG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn1cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufVxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50czIgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gW1wiYWJzb2x1dGVcIiwgXCJmaXhlZFwiXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50czIuZmlsdGVyKGZ1bmN0aW9uKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09IFwiYm9keVwiICYmIChjYW5Fc2NhcGVDbGlwcGluZyA/IGdldENvbXB1dGVkU3R5bGUoY2xpcHBpbmdQYXJlbnQpLnBvc2l0aW9uICE9PSBcInN0YXRpY1wiIDogdHJ1ZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gXCJjbGlwcGluZ1BhcmVudHNcIiA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMyID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHMyWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzMi5yZWR1Y2UoZnVuY3Rpb24oYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZTIgPSBfcmVmLnJlZmVyZW5jZSwgZWxlbWVudCA9IF9yZWYuZWxlbWVudCwgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UyLnggKyByZWZlcmVuY2UyLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZTIueSArIHJlZmVyZW5jZTIuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlMi55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZTIueSArIHJlZmVyZW5jZTIuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZTIueCArIHJlZmVyZW5jZTIud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UyLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZTIueCxcbiAgICAgICAgeTogcmVmZXJlbmNlMi55XG4gICAgICB9O1xuICB9XG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gXCJ5XCIgPyBcImhlaWdodFwiIDogXCJ3aWR0aFwiO1xuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZTJbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2UyW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2Zmc2V0cztcbn1cbmZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucywgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LCBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCwgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSwgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSwgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSwgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLCBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSBcIm51bWJlclwiID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZSk7XG4gIHZhciBwb3BwZXJPZmZzZXRzMiA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogXCJhYnNvbHV0ZVwiLFxuICAgIHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMyKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDtcbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0O1xuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldDIgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gXCJ5XCIgOiBcInhcIjtcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldDJbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufVxuZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLCBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSwgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cywgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBwbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzJDEgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbihwbGFjZW1lbnQyKSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQyKSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDEuZmlsdGVyKGZ1bmN0aW9uKHBsYWNlbWVudDIpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50MikgPj0gMDtcbiAgfSk7XG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMTtcbiAgfVxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGFjYywgcGxhY2VtZW50Mikge1xuICAgIGFjY1twbGFjZW1lbnQyXSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudDIsXG4gICAgICBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudDIpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLCBvcHRpb25zID0gX3JlZi5vcHRpb25zLCBuYW1lID0gX3JlZi5uYW1lO1xuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLCBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcywgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcywgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLCBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLCBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LCBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLCBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50czIgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBwbGFjZW1lbnQyKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQyKSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudDIsXG4gICAgICBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50Mik7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzMlswXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzMi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzMltpXTtcbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbihjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcDIoX2kyKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMyLmZpbmQoZnVuY3Rpb24ocGxhY2VtZW50Mikge1xuICAgICAgICB2YXIgY2hlY2tzMiA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50Mik7XG4gICAgICAgIGlmIChjaGVja3MyKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrczIuc2xpY2UoMCwgX2kyKS5ldmVyeShmdW5jdGlvbihjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIilcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn1cbnZhciBmbGlwJDEgPSB7XG4gIG5hbWU6IFwiZmxpcFwiLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogXCJtYWluXCIsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbXCJvZmZzZXRcIl0sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTtcbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbihzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogXCJyZWZlcmVuY2VcIlxuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICBcImRhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW5cIjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgXCJkYXRhLXBvcHBlci1lc2NhcGVkXCI6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59XG52YXIgaGlkZSQxID0ge1xuICBuYW1lOiBcImhpZGVcIixcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6IFwibWFpblwiLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbXCJwcmV2ZW50T3ZlcmZsb3dcIl0sXG4gIGZuOiBoaWRlXG59O1xuZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0Mikge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQyID09PSBcImZ1bmN0aW9uXCIgPyBvZmZzZXQyKE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldDIsIHNraWRkaW5nID0gX3JlZlswXSwgZGlzdGFuY2UgPSBfcmVmWzFdO1xuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLCBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LCBvZmZzZXQyID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldDIpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSwgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LCB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn1cbnZhciBvZmZzZXQkMSA9IHtcbiAgbmFtZTogXCJvZmZzZXRcIixcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6IFwibWFpblwiLFxuICByZXF1aXJlczogW1wicG9wcGVyT2Zmc2V0c1wiXSxcbiAgZm46IG9mZnNldFxufTtcbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLCBuYW1lID0gX3JlZi5uYW1lO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogXCJhYnNvbHV0ZVwiLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufVxudmFyIHBvcHBlck9mZnNldHMkMSA9IHtcbiAgbmFtZTogXCJwb3BwZXJPZmZzZXRzXCIsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiBcInJlYWRcIixcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59O1xuZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSBcInhcIiA/IFwieVwiIDogXCJ4XCI7XG59XG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLCBvcHRpb25zID0gX3JlZi5vcHRpb25zLCBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLCBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcywgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcywgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLCBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LCBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLCB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LCB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzMiA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSBcImZ1bmN0aW9uXCIgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0VmFsdWUgPT09IFwibnVtYmVyXCIgPyB7XG4gICAgbWFpbkF4aXM6IHRldGhlck9mZnNldFZhbHVlLFxuICAgIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlXG4gIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICBtYWluQXhpczogMCxcbiAgICBhbHRBeGlzOiAwXG4gIH0sIHRldGhlck9mZnNldFZhbHVlKTtcbiAgdmFyIG9mZnNldE1vZGlmaWVyU3RhdGUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF0gOiBudWxsO1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcbiAgaWYgKCFwb3BwZXJPZmZzZXRzMikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQ7XG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09IFwieVwiID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSBcInlcIiA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gXCJ5XCIgPyBcImhlaWdodFwiIDogXCJ3aWR0aFwiO1xuICAgIHZhciBvZmZzZXQyID0gcG9wcGVyT2Zmc2V0czJbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4kMSA9IG9mZnNldDIgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCQxID0gb2Zmc2V0MiAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dO1xuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVtcImFycm93I3BlcnNpc3RlbnRcIl0gPyBzdGF0ZS5tb2RpZmllcnNEYXRhW1wiYXJyb3cjcGVyc2lzdGVudFwiXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTtcbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09IFwieVwiID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gb2Zmc2V0MiArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IG9mZnNldDIgKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWluKG1pbiQxLCB0ZXRoZXJNaW4pIDogbWluJDEsIG9mZnNldDIsIHRldGhlciA/IG1heChtYXgkMSwgdGV0aGVyTWF4KSA6IG1heCQxKTtcbiAgICBwb3BwZXJPZmZzZXRzMlttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQyO1xuICB9XG4gIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcbiAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09IFwieFwiID8gdG9wIDogbGVmdDtcbiAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gXCJ4XCIgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHMyW2FsdEF4aXNdO1xuICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gXCJ5XCIgPyBcImhlaWdodFwiIDogXCJ3aWR0aFwiO1xuICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG4gICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkMiA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbYWx0QXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIDogMDtcbiAgICB2YXIgX3RldGhlck1pbiA9IGlzT3JpZ2luU2lkZSA/IF9taW4gOiBfb2Zmc2V0IC0gcmVmZXJlbmNlUmVjdFtfbGVuXSAtIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzO1xuICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG4gICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB0ZXRoZXIgJiYgaXNPcmlnaW5TaWRlID8gd2l0aGluTWF4Q2xhbXAoX3RldGhlck1pbiwgX29mZnNldCwgX3RldGhlck1heCkgOiB3aXRoaW4odGV0aGVyID8gX3RldGhlck1pbiA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IF90ZXRoZXJNYXggOiBfbWF4KTtcbiAgICBwb3BwZXJPZmZzZXRzMlthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICB9XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufVxudmFyIHByZXZlbnRPdmVyZmxvdyQxID0ge1xuICBuYW1lOiBcInByZXZlbnRPdmVyZmxvd1wiLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogXCJtYWluXCIsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFtcIm9mZnNldFwiXVxufTtcbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufVxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn1cbmZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudElzU2NhbGVkID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGlzRWxlbWVudFNjYWxlZChvZmZzZXRQYXJlbnQpO1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gXCJib2R5XCIgfHwgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbihtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTtcbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbihkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7XG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufVxuZnVuY3Rpb24gZGVib3VuY2UoZm4yKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB2b2lkIDA7XG4gICAgICAgICAgcmVzb2x2ZShmbjIoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uKG1lcmdlZDIsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWQyW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkMltjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDI7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6IFwiYm90dG9tXCIsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiBcImFic29sdXRlXCJcbn07XG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gXCJmdW5jdGlvblwiKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsIGRlZmF1bHRNb2RpZmllcnMyID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZiwgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLCBkZWZhdWx0T3B0aW9uczIgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyMihyZWZlcmVuY2UyLCBwb3BwZXIyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zMjtcbiAgICB9XG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiBcImJvdHRvbVwiLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zMiksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlMixcbiAgICAgICAgcG9wcGVyOiBwb3BwZXIyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25zMiA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMyLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zMik7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlMikgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UyKSA6IHJlZmVyZW5jZTIuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UyLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyMilcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVyczIsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpO1xuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24obSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cywgcmVmZXJlbmNlMyA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsIHBvcHBlcjMgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyO1xuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlMywgcG9wcGVyMykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZTMsIGdldE9mZnNldFBhcmVudChwb3BwZXIzKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gXCJmaXhlZFwiKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyMylcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbihtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKHZhciBpbmRleDIgPSAwOyBpbmRleDIgPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgyKyspIHtcbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleDIgPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleDJdLCBmbjIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucywgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcbiAgICAgICAgICBpZiAodHlwZW9mIGZuMiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuMih7XG4gICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZTIsIHBvcHBlcjIpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbihzdGF0ZTIpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZTIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbihfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLCBvcHRpb25zMiA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucywgZWZmZWN0MiA9IF9yZWYzLmVmZmVjdDtcbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0Mih7XG4gICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMyXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbjIoKSB7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uKGZuMikge1xuICAgICAgICByZXR1cm4gZm4yKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxLCBvZmZzZXQkMSwgZmxpcCQxLCBwcmV2ZW50T3ZlcmZsb3ckMSwgYXJyb3ckMSwgaGlkZSQxXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiBAX19QVVJFX18gKi8gcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyc1xufSk7XG52YXIgc21pbGV5c19wZW9wbGUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F6TWlBek1pSStQSEJoZEdnZ1pEMGlUU0F4TmlBMElFTWdPUzR6T0RJNE1UTWdOQ0EwSURrdU16Z3lPREV6SURRZ01UWWdReUEwSURJeUxqWXhOekU0T0NBNUxqTTRNamd4TXlBeU9DQXhOaUF5T0NCRElESXlMall4TnpFNE9DQXlPQ0F5T0NBeU1pNDJNVGN4T0RnZ01qZ2dNVFlnUXlBeU9DQTVMak00TWpneE15QXlNaTQyTVRjeE9EZ2dOQ0F4TmlBMElGb2dUU0F4TmlBMklFTWdNakV1TlRNMU1UVTJJRFlnTWpZZ01UQXVORFkwT0RRMElESTJJREUySUVNZ01qWWdNakV1TlRNMU1UVTJJREl4TGpVek5URTFOaUF5TmlBeE5pQXlOaUJESURFd0xqUTJORGcwTkNBeU5pQTJJREl4TGpVek5URTFOaUEySURFMklFTWdOaUF4TUM0ME5qUTRORFFnTVRBdU5EWTBPRFEwSURZZ01UWWdOaUJhSUUwZ01URXVOU0F4TWlCRElERXdMalkzTVRnM05TQXhNaUF4TUNBeE1pNDJOekU0TnpVZ01UQWdNVE11TlNCRElERXdJREUwTGpNeU9ERXlOU0F4TUM0Mk56RTROelVnTVRVZ01URXVOU0F4TlNCRElERXlMak15T0RFeU5TQXhOU0F4TXlBeE5DNHpNamd4TWpVZ01UTWdNVE11TlNCRElERXpJREV5TGpZM01UZzNOU0F4TWk0ek1qZ3hNalVnTVRJZ01URXVOU0F4TWlCYUlFMGdNakF1TlNBeE1pQkRJREU1TGpZM01UZzNOU0F4TWlBeE9TQXhNaTQyTnpFNE56VWdNVGtnTVRNdU5TQkRJREU1SURFMExqTXlPREV5TlNBeE9TNDJOekU0TnpVZ01UVWdNakF1TlNBeE5TQkRJREl4TGpNeU9ERXlOU0F4TlNBeU1pQXhOQzR6TWpneE1qVWdNaklnTVRNdU5TQkRJREl5SURFeUxqWTNNVGczTlNBeU1TNHpNamd4TWpVZ01USWdNakF1TlNBeE1pQmFJRTBnTVRBdU9ERXlOU0F4T1NCTUlEa3VNRGt6TnpVZ01qQWdReUF4TUM0ME56WTFOak1nTWpJdU16ZzJOekU1SURFekxqQTBOamczTlNBeU5DQXhOaUF5TkNCRElERTRMamsxTXpFeU5TQXlOQ0F5TVM0MU1qTTBNemdnTWpJdU16ZzJOekU1SURJeUxqa3dOakkxSURJd0lFd2dNakV1TVRnM05TQXhPU0JESURJd0xqRTBPRFF6T0NBeU1DNDNPVEk1TmprZ01UZ3VNakkyTlRZeklESXlJREUySURJeUlFTWdNVE11Tnpjek5ETTRJREl5SURFeExqZzFNVFUyTXlBeU1DNDNPVEk1TmprZ01UQXVPREV5TlNBeE9TQmFJaTgrUEM5emRtYytcIjtcbmZ1bmN0aW9uIHVuaWNvZGVUb0Vtb2ppKHVuaWNvZGUpIHtcbiAgcmV0dXJuIHVuaWNvZGUuc3BsaXQoXCItXCIpLm1hcCgoaGV4KSA9PiBwYXJzZUludChoZXgsIDE2KSkubWFwKChoZXgpID0+IFN0cmluZy5mcm9tQ29kZVBvaW50KGhleCkpLmpvaW4oXCJcIik7XG59XG5mdW5jdGlvbiBmaWx0ZXJFbW9qaXMoZW1vamlzMiwga2V5d29yZCwgc2tpblRvbmUsIGRpc2FibGVkR3JvdXBzID0gW10pIHtcbiAgY29uc3QgX2Vtb2ppRGF0YSA9IHt9O1xuICBPYmplY3Qua2V5cyhlbW9qaXMyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoZGlzYWJsZWRHcm91cHMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBfZW1vamlzID0gW107XG4gICAgZW1vamlzMltrZXldLmZvckVhY2goKGVtb2ppKSA9PiB7XG4gICAgICB2YXIgX2E7XG4gICAgICBpZiAoZW1vamlbRU1PSklfTkFNRV9LRVldWzBdLmluY2x1ZGVzKGtleXdvcmQudG9Mb2NhbGVMb3dlckNhc2UoKSkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGVtb2ppW0VNT0pJX1VOSUNPREVfS0VZXTtcbiAgICAgICAgaWYgKHNraW5Ub25lICE9PSBTS0lOX1RPTkVfTkVVVFJBTCAmJiBBcnJheS5pc0FycmF5KGVtb2ppW0VNT0pJX1ZBUklBVElPTlNfS0VZXSkpIHtcbiAgICAgICAgICBjb25zdCB2X2luZGV4ID0gKChfYSA9IGVtb2ppW0VNT0pJX1ZBUklBVElPTlNfS0VZXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmZpbmRJbmRleChcbiAgICAgICAgICAgICh2KSA9PiB2LmluY2x1ZGVzKHNraW5Ub25lKVxuICAgICAgICAgICkpIHx8IC0xO1xuICAgICAgICAgIGlmICh2X2luZGV4ICE9PSAtMSAmJiBlbW9qaVtFTU9KSV9WQVJJQVRJT05TX0tFWV0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGVtb2ppW0VNT0pJX1ZBUklBVElPTlNfS0VZXVt2X2luZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9lbW9qaXMucHVzaCh7XG4gICAgICAgICAgLi4uZW1vamksXG4gICAgICAgICAgW0VNT0pJX1JFU1VMVF9LRVldOiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKF9lbW9qaXMubGVuZ3RoKSB7XG4gICAgICBfZW1vamlEYXRhW2tleV0gPSBfZW1vamlzO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBfZW1vamlEYXRhO1xufVxuZnVuY3Rpb24gaXNNYWMoKSB7XG4gIHZhciBfYTtcbiAgbGV0IHBsYXRmb3JtID0gKChfYSA9IG5hdmlnYXRvciA9PSBudWxsID8gdm9pZCAwIDogbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfYS5wbGF0Zm9ybSkgfHwgKG5hdmlnYXRvciA9PSBudWxsID8gdm9pZCAwIDogbmF2aWdhdG9yLnBsYXRmb3JtKSB8fCBcInVua25vd25cIjtcbiAgcmV0dXJuIHBsYXRmb3JtLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihcIk1BQ1wiKSAhPT0gLTE7XG59XG5mdW5jdGlvbiBzbmFrZVRvQ2FwaXRhbGl6ZWRDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoXG4gICAgL15fKiguKXxfKyguKS9nLFxuICAgIChzLCBjLCBkKSA9PiBjID8gYy50b1VwcGVyQ2FzZSgpIDogXCIgXCIgKyBkLnRvVXBwZXJDYXNlKClcbiAgKTtcbn1cbnZhciBfZXhwb3J0X3NmYyA9IChzZmMsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IHNmYy5fX3ZjY09wdHMgfHwgc2ZjO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgcHJvcHMpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbmNvbnN0IF9zZmNfbWFpbiQ0ID0gZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogXCJCb2R5XCIsXG4gIGVtaXRzOiB7XG4gICAgc2VsZWN0OiAoZW1vamkpID0+IHRydWVcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgdXBkYXRlRW1vamksIHVwZGF0ZVNlbGVjdCB9ID0gaW5qZWN0KFwic3RvcmVcIik7XG4gICAgY29uc3QgYm9keUlubmVyID0gcmVmKG51bGwpO1xuICAgIGNvbnN0IGVtb2ppczIgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gZmlsdGVyRW1vamlzKFxuICAgICAgICBzdGF0ZS5lbW9qaXMsXG4gICAgICAgIHN0YXRlLnNlYXJjaCxcbiAgICAgICAgc3RhdGUuc2tpblRvbmUsXG4gICAgICAgIHN0YXRlLm9wdGlvbnMuZGlzYWJsZWRHcm91cHNcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgX3RoaXMgPSBnZXRDdXJyZW50SW5zdGFuY2UoKTtcbiAgICBjb25zdCBoYXNHcm91cE5hbWVzID0gY29tcHV0ZWQoKCkgPT4gIXN0YXRlLm9wdGlvbnMuaGlkZUdyb3VwTmFtZXMpO1xuICAgIGNvbnN0IGlzU3RpY2t5ID0gY29tcHV0ZWQoKCkgPT4gIXN0YXRlLm9wdGlvbnMuZGlzYWJsZVN0aWNreUdyb3VwTmFtZXMpO1xuICAgIGNvbnN0IGdyb3VwTmFtZXMgPSB0b1JhdyhzdGF0ZS5vcHRpb25zLmdyb3VwTmFtZXMpO1xuICAgIGNvbnN0IG9yZGVyZWRLZXlzID0gc3RhdGUub3JkZXJlZEdyb3VwS2V5cztcbiAgICBpZiAoc3RhdGUub3B0aW9ucy5hZGRpdGlvbmFsR3JvdXBzKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZS5vcHRpb25zLmFkZGl0aW9uYWxHcm91cHMpLm1hcCgoaykgPT4ge1xuICAgICAgICBpZiAoc3RhdGUub3B0aW9ucy5ncm91cE5hbWVzW2tdKSB7XG4gICAgICAgICAgZ3JvdXBOYW1lc1trXSA9IHN0YXRlLm9wdGlvbnMuZ3JvdXBOYW1lc1trXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBncm91cE5hbWVzW2tdID0gc25ha2VUb0NhcGl0YWxpemVkQ2FzZShrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHBsYXRmb3JtID0gaXNNYWMoKSA/IFwiaXMtbWFjXCIgOiBcIlwiO1xuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoZW1vamkpIHtcbiAgICAgIHVwZGF0ZUVtb2ppKGVtb2ppKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZW1vamkpIHtcbiAgICAgIHVwZGF0ZVNlbGVjdChlbW9qaSk7XG4gICAgICBfdGhpcyA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMuZW1pdChcInNlbGVjdFwiLCB7XG4gICAgICAgIC4uLmVtb2ppLFxuICAgICAgICB0OiBzdGF0ZS5za2luVG9uZSxcbiAgICAgICAgaTogdW5pY29kZVRvRW1vamkoZW1vamkucilcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVFcnJvcihldmVudCwgdW5pY29kZSkge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3QgYnV0dG9uID0gKF9hID0gZXZlbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGV2ZW50LnRhcmdldCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNsb3Nlc3QoXCJidXR0b25cIik7XG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4+JHt1bmljb2RlVG9FbW9qaSh1bmljb2RlKX08L3NwYW4+YDtcbiAgICAgIH1cbiAgICB9XG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBzdGF0ZS5hY3RpdmVHcm91cCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAoX2EgPSBib2R5SW5uZXIudmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKFwiI1wiICsgc3RhdGUuYWN0aXZlR3JvdXApO1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuc2Nyb2xsVG9wID0gdGFyZ2V0Lm9mZnNldFRvcCAtIHRhcmdldC5wYXJlbnROb2RlLm9mZnNldFRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVtb2ppczogZW1vamlzMixcbiAgICAgIGJvZHlJbm5lcixcbiAgICAgIEVNT0pJX1JFTU9URV9TUkMsXG4gICAgICBHUk9VUF9OQU1FUyxcbiAgICAgIGhhbmRsZUNsaWNrLFxuICAgICAgaGFuZGxlRXJyb3IsXG4gICAgICBoYW5kbGVNb3VzZUVudGVyLFxuICAgICAgbmF0aXZlOiBzdGF0ZS5vcHRpb25zLm5hdGl2ZSxcbiAgICAgIHVuaWNvZGVUb0Vtb2ppLFxuICAgICAgRU1PSklfUkVTVUxUX0tFWSxcbiAgICAgIEVNT0pJX05BTUVfS0VZLFxuICAgICAgaGFzR3JvdXBOYW1lcyxcbiAgICAgIGlzU3RpY2t5LFxuICAgICAgcGxhdGZvcm0sXG4gICAgICBncm91cE5hbWVzLFxuICAgICAgb3JkZXJlZEtleXNcbiAgICB9O1xuICB9XG59KTtcbmNvbnN0IF9ob2lzdGVkXzEkMyA9IHsgY2xhc3M6IFwidjMtYm9keVwiIH07XG5jb25zdCBfaG9pc3RlZF8yJDMgPSBbXCJpZFwiXTtcbmNvbnN0IF9ob2lzdGVkXzMkMyA9IHsgY2xhc3M6IFwidjMtZW1vamlzXCIgfTtcbmNvbnN0IF9ob2lzdGVkXzQkMyA9IFtcIm9uTW91c2VlbnRlclwiLCBcIm9uQ2xpY2tcIl07XG5jb25zdCBfaG9pc3RlZF81JDMgPSB7IGtleTogMCB9O1xuY29uc3QgX2hvaXN0ZWRfNiQyID0gW1wic3JjXCIsIFwiYWx0XCIsIFwib25FcnJvclwiXTtcbmNvbnN0IF9ob2lzdGVkXzckMSA9IHtcbiAga2V5OiAxLFxuICBjbGFzczogXCJ2My1uby1yZXN1bHRcIlxufTtcbmZ1bmN0aW9uIF9zZmNfcmVuZGVyJDQoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEkMywgW1xuICAgIGNyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7XG4gICAgICByZWY6IFwiYm9keUlubmVyXCIsXG4gICAgICBjbGFzczogbm9ybWFsaXplQ2xhc3MoW19jdHgucGxhdGZvcm0sIFwidjMtYm9keS1pbm5lclwiXSlcbiAgICB9LCBbXG4gICAgICBfY3R4Lm9yZGVyZWRLZXlzLmxlbmd0aCA/IChvcGVuQmxvY2sodHJ1ZSksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwgeyBrZXk6IDAgfSwgcmVuZGVyTGlzdChfY3R4Lm9yZGVyZWRLZXlzLCAoa2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICBjbGFzczogXCJ2My1ncm91cFwiXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBfY3R4Lmhhc0dyb3VwTmFtZXMgPyB3aXRoRGlyZWN0aXZlcygob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImg1XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhfY3R4LmlzU3RpY2t5ID8gYHYzLXN0aWNreWAgOiBgYClcbiAgICAgICAgICB9LCB0b0Rpc3BsYXlTdHJpbmcoX2N0eC5ncm91cE5hbWVzW2tleV0pLCAzKSksIFtcbiAgICAgICAgICAgIFt2U2hvdywgX2N0eC5lbW9qaXNba2V5XV1cbiAgICAgICAgICBdKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcIlwiLCB0cnVlKSxcbiAgICAgICAgICB3aXRoRGlyZWN0aXZlcyhjcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMyQzLCBbXG4gICAgICAgICAgICAob3BlbkJsb2NrKHRydWUpLCBjcmVhdGVFbGVtZW50QmxvY2soRnJhZ21lbnQsIG51bGwsIHJlbmRlckxpc3QoX2N0eC5lbW9qaXNba2V5XSwgKGVtb2ppKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IGVtb2ppLnIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICBvbk1vdXNlZW50ZXI6ICgkZXZlbnQpID0+IF9jdHguaGFuZGxlTW91c2VFbnRlcihlbW9qaSksXG4gICAgICAgICAgICAgICAgb25DbGljazogKCRldmVudCkgPT4gX2N0eC5oYW5kbGVDbGljayhlbW9qaSlcbiAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIF9jdHgubmF0aXZlID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIF9ob2lzdGVkXzUkMywgdG9EaXNwbGF5U3RyaW5nKF9jdHgudW5pY29kZVRvRW1vamkoZW1vamkucikpLCAxKSkgOiAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgICAgICAgICBzcmM6IF9jdHguRU1PSklfUkVNT1RFX1NSQyArIGAvJHtlbW9qaS5yfS5wbmdgLFxuICAgICAgICAgICAgICAgICAgYWx0OiBlbW9qaS5uWzBdLFxuICAgICAgICAgICAgICAgICAgb25FcnJvcjogKCRldmVudCkgPT4gX2N0eC5oYW5kbGVFcnJvcigkZXZlbnQsIGVtb2ppLnIpXG4gICAgICAgICAgICAgICAgfSwgbnVsbCwgNDAsIF9ob2lzdGVkXzYkMikpXG4gICAgICAgICAgICAgIF0sIDQwLCBfaG9pc3RlZF80JDMpO1xuICAgICAgICAgICAgfSksIDEyOCkpXG4gICAgICAgICAgXSwgNTEyKSwgW1xuICAgICAgICAgICAgW3ZTaG93LCBfY3R4LmVtb2ppc1trZXldXVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sIDgsIF9ob2lzdGVkXzIkMyk7XG4gICAgICB9KSwgMTI4KSkgOiAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwgX2hvaXN0ZWRfNyQxLCBcIiBObyBlbW9qaSBoYXMgYmVlbiBmb3VuZCEgXCIpKVxuICAgIF0sIDIpXG4gIF0pO1xufVxudmFyIEJvZHkgPSAvKiBAX19QVVJFX18gKi8gX2V4cG9ydF9zZmMoX3NmY19tYWluJDQsIFtbXCJyZW5kZXJcIiwgX3NmY19yZW5kZXIkNF1dKTtcbnZhciBhbmltYWxzX25hdHVyZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXpNaUF6TWlJK1BIQmhkR2dnWkQwaVRTQXhNaTQxSURVZ1F5QXhNUzQwTWprMk9EZ2dOU0F4TUM0MUlEVXVOakE1TXpjMUlEa3VPVEEyTWpVZ05pNDBNemMxSUVNZ09TNHpNVEkxSURjdU1qWTFOakkxSURrZ09DNHpNems0TkRRZ09TQTVMalVnUXlBNUlERXdMalkyTURFMU5pQTVMak14TWpVZ01URXVOek0wTXpjMUlEa3VPVEEyTWpVZ01USXVOVFl5TlNCRElERXdMalVnTVRNdU16a3dOakkxSURFeExqUXlPVFk0T0NBeE5DQXhNaTQxSURFMElFTWdNVE11TlRjd016RXpJREUwSURFMExqVWdNVE11TXprd05qSTFJREUxTGpBNU16YzFJREV5TGpVMk1qVWdReUF4TlM0Mk9EYzFJREV4TGpjek5ETTNOU0F4TmlBeE1DNDJOakF4TlRZZ01UWWdPUzQxSUVNZ01UWWdPQzR6TXprNE5EUWdNVFV1TmpnM05TQTNMakkyTlRZeU5TQXhOUzR3T1RNM05TQTJMalF6TnpVZ1F5QXhOQzQxSURVdU5qQTVNemMxSURFekxqVTNNRE14TXlBMUlERXlMalVnTlNCYUlFMGdNVFlnT1M0MUlFTWdNVFlnTVRBdU5qWXdNVFUySURFMkxqTXhNalVnTVRFdU56TTBNemMxSURFMkxqa3dOakkxSURFeUxqVTJNalVnUXlBeE55NDFJREV6TGpNNU1EWXlOU0F4T0M0ME1qazJPRGdnTVRRZ01Ua3VOU0F4TkNCRElESXdMalUzTURNeE15QXhOQ0F5TVM0MUlERXpMak01TURZeU5TQXlNaTR3T1RNM05TQXhNaTQxTmpJMUlFTWdNakl1TmpnM05TQXhNUzQzTXpRek56VWdNak1nTVRBdU5qWXdNVFUySURJeklEa3VOU0JESURJeklEZ3VNek01T0RRMElESXlMalk0TnpVZ055NHlOalUyTWpVZ01qSXVNRGt6TnpVZ05pNDBNemMxSUVNZ01qRXVOU0ExTGpZd09UTTNOU0F5TUM0MU56QXpNVE1nTlNBeE9TNDFJRFVnUXlBeE9DNDBNamsyT0RnZ05TQXhOeTQxSURVdU5qQTVNemMxSURFMkxqa3dOakkxSURZdU5ETTNOU0JESURFMkxqTXhNalVnTnk0eU5qVTJNalVnTVRZZ09DNHpNems0TkRRZ01UWWdPUzQxSUZvZ1RTQXhNaTQxSURjZ1F5QXhNaTQ0TVRJMUlEY2dNVE11TVRVMk1qVWdOeTR4TlRZeU5TQXhNeTQwTmpnM05TQTNMalU1TXpjMUlFTWdNVE11TnpneE1qVWdPQzR3TXpFeU5TQXhOQ0E0TGpjeU5qVTJNeUF4TkNBNUxqVWdReUF4TkNBeE1DNHlOek0wTXpnZ01UTXVOemd4TWpVZ01UQXVPVFk0TnpVZ01UTXVORFk0TnpVZ01URXVOREEyTWpVZ1F5QXhNeTR4TlRZeU5TQXhNUzQ0TkRNM05TQXhNaTQ0TVRJMUlERXlJREV5TGpVZ01USWdReUF4TWk0eE9EYzFJREV5SURFeExqZzBNemMxSURFeExqZzBNemMxSURFeExqVXpNVEkxSURFeExqUXdOakkxSUVNZ01URXVNakU0TnpVZ01UQXVPVFk0TnpVZ01URWdNVEF1TWpjek5ETTRJREV4SURrdU5TQkRJREV4SURndU56STJOVFl6SURFeExqSXhPRGMxSURndU1ETXhNalVnTVRFdU5UTXhNalVnTnk0MU9UTTNOU0JESURFeExqZzBNemMxSURjdU1UVTJNalVnTVRJdU1UZzNOU0EzSURFeUxqVWdOeUJhSUUwZ01Ua3VOU0EzSUVNZ01Ua3VPREV5TlNBM0lESXdMakUxTmpJMUlEY3VNVFUyTWpVZ01qQXVORFk0TnpVZ055NDFPVE0zTlNCRElESXdMamM0TVRJMUlEZ3VNRE14TWpVZ01qRWdPQzQzTWpZMU5qTWdNakVnT1M0MUlFTWdNakVnTVRBdU1qY3pORE00SURJd0xqYzRNVEkxSURFd0xqazJPRGMxSURJd0xqUTJPRGMxSURFeExqUXdOakkxSUVNZ01qQXVNVFUyTWpVZ01URXVPRFF6TnpVZ01Ua3VPREV5TlNBeE1pQXhPUzQxSURFeUlFTWdNVGt1TVRnM05TQXhNaUF4T0M0NE5ETTNOU0F4TVM0NE5ETTNOU0F4T0M0MU16RXlOU0F4TVM0ME1EWXlOU0JESURFNExqSXhPRGMxSURFd0xqazJPRGMxSURFNElERXdMakkzTXpRek9DQXhPQ0E1TGpVZ1F5QXhPQ0E0TGpjeU5qVTJNeUF4T0M0eU1UZzNOU0E0TGpBek1USTFJREU0TGpVek1USTFJRGN1TlRrek56VWdReUF4T0M0NE5ETTNOU0EzTGpFMU5qSTFJREU1TGpFNE56VWdOeUF4T1M0MUlEY2dXaUJOSURjdU5TQXhNaUJESURZdU5ESTVOamc0SURFeUlEVXVOU0F4TWk0Mk1Ea3pOelVnTkM0NU1EWXlOU0F4TXk0ME16YzFJRU1nTkM0ek1USTFJREUwTGpJMk5UWXlOU0EwSURFMUxqTXpPVGcwTkNBMElERTJMalVnUXlBMElERTNMalkyTURFMU5pQTBMak14TWpVZ01UZ3VOek0wTXpjMUlEUXVPVEEyTWpVZ01Ua3VOVFl5TlNCRElEVXVOU0F5TUM0ek9UQTJNalVnTmk0ME1qazJPRGdnTWpFZ055NDFJREl4SUVNZ09DNDFOekF6TVRNZ01qRWdPUzQxSURJd0xqTTVNRFl5TlNBeE1DNHdPVE0zTlNBeE9TNDFOakkxSUVNZ01UQXVOamczTlNBeE9DNDNNelF6TnpVZ01URWdNVGN1TmpZd01UVTJJREV4SURFMkxqVWdReUF4TVNBeE5TNHpNems0TkRRZ01UQXVOamczTlNBeE5DNHlOalUyTWpVZ01UQXVNRGt6TnpVZ01UTXVORE0zTlNCRElEa3VOU0F4TWk0Mk1Ea3pOelVnT0M0MU56QXpNVE1nTVRJZ055NDFJREV5SUZvZ1RTQXlOQzQxSURFeUlFTWdNak11TkRJNU5qZzRJREV5SURJeUxqVWdNVEl1TmpBNU16YzFJREl4TGprd05qSTFJREV6TGpRek56VWdReUF5TVM0ek1USTFJREUwTGpJMk5UWXlOU0F5TVNBeE5TNHpNems0TkRRZ01qRWdNVFl1TlNCRElESXhJREUzTGpZMk1ERTFOaUF5TVM0ek1USTFJREU0TGpjek5ETTNOU0F5TVM0NU1EWXlOU0F4T1M0MU5qSTFJRU1nTWpJdU5TQXlNQzR6T1RBMk1qVWdNak11TkRJNU5qZzRJREl4SURJMExqVWdNakVnUXlBeU5TNDFOekF6TVRNZ01qRWdNall1TlNBeU1DNHpPVEEyTWpVZ01qY3VNRGt6TnpVZ01Ua3VOVFl5TlNCRElESTNMalk0TnpVZ01UZ3VOek0wTXpjMUlESTRJREUzTGpZMk1ERTFOaUF5T0NBeE5pNDFJRU1nTWpnZ01UVXVNek01T0RRMElESTNMalk0TnpVZ01UUXVNalkxTmpJMUlESTNMakE1TXpjMUlERXpMalF6TnpVZ1F5QXlOaTQxSURFeUxqWXdPVE0zTlNBeU5TNDFOekF6TVRNZ01USWdNalF1TlNBeE1pQmFJRTBnTnk0MUlERTBJRU1nTnk0NE1USTFJREUwSURndU1UVTJNalVnTVRRdU1UVTJNalVnT0M0ME5qZzNOU0F4TkM0MU9UTTNOU0JESURndU56Z3hNalVnTVRVdU1ETXhNalVnT1NBeE5TNDNNalkxTmpNZ09TQXhOaTQxSUVNZ09TQXhOeTR5TnpNME16Z2dPQzQzT0RFeU5TQXhOeTQ1TmpnM05TQTRMalEyT0RjMUlERTRMalF3TmpJMUlFTWdPQzR4TlRZeU5TQXhPQzQ0TkRNM05TQTNMamd4TWpVZ01Ua2dOeTQxSURFNUlFTWdOeTR4T0RjMUlERTVJRFl1T0RRek56VWdNVGd1T0RRek56VWdOaTQxTXpFeU5TQXhPQzQwTURZeU5TQkRJRFl1TWpFNE56VWdNVGN1T1RZNE56VWdOaUF4Tnk0eU56TTBNemdnTmlBeE5pNDFJRU1nTmlBeE5TNDNNalkxTmpNZ05pNHlNVGczTlNBeE5TNHdNekV5TlNBMkxqVXpNVEkxSURFMExqVTVNemMxSUVNZ05pNDRORE0zTlNBeE5DNHhOVFl5TlNBM0xqRTROelVnTVRRZ055NDFJREUwSUZvZ1RTQXlOQzQxSURFMElFTWdNalF1T0RFeU5TQXhOQ0F5TlM0eE5UWXlOU0F4TkM0eE5UWXlOU0F5TlM0ME5qZzNOU0F4TkM0MU9UTTNOU0JESURJMUxqYzRNVEkxSURFMUxqQXpNVEkxSURJMklERTFMamN5TmpVMk15QXlOaUF4Tmk0MUlFTWdNallnTVRjdU1qY3pORE00SURJMUxqYzRNVEkxSURFM0xqazJPRGMxSURJMUxqUTJPRGMxSURFNExqUXdOakkxSUVNZ01qVXVNVFUyTWpVZ01UZ3VPRFF6TnpVZ01qUXVPREV5TlNBeE9TQXlOQzQxSURFNUlFTWdNalF1TVRnM05TQXhPU0F5TXk0NE5ETTNOU0F4T0M0NE5ETTNOU0F5TXk0MU16RXlOU0F4T0M0ME1EWXlOU0JESURJekxqSXhPRGMxSURFM0xqazJPRGMxSURJeklERTNMakkzTXpRek9DQXlNeUF4Tmk0MUlFTWdNak1nTVRVdU56STJOVFl6SURJekxqSXhPRGMxSURFMUxqQXpNVEkxSURJekxqVXpNVEkxSURFMExqVTVNemMxSUVNZ01qTXVPRFF6TnpVZ01UUXVNVFUyTWpVZ01qUXVNVGczTlNBeE5DQXlOQzQxSURFMElGb2dUU0F4TmlBeE5pQkRJREUwTGpZMk56azJPU0F4TmlBeE15NDNNemd5T0RFZ01UWXVPRFkzTVRnNElERXpMakk0TVRJMUlERTNMall5TlNCRElERXlMamd5TkRJeE9TQXhPQzR6T0RJNE1UTWdNVEl1TlRRMk9EYzFJREU1TGpBeE5UWXlOU0F4TWk0eU9ERXlOU0F4T1M0eU9ERXlOU0JESURFeUxqRXlOU0F4T1M0ME16YzFJREV4TGpFMk1ERTFOaUF4T1M0NE1EQTNPREVnTVRBdU1UVTJNalVnTWpBdU16RXlOU0JESURrdU5qVXlNelEwSURJd0xqVTNNRE14TXlBNUxqRTBORFV6TVNBeU1DNDVNVFF3TmpNZ09DNDNNVGczTlNBeU1TNDBNemMxSUVNZ09DNHlPVEk1TmprZ01qRXVPVFl3T1RNNElEZ2dNakl1TmpnM05TQTRJREl6TGpVZ1F5QTRJREkxTGpReU1UZzNOU0E1TGpVM09ERXlOU0F5TnlBeE1TNDFJREkzSUVNZ01USXVNelkzTVRnNElESTNJREV6TGpJMk9UVXpNU0F5Tmk0M01qSTJOVFlnTVRRdU1UVTJNalVnTWpZdU5EWTROelVnUXlBeE5TNHdOREk1TmprZ01qWXVNakUwT0RRMElERTJJREkySURFMklESTJJRU1nTVRZZ01qWWdNVFl1T1RVM01ETXhJREkyTGpJeE5EZzBOQ0F4Tnk0NE5ETTNOU0F5Tmk0ME5qZzNOU0JESURFNExqY3pNRFEyT1NBeU5pNDNNakkyTlRZZ01Ua3VOak15T0RFeklESTNJREl3TGpVZ01qY2dReUF5TWk0ME1qRTROelVnTWpjZ01qUWdNalV1TkRJeE9EYzFJREkwSURJekxqVWdReUF5TkNBeU1pNDNNRGN3TXpFZ01qTXVOekEzTURNeElESXhMams0TURRMk9TQXlNeTR5T0RFeU5TQXlNUzQwTmpnM05TQkRJREl5TGpnMU5UUTJPU0F5TUM0NU5UY3dNekVnTWpJdU16UXpOelVnTWpBdU5qUXdOakkxSURJeExqZzBNemMxSURJd0xqTTNOU0JESURJd0xqZzBNemMxSURFNUxqZzBNemMxSURFNUxqZzFPVE0zTlNBeE9TNDBNakU0TnpVZ01Ua3VOekU0TnpVZ01Ua3VNamd4TWpVZ1F5QXhPUzQwT0RBME5qa2dNVGt1TURReU9UWTVJREU1TGpJeE1Ea3pPQ0F4T0M0ek9UQTJNalVnTVRndU56VWdNVGN1TmpJMUlFTWdNVGd1TWpnNU1EWXpJREUyTGpnMU9UTTNOU0F4Tnk0ek16azRORFFnTVRZZ01UWWdNVFlnV2lCTklERTJJREU0SUVNZ01UWXVOall3TVRVMklERTRJREUyTGpjek5ETTNOU0F4T0M0eE5qQXhOVFlnTVRjdU1ETXhNalVnTVRndU5qVTJNalVnUXlBeE55NHpNamd4TWpVZ01Ua3VNVFV5TXpRMElERTNMalUxTkRZNE9DQXhPUzQ1T1RJeE9EZ2dNVGd1TWpneE1qVWdNakF1TnpFNE56VWdReUF4T1M0eE1EVTBOamtnTWpFdU5UUXlPVFk1SURJd0xqRTBPRFF6T0NBeU1TNDNNakkyTlRZZ01qQXVPVEEyTWpVZ01qSXVNVEkxSUVNZ01qRXVNamcxTVRVMklESXlMak15T0RFeU5TQXlNUzQxTnpneE1qVWdNakl1TlRReU9UWTVJREl4TGpjMUlESXlMamMxSUVNZ01qRXVPVEl4T0RjMUlESXlMamsxTnpBek1TQXlNaUF5TXk0eE5EZzBNemdnTWpJZ01qTXVOU0JESURJeUlESTBMak16T1RnME5DQXlNUzR6TXprNE5EUWdNalVnTWpBdU5TQXlOU0JESURJd0xqSXhNRGt6T0NBeU5TQXhPUzR5Tnpjek5EUWdNalF1TnpjM016UTBJREU0TGpRd05qSTFJREkwTGpVek1USTFJRU1nTVRjdU5UTTFNVFUySURJMExqSTROVEUxTmlBeE5pNDRNVFkwTURZZ01qUWdNVFlnTWpRZ1F5QXhOUzR4T0RNMU9UUWdNalFnTVRRdU5EWTBPRFEwSURJMExqSTROVEUxTmlBeE15NDFPVE0zTlNBeU5DNDFNekV5TlNCRElERXlMamN5TWpZMU5pQXlOQzQzTnpjek5EUWdNVEV1TnpnNU1EWXpJREkxSURFeExqVWdNalVnUXlBeE1DNDJOakF4TlRZZ01qVWdNVEFnTWpRdU16TTVPRFEwSURFd0lESXpMalVnUXlBeE1DQXlNeTR3T1RjMk5UWWdNVEF1TURneU1ETXhJREl5TGpnNU1EWXlOU0F4TUM0eU5TQXlNaTQyT0RjMUlFTWdNVEF1TkRFM09UWTVJREl5TGpRNE5ETTNOU0F4TUM0M01qSTJOVFlnTWpJdU1qZzFNVFUySURFeExqQTVNemMxSURJeUxqQTVNemMxSUVNZ01URXVPRE01T0RRMElESXhMamN4TkRnME5DQXhNaTQ0TnpVZ01qRXVOVFl5TlNBeE15NDNNVGczTlNBeU1DNDNNVGczTlNCRElERTBMalExTXpFeU5TQXhPUzQ1T0RRek56VWdNVFF1TmpjMU56Z3hJREU1TGpFeE56RTRPQ0F4TkM0NU5qZzNOU0F4T0M0Mk1qVWdReUF4TlM0eU5qRTNNVGtnTVRndU1UTXlPREV6SURFMUxqTXpNakF6TVNBeE9DQXhOaUF4T0NCYUlpOCtQQzl6ZG1jK1wiO1xudmFyIGZvb2RfZHJpbmsgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F6TWlBek1pSStQSEJoZEdnZ1pEMGlUU0F4TVNBeklFd2dNVEVnTnlCTUlERXpJRGNnVENBeE15QXpJRm9nVFNBeE5TQTBJRXdnTVRVZ055Qk1JREUzSURjZ1RDQXhOeUEwSUZvZ1RTQTBMamczTlNBNElFd2dOU0E1TGpBNU16YzFJRXdnTmk0NE1USTFJREkyTGpNeE1qVWdReUEyTGprM01qWTFOaUF5Tnk0NE16SXdNekVnT0M0eU9EVXhOVFlnTWprZ09TNDRNVEkxSURJNUlFd2dNVGt1TVRnM05TQXlPU0JESURJd0xqY3hORGcwTkNBeU9TQXlNaTR3TWpjek5EUWdNamN1T0RNeU1ETXhJREl5TGpFNE56VWdNall1TXpFeU5TQk1JREl5TGpZMU5qSTFJREl5SUV3Z01qVWdNaklnUXlBeU5pNDJORFExTXpFZ01qSWdNamdnTWpBdU5qUTBOVE14SURJNElERTVJRXdnTWpnZ01UWWdReUF5T0NBeE5DNHpOVFUwTmprZ01qWXVOalEwTlRNeElERXpJREkxSURFeklFd2dNak11TlRrek56VWdNVE1nVENBeU5DQTVMakE1TXpjMUlFd2dNalF1TVRJMUlEZ2dXaUJOSURjdU1USTFJREV3SUV3Z01qRXVPRGMxSURFd0lFd2dNakF1TVRnM05TQXlOaTR3T1RNM05TQkRJREl3TGpFek1qZ3hNeUF5Tmk0Mk1UTXlPREVnTVRrdU56QTNNRE14SURJM0lERTVMakU0TnpVZ01qY2dUQ0E1TGpneE1qVWdNamNnUXlBNUxqSTVNamsyT1NBeU55QTRMamcyTnpFNE9DQXlOaTQyTVRNeU9ERWdPQzQ0TVRJMUlESTJMakE1TXpjMUlGb2dUU0F5TXk0ek56VWdNVFVnVENBeU5TQXhOU0JESURJMUxqVTJOalF3TmlBeE5TQXlOaUF4TlM0ME16TTFPVFFnTWpZZ01UWWdUQ0F5TmlBeE9TQkRJREkySURFNUxqVTJOalF3TmlBeU5TNDFOalkwTURZZ01qQWdNalVnTWpBZ1RDQXlNaTQ0TkRNM05TQXlNQ0JhSWk4K1BDOXpkbWMrXCI7XG52YXIgYWN0aXZpdGllcyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXpNaUF6TWlJK1BIQmhkR2dnWkQwaVRTQXhOaUF6SUVNZ09DNDRNekl3TXpFZ015QXpJRGd1T0RNeU1ETXhJRE1nTVRZZ1F5QXpJREl6TGpFMk56azJPU0E0TGpnek1qQXpNU0F5T1NBeE5pQXlPU0JESURJekxqRTJOemsyT1NBeU9TQXlPU0F5TXk0eE5qYzVOamtnTWprZ01UWWdReUF5T1NBNExqZ3pNakF6TVNBeU15NHhOamM1TmprZ015QXhOaUF6SUZvZ1RTQXhOaUExSUVNZ01UWXVOakF4TlRZeklEVWdNVGN1TVRjMU56Z3hJRFV1TURZeU5TQXhOeTQzTlNBMUxqRTFOakkxSUV3Z01UWWdOaTQwTURZeU5TQk1JREUwTGpJMUlEVXVNVFUyTWpVZ1F5QXhOQzQ0TWpBek1UTWdOUzR3TmpZME1EWWdNVFV1TkRBeU16UTBJRFVnTVRZZ05TQmFJRTBnTVRFdU9ERXlOU0ExTGpnME16YzFJRXdnTVRVdU5EQTJNalVnT0M0ME5qZzNOU0JNSURFMklEZ3VPVEEyTWpVZ1RDQXhOaTQxT1RNM05TQTRMalEyT0RjMUlFd2dNakF1TVRnM05TQTFMamcwTXpjMUlFTWdNakV1TnpnMU1UVTJJRFl1TlRBM09ERXpJREl6TGpFNU5UTXhNeUEzTGpVeU16UXpPQ0F5TkM0ek1USTFJRGd1T0RFeU5TQk1JREl5TGprek56VWdNVE11TURrek56VWdUQ0F5TWk0M01UZzNOU0F4TXk0M09ERXlOU0JNSURJekxqTXhNalVnTVRRdU1UZzNOU0JNSURJMkxqa3pOelVnTVRZdU9EUXpOelVnUXlBeU5pNDRNRFEyT0RnZ01UZ3VOakExTkRZNUlESTJMakkyTlRZeU5TQXlNQzR5TlRjNE1UTWdNalV1TkRBMk1qVWdNakV1TmpnM05TQk1JREl3TGpFeU5TQXlNUzQyT0RjMUlFd2dNVGt1T1RBMk1qVWdNakl1TXpjMUlFd2dNVGd1TlNBeU5pNDNNVGczTlNCRElERTNMalk1T1RJeE9TQXlOaTQ1TURZeU5TQXhOaTQ0TlRrek56VWdNamNnTVRZZ01qY2dReUF4TlM0eE1EVTBOamtnTWpjZ01UUXVNak00TWpneElESTJMamc0TmpjeE9TQXhNeTQwTURZeU5TQXlOaTQyT0RjMUlFd2dNVEl1TURNeE1qVWdNakl1TkRBMk1qVWdUQ0F4TVM0NE1USTFJREl4TGpjeE9EYzFJRXdnTmk0MU9UTTNOU0F5TVM0M01UZzNOU0JESURVdU56RTROelVnTWpBdU1qZ3hNalVnTlM0eE9Ua3lNVGtnTVRndU5qSXhNRGswSURVdU1EWXlOU0F4Tmk0NE5ETTNOU0JNSURndU5qVTJNalVnTVRRdU1qRTROelVnVENBNUxqSTFJREV6TGpneE1qVWdUQ0E1TGpBek1USTFJREV6TGpFeU5TQk1JRGN1TmpJMUlEZ3VPRGMxSUVNZ09DNDNOU0EzTGpVMU5EWTRPQ0F4TUM0eE9ETTFPVFFnTmk0MU1UVTJNalVnTVRFdU9ERXlOU0ExTGpnME16YzFJRm9nVFNBeE5pQXhNQzR3T1RNM05TQk1JREUxTGpRd05qSTFJREV3TGpVek1USTFJRXdnTVRBdU9EUXpOelVnTVRNdU9EUXpOelVnVENBeE1DNHlPREV5TlNBeE5DNHlPREV5TlNCTUlERXdMalVnTVRRdU9UWTROelVnVENBeE1pNHlOU0F5TUM0ek1USTFJRXdnTVRJdU5EWTROelVnTWpFZ1RDQXhPUzQxTXpFeU5TQXlNU0JNSURFNUxqYzFJREl3TGpNeE1qVWdUQ0F5TVM0MUlERTBMamsyT0RjMUlFd2dNakV1TnpFNE56VWdNVFF1TWpneE1qVWdUQ0F5TVM0eE5UWXlOU0F4TXk0NE5ETTNOU0JNSURFMkxqVTVNemMxSURFd0xqVXpNVEkxSUZvZ1RTQXlOUzQzTlNBeE1DNDVNRFl5TlNCRElESTJMakk1TmpnM05TQXhNUzQ1TlRNeE1qVWdNall1TmpVMk1qVWdNVE11TVRBeE5UWXpJREkyTGpnME16YzFJREUwTGpNeE1qVWdUQ0F5TlM0d05qSTFJREV6TGpBek1USTFJRm9nVFNBMkxqSXhPRGMxSURFd0xqazJPRGMxSUV3Z05pNDVNRFl5TlNBeE15NHdNekV5TlNCTUlEVXVNVFUyTWpVZ01UUXVNekV5TlNCRElEVXVNek01T0RRMElERXpMakV5TlNBMUxqWTROelVnTVRJZ05pNHlNVGczTlNBeE1DNDVOamczTlNCYUlFMGdNVFlnTVRJdU5Ua3pOelVnVENBeE9TNHpOelVnTVRVdU1ETXhNalVnVENBeE9DNHdPVE0zTlNBeE9TQk1JREV6TGprd05qSTFJREU1SUV3Z01USXVOakkxSURFMUxqQXpNVEkxSUZvZ1RTQXlNUzQxT1RNM05TQXlNeTQyT0RjMUlFd2dNak11T0RRek56VWdNak11TmpnM05TQkRJREl5TGprNU1qRTRPQ0F5TkM0MU5qWTBNRFlnTWpJdU1ERXhOekU1SURJMUxqSTVNamsyT1NBeU1DNDVNRFl5TlNBeU5TNDRORE0zTlNCYUlFMGdPQzR4TlRZeU5TQXlNeTQzTVRnM05TQk1JREV3TGpNME16YzFJREl6TGpjeE9EYzFJRXdnTVRFdU1ETXhNalVnTWpVdU9ERXlOU0JESURrdU9UWXdPVE00SURJMUxqSTJPVFV6TVNBNExqazRPREk0TVNBeU5DNDFOakkxSURndU1UVTJNalVnTWpNdU56RTROelVnV2lJdlBqd3ZjM1puUGc9PVwiO1xudmFyIHRyYXZlbF9wbGFjZXMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F6TWlBek1pSStQSEJoZEdnZ1pEMGlUU0E1TGpVZ05pQkRJRGd1TVRjNU5qZzRJRFlnTnk0d01ETTVNRFlnTmk0NE5Ua3pOelVnTmk0Mk1qVWdPQzR4TWpVZ1RDQTFMakkxSURFeUxqY3hPRGMxSUV3Z015NHpNVEkxSURFeUxqQTJNalVnVENBeUxqWTROelVnTVRNdU9UTTNOU0JNSURRdU5qVTJNalVnTVRRdU5Ua3pOelVnVENBMExqQXpNVEkxSURFMkxqY3hPRGMxSUVNZ05DNHdNRGM0TVRNZ01UWXVPREE0TlRrMElETXVPVGsyTURrMElERTJMamt3TmpJMUlEUWdNVGNnVENBMElESTBJRU1nTkNBeU5DNHdNekV5TlNBMElESTBMakEyTWpVZ05DQXlOQzR3T1RNM05TQk1JRFFnTWpVZ1F5QTBJREkxTGpVMU1EYzRNU0EwTGpRME9USXhPU0F5TmlBMUlESTJJRXdnT0NBeU5pQk1JRGd1TXpRek56VWdNalVnVENBeU15NDJOVFl5TlNBeU5TQk1JREkwSURJMklFd2dNamNnTWpZZ1F5QXlOeTQxTlRBM09ERWdNallnTWpnZ01qVXVOVFV3TnpneElESTRJREkxSUV3Z01qZ2dNalF1TVRVMk1qVWdReUF5T0M0d01ETTVNRFlnTWpRdU1UQTFORFk1SURJNExqQXdNemt3TmlBeU5DNHdOVEEzT0RFZ01qZ2dNalFnVENBeU9DQXhOeUJESURJNExqQXdNemt3TmlBeE5pNDVNRFl5TlNBeU55NDVPVEl4T0RnZ01UWXVPREE0TlRrMElESTNMamsyT0RjMUlERTJMamN4T0RjMUlFd2dNamN1TXpRek56VWdNVFF1TlRrek56VWdUQ0F5T1M0ek1USTFJREV6TGprek56VWdUQ0F5T0M0Mk9EYzFJREV5TGpBMk1qVWdUQ0F5Tmk0M05TQXhNaTQzTVRnM05TQk1JREkxTGpNM05TQTRMakV5TlNCRElESTBMams1TmpBNU5DQTJMamcxT1RNM05TQXlNeTQ0TWpBek1UTWdOaUF5TWk0MUlEWWdXaUJOSURrdU5TQTRJRXdnTWpJdU5TQTRJRU1nTWpJdU9UUTFNekV6SURnZ01qTXVNek01T0RRMElEZ3VNamt5T1RZNUlESXpMalEyT0RjMUlEZ3VOekU0TnpVZ1RDQXlOQzQzTlNBeE15Qk1JRGN1TWpVZ01UTWdUQ0E0TGpVek1USTFJRGd1TnpFNE56VWdReUE0TGpZMk1ERTFOaUE0TGpJNE9UQTJNeUE1TGpBMU5EWTRPQ0E0SURrdU5TQTRJRm9nVFNBMkxqWTFOakkxSURFMUlFd2dNalV1TXpRek56VWdNVFVnVENBeU5pQXhOeTR4T0RjMUlFd2dNallnTWpNZ1RDQTJJREl6SUV3Z05pQXhOeTR4T0RjMUlGb2dUU0E0TGpVZ01UWWdReUEzTGpZM01UZzNOU0F4TmlBM0lERTJMalkzTVRnM05TQTNJREUzTGpVZ1F5QTNJREU0TGpNeU9ERXlOU0EzTGpZM01UZzNOU0F4T1NBNExqVWdNVGtnUXlBNUxqTXlPREV5TlNBeE9TQXhNQ0F4T0M0ek1qZ3hNalVnTVRBZ01UY3VOU0JESURFd0lERTJMalkzTVRnM05TQTVMak15T0RFeU5TQXhOaUE0TGpVZ01UWWdXaUJOSURJekxqVWdNVFlnUXlBeU1pNDJOekU0TnpVZ01UWWdNaklnTVRZdU5qY3hPRGMxSURJeUlERTNMalVnUXlBeU1pQXhPQzR6TWpneE1qVWdNakl1TmpjeE9EYzFJREU1SURJekxqVWdNVGtnUXlBeU5DNHpNamd4TWpVZ01Ua2dNalVnTVRndU16STRNVEkxSURJMUlERTNMalVnUXlBeU5TQXhOaTQyTnpFNE56VWdNalF1TXpJNE1USTFJREUySURJekxqVWdNVFlnV2lCTklERXlJREU1SUV3Z01UQXVOelVnTWpJZ1RDQXhNaTQ1TURZeU5TQXlNaUJNSURFekxqTTBNemMxSURJeElFd2dNVGd1TmpVMk1qVWdNakVnVENBeE9TNHdPVE0zTlNBeU1pQk1JREl4TGpJMUlESXlJRXdnTWpBZ01Ua2dXaUl2UGp3dmMzWm5QZz09XCI7XG52YXIgb2JqZWN0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXpNaUF6TWlJK1BIQmhkR2dnWkQwaVRTQXhOaUEwSUVNZ01URXVNRFF5T1RZNUlEUWdOeUE0TGpBME1qazJPU0EzSURFeklFTWdOeUF4TkM0NU1UYzVOamtnTnk0NE5ETTNOU0F4Tmk0NU1EWXlOU0E1SURFNExqWTROelVnUXlBNUxqZzFPVE0zTlNBeU1DNHdNVEUzTVRrZ01UQXVPRGcyTnpFNUlESXhMakl6TURRMk9TQXhNaUF5TWk0eE5UWXlOU0JNSURFeUlESTFJRU1nTVRJZ01qWXVNRGt6TnpVZ01USXVPVEEyTWpVZ01qY2dNVFFnTWpjZ1RDQXhOU0F5T0NCTUlERTNJREk0SUV3Z01UZ2dNamNnUXlBeE9TNHdPVE0zTlNBeU55QXlNQ0F5Tmk0d09UTTNOU0F5TUNBeU5TQk1JREl3SURJeUxqRTFOakkxSUVNZ01qRXVNVEV6TWpneElESXhMakl6TURRMk9TQXlNaTR4TkRBMk1qVWdNakF1TURFeE56RTVJREl6SURFNExqWTROelVnUXlBeU5DNHhOVFl5TlNBeE5pNDVNRFl5TlNBeU5TQXhOQzQ1TVRjNU5qa2dNalVnTVRNZ1F5QXlOU0E0TGpBME1qazJPU0F5TUM0NU5UY3dNekVnTkNBeE5pQTBJRm9nVFNBeE5pQTJJRU1nTVRrdU9EYzRPVEEySURZZ01qTWdPUzR4TWpFd09UUWdNak1nTVRNZ1F5QXlNeUF4TkM0ek1EZzFPVFFnTWpJdU16VTFORFk1SURFMkxqQXpOVEUxTmlBeU1TNHpORE0zTlNBeE55NDFPVE0zTlNCRElESXdMalEwTVRRd05pQXhPQzQ1T0RRek56VWdNVGt1TWpVek9UQTJJREl3TGpJeU1qWTFOaUF4T0M0eE5UWXlOU0F5TVNCTUlERXpMamcwTXpjMUlESXhJRU1nTVRJdU56UTJNRGswSURJd0xqSXlNalkxTmlBeE1TNDFOVGcxT1RRZ01UZ3VPVGcwTXpjMUlERXdMalkxTmpJMUlERTNMalU1TXpjMUlFTWdPUzQyTkRRMU16RWdNVFl1TURNMU1UVTJJRGtnTVRRdU16QTROVGswSURrZ01UTWdReUE1SURrdU1USXhNRGswSURFeUxqRXlNVEE1TkNBMklERTJJRFlnV2lCTklERTBMakkxSURJeklFd2dNVGN1TnpVZ01qTWdReUF4Tnk0NE1qZ3hNalVnTWpNdU1EVTBOamc0SURFM0xqa3hNREUxTmlBeU15NHdPVE0zTlNBeE9DQXlNeTR4TWpVZ1RDQXhPQ0F5TlNCTUlERTBJREkxSUV3Z01UUWdNak11TVRJMUlFTWdNVFF1TURnNU9EUTBJREl6TGpBNU16YzFJREUwTGpFM01UZzNOU0F5TXk0d05UUTJPRGdnTVRRdU1qVWdNak1nV2lJdlBqd3ZjM1puUGc9PVwiO1xudmFyIHN5bWJvbHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F6TWlBek1pSStQSEJoZEdnZ1pEMGlUU0F4TVNBMUlFd2dNVEVnTVRFZ1RDQTFJREV4SUV3Z05TQXhNeUJNSURFeElERXpJRXdnTVRFZ01Ua2dUQ0ExSURFNUlFd2dOU0F5TVNCTUlERXhJREl4SUV3Z01URWdNamNnVENBeE15QXlOeUJNSURFeklESXhJRXdnTVRrZ01qRWdUQ0F4T1NBeU55Qk1JREl4SURJM0lFd2dNakVnTWpFZ1RDQXlOeUF5TVNCTUlESTNJREU1SUV3Z01qRWdNVGtnVENBeU1TQXhNeUJNSURJM0lERXpJRXdnTWpjZ01URWdUQ0F5TVNBeE1TQk1JREl4SURVZ1RDQXhPU0ExSUV3Z01Ua2dNVEVnVENBeE15QXhNU0JNSURFeklEVWdXaUJOSURFeklERXpJRXdnTVRrZ01UTWdUQ0F4T1NBeE9TQk1JREV6SURFNUlGb2lMejQ4TDNOMlp6ND1cIjtcbnZhciBmbGFncyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXpNaUF6TWlJK1BIQmhkR2dnWkQwaVRTQTVJRFFnUXlBM0xqTTBOaUEwSURZZ05TNHpORFlnTmlBM0lFTWdOaUE0TGpNd01UWXdPVFFnTmk0NE16ZzNORGcySURrdU5EQXlNVE01TVNBNElEa3VPREUyTkRBMk1pQk1JRGdnTVRFdU16QTBOamc0SUV3Z09DQXlNeTR5TURjd016RWdUQ0E0SURJM0xqQXlNelF6T0NCRElEZ2dNamN1TlRZek5ETTRJRGd1TkRNMk5UWXlOU0F5T0NBNExqazNOalUyTWpVZ01qZ2dUQ0E1TGpBeU16UXpOelVnTWpnZ1F5QTVMalUyTXpRek56VWdNamdnTVRBZ01qY3VOVFl6TkRNM0lERXdJREkzTGpBeU16UXpPQ0JNSURFd0lESXlMakl5T0RVeE5pQkRJREV3TGpNek5EY3dOeUF5TVM0NE16azNOVFlnTVRFdU1UTTROREl6SURJeExqQTBOamczTlNBeE15NDBORFV6TVRJZ01qRXVNRFEyT0RjMUlFTWdNVFF1TmpZNU16RXpJREl4TGpBME5qZzNOU0F4TlM0Mk56QTBNaklnTWpFdU5EY3pOemd4SURFMkxqY3pNalF5TWlBeU1TNDVNalUzT0RFZ1F5QXhOeTQzTmprME1qSWdNakl1TXpZM056Z3hJREU0TGpnME1UZzVNU0F5TWk0NE1qUXlNVGtnTWpBdU1EZzNPRGt4SURJeUxqZ3lOREl4T1NCRElESXlMalEwTmpnNU1TQXlNaTQ0TWpReU1Ua2dNalF1TURRNU16YzFJREl4TGpVNE5EWTRPQ0F5TkM0M016UXpOelVnTWpFdU1EVTBOamc0SUV3Z01qUXVPRGcyTnpFNUlESXdMamt6T1RRMU15QkRJREkxTGpRek56Y3hPU0F5TUM0MU5EQTBOVE1nTWpZZ01Ua3VPVGsySURJMklERTVJRXdnTWpZZ01UQXVOamMxTnpneElFTWdNallnT1M0M05qYzNPREV5SURJMUxqSXlNVGd5T0NBNUlESTBMakk1T0RneU9DQTVJRU1nTWpNdU9EQXpPREk0SURrZ01qTXVORFF3TkRBMklEa3VNamcyTlRrek55QXlNaTQ1TkRFME1EWWdPUzQyT0RNMU9UTTRJRU1nTWpJdU1qYzVOREEySURFd0xqSXdOelU1TkNBeU1TNHlPREE0T1RFZ01URWdNakF1TURnM09Ea3hJREV4SUVNZ01Ua3VNamN5T0RreElERXhJREU0TGpRM056WTRPQ0F4TUM0Mk1UazNNelFnTVRjdU5UVTBOamc0SURFd0xqRTNOemN6TkNCRElERTJMalF3TXpZNE55QTVMall5TlRjek5EUWdNVFV1TURrNE16VTVJRGtnTVRNdU5EUXpNelU1SURrZ1F5QXhNaTR6TURneU5UY2dPU0F4TVM0ME1qRTJPRGNnT1M0eE9EZ3pNemt6SURFd0xqY3hNamc1TVNBNUxqUTFOekF6TVRJZ1F5QXhNUzQwT0Rrd056RWdPQzQ1TVRReE9ESTBJREV5SURndU1ERTJOemd3TWlBeE1pQTNJRU1nTVRJZ05TNHpORFlnTVRBdU5qVTBJRFFnT1NBMElIb2dUU0E1SURZZ1F5QTVMalUxTWlBMklERXdJRFl1TkRRNUlERXdJRGNnUXlBeE1DQTNMalUxTVNBNUxqVTFNaUE0SURrZ09DQkRJRGd1TkRRNElEZ2dPQ0EzTGpVMU1TQTRJRGNnUXlBNElEWXVORFE1SURndU5EUTRJRFlnT1NBMklIb2dUU0F4TXk0ME5ETXpOVGtnTVRFZ1F5QXhOQzQyTkRVek5Ua2dNVEVnTVRVdU5qTTROREEySURFeExqUTNOalEyT1NBeE5pNDJPVEUwTURZZ01URXVPVGd3TkRZNUlFTWdNVGN1TnpNMk5EQTJJREV5TGpRNE1qUTJPU0F4T0M0NE1UYzRPVEVnTVRNZ01qQXVNRGczT0RreElERXpJRU1nTWpFdU9EUXlPRGt4SURFeklESXpMakUxT0RBME55QXhNaTR3TlRRME9EUWdNak11T1RrNE1EUTNJREV4TGpNNU5qUTROQ0JNSURJekxqazVPREEwTnlBeE9TNHdOalkwTURZZ1F5QXlNeTQ1T1Rjd05EY2dNVGt1TURjd05EQTJJREl6TGprMU1qazROQ0F4T1M0eE5EVXlOallnTWpNdU56QTRPVGcwSURFNUxqTXlNakkyTmlCTUlESXpMalV3T1RjMk5pQXhPUzQwTnpRMk1Ea2dReUF5TWk0NU5ESTNOallnTVRrdU9URXlOakE1SURJeExqYzJNamc1TVNBeU1DNDRNalF5TVRrZ01qQXVNRGczT0RreElESXdMamd5TkRJeE9TQkRJREU1TGpJME9UZzVNU0F5TUM0NE1qUXlNVGtnTVRndU5EUTJOakkxSURJd0xqUTRNamt6TnlBeE55NDFNVFUyTWpVZ01qQXVNRGcxT1RNNElFTWdNVFl1TXpjeU5qSTFJREU1TGpVNU56a3pPQ0F4TlM0d056WXpOVGtnTVRrdU1EUTBPVEl5SURFekxqUTBNek0xT1NBeE9TNHdORFE1TWpJZ1F5QXhNUzQ0T1RFek5Ua2dNVGt1TURRME9USXlJREV3TGpjNE5pQXhPUzR6TlRnZ01UQWdNVGt1TnpVZ1RDQXhNQ0F4TWk0ek5qRXpNamdnUXlBeE1DNHpORFVnTVRFdU9UQTFNekk0SURFeExqRXpNak0xT1NBeE1TQXhNeTQwTkRNek5Ua2dNVEVnZWlJdlBqd3ZjM1puUGc9PVwiO1xudmFyIHJlY2VudCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXpNaUF6TWlJK1BIQmhkR2dnWkQwaVRTQXhOaUEwSUVNZ01URXVPRE15TURNeElEUWdPQzR4TlRJek5EUWdOaTR4TVRNeU9ERWdOaUE1TGpNME16YzFJRXdnTmlBMklFd2dOQ0EySUV3Z05DQXhNeUJNSURFeElERXpJRXdnTVRFZ01URWdUQ0EzTGpNM05TQXhNU0JESURrdU1UQXhOVFl6SURndU1ERTVOVE14SURFeUxqSTVOamczTlNBMklERTJJRFlnUXlBeU1TNDFNelV4TlRZZ05pQXlOaUF4TUM0ME5qUTRORFFnTWpZZ01UWWdReUF5TmlBeU1TNDFNelV4TlRZZ01qRXVOVE0xTVRVMklESTJJREUySURJMklFTWdNVEF1TkRZME9EUTBJREkySURZZ01qRXVOVE0xTVRVMklEWWdNVFlnVENBMElERTJJRU1nTkNBeU1pNDJNVGN4T0RnZ09TNHpPREk0TVRNZ01qZ2dNVFlnTWpnZ1F5QXlNaTQyTVRjeE9EZ2dNamdnTWpnZ01qSXVOakUzTVRnNElESTRJREUySUVNZ01qZ2dPUzR6T0RJNE1UTWdNakl1TmpFM01UZzRJRFFnTVRZZ05DQmFJRTBnTVRVZ09DQk1JREUxSURFM0lFd2dNaklnTVRjZ1RDQXlNaUF4TlNCTUlERTNJREUxSUV3Z01UY2dPQ0JhSWk4K1BDOXpkbWMrQ2c9PVwiO1xuY29uc3QgX3NmY19tYWluJDMgPSBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIkhlYWRlclwiLFxuICBzZXR1cChwcm9wcykge1xuICAgIGNvbnN0IHsgc3RhdGUsIHVwZGF0ZVNlYXJjaCwgdXBkYXRlQWN0aXZlR3JvdXAgfSA9IGluamVjdChcInN0b3JlXCIpO1xuICAgIGNvbnN0IGhhc1NlYXJjaCA9IGNvbXB1dGVkKCgpID0+ICFzdGF0ZS5vcHRpb25zLmhpZGVTZWFyY2gpO1xuICAgIGNvbnN0IGhhc0dyb3VwSWNvbnMgPSBjb21wdXRlZCgoKSA9PiAhc3RhdGUub3B0aW9ucy5oaWRlR3JvdXBJY29ucyk7XG4gICAgY29uc3Qgb3JkZXJlZEtleXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0YXRlLm9yZGVyZWRHcm91cEtleXMpKTtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGNvbXB1dGVkKFxuICAgICAgKCkgPT4gc3RhdGUub3B0aW9ucy5zdGF0aWNUZXh0cy5wbGFjZWhvbGRlciB8fCBcIlwiXG4gICAgKTtcbiAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IGNvbXB1dGVkKHtcbiAgICAgIGdldDogKCkgPT4gc3RhdGUuc2VhcmNoLFxuICAgICAgc2V0OiAodmFsdWUpID0+IHVwZGF0ZVNlYXJjaCh2YWx1ZSlcbiAgICB9KTtcbiAgICBjb25zdCBncm91cHMgPSBbXG4gICAgICAuLi5zdGF0ZS5ncm91cHMsXG4gICAgICAuLi5PYmplY3Qua2V5cyhzdGF0ZS5vcHRpb25zLmFkZGl0aW9uYWxHcm91cHMpLm1hcCgoZykgPT4gKHtcbiAgICAgICAga2V5OiBnLFxuICAgICAgICB0aXRsZTogc3RhdGUub3B0aW9ucy5ncm91cE5hbWVzW2ddID8gc3RhdGUub3B0aW9ucy5ncm91cE5hbWVzW2ddIDogc25ha2VUb0NhcGl0YWxpemVkQ2FzZShnKVxuICAgICAgfSkpXG4gICAgXTtcbiAgICBjb25zdCBvcmRlcmVkR3JvdXBzID0gW107XG4gICAgb3JkZXJlZEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBpbmRleDIgPSBncm91cHMuZmluZEluZGV4KChncm91cCkgPT4gZ3JvdXAua2V5ID09PSBrZXkpO1xuICAgICAgaWYgKGluZGV4MiA9PT0gLTEpXG4gICAgICAgIHJldHVybjtcbiAgICAgIG9yZGVyZWRHcm91cHMucHVzaChncm91cHNbaW5kZXgyXSk7XG4gICAgICBncm91cHMuc3BsaWNlKGluZGV4MiwgMSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZGVyZWRHcm91cHMsXG4gICAgICBvcmRlcmVkS2V5cyxcbiAgICAgIHNlYXJjaFZhbHVlLFxuICAgICAgdXBkYXRlQWN0aXZlR3JvdXAsXG4gICAgICBoYXNTZWFyY2gsXG4gICAgICBoYXNHcm91cEljb25zLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBpY29uczoge1xuICAgICAgICBzbWlsZXlzX3Blb3BsZSxcbiAgICAgICAgYW5pbWFsc19uYXR1cmUsXG4gICAgICAgIGZvb2RfZHJpbmssXG4gICAgICAgIGFjdGl2aXRpZXMsXG4gICAgICAgIHRyYXZlbF9wbGFjZXMsXG4gICAgICAgIG9iamVjdHMsXG4gICAgICAgIHN5bWJvbHMsXG4gICAgICAgIGZsYWdzLFxuICAgICAgICAuLi5zdGF0ZS5vcHRpb25zLmdyb3VwSWNvbnMsXG4gICAgICAgIHJlY2VudFxuICAgICAgfVxuICAgIH07XG4gIH1cbn0pO1xuY29uc3QgX2hvaXN0ZWRfMSQyID0ge1xuICBrZXk6IDAsXG4gIGNsYXNzOiBcInYzLWhlYWRlclwiXG59O1xuY29uc3QgX2hvaXN0ZWRfMiQyID0ge1xuICBrZXk6IDAsXG4gIGNsYXNzOiBcInYzLWdyb3Vwc1wiXG59O1xuY29uc3QgX2hvaXN0ZWRfMyQyID0gW1wib25DbGlja1wiXTtcbmNvbnN0IF9ob2lzdGVkXzQkMiA9IFtcInRpdGxlXCJdO1xuY29uc3QgX2hvaXN0ZWRfNSQyID0gW1wic3JjXCJdO1xuY29uc3QgX2hvaXN0ZWRfNiQxID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcInYzLXNwYWNpbmdcIlxufTtcbmNvbnN0IF9ob2lzdGVkXzcgPSB7XG4gIGtleTogMixcbiAgY2xhc3M6IFwidjMtc2VhcmNoXCJcbn07XG5jb25zdCBfaG9pc3RlZF84ID0gW1wicGxhY2Vob2xkZXJcIl07XG5mdW5jdGlvbiBfc2ZjX3JlbmRlciQzKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gX2N0eC5oYXNHcm91cEljb25zIHx8IF9jdHguaGFzU2VhcmNoID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSQyLCBbXG4gICAgX2N0eC5oYXNHcm91cEljb25zID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMiQyLCBbXG4gICAgICAob3BlbkJsb2NrKHRydWUpLCBjcmVhdGVFbGVtZW50QmxvY2soRnJhZ21lbnQsIG51bGwsIHJlbmRlckxpc3QoX2N0eC5vcmRlcmVkR3JvdXBzLCAoZ3JvdXApID0+IHtcbiAgICAgICAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJidXR0b25cIiwge1xuICAgICAgICAgIGtleTogZ3JvdXAua2V5LFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKFtcInYzLWdyb3VwXCIsIHtcbiAgICAgICAgICAgIFwidjMtaXMtaGlkZGVuXCI6ICFfY3R4Lmljb25zW2dyb3VwLmtleV1cbiAgICAgICAgICB9XSksXG4gICAgICAgICAgb25DbGljazogKCRldmVudCkgPT4gX2N0eC51cGRhdGVBY3RpdmVHcm91cChncm91cC5rZXkpXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBjcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIHRpdGxlOiBncm91cC50aXRsZSxcbiAgICAgICAgICAgIGNsYXNzOiBcInYzLWljb25cIlxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnRWTm9kZShcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHNyYzogX2N0eC5pY29uc1tncm91cC5rZXldLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgIH0sIG51bGwsIDgsIF9ob2lzdGVkXzUkMilcbiAgICAgICAgICBdLCA4LCBfaG9pc3RlZF80JDIpXG4gICAgICAgIF0sIDEwLCBfaG9pc3RlZF8zJDIpO1xuICAgICAgfSksIDEyOCkpXG4gICAgXSkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpLFxuICAgIF9jdHguaGFzR3JvdXBJY29ucyAmJiBfY3R4Lmhhc1NlYXJjaCA/IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzYkMSkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpLFxuICAgIF9jdHguaGFzU2VhcmNoID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfNywgW1xuICAgICAgd2l0aERpcmVjdGl2ZXMoY3JlYXRlRWxlbWVudFZOb2RlKFwiaW5wdXRcIiwge1xuICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiBfY3R4LnNlYXJjaFZhbHVlID0gJGV2ZW50KSxcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBfY3R4LnBsYWNlaG9sZGVyXG4gICAgICB9LCBudWxsLCA4LCBfaG9pc3RlZF84KSwgW1xuICAgICAgICBbdk1vZGVsVGV4dCwgX2N0eC5zZWFyY2hWYWx1ZV1cbiAgICAgIF0pXG4gICAgXSkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpXG4gIF0pKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcIlwiLCB0cnVlKTtcbn1cbnZhciBIZWFkZXIgPSAvKiBAX19QVVJFX18gKi8gX2V4cG9ydF9zZmMoX3NmY19tYWluJDMsIFtbXCJyZW5kZXJcIiwgX3NmY19yZW5kZXIkM11dKTtcbmNvbnN0IF9zZmNfbWFpbiQyID0gZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogXCJIZWFkZXJcIixcbiAgc2V0dXAoKSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgdXBkYXRlU2tpblRvbmUgfSA9IGluamVjdChcInN0b3JlXCIpO1xuICAgIGNvbnN0IHNraW5Ub25lID0gcmVmKGZhbHNlKTtcbiAgICBjb25zdCBoYXNFcnJvciA9IHJlZihmYWxzZSk7XG4gICAgY29uc3Qgc3RhdGVTa2luVG9uZSA9IGNvbXB1dGVkKCgpID0+IHN0YXRlLnNraW5Ub25lKTtcbiAgICBjb25zdCBza2luVG9uZVRleHQgPSBjb21wdXRlZChcbiAgICAgICgpID0+IHN0YXRlLm9wdGlvbnMuc3RhdGljVGV4dHMuc2tpblRvbmUgfHwgXCJTa2luIHRvbmVcIlxuICAgICk7XG4gICAgY29uc3QgaGFzU2tpblRvbmVzID0gY29tcHV0ZWQoKCkgPT4gIXN0YXRlLm9wdGlvbnMuZGlzYWJsZVNraW5Ub25lcyk7XG4gICAgY29uc3QgcGxhdGZvcm0gPSBpc01hYygpID8gXCJpcy1tYWNcIiA6IFwiXCI7XG4gICAgY29uc3QgZW1vamkgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZS5lbW9qaSxcbiAgICAgICAgc3JjOiBFTU9KSV9SRU1PVEVfU1JDICsgXCIvXCIgKyBzdGF0ZS5lbW9qaVtFTU9KSV9SRVNVTFRfS0VZXSArIFwiLnBuZ1wiXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVNraW5Ub25lU3RhdGUob3BlbiA9IHRydWUpIHtcbiAgICAgIHNraW5Ub25lLnZhbHVlID0gb3BlbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlU2tpblRvbmVTdGF0ZSgpIHtcbiAgICAgIHNraW5Ub25lLnZhbHVlID0gIXNraW5Ub25lLnZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZWxlY3RTa2luVG9uZSh0b25lKSB7XG4gICAgICB1cGRhdGVTa2luVG9uZSh0b25lKTtcbiAgICAgIHVwZGF0ZVNraW5Ub25lU3RhdGUoZmFsc2UpO1xuICAgIH1cbiAgICB3YXRjaChcbiAgICAgICgpID0+IHN0YXRlLmVtb2ppLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBoYXNFcnJvci52YWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVtb2ppLFxuICAgICAgU0tJTl9UT05FUyxcbiAgICAgIHVwZGF0ZVNraW5Ub25lU3RhdGUsXG4gICAgICBza2luVG9uZSxcbiAgICAgIHN0YXRlU2tpblRvbmUsXG4gICAgICBzZWxlY3RTa2luVG9uZSxcbiAgICAgIHRvZ2dsZVNraW5Ub25lU3RhdGUsXG4gICAgICBFTU9KSV9SRVNVTFRfS0VZLFxuICAgICAgRU1PSklfTkFNRV9LRVksXG4gICAgICBza2luVG9uZVRleHQsXG4gICAgICBoYXNTa2luVG9uZXMsXG4gICAgICBuYXRpdmU6IHN0YXRlLm9wdGlvbnMubmF0aXZlLFxuICAgICAgdW5pY29kZVRvRW1vamksXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIGhhc0Vycm9yXG4gICAgfTtcbiAgfVxufSk7XG5jb25zdCBfaG9pc3RlZF8xJDEgPSB7IGNsYXNzOiBcInYzLWZvb3QtbGVmdFwiIH07XG5jb25zdCBfaG9pc3RlZF8yJDEgPSB7IGtleTogMCB9O1xuY29uc3QgX2hvaXN0ZWRfMyQxID0gW1wiYWx0XCIsIFwic3JjXCJdO1xuY29uc3QgX2hvaXN0ZWRfNCQxID0geyBjbGFzczogXCJ2My10ZXh0XCIgfTtcbmNvbnN0IF9ob2lzdGVkXzUkMSA9IHsgY2xhc3M6IFwidjMtdGV4dFwiIH07XG5jb25zdCBfaG9pc3RlZF82ID0gW1wib25DbGlja1wiXTtcbmZ1bmN0aW9uIF9zZmNfcmVuZGVyJDIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJ2My1mb290ZXJcIixcbiAgICBvbk1vdXNlbGVhdmU6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gKCRldmVudCkgPT4gX2N0eC51cGRhdGVTa2luVG9uZVN0YXRlKGZhbHNlKSlcbiAgfSwgW1xuICAgIGNyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xJDEsIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwge1xuICAgICAgICBjbGFzczogbm9ybWFsaXplQ2xhc3MoW19jdHgucGxhdGZvcm0sIFwidjMtaWNvblwiXSlcbiAgICAgIH0sIFtcbiAgICAgICAgX2N0eC5uYXRpdmUgfHwgX2N0eC5oYXNFcnJvciA/IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF8yJDEsIHRvRGlzcGxheVN0cmluZyhfY3R4LnVuaWNvZGVUb0Vtb2ppKF9jdHguZW1vamkucikpLCAxKSkgOiAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImltZ1wiLCB7XG4gICAgICAgICAga2V5OiAxLFxuICAgICAgICAgIGFsdDogX2N0eC51bmljb2RlVG9FbW9qaShfY3R4LmVtb2ppLnIpLFxuICAgICAgICAgIHNyYzogX2N0eC5lbW9qaS5zcmMsXG4gICAgICAgICAgb25FcnJvcjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiBfY3R4Lmhhc0Vycm9yID0gdHJ1ZSlcbiAgICAgICAgfSwgbnVsbCwgNDAsIF9ob2lzdGVkXzMkMSkpXG4gICAgICBdLCAyKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgX2hvaXN0ZWRfNCQxLCBcIiA6XCIgKyB0b0Rpc3BsYXlTdHJpbmcoX2N0eC5lbW9qaVtfY3R4LkVNT0pJX05BTUVfS0VZXVsxXSB8fCBfY3R4LmVtb2ppW19jdHguRU1PSklfTkFNRV9LRVldWzBdKSArIFwiOiBcIiwgMSlcbiAgICBdKSxcbiAgICBfY3R4Lmhhc1NraW5Ub25lcyA/IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKEZyYWdtZW50LCB7IGtleTogMCB9LCBbXG4gICAgICBjcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjbGFzczogXCJ2My10b25lXCIsXG4gICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gKC4uLmFyZ3MpID0+IF9jdHgudG9nZ2xlU2tpblRvbmVTdGF0ZSAmJiBfY3R4LnRvZ2dsZVNraW5Ub25lU3RhdGUoLi4uYXJncykpXG4gICAgICB9LCBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgX2hvaXN0ZWRfNSQxLCB0b0Rpc3BsYXlTdHJpbmcoX2N0eC5za2luVG9uZVRleHQpLCAxKSxcbiAgICAgICAgY3JlYXRlRWxlbWVudFZOb2RlKFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKGB2My1pY29uIHYzLXRvbmUtJHtfY3R4LnN0YXRlU2tpblRvbmV9YClcbiAgICAgICAgfSwgbnVsbCwgMilcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKFtfY3R4LnNraW5Ub25lID8gXCJ2My1pcy1vcGVuXCIgOiBcIlwiLCBcInYzLXNraW4tdG9uZXNcIl0pXG4gICAgICB9LCBbXG4gICAgICAgIChvcGVuQmxvY2sodHJ1ZSksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwgbnVsbCwgcmVuZGVyTGlzdChfY3R4LlNLSU5fVE9ORVMsICh0b25lKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJidXR0b25cIiwge1xuICAgICAgICAgICAga2V5OiB0b25lLFxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhbXCJ2My1za2luLXRvbmUtXCIgKyB0b25lLCBcInYzLXNraW4tdG9uZVwiXSksXG4gICAgICAgICAgICBvbkNsaWNrOiAoJGV2ZW50KSA9PiBfY3R4LnNlbGVjdFNraW5Ub25lKHRvbmUpXG4gICAgICAgICAgfSwgbnVsbCwgMTAsIF9ob2lzdGVkXzYpO1xuICAgICAgICB9KSwgMTI4KSlcbiAgICAgIF0sIDIpXG4gICAgXSwgNjQpKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcIlwiLCB0cnVlKVxuICBdLCAzMik7XG59XG52YXIgRm9vdGVyID0gLyogQF9fUFVSRV9fICovIF9leHBvcnRfc2ZjKF9zZmNfbWFpbiQyLCBbW1wicmVuZGVyXCIsIF9zZmNfcmVuZGVyJDJdXSk7XG5jb25zdCBfc2ZjX21haW4kMSA9IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6IFwiUGlja2VyUm9vdFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgSGVhZGVyLFxuICAgIEJvZHksXG4gICAgRm9vdGVyXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgYWRkaXRpb25hbEdyb3Vwczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH0sXG4gICAgZ3JvdXBPcmRlcjoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG4gICAgZ3JvdXBJY29uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH0sXG4gICAgZ3JvdXBOYW1lczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH1cbiAgfSxcbiAgZW1pdHM6IHtcbiAgICBzZWxlY3Q6IChlbW9qaSkgPT4gdHJ1ZSxcbiAgICBcInVwZGF0ZTp0ZXh0XCI6ICh2YWx1ZSkgPT4gdHJ1ZVxuICB9LFxuICBzZXR1cChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCBlbGVtID0gcmVmKCk7XG4gICAgY29uc3QgYnV0dG9uID0gcmVmKCk7XG4gICAgY29uc3QgcGlja2VyID0gcmVmKCk7XG4gICAgY29uc3Qgb3BlbiA9IHJlZihmYWxzZSk7XG4gICAgY29uc3QgaW5wdXQgPSByZWYocHJvcHMudGV4dCk7XG4gICAgY29uc3QgaXNJbnB1dFR5cGUgPSBwcm9wcy50eXBlID09PSBcImlucHV0XCIgfHwgcHJvcHMudHlwZSA9PT0gXCJ0ZXh0YXJlYVwiO1xuICAgIGxldCBjdXJzb3IgPSAtMTtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSBpbmplY3QoXCJzdG9yZVwiKTtcbiAgICBjb25zdCBjb2xvclRoZW1lID0gY29tcHV0ZWQoKCkgPT4gc3RhdGUub3B0aW9ucy5jb2xvclRoZW1lKTtcbiAgICBmdW5jdGlvbiBvblNlbGVjdChlbW9qaSkge1xuICAgICAgaWYgKGlzSW5wdXRUeXBlKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBzdGF0ZS5vcHRpb25zLm1vZGU7XG4gICAgICAgIGlmIChtb2RlID09PSBcInByZXBlbmRcIikge1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gZW1vamkuaSArIGlucHV0LnZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiaW5zZXJ0XCIgJiYgY3Vyc29yICE9PSAtMSkge1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gYCR7aW5wdXQudmFsdWUuc2xpY2UoMCwgY3Vyc29yKX0ke2Vtb2ppLml9JHtpbnB1dC52YWx1ZS5zbGljZShjdXJzb3IpfWA7XG4gICAgICAgICAgY3Vyc29yICs9IGVtb2ppLmkubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0LnZhbHVlICs9IGVtb2ppLmk7XG4gICAgICAgIH1cbiAgICAgICAgZW1pdChcInVwZGF0ZTp0ZXh0XCIsIGlucHV0LnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVtaXQoXCJzZWxlY3RcIiwgZW1vamkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVDdXJzb3IoKSB7XG4gICAgICB2YXIgX2E7XG4gICAgICBpZiAoZWxlbS52YWx1ZSkge1xuICAgICAgICBjdXJzb3IgPSAoKF9hID0gZWxlbS52YWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnNlbGVjdGlvbkVuZCkgfHwgLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsaWNrTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGNvbnN0IGlzT3V0c2lkZSA9ICEoKF9hID0gZXZlbnQudGFyZ2V0KSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2xvc2VzdChcbiAgICAgICAgXCIudjMtaW5wdXQtcGlja2VyLXdyYXBcIlxuICAgICAgKSk7XG4gICAgICBpZiAoaXNPdXRzaWRlICYmIG9wZW4udmFsdWUpIHtcbiAgICAgICAgb3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXR1cFBvcHBlcigpIHtcbiAgICAgIGlmIChidXR0b24udmFsdWUgJiYgcGlja2VyLnZhbHVlICYmIGlzSW5wdXRUeXBlKSB7XG4gICAgICAgIGxldCBvZmZzZXQyID0gc3RhdGUub3B0aW9ucy5vZmZzZXQ7XG4gICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0MiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIG9mZnNldDIgPSA2O1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVBvcHBlcihidXR0b24udmFsdWUsIHBpY2tlci52YWx1ZSwge1xuICAgICAgICAgIHBsYWNlbWVudDogXCJib3R0b20tZW5kXCIsXG4gICAgICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwib2Zmc2V0XCIsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFswLCBvZmZzZXQyXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlVGV4dChldmVudCkge1xuICAgICAgaW5wdXQudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUgfHwgXCJcIjtcbiAgICAgIGVtaXQoXCJ1cGRhdGU6dGV4dFwiLCBpbnB1dC52YWx1ZSk7XG4gICAgfVxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBzZXR1cFBvcHBlcigpO1xuICAgIH0pO1xuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0xpc3RlbmVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZmFjZTogc21pbGV5c19wZW9wbGUsXG4gICAgICBvcGVuLFxuICAgICAgb25TZWxlY3QsXG4gICAgICBpbnB1dCxcbiAgICAgIGVsZW0sXG4gICAgICB1cGRhdGVDdXJzb3IsXG4gICAgICBidXR0b24sXG4gICAgICBwaWNrZXIsXG4gICAgICBpc0lucHV0VHlwZSxcbiAgICAgIG9uQ2hhbmdlVGV4dCxcbiAgICAgIGNvbG9yVGhlbWVcbiAgICB9O1xuICB9XG59KTtcbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIGtleTogMCxcbiAgY2xhc3M6IFwidjMtaW5wdXQtZW1vamktcGlja2VyXCJcbn07XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJ2My1pbnB1dC1waWNrZXItcm9vdFwiIH07XG5jb25zdCBfaG9pc3RlZF8zID0gW1widmFsdWVcIl07XG5jb25zdCBfaG9pc3RlZF80ID0gW1widmFsdWVcIl07XG5jb25zdCBfaG9pc3RlZF81ID0gW1wic3JjXCJdO1xuZnVuY3Rpb24gX3NmY19yZW5kZXIkMShfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgY29uc3QgX2NvbXBvbmVudF9IZWFkZXIgPSByZXNvbHZlQ29tcG9uZW50KFwiSGVhZGVyXCIpO1xuICBjb25zdCBfY29tcG9uZW50X0JvZHkgPSByZXNvbHZlQ29tcG9uZW50KFwiQm9keVwiKTtcbiAgY29uc3QgX2NvbXBvbmVudF9Gb290ZXIgPSByZXNvbHZlQ29tcG9uZW50KFwiRm9vdGVyXCIpO1xuICByZXR1cm4gX2N0eC5pc0lucHV0VHlwZSA/IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBjcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgX2N0eC50eXBlID09PSBcImlucHV0XCIgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImlucHV0XCIsIHtcbiAgICAgICAga2V5OiAwLFxuICAgICAgICByZWY6IFwiZWxlbVwiLFxuICAgICAgICB2YWx1ZTogX2N0eC5pbnB1dCxcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGNsYXNzOiBcInYzLWVtb2ppLXBpY2tlci1pbnB1dFwiLFxuICAgICAgICBvbklucHV0OiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICguLi5hcmdzKSA9PiBfY3R4Lm9uQ2hhbmdlVGV4dCAmJiBfY3R4Lm9uQ2hhbmdlVGV4dCguLi5hcmdzKSksXG4gICAgICAgIG9uQmx1cjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAoLi4uYXJncykgPT4gX2N0eC51cGRhdGVDdXJzb3IgJiYgX2N0eC51cGRhdGVDdXJzb3IoLi4uYXJncykpXG4gICAgICB9LCBudWxsLCA0MCwgX2hvaXN0ZWRfMykpIDogKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgIGtleTogMSxcbiAgICAgICAgcmVmOiBcImVsZW1cIixcbiAgICAgICAgdmFsdWU6IF9jdHguaW5wdXQsXG4gICAgICAgIGNsYXNzOiBcInYzLWVtb2ppLXBpY2tlci10ZXh0YXJlYVwiLFxuICAgICAgICBvbklucHV0OiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICguLi5hcmdzKSA9PiBfY3R4Lm9uQ2hhbmdlVGV4dCAmJiBfY3R4Lm9uQ2hhbmdlVGV4dCguLi5hcmdzKSksXG4gICAgICAgIG9uQmx1cjogX2NhY2hlWzNdIHx8IChfY2FjaGVbM10gPSAoLi4uYXJncykgPT4gX2N0eC51cGRhdGVDdXJzb3IgJiYgX2N0eC51cGRhdGVDdXJzb3IoLi4uYXJncykpXG4gICAgICB9LCBudWxsLCA0MCwgX2hvaXN0ZWRfNCkpLFxuICAgICAgY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKFtcInYzLWlucHV0LXBpY2tlci13cmFwXCIsIF9jdHgub3BlbiA/IFwidjMtcGlja2VyLWlzLW9wZW5cIiA6IFwiXCJdKVxuICAgICAgfSwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgICAgIHJlZjogXCJidXR0b25cIixcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIGNsYXNzOiBcInYzLWlucHV0LXBpY2tlci1pY29uXCIsXG4gICAgICAgICAgb25DbGljazogX2NhY2hlWzRdIHx8IChfY2FjaGVbNF0gPSAoJGV2ZW50KSA9PiBfY3R4Lm9wZW4gPSAhX2N0eC5vcGVuKVxuICAgICAgICB9LCBbXG4gICAgICAgICAgY3JlYXRlRWxlbWVudFZOb2RlKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHNyYzogX2N0eC5mYWNlLFxuICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgfSwgbnVsbCwgOCwgX2hvaXN0ZWRfNSlcbiAgICAgICAgXSwgNTEyKSxcbiAgICAgICAgY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgICByZWY6IFwicGlja2VyXCIsXG4gICAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKFtcInYzLWVtb2ppLXBpY2tlclwiLCBcInYzLWNvbG9yLXRoZW1lLVwiICsgX2N0eC5jb2xvclRoZW1lXSlcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGNyZWF0ZVZOb2RlKF9jb21wb25lbnRfSGVhZGVyKSxcbiAgICAgICAgICBjcmVhdGVWTm9kZShfY29tcG9uZW50X0JvZHksIHsgb25TZWxlY3Q6IF9jdHgub25TZWxlY3QgfSwgbnVsbCwgOCwgW1wib25TZWxlY3RcIl0pLFxuICAgICAgICAgIGNyZWF0ZVZOb2RlKF9jb21wb25lbnRfRm9vdGVyKVxuICAgICAgICBdLCAyKVxuICAgICAgXSwgMilcbiAgICBdKVxuICBdKSkgOiAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAga2V5OiAxLFxuICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhbXCJ2My1lbW9qaS1waWNrZXJcIiwgXCJ2My1jb2xvci10aGVtZS1cIiArIF9jdHguY29sb3JUaGVtZV0pXG4gIH0sIFtcbiAgICBjcmVhdGVWTm9kZShfY29tcG9uZW50X0hlYWRlciksXG4gICAgY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9Cb2R5LCB7IG9uU2VsZWN0OiBfY3R4Lm9uU2VsZWN0IH0sIG51bGwsIDgsIFtcIm9uU2VsZWN0XCJdKSxcbiAgICBjcmVhdGVWTm9kZShfY29tcG9uZW50X0Zvb3RlcilcbiAgXSwgMikpO1xufVxudmFyIFBpY2tlclJvb3QgPSAvKiBAX19QVVJFX18gKi8gX2V4cG9ydF9zZmMoX3NmY19tYWluJDEsIFtbXCJyZW5kZXJcIiwgX3NmY19yZW5kZXIkMV1dKTtcbmNvbnN0IF9zZmNfbWFpbiA9IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6IFwiUGlja2VyXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBQaWNrZXJSb290XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgbmF0aXZlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGhpZGVTZWFyY2g6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaGlkZUdyb3VwSWNvbnM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaGlkZUdyb3VwTmFtZXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgc3RhdGljVGV4dHM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcbiAgICB9LFxuICAgIGRpc2FibGVTdGlja3lHcm91cE5hbWVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVkR3JvdXBzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgfSxcbiAgICBncm91cE5hbWVzOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXG4gICAgfSxcbiAgICBkaXNhYmxlU2tpblRvbmVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICB9LFxuICAgIG1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiaW5zZXJ0XCJcbiAgICB9LFxuICAgIG9mZnNldDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNlxuICAgIH0sXG4gICAgYWRkaXRpb25hbEdyb3Vwczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH0sXG4gICAgZ3JvdXBPcmRlcjoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG4gICAgZ3JvdXBJY29uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH0sXG4gICAgcGlja2VyVHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgZGlzcGxheVJlY2VudDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICB0aGVtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJsaWdodFwiXG4gICAgfVxuICB9LFxuICBlbWl0czoge1xuICAgIFwidXBkYXRlOnRleHRcIjogKHRleHQpID0+IHRydWUsXG4gICAgc2VsZWN0OiAoZW1vamkpID0+IHRydWVcbiAgfSxcbiAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgaW5wdXQgPSByZWYocHJvcHMudGV4dCk7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2VUZXh0KHRleHQpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gdGV4dCB8fCBcIlwiO1xuICAgICAgZW1pdChcInVwZGF0ZTp0ZXh0XCIsIGlucHV0LnZhbHVlKTtcbiAgICB9XG4gICAgY29uc3Qgc3RvcmUgPSBTdG9yZSgpO1xuICAgIHN0b3JlLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgbmF0aXZlOiBwcm9wcy5uYXRpdmUsXG4gICAgICBoaWRlU2VhcmNoOiBwcm9wcy5oaWRlU2VhcmNoLFxuICAgICAgaGlkZUdyb3VwSWNvbnM6IHByb3BzLmhpZGVHcm91cEljb25zLFxuICAgICAgaGlkZUdyb3VwTmFtZXM6IHByb3BzLmhpZGVHcm91cE5hbWVzLFxuICAgICAgc3RhdGljVGV4dHM6IHsgLi4uU1RBVElDX1RFWFRTLCAuLi5wcm9wcy5zdGF0aWNUZXh0cyB9LFxuICAgICAgZGlzYWJsZVN0aWNreUdyb3VwTmFtZXM6IHByb3BzLmRpc2FibGVTdGlja3lHcm91cE5hbWVzLFxuICAgICAgZGlzYWJsZWRHcm91cHM6IHByb3BzLmRpc2FibGVkR3JvdXBzLFxuICAgICAgZ3JvdXBOYW1lczogeyAuLi5HUk9VUF9OQU1FUywgLi4ucHJvcHMuZ3JvdXBOYW1lcyB9LFxuICAgICAgZGlzYWJsZVNraW5Ub25lczogcHJvcHMuZGlzYWJsZVNraW5Ub25lcyxcbiAgICAgIGRpc3BsYXlSZWNlbnQ6IHByb3BzLmRpc3BsYXlSZWNlbnQsXG4gICAgICBhZGRpdGlvbmFsR3JvdXBzOiBwcm9wcy5hZGRpdGlvbmFsR3JvdXBzLFxuICAgICAgbW9kZTogcHJvcHMubW9kZSxcbiAgICAgIG9mZnNldDogcHJvcHMub2Zmc2V0LFxuICAgICAgZ3JvdXBPcmRlcjogcHJvcHMuZ3JvdXBPcmRlcixcbiAgICAgIGdyb3VwSWNvbnM6IHByb3BzLmdyb3VwSWNvbnMsXG4gICAgICBjb2xvclRoZW1lOiBDT0xPUl9USEVNRVMuaW5jbHVkZXMocHJvcHMudGhlbWUpID8gcHJvcHMudGhlbWUgOiBcImxpZ2h0XCJcbiAgICB9KTtcbiAgICBwcm92aWRlKFwic3RvcmVcIiwgc3RvcmUpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBwcm9wcy5waWNrZXJUeXBlLFxuICAgICAgaW5wdXQsXG4gICAgICBvbkNoYW5nZVRleHRcbiAgICB9O1xuICB9XG59KTtcbmZ1bmN0aW9uIF9zZmNfcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICBjb25zdCBfY29tcG9uZW50X3BpY2tlcl9yb290ID0gcmVzb2x2ZUNvbXBvbmVudChcInBpY2tlci1yb290XCIpO1xuICByZXR1cm4gb3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKF9jb21wb25lbnRfcGlja2VyX3Jvb3QsIHtcbiAgICB0eXBlOiBfY3R4LnR5cGUsXG4gICAgdGV4dDogX2N0eC5pbnB1dCxcbiAgICBvblNlbGVjdDogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50KSA9PiBfY3R4LiRlbWl0KFwic2VsZWN0XCIsICRldmVudCkpLFxuICAgIFwib25VcGRhdGU6dGV4dFwiOiBfY3R4Lm9uQ2hhbmdlVGV4dFxuICB9LCBudWxsLCA4LCBbXCJ0eXBlXCIsIFwidGV4dFwiLCBcIm9uVXBkYXRlOnRleHRcIl0pO1xufVxudmFyIFBpY2tlciA9IC8qIEBfX1BVUkVfXyAqLyBfZXhwb3J0X3NmYyhfc2ZjX21haW4sIFtbXCJyZW5kZXJcIiwgX3NmY19yZW5kZXJdXSk7XG52YXIgaW5kZXggPSBcIlwiO1xuZXhwb3J0IHsgUGlja2VyIGFzIGRlZmF1bHQgfTtcbiIsInZhciBicm93c2VyU3VwcG9ydHNUZXh0YXJlYVRleHROb2Rlcztcbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5wdXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gY2FuTWFuaXB1bGF0ZVZpYVRleHROb2RlcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubm9kZU5hbWUgIT09IFwiVEVYVEFSRUFcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnJvd3NlclN1cHBvcnRzVGV4dGFyZWFUZXh0Tm9kZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgdGV4dGFyZWEudmFsdWUgPSAxO1xuICAgIGJyb3dzZXJTdXBwb3J0c1RleHRhcmVhVGV4dE5vZGVzID0gISF0ZXh0YXJlYS5maXJzdENoaWxkO1xuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXJTdXBwb3J0c1RleHRhcmVhVGV4dE5vZGVzO1xufVxuLyoqXG4gKiBAcGFyYW0ge0hUTUxUZXh0QXJlYUVsZW1lbnR8SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuXG5cbmZ1bmN0aW9uIGluZGV4IChpbnB1dCwgdGV4dCkge1xuICAvLyBNb3N0IG9mIHRoZSB1c2VkIEFQSXMgb25seSB3b3JrIHdpdGggdGhlIGZpZWxkIHNlbGVjdGVkXG4gIGlucHV0LmZvY3VzKCk7IC8vIElFIDgtMTBcblxuICBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgdmFyIGllUmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcbiAgICBpZVJhbmdlLnRleHQgPSB0ZXh0OyAvLyBNb3ZlIGN1cnNvciBhZnRlciB0aGUgaW5zZXJ0ZWQgdGV4dFxuXG4gICAgaWVSYW5nZS5jb2xsYXBzZShmYWxzZVxuICAgIC8qIHRvIHRoZSBlbmQgKi9cbiAgICApO1xuICAgIGllUmFuZ2Uuc2VsZWN0KCk7XG4gICAgcmV0dXJuO1xuICB9IC8vIFdlYmtpdCArIEVkZ2VcblxuXG4gIHZhciBpc1N1Y2Nlc3MgPSBkb2N1bWVudC5leGVjQ29tbWFuZChcImluc2VydFRleHRcIiwgZmFsc2UsIHRleHQpO1xuXG4gIGlmICghaXNTdWNjZXNzKSB7XG4gICAgdmFyIHN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgdmFyIGVuZCA9IGlucHV0LnNlbGVjdGlvbkVuZDsgLy8gRmlyZWZveCAobm9uLXN0YW5kYXJkIG1ldGhvZClcblxuICAgIGlmICh0eXBlb2YgaW5wdXQuc2V0UmFuZ2VUZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlucHV0LnNldFJhbmdlVGV4dCh0ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVG8gbWFrZSBhIGNoYW5nZSB3ZSBqdXN0IG5lZWQgYSBSYW5nZSwgbm90IGEgU2VsZWN0aW9uXG4gICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG5cbiAgICAgIGlmIChjYW5NYW5pcHVsYXRlVmlhVGV4dE5vZGVzKGlucHV0KSkge1xuICAgICAgICB2YXIgbm9kZSA9IGlucHV0LmZpcnN0Q2hpbGQ7IC8vIElmIHRleHRhcmVhIGlzIGVtcHR5LCBqdXN0IGluc2VydCB0aGUgdGV4dFxuXG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgIGlucHV0LmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2Ugd2UgbmVlZCB0byBmaW5kIGEgbm9kZXMgZm9yIHN0YXJ0IGFuZCBlbmRcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICAgICB2YXIgc3RhcnROb2RlID0gbnVsbDtcbiAgICAgICAgICB2YXIgZW5kTm9kZSA9IG51bGw7XG5cbiAgICAgICAgICB3aGlsZSAobm9kZSAmJiAoc3RhcnROb2RlID09PSBudWxsIHx8IGVuZE5vZGUgPT09IG51bGwpKSB7XG4gICAgICAgICAgICB2YXIgbm9kZUxlbmd0aCA9IG5vZGUubm9kZVZhbHVlLmxlbmd0aDsgLy8gaWYgc3RhcnQgb2YgdGhlIHNlbGVjdGlvbiBmYWxscyBpbnRvIGN1cnJlbnQgbm9kZVxuXG4gICAgICAgICAgICBpZiAoc3RhcnQgPj0gb2Zmc2V0ICYmIHN0YXJ0IDw9IG9mZnNldCArIG5vZGVMZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnROb2RlID0gbm9kZSwgc3RhcnQgLSBvZmZzZXQpO1xuICAgICAgICAgICAgfSAvLyBpZiBlbmQgb2YgdGhlIHNlbGVjdGlvbiBmYWxscyBpbnRvIGN1cnJlbnQgbm9kZVxuXG5cbiAgICAgICAgICAgIGlmIChlbmQgPj0gb2Zmc2V0ICYmIGVuZCA8PSBvZmZzZXQgKyBub2RlTGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJhbmdlLnNldEVuZChlbmROb2RlID0gbm9kZSwgZW5kIC0gb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb2Zmc2V0ICs9IG5vZGVMZW5ndGg7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICB9IC8vIElmIHRoZXJlIGlzIHNvbWUgdGV4dCBzZWxlY3RlZCwgcmVtb3ZlIGl0IGFzIHdlIHNob3VsZCByZXBsYWNlIGl0XG5cblxuICAgICAgICAgIGlmIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgICAgICByYW5nZS5kZWxldGVDb250ZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBJZiB0aGUgbm9kZSBpcyBhIHRleHRhcmVhIGFuZCB0aGUgcmFuZ2UgZG9lc24ndCBzcGFuIG91dHNpZGUgdGhlIGVsZW1lbnRcbiAgICAgIC8vXG4gICAgICAvLyBHZXQgdGhlIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIG9mIHRoZSBzZWxlY3RlZCByYW5nZSBhbmQgdGVzdCBpdHMgdHlwZVxuICAgICAgLy8gSWYgdGhlIG5vZGUgaXMgb2YgdHlwZSBgI3RleHRgIGl0IG1lYW5zIHRoYXQgd2UncmUgc3RpbGwgd29ya2luZyB3aXRoIHRleHQgbm9kZXMgd2l0aGluIG91ciB0ZXh0YXJlYSBlbGVtZW50XG4gICAgICAvLyBvdGhlcndpc2UsIGlmIGl0J3Mgb2YgdHlwZSBgI2RvY3VtZW50YCBmb3IgZXhhbXBsZSBpdCBtZWFucyBvdXIgc2VsZWN0aW9uIHNwYW5zIG91dHNpZGUgdGhlIHRleHRhcmVhLlxuXG5cbiAgICAgIGlmIChjYW5NYW5pcHVsYXRlVmlhVGV4dE5vZGVzKGlucHV0KSAmJiByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5ub2RlTmFtZSA9PT0gXCIjdGV4dFwiKSB7XG4gICAgICAgIC8vIEZpbmFsbHkgaW5zZXJ0IGEgbmV3IG5vZGUuIFRoZSBicm93c2VyIHdpbGwgYXV0b21hdGljYWxseSBzcGxpdCBzdGFydCBhbmQgZW5kIG5vZGVzIGludG8gdHdvIGlmIG5lY2Vzc2FyeVxuICAgICAgICByYW5nZS5pbnNlcnROb2RlKHRleHROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSBub2RlIGlzIG5vdCBhIHRleHRhcmVhIG9yIHRoZSByYW5nZSBzcGFucyBvdXRzaWRlIGEgdGV4dGFyZWEgdGhlIG9ubHkgd2F5IGlzIHRvIHJlcGxhY2UgdGhlIHdob2xlIHZhbHVlXG4gICAgICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHN0YXJ0KSArIHRleHQgKyB2YWx1ZS5zbGljZShlbmQpO1xuICAgICAgfVxuICAgIH0gLy8gQ29ycmVjdCB0aGUgY3Vyc29yIHBvc2l0aW9uIHRvIGJlIGF0IHRoZSBlbmQgb2YgdGhlIGluc2VydGlvblxuXG5cbiAgICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCArIHRleHQubGVuZ3RoLCBzdGFydCArIHRleHQubGVuZ3RoKTsgLy8gTm90aWZ5IGFueSBwb3NzaWJsZSBsaXN0ZW5lcnMgb2YgdGhlIGNoYW5nZVxuXG4gICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIlVJRXZlbnRcIik7XG4gICAgZS5pbml0RXZlbnQoXCJpbnB1dFwiLCB0cnVlLCBmYWxzZSk7XG4gICAgaW5wdXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaGVhZGVyXG4gICAgOmNsYXNzPVwie1xuICAgICAgJ2JnLW15ZGFyayB0ZXh0LXdoaXRlJzogJHEuZGFyay5tb2RlLFxuICAgICAgJ2JnLXdoaXRlIHRleHQtZGFyayc6ICEkcS5kYXJrLm1vZGUsXG4gICAgfVwiXG4gID5cbiAgICA8cS10b29sYmFyPlxuICAgICAgPHEtYnRuXG4gICAgICAgIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCJcbiAgICAgICAgZmxhdFxuICAgICAgICByb3VuZFxuICAgICAgICBkZW5zZVxuICAgICAgICBpY29uPVwibGFzIGxhLWFuZ2xlLWxlZnRcIlxuICAgICAgICBjbGFzcz1cInEtbXItc21cIlxuICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgIC8+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cImxvYWRpbmdfdXNlclwiPlxuICAgICAgICA8cS1jaXJjdWxhci1wcm9ncmVzc1xuICAgICAgICAgIGluZGV0ZXJtaW5hdGVcbiAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgc2l6ZT1cIjI1cHhcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgPHEtYXZhdGFyIHNpemU9XCIzMHB4XCI+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJnZXRVc2VyRGF0YVtwYXJ0aWNpcGFudF91c2VyX3V1aWRdXCI+XG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJnZXRVc2VyRGF0YVtwYXJ0aWNpcGFudF91c2VyX3V1aWRdLnBob3RvX3VybFwiIC8+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLWF2YXRhcj5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImdldFVzZXJEYXRhW3BhcnRpY2lwYW50X3VzZXJfdXVpZF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgIHt7IGdldFVzZXJEYXRhW3BhcnRpY2lwYW50X3VzZXJfdXVpZF0uZmlyc3RfbmFtZSB9fVxuICAgICAgICAgICAgICB7eyBnZXRVc2VyRGF0YVtwYXJ0aWNpcGFudF91c2VyX3V1aWRdLmxhc3RfbmFtZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8ZGl2IHYtaWY9XCJvcmRlcl9pZFwiIGNsYXNzPVwiZm9udDExXCI+XG4gICAgICAgICAgICB7eyAkdChcIk9yZGVyI1wiKSB9fSB7eyBvcmRlcl9pZCB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLXRvb2xiYXI+XG4gIDwvcS1oZWFkZXI+XG4gIDxxLXBhZ2UgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0cmV0Y2ggY29udGVudC1lbmQgcS1wYS1tZFwiPlxuICAgIDwhLS0ge3sgcGFydGljaXBhbnRfdXNlcl91dWlkIH19IC0tPlxuICAgIDwhLS0gPHByZT57eyBnZXRVc2VyRGF0YSB9fTwvcHJlPiAtLT5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7IG1heC13aWR0aDogNDAwcHhcIj5cbiAgICAgIDxxLWlubmVyLWxvYWRpbmdcbiAgICAgICAgOnNob3dpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgOmxhYmVsPVwiJHQoJ1BsZWFzZSB3YWl0JylcIlxuICAgICAgICBsYWJlbC1jbGFzcz1cInRleHQtZGFya1wiXG4gICAgICAgIGxhYmVsLXN0eWxlPVwiZm9udC1zaXplOiAxZW1cIlxuICAgICAgPlxuICAgICAgPC9xLWlubmVyLWxvYWRpbmc+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW1zIGluIGdldENoYXRtZXNzYWdlXCIgOmtleT1cIml0ZW1zXCI+XG4gICAgICAgIDxxLWNoYXQtbWVzc2FnZVxuICAgICAgICAgIDpuYW1lPVwiXG4gICAgICAgICAgICBnZXRVc2VyRGF0YVtpdGVtcy5zZW5kZXJJRF1cbiAgICAgICAgICAgICAgPyBpdGVtcy5zZW5kZXJJRCA9PSB1c2VyX3V1aWRcbiAgICAgICAgICAgICAgICA/ICR0KCdZb3UnKVxuICAgICAgICAgICAgICAgIDogZ2V0VXNlckRhdGFbaXRlbXMuc2VuZGVySURdLmZpcnN0X25hbWVcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIFwiXG4gICAgICAgICAgOmF2YXRhcj1cIlxuICAgICAgICAgICAgZ2V0VXNlckRhdGFbaXRlbXMuc2VuZGVySURdXG4gICAgICAgICAgICAgID8gZ2V0VXNlckRhdGFbaXRlbXMuc2VuZGVySURdLnBob3RvX3VybFxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgXCJcbiAgICAgICAgICA6c3RhbXA9XCJpdGVtcy50aW1lXCJcbiAgICAgICAgICA6dGV4dC1jb2xvcj1cIml0ZW1zLnNlbmRlcklEID09IHVzZXJfdXVpZCA/ICd3aGl0ZScgOiAnZGFyaydcIlxuICAgICAgICAgIDpiZy1jb2xvcj1cIml0ZW1zLnNlbmRlcklEID09IHVzZXJfdXVpZCA/ICdibHVlJyA6ICdncmV5LTInXCJcbiAgICAgICAgICA6c2VudD1cIml0ZW1zLnNlbmRlcklEID09IHVzZXJfdXVpZCA/IHRydWUgOiBmYWxzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgI2F2YXRhcj5cbiAgICAgICAgICAgIDxxLWF2YXRhciBjbGFzcz1cInEtbWwtc21cIj5cbiAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgOnNyYz1cIlxuICAgICAgICAgICAgICAgICAgZ2V0VXNlckRhdGFbaXRlbXMuc2VuZGVySURdXG4gICAgICAgICAgICAgICAgICAgID8gZ2V0VXNlckRhdGFbaXRlbXMuc2VuZGVySURdLnBob3RvX3VybFxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBzcGlubmVyLXNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0OHB4OyBtYXgtd2lkdGg6IDQ4cHg7IG1pbi13aWR0aDogNDhweFwiXG4gICAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgPjwvcS1pbWc+XG4gICAgICAgICAgICA8L3EtYXZhdGFyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbXMubWVzc2FnZVwiPnt7IGl0ZW1zLm1lc3NhZ2UgfX08L2Rpdj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW1zLmZpbGVVcmxcIj5cbiAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICA6c3JjPVwiaXRlbXMuZmlsZVVybFwiXG4gICAgICAgICAgICAgIHNwaW5uZXItc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgc3Bpbm5lci1jb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzdHlsZT1cIm1pbi1oZWlnaHQ6IDE1MHB4OyBtaW4td2lkdGg6IDE1MHB4OyBtYXgtd2lkdGg6IDE1MHB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS1pbWc+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLWNoYXQtbWVzc2FnZT5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtcywgdXNlclVVSUQpIGluIGdldFVzZXJUeXBpbmdcIiA6a2V5PVwiaXRlbXNcIj5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpdGVtc1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidXNlclVVSUQgIT0gdXNlcl91dWlkXCI+XG4gICAgICAgICAgICA8cS1jaGF0LW1lc3NhZ2VcbiAgICAgICAgICAgICAgOm5hbWU9XCJcbiAgICAgICAgICAgICAgICBnZXRVc2VyRGF0YVt1c2VyVVVJRF1cbiAgICAgICAgICAgICAgICAgID8gdXNlclVVSUQgPT0gdXNlcl91dWlkXG4gICAgICAgICAgICAgICAgICAgID8gJHQoJ1lvdScpXG4gICAgICAgICAgICAgICAgICAgIDogZ2V0VXNlckRhdGFbdXNlclVVSURdLmZpcnN0X25hbWVcbiAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgOmF2YXRhcj1cIlxuICAgICAgICAgICAgICAgIGdldFVzZXJEYXRhW3VzZXJVVUlEXSA/IGdldFVzZXJEYXRhW3VzZXJVVUlEXS5waG90b191cmwgOiAnJ1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA6c3RhbXA9XCJpdGVtcy50aW1lXCJcbiAgICAgICAgICAgICAgOnRleHQtY29sb3I9XCJ1c2VyVVVJRCA9PSB1c2VyX3V1aWQgPyAnd2hpdGUnIDogJ2RhcmsnXCJcbiAgICAgICAgICAgICAgYmctY29sb3I9XCJhbWJlclwiXG4gICAgICAgICAgICAgIDpzZW50PVwidXNlclVVSUQgPT0gdXNlcl91dWlkID8gdHJ1ZSA6IGZhbHNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIHNpemU9XCIycmVtXCIgLz5cbiAgICAgICAgICAgIDwvcS1jaGF0LW1lc3NhZ2U+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiByZWY9XCJzY3JvbGxfcmVmXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIHEtcGEtc21cIj48L2Rpdj5cbiAgPC9xLXBhZ2U+XG4gIDxxLWZvb3RlclxuICAgIHYtaWY9XCJoYXNDb252ZXJzYXRpb25cIlxuICAgIGNsYXNzPVwiYmctd2hpdGUgdGV4dC1kYXJrIHEtcGwtc20gcS1wci1zbSBib3JkZXItZ3JleVwiXG4gID5cbiAgICA8cS11cGxvYWRlclxuICAgICAgOnVybD1cImNoYXRfYXBpX3VybFwiXG4gICAgICBtdWx0aXBsZVxuICAgICAgcmVmPVwidXBsb2FkZXJcIlxuICAgICAgZmxhdFxuICAgICAgYWNjZXB0PVwiLmpwZywgaW1hZ2UvKlwiXG4gICAgICBtYXgtdG90YWwtc2l6ZT1cIjEwNDg1NzYwXCJcbiAgICAgIGZpZWxkLW5hbWU9XCJmaWxlXCJcbiAgICAgIEBhZGRlZD1cImFmdGVyQWRkZWRGaWxlc1wiXG4gICAgICBAcmVtb3ZlZD1cImFmdGVyUmVtb3ZlRmlsZXNcIlxuICAgICAgQHJlamVjdGVkPVwib25SZWplY3RlZEZpbGVzXCJcbiAgICAgIEB1cGxvYWRpbmc9XCJvblVwbG9hZGluZ0ZpbGVzXCJcbiAgICAgIEB1cGxvYWRlZD1cImFmdGVyVXBsb2FkZWRcIlxuICAgICAgQGZpbmlzaD1cImFmdGVyRmluaXNoVXBsb2FkXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj5cbiAgICAgICAgPHEtdXBsb2FkZXItYWRkLXRyaWdnZXI+PC9xLXVwbG9hZGVyLWFkZC10cmlnZ2VyPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bGlzdD1cInNjb3BlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktc3RhcnQgcS1jb2wtZ3V0dGVyLXgtbWRcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJmaWxlIGluIHNjb3BlLmZpbGVzXCIgOmtleT1cImZpbGUuX19rZXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZS1wb3NpdGlvblwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgOnNyYz1cImZpbGUuX19pbWcuc3JjXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogNjBweDsgaGVpZ2h0OiA2MHB4XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInJhZGl1czEwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJzb2x1dGUtcmlnaHRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAtMTBweDsgbWFyZ2luLXRvcDogLTVweFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzY29wZS5yZW1vdmVGaWxlKGZpbGUpXCJcbiAgICAgICAgICAgICAgICA+PC9xLWJ0bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLXVwbG9hZGVyPlxuXG4gICAgPHEtaW5wdXRcbiAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICB2LW1vZGVsPVwibWVzc2FnZVwiXG4gICAgICA6bGFiZWw9XCIkdCgnWW91ciBtZXNzYWdlJylcIlxuICAgICAgcmVmPVwibWVzc2FnZVwiXG4gICAgICBhdXRvZ3Jvd1xuICAgICAgYm9yZGVybGVzc1xuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YXBwZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItc21cIj5cbiAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgIHVuZWxldmF0ZWRcbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICA6Y29sb3I9XCIkcS5kYXJrLm1vZGUgPyAnZ3JleTYwMCcgOiAnbXlncmV5J1wiXG4gICAgICAgICAgICA6dGV4dC1jb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5MzAwJyA6ICdncmV5J1wiXG4gICAgICAgICAgICBAY2xpY2s9XCJwaWNrRmlsZXNcIlxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJhdHRhY2hfZmlsZVwiIGNsYXNzPVwicm90YXRlLTQ1XCI+PC9xLWljb24+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgdW5lbGV2YXRlZFxuICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgIDpjb2xvcj1cIiRxLmRhcmsubW9kZSA/ICdncmV5NjAwJyA6ICdteWdyZXknXCJcbiAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtaWNvbiBuYW1lPVwiZW1vamlfZW1vdGlvbnNcIj48L3EtaWNvbj5cbiAgICAgICAgICAgIDxxLXBvcHVwLXByb3h5IHJlZj1cInByb3h5XCI+XG4gICAgICAgICAgICAgIDxxLWNhcmQ+XG4gICAgICAgICAgICAgICAgPEVtb2ppUGlja2VyXG4gICAgICAgICAgICAgICAgICA6bmF0aXZlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBAc2VsZWN0PVwib25TZWxlY3RFbW9qaVwiXG4gICAgICAgICAgICAgICAgICA6ZGlzYWJsZS1za2luLXRvbmVzPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9xLWNhcmQ+XG4gICAgICAgICAgICA8L3EtcG9wdXAtcHJveHk+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgQGNsaWNrPVwib25TdWJtaXRcIlxuICAgICAgICAgICAgOmRpc2FibGVkPVwiIWhhc01lc3NhZ2VcIlxuICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgOmNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXk2MDAnIDogJ3ByaW1hcnknXCJcbiAgICAgICAgICAgIDp0ZXh0LWNvbG9yPVwiJHEuZGFyay5tb2RlID8gJ2dyZXkzMDAnIDogJ2dyZXknXCJcbiAgICAgICAgICAgIDpsYWJlbD1cIiR0KCdTZW5kJylcIlxuICAgICAgICAgICAgbm8tY2Fwc1xuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1pbnB1dD5cbiAgPC9xLWZvb3Rlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBzY3JvbGwgfSBmcm9tIFwicXVhc2FyXCI7XG5jb25zdCB7IGdldFNjcm9sbFRhcmdldCwgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiB9ID0gc2Nyb2xsO1xuaW1wb3J0IEVtb2ppUGlja2VyIGZyb20gXCJ2dWUzLWVtb2ppLXBpY2tlclwiO1xuaW1wb3J0IFwidnVlMy1lbW9qaS1waWNrZXIvY3NzXCI7XG5pbXBvcnQgaW5zZXJ0VGV4dEF0Q3Vyc29yIGZyb20gXCJpbnNlcnQtdGV4dC1hdC1jdXJzb3JcIjtcbmltcG9ydCB7IGZpcmViYXNlRGIsIGZpcmViYXNlQ29sbGVjdGlvbkVudW0gfSBmcm9tIFwic3JjL2Jvb3QvRmlyZWJhc2VDaGF0XCI7XG5pbXBvcnQge1xuICBjb2xsZWN0aW9uLFxuICBxdWVyeSxcbiAgd2hlcmUsXG4gIG9yZGVyQnksXG4gIGxpbWl0LFxuICBvblNuYXBzaG90LFxuICBnZXREb2NzLFxuICBkb2MsXG4gIGdldERvYyxcbiAgdXBkYXRlRG9jLFxuICBUaW1lc3RhbXAsXG4gIGFkZERvYyxcbiAgc2VydmVyVGltZXN0YW1wLFxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwic3JjL2FwaS9hdXRoXCI7XG5pbXBvcnQgQVBJaW50ZXJmYWNlIGZyb20gXCJzcmMvYXBpL0FQSWludGVyZmFjZVwiO1xuaW1wb3J0IHsgZGF0ZSB9IGZyb20gXCJxdWFzYXJcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcInNyYy9hcGkvY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJDaGF0Q29udmVyc2F0aW9uXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbW9qaVBpY2tlcixcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgY29udmVyc2F0aW9uX2lkOiBcIlwiLFxuICAgICAgZGF0YTogW10sXG4gICAgICB1c2VyX3R5cGluZ19kYXRhOiBbXSxcbiAgICAgIGNoYXRpbmdfd2l0aF91c2VyX3V1aWQ6IFwiXCIsXG4gICAgICB1c2VyX3V1aWQ6IFwiXCIsXG4gICAgICB1c2VyX2RhdGE6IFtdLFxuICAgICAgcGFydGljaXBhbnRzOiBbXSxcbiAgICAgIG1haW5fdXNlcl90eXBlOiBcIlwiLFxuICAgICAgbG9hZGluZ191c2VyOiB0cnVlLFxuICAgICAgaXNfdHlwaW5nOiBmYWxzZSxcbiAgICAgIGZpbGVzOiB7fSxcbiAgICAgIGZpbGVfdXJsOiBcIlwiLFxuICAgICAgZmlsZV90eXBlOiBcIlwiLFxuICAgICAgdXBsb2FkX2xvYWRpbmc6IGZhbHNlLFxuICAgICAgY2hhdF9hcGlfdXJsOiBjb25maWcuYXBpX2Jhc2VfdXJsICsgXCIvY2hhdGFwaS91cGxvYWRpbWFnZVwiLFxuICAgICAgcGFydGljaXBhbnRfdXNlcl91dWlkOiBcIlwiLFxuICAgICAgb3JkZXJfaWQ6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmNvbnZlcnNhdGlvbl9pZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmRvY19pZDtcbiAgICBsZXQgdXNlciA9IGF1dGguZ2V0VXNlcigpO1xuICAgIHRoaXMudXNlcl91dWlkID0gdXNlci5jbGllbnRfdXVpZDtcbiAgICB0aGlzLmdldE1lc3NhZ2VzKCk7XG4gICAgdGhpcy5nZXRQYXJ0aWNpcGFudCgpO1xuICAgIHRoaXMuZ2V0V2hvSXNUeXBpbmcoKTtcbiAgICB0aGlzLmdldERvY3VtZW50RGV0YWlscygpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGdldENoYXRtZXNzYWdlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9LFxuICAgIGhhc01lc3NhZ2VPbGQoKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgaGFzTWVzc2FnZSgpIHtcbiAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMubWVzc2FnZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5maWxlcykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGhhc0NoYXREb2NJRCgpIHtcbiAgICAgIGlmICghZW1wdHkodGhpcy5jaGF0aW5nX3dpdGhfdXNlcl91dWlkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGhhc1VzZXJEYXRhKCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMudXNlcl9kYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0VXNlckRhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyX2RhdGE7XG4gICAgfSxcbiAgICBnZXRVc2VyVHlwaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMudXNlcl90eXBpbmdfZGF0YTtcbiAgICB9LFxuICAgIGhhc0NvbnZlcnNhdGlvbigpIHtcbiAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHRoaXMuY29udmVyc2F0aW9uX2lkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIGlzX3R5cGluZyhuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgaWYgKG5ld3ZhbCkge1xuICAgICAgICB0aGlzLlVwZGF0ZVdob2lzdHlwaW5nKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5VcGRhdGVXaG9pc3R5cGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXNzYWdlKG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgICBpZiAoIXRoaXMuaXNfdHlwaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNfdHlwaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDEwMDApOyAvLyAyLjUgc2VjIGRlbGF5XG4gICAgICB9XG4gICAgICB0aGlzLmlzX3R5cGluZyA9IHRydWU7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNjcm9sbFRvYm90dG9tKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IGVsID0gdGhpcy4kcmVmcy5zY3JvbGxfcmVmO1xuICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGVsKSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KGVsKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IGVsLm9mZnNldFRvcDtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gMTtcbiAgICAgICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24odGFyZ2V0LCBvZmZzZXQsIGR1cmF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblNlbGVjdEVtb2ppKGVtb2ppKSB7XG4gICAgICBpbnNlcnRUZXh0QXRDdXJzb3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpLCBlbW9qaS5pKTtcbiAgICAgIHRoaXMuJHJlZnMucHJveHkuaGlkZSgpO1xuICAgIH0sXG4gICAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgY2hhdERvY1JlZiA9IGRvYyhcbiAgICAgICAgZmlyZWJhc2VEYixcbiAgICAgICAgZmlyZWJhc2VDb2xsZWN0aW9uRW51bS5jaGF0cyxcbiAgICAgICAgdGhpcy5jb252ZXJzYXRpb25faWRcbiAgICAgICk7XG4gICAgICBjb25zdCBtZXNzYWdlc1F1ZXJ5ID0gcXVlcnkoXG4gICAgICAgIGNvbGxlY3Rpb24oY2hhdERvY1JlZiwgXCJtZXNzYWdlc1wiKSxcbiAgICAgICAgb3JkZXJCeShcInRpbWVzdGFtcFwiLCBcImFzY1wiKSxcbiAgICAgICAgbGltaXQoZmlyZWJhc2VDb2xsZWN0aW9uRW51bS5saW1pdClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IFNuYXBNZXNzYWdlcyA9IG9uU25hcHNob3QoXG4gICAgICAgIG1lc3NhZ2VzUXVlcnksXG4gICAgICAgIChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2MuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvYy5kYXRhKCk7XG4gICAgICAgICAgICAgIGxldCB0aW1lc3RhbXAgPSBtZXNzYWdlLnRpbWVzdGFtcC50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICB0aGlzLmRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgZmlsZVR5cGU6IG1lc3NhZ2UuZmlsZVR5cGUsXG4gICAgICAgICAgICAgICAgZmlsZVVybDogbWVzc2FnZS5maWxlVXJsLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgICAgICBzZW5kZXJJRDogbWVzc2FnZS5zZW5kZXJJRCxcbiAgICAgICAgICAgICAgICAvL3RpbWU6IERhdGVUaW1lLmZyb21JU08odGltZXN0YW1wKS50b0Zvcm1hdChcImNjYyBoaDptbSBhXCIpLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHRpbWU6IGRhdGUuZm9ybWF0RGF0ZSh0aW1lc3RhbXAsIFwiaGg6bW0gYVwiKSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnZlcnNhdGlvbiBkb2N1bWVudCBkb2VzIG5vdCBleGlzdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvYm90dG9tKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBtZXNzYWdlczpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sXG4gICAgZ2V0V2hvSXNUeXBpbmcoKSB7XG4gICAgICBjb25zdCBjaGF0RG9jUmVmID0gZG9jKFxuICAgICAgICBmaXJlYmFzZURiLFxuICAgICAgICBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtLmNoYXRzLFxuICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IFNuYXBXaG9pc3R5cGluZyA9IG9uU25hcHNob3QoXG4gICAgICAgIGNoYXREb2NSZWYsXG4gICAgICAgIChkb2NTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgIGlmIChkb2NTbmFwc2hvdC5leGlzdHMoKSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImdldFdob0lzVHlwaW5nXCIpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBkb2NTbmFwc2hvdC5kYXRhKCk7XG4gICAgICAgICAgICB0aGlzLnVzZXJfdHlwaW5nX2RhdGEgPSByZXN1bHRzLmlzVHlwaW5nIHx8IFtdO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy51c2VyX3R5cGluZ19kYXRhKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAoW3VzZXJJSUQsIGlzVFlwaW5nXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc1RZcGluZyAmJiB1c2VySUlEICE9IHRoaXMudXNlcl91dWlkKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvYm90dG9tKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJfdHlwaW5nX2RhdGEgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjaGF0IGRvY3VtZW50OlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgICBhc3luYyBnZXRQYXJ0aWNpcGFudCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhcbiAgICAgICAgICBmaXJlYmFzZURiLFxuICAgICAgICAgIGZpcmViYXNlQ29sbGVjdGlvbkVudW0uY2hhdHMsXG4gICAgICAgICAgdGhpcy5jb252ZXJzYXRpb25faWRcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGF0YVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7XG4gICAgICAgIGlmIChkYXRhU25hcHNob3QuZXhpc3RzKCkpIHtcbiAgICAgICAgICB0aGlzLnBhcnRpY2lwYW50cyA9IGRhdGFTbmFwc2hvdC5kYXRhKCkucGFydGljaXBhbnRzO1xuXG4gICAgICAgICAgbGV0IHJlc3BfcGFydGljaXBhbnRzID0gdGhpcy5wYXJ0aWNpcGFudHMuZmlsdGVyKFxuICAgICAgICAgICAgKGkpID0+ICFpLmluY2x1ZGVzKHRoaXMudXNlcl91dWlkKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5wYXJ0aWNpcGFudF91c2VyX3V1aWQgPSByZXNwX3BhcnRpY2lwYW50c1swXVxuICAgICAgICAgICAgPyByZXNwX3BhcnRpY2lwYW50c1swXVxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDb252ZXJzYXRpb24gZG9jdW1lbnQgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIHBhcnRpY2lwYW50czpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgIHRoaXMubG9hZGluZ191c2VyID0gdHJ1ZTtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFDaGF0cyhcImdldFVzZXJzXCIsIHtcbiAgICAgICAgbWFpbl91c2VyX3R5cGU6IHRoaXMubWFpbl91c2VyX3R5cGUsXG4gICAgICAgIHVzZXJzOiB0aGlzLnBhcnRpY2lwYW50cyxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy51c2VyX2RhdGEgPSBkYXRhLmRldGFpbHM7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJfZGF0YSA9IFtdO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ191c2VyID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXN5bmMgVXBkYXRlV2hvaXN0eXBpbmcoZGF0YSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jKFxuICAgICAgICAgIGZpcmViYXNlRGIsXG4gICAgICAgICAgZmlyZWJhc2VDb2xsZWN0aW9uRW51bS5jaGF0cyxcbiAgICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCB1cGRhdGVEb2MoZG9jUmVmLCB7XG4gICAgICAgICAgW2Bpc1R5cGluZy4ke3RoaXMudXNlcl91dWlkfWBdOiBkYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyB0eXBpbmcgc3RhdHVzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpbGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuJHJlZnMudXBsb2FkZXIudXBsb2FkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNhdmVDaGF0TWVzc2FnZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2F2ZUNoYXRNZXNzYWdlKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzUmVmID0gY29sbGVjdGlvbihcbiAgICAgICAgZmlyZWJhc2VEYixcbiAgICAgICAgZmlyZWJhc2VDb2xsZWN0aW9uRW51bS5jaGF0cyxcbiAgICAgICAgdGhpcy5jb252ZXJzYXRpb25faWQsXG4gICAgICAgIFwibWVzc2FnZXNcIlxuICAgICAgKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFkZERvYyhtZXNzYWdlc1JlZiwge1xuICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgICBzZW5kZXJJRDogdGhpcy51c2VyX3V1aWQsXG4gICAgICAgICAgdGltZXN0YW1wOiBUaW1lc3RhbXAubm93KCksXG4gICAgICAgICAgZmlsZVVybDogdGhpcy5maWxlX3VybCxcbiAgICAgICAgICBmaWxlVHlwZTogdGhpcy5maWxlX3R5cGUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb2N1bWVudExhc3RVcGRhdGUodGhpcy5jb252ZXJzYXRpb25faWQpO1xuICAgICAgICB0aGlzLnJlc2V0Q2hhdCgpO1xuICAgICAgICB0aGlzLm5vdGlmeVVzZXIoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgbWVzc2FnZSB0byB0aGUgY29udmVyc2F0aW9uOlwiLCBlcnJvcik7XG4gICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIGVycm9yLCBcImVycm9yXCIsIHRoaXMuJHEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZG9jdW1lbnRMYXN0VXBkYXRlKGRvY19pZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2hhdFJlZiA9IGRvYyhmaXJlYmFzZURiLCBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtLmNoYXRzLCBkb2NfaWQpO1xuICAgICAgICBhd2FpdCB1cGRhdGVEb2MoY2hhdFJlZiwge1xuICAgICAgICAgIGxhc3RVcGRhdGVkOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFwiZGFya1wiLCBlcnJvciwgXCJlcnJvclwiLCB0aGlzLiRxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc2V0Q2hhdCgpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XG4gICAgICB0aGlzLmZpbGVfdXJsID0gXCJcIjtcbiAgICAgIHRoaXMuZmlsZV90eXBlID0gXCJcIjtcbiAgICAgIHRoaXMuZmlsZXMgPSB7fTtcbiAgICAgIHRoaXMuJHJlZnMudXBsb2FkZXIucmVzZXQoKTtcbiAgICB9LFxuICAgIHBpY2tGaWxlcygpIHtcbiAgICAgIHRoaXMuJHJlZnMudXBsb2FkZXIucGlja0ZpbGVzKCk7XG4gICAgfSxcbiAgICBvblJlamVjdGVkRmlsZXMoZGF0YSkge1xuICAgICAgQVBJaW50ZXJmYWNlLm5vdGlmeShcbiAgICAgICAgXCJkYXJrXCIsXG4gICAgICAgIHRoaXMuJHQoXCJJbnZhbGlkIGZpbGUgdHlwZVwiKSxcbiAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICB0aGlzLiRxXG4gICAgICApO1xuICAgIH0sXG4gICAgYWZ0ZXJBZGRlZEZpbGVzKGRhdGEpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICB0aGlzLmZpbGVzW2l0ZW1zLm5hbWVdID0ge1xuICAgICAgICAgIG5hbWU6IGl0ZW1zLm5hbWUsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFmdGVyUmVtb3ZlRmlsZXMoZGF0YSkge1xuICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgaXRlbXNdKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVzW2l0ZW1zLm5hbWVdO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBvblVwbG9hZGluZ0ZpbGVzKGRhdGEpIHtcbiAgICAgIHRoaXMudXBsb2FkX2xvYWRpbmcgPSB0cnVlO1xuICAgIH0sXG4gICAgYWZ0ZXJVcGxvYWRlZChkYXRhKSB7XG4gICAgICBpZiAoZGF0YS54aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShkYXRhLnhoci5yZXNwb25zZSk7XG4gICAgICAgIGxldCBjb2RlID0gcmVzdWx0LmNvZGUgfHwgZmFsc2U7XG4gICAgICAgIGxldCBkZXRhaWxzID0gcmVzdWx0LmRldGFpbHMgfHwgW107XG4gICAgICAgIGxldCBtZXNzYWdlID0gcmVzdWx0Lm1zZyB8fCBcIlwiO1xuICAgICAgICBpZiAoY29kZSA9PSAxKSB7XG4gICAgICAgICAgdGhpcy5maWxlX3VybCA9IGRldGFpbHMuZmlsZV91cmw7XG4gICAgICAgICAgdGhpcy5maWxlX3R5cGUgPSBkZXRhaWxzLmZpbGVfdHlwZTtcbiAgICAgICAgICB0aGlzLnNhdmVDaGF0TWVzc2FnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEFQSWludGVyZmFjZS5ub3RpZnkoXCJkYXJrXCIsIG1lc3NhZ2UsIFwiZXJyb3JcIiwgdGhpcy4kcSk7XG4gICAgICAgICAgdGhpcy4kcmVmcy51cGxvYWRlci5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBBUElpbnRlcmZhY2Uubm90aWZ5KFxuICAgICAgICAgIFwiZGFya1wiLFxuICAgICAgICAgIHRoaXMuJHQoXCJJRXJyb3IgdXBsb2FkaW5nIGZpbGVzXCIpLFxuICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICB0aGlzLiRxXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuJHJlZnMudXBsb2FkZXIucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFmdGVyRmluaXNoVXBsb2FkKCkge1xuICAgICAgdGhpcy51cGxvYWRfbG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgbm90aWZ5VXNlcigpIHtcbiAgICAgIEFQSWludGVyZmFjZS5mZXRjaERhdGFDaGF0cyhcIm5vdGlmeVVzZXJcIiwge1xuICAgICAgICBmcm9tX3VzZXJfdXVpZDogdGhpcy51c2VyX3V1aWQsXG4gICAgICAgIHVzZXJfdXVpZDogdGhpcy5wYXJ0aWNpcGFudF91c2VyX3V1aWQsXG4gICAgICB9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge30pO1xuICAgIH0sXG4gICAgYXN5bmMgZ2V0RG9jdW1lbnREZXRhaWxzKCkge1xuICAgICAgY29uc3QgZG9jUmVmID0gZG9jKFxuICAgICAgICBmaXJlYmFzZURiLFxuICAgICAgICBmaXJlYmFzZUNvbGxlY3Rpb25FbnVtLmNoYXRzLFxuICAgICAgICB0aGlzLmNvbnZlcnNhdGlvbl9pZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcbiAgICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XG4gICAgICAgIHRoaXMub3JkZXJfaWQgPSBkb2NTbmFwLmRhdGEoKS5vcmRlcklEO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcmRlcl9pZCA9IFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICAvL1xuICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ucS11cGxvYWRlcl9fbGlzdCB7XG4gIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiaW5kZXgiLCJzdHlsZSIsInN0eWxlMiIsInNjcm9sbCIsImNyZWF0ZUVsZW1lbnRWTm9kZSIsIl9ob2lzdGVkXzciLCJfaG9pc3RlZF84IiwiX2hvaXN0ZWRfNiIsIl9ob2lzdGVkXzEiLCJfaG9pc3RlZF8yIiwiX2hvaXN0ZWRfMyIsIl9ob2lzdGVkXzQiLCJfaG9pc3RlZF81IiwiX3NmY19tYWluIiwiX3NmY19yZW5kZXIiLCJzdGFydCIsImVuZCIsIm9mZnNldCIsIkVtb2ppUGlja2VyIiwiaW5zZXJ0VGV4dEF0Q3Vyc29yIiwiZG9jIiwiX2NyZWF0ZVZOb2RlIiwiX25vcm1hbGl6ZUNsYXNzIiwiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9GcmFnbWVudCIsIl9vcGVuQmxvY2siLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9yZW5kZXJMaXN0IiwiX3dpdGhDdHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBQSxlQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxFQUNaO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sS0FBSyxTQUFTLE1BQU8sTUFBTSxTQUFTLE9BQU8sU0FBUyxVQUFXO0FBRXJFLFVBQU0sWUFBWTtBQUFBLE1BQVMsTUFDekIsa0RBQW1ELEdBQUcsV0FDbkQsTUFBTSxjQUFjLFNBQVMsU0FBVSxNQUFNLGNBQWU7QUFBQSxJQUNoRTtBQUVELFVBQU0sZUFBZTtBQUFBLE1BQVMsTUFDNUIsa0NBQW1DLEdBQUcsV0FDbkMsTUFBTSxZQUFZLFNBQVMsU0FBVSxNQUFNLFlBQWE7QUFBQSxJQUM1RDtBQUVELFVBQU0saUJBQWlCO0FBQUEsTUFBUyxNQUM5QiwrQ0FDRyxNQUFNLFNBQVMsT0FBTyxhQUFhO0FBQUEsSUFDdkM7QUFFRCxVQUFNLFlBQVksU0FBUyxNQUFPLE1BQU0sU0FBUyxTQUFTLE9BQVEsTUFBTSxTQUFVLEVBQUc7QUFFckYsVUFBTSxXQUFXLFNBQVMsT0FBTztBQUFBLE1BQy9CLEtBQUssTUFBTSxhQUFhLE9BQU8s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LEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxFQUNGO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsRUFDRjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Y7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQ0g7QUFDQSxNQUFNLG1CQUFtQjtBQUFBLEVBQ3ZCO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFDSDtBQUNBLE1BQU0sZUFBZTtBQUFBLEVBQ25CO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUNIO0FBQ0EsTUFBTSxlQUFlO0FBQUEsRUFDbkI7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUNIO0FBQ0EsTUFBTSxrQkFBa0I7QUFBQSxFQUN0QjtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUNIO0FBQ0EsTUFBTSxZQUFZO0FBQUEsRUFDaEI7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFDSDtBQUNBLE1BQU0sWUFBWTtBQUFBLEVBQ2hCO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFDSDtBQUNBLE1BQU0sVUFBVTtBQUFBLEVBQ2Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUFBLEVBQ0Q7QUFBQSxJQUNFLEdBQUc7QUFBQSxNQUNEO0FBQUEsTUFDQTtBQUFBLElBQ0Q7QUFBQSxJQUNELEdBQUc7QUFBQSxFQUNKO0FBQUEsRUFDRDtBQUFBLElBQ0UsR0FBRztBQUFBLE1BQ0Q7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0QsR0FBRztBQUFBLEVBQ0o7QUFBQSxFQUNEO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRDtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDRCxHQUFHO0FBQUEsRUFDSjtBQUNIO0FBQ0EsSUFBSSxTQUFT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
