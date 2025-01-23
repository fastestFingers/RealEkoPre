import { I as defineStore } from "./index.61ed5618.js";
const useMapStore = defineStore("mapstore", {
  state: () => ({
    map_style_light: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#686868"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            lightness: "-22"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            saturation: "11"
          },
          {
            lightness: "-51"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text",
        stylers: [
          {
            saturation: "3"
          },
          {
            lightness: "-56"
          },
          {
            weight: "2.20"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            lightness: "-52"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            weight: "6.13"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [
          {
            lightness: "-10"
          },
          {
            gamma: "0.94"
          },
          {
            weight: "1.24"
          },
          {
            saturation: "-100"
          },
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            lightness: "-16"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: "-41"
          },
          {
            lightness: "-41"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.stroke",
        stylers: [
          {
            weight: "5.46"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [
          {
            weight: "0.72"
          },
          {
            lightness: "-16"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            lightness: "-37"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#b7e4f4"
          },
          {
            visibility: "on"
          }
        ]
      }
    ],
    map_style_dark: [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 13
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#144b53"
          },
          {
            lightness: 14
          },
          {
            weight: 1.4
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#08304b"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#0c4152"
          },
          {
            lightness: 5
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#0b434f"
          },
          {
            lightness: 25
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#0b3d51"
          },
          {
            lightness: 16
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            color: "#146474"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#021019"
          }
        ]
      }
    ]
  }),
  getters: {
    doubleCount(state) {
      return state.counter * 2;
    }
  },
  actions: {
    increment() {
      this.counter++;
    }
  }
});
export { useMapStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwU3RvcmUuZmNkOGY1ZmYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdG9yZXMvTWFwU3RvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmaW5lU3RvcmUgfSBmcm9tIFwicGluaWFcIjtcblxuZXhwb3J0IGNvbnN0IHVzZU1hcFN0b3JlID0gZGVmaW5lU3RvcmUoXCJtYXBzdG9yZVwiLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIG1hcF9zdHlsZV9saWdodDogW1xuICAgICAge1xuICAgICAgICBmZWF0dXJlVHlwZTogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogXCIjNjg2ODY4XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcImxhbmRzY2FwZVwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmMmYyZjJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZFwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNhdHVyYXRpb246IC0xMDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsaWdodG5lc3M6IDQ1LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBcInNpbXBsaWZpZWRcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpZ2h0bmVzczogXCItMjJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2F0dXJhdGlvbjogXCIxMVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGlnaHRuZXNzOiBcIi01MVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHRcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNhdHVyYXRpb246IFwiM1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGlnaHRuZXNzOiBcIi01NlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2VpZ2h0OiBcIjIuMjBcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpZ2h0bmVzczogXCItNTJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2VpZ2h0OiBcIjYuMTNcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy5pY29uXCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsaWdodG5lc3M6IFwiLTEwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBnYW1tYTogXCIwLjk0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3ZWlnaHQ6IFwiMS4yNFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2F0dXJhdGlvbjogXCItMTAwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBcIm9mZlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsaWdodG5lc3M6IFwiLTE2XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2F0dXJhdGlvbjogXCItNDFcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpZ2h0bmVzczogXCItNDFcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdlaWdodDogXCI1LjQ2XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLmljb25cIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFwib2ZmXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQubG9jYWxcIixcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2VpZ2h0OiBcIjAuNzJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpZ2h0bmVzczogXCItMTZcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsaWdodG5lc3M6IFwiLTM3XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcInRyYW5zaXRcIixcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBcIm9mZlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiNiN2U0ZjRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFwib25cIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIG1hcF9zdHlsZV9kYXJrOiBbXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpZ2h0bmVzczogMTMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogXCIjMTQ0YjUzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsaWdodG5lc3M6IDE0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2VpZ2h0OiAxLjQsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcImxhbmRzY2FwZVwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwODMwNGJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogXCIjMGM0MTUyXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsaWdodG5lc3M6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwYjQzNGZcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpZ2h0bmVzczogMjUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6IFwiIzBiM2Q1MVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGlnaHRuZXNzOiAxNixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxuICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0XCIsXG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6IFwiIzE0NjQ3NFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxuICAgICAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMjEwMTlcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9KSxcblxuICBnZXR0ZXJzOiB7XG4gICAgZG91YmxlQ291bnQoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyICogMjtcbiAgICB9LFxuICB9LFxuXG4gIGFjdGlvbnM6IHtcbiAgICBpbmNyZW1lbnQoKSB7XG4gICAgICB0aGlzLmNvdW50ZXIrKztcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVZLE1BQUMsY0FBYyxZQUFZLFlBQVk7QUFBQSxFQUNqRCxPQUFPLE9BQU87QUFBQSxJQUNaLGlCQUFpQjtBQUFBLE1BQ2Y7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxPQUFPO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLE9BQU87QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxZQUFZO0FBQUEsVUFDYjtBQUFBLFVBQ0Q7QUFBQSxZQUNFLFdBQVc7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxXQUFXO0FBQUEsVUFDWjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLFlBQVk7QUFBQSxVQUNiO0FBQUEsVUFDRDtBQUFBLFlBQ0UsV0FBVztBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxZQUFZO0FBQUEsVUFDYjtBQUFBLFVBQ0Q7QUFBQSxZQUNFLFdBQVc7QUFBQSxVQUNaO0FBQUEsVUFDRDtBQUFBLFlBQ0UsUUFBUTtBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxXQUFXO0FBQUEsVUFDWjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLFFBQVE7QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsV0FBVztBQUFBLFVBQ1o7QUFBQSxVQUNEO0FBQUEsWUFDRSxPQUFPO0FBQUEsVUFDUjtBQUFBLFVBQ0Q7QUFBQSxZQUNFLFFBQVE7QUFBQSxVQUNUO0FBQUEsVUFDRDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFVBQ2I7QUFBQSxVQUNEO0FBQUEsWUFDRSxZQUFZO0FBQUEsVUFDYjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLFdBQVc7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFVBQ2I7QUFBQSxVQUNEO0FBQUEsWUFDRSxXQUFXO0FBQUEsVUFDWjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2IsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLFFBQVE7QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxRQUFRO0FBQUEsVUFDVDtBQUFBLFVBQ0Q7QUFBQSxZQUNFLFdBQVc7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNEO0FBQUEsUUFDRSxhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsV0FBVztBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLGFBQWE7QUFBQSxRQUNiLGFBQWE7QUFBQSxRQUNiLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxZQUFZO0FBQUEsVUFDYjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDRDtBQUFBLFFBQ0UsYUFBYTtBQUFBLFFBQ2Is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
