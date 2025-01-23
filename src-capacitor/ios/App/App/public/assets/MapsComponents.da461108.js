import { _ as _export_sfc, m as APIinterface, p as openBlock, V as createElementBlock, a7 as normalizeClass } from "./index.61ed5618.js";
import { l as loadScript } from "./index.d0b40bd3.js";
const cmapsMarker = [];
let bounds = [];
const _sfc_main = {
  name: "MapsComponents",
  props: ["keys", "provider", "zoom", "center", "markers", "size"],
  data() {
    return {
      cmaps: void 0,
      data: [],
      loading: false,
      map_style: [
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
    };
  },
  mounted() {
    this.loadMap();
  },
  watch: {
    markers(newval, oldval) {
      this.renderMap();
    },
    provider(newval, oldval) {
      this.loadMap();
    }
  },
  methods: {
    loadMap() {
      try {
        switch (this.provider) {
          case "google.maps":
            loadScript(
              "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=" + this.keys + "&callback=Function.prototype"
            ).then(() => {
              this.renderMap();
            }).catch(() => {
              console.debug("failed loading map script");
            });
            break;
          case "mapbox":
            loadScript(
              "https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js"
            ).then(() => {
              this.renderMap();
            }).catch(() => {
              console.debug("failed loading mapboxscript");
            });
            break;
        }
      } catch (err) {
        console.error(err);
      }
    },
    renderMap() {
      try {
        switch (this.provider) {
          case "google.maps":
            bounds = new window.google.maps.LatLngBounds();
            if (typeof this.cmaps !== "undefined" && this.cmaps !== null) {
              Object.entries(this.markers).forEach(([key, items]) => {
                this.removeMarker(items.id);
              });
            } else {
              this.cmaps = new window.google.maps.Map(this.$refs.cmaps, {
                center: {
                  lat: parseFloat(this.center.lat),
                  lng: parseFloat(this.center.lng)
                },
                zoom: parseInt(this.zoom),
                disableDefaultUI: true,
                styles: this.$q.dark.mode ? this.map_style_dark : this.map_style
              });
            }
            Object.entries(this.markers).forEach(([key, items]) => {
              this.addMarker(
                {
                  position: {
                    lat: parseFloat(items.lat),
                    lng: parseFloat(items.lng)
                  },
                  map: this.cmaps,
                  draggable: items.draggable,
                  label: items.label
                },
                items.id,
                items.draggable
              );
            });
            if (Object.keys(this.markers).length > 1) {
              this.FitBounds();
            } else {
              this.setCenter(this.markers[0].lat, this.markers[0].lng);
            }
            break;
          case "mapbox":
            mapboxgl.accessToken = this.keys;
            bounds = new mapboxgl.LngLatBounds();
            this.cmaps = new mapboxgl.Map({
              container: this.$refs.cmaps,
              style: "mapbox://styles/mapbox/streets-v12",
              center: [
                parseFloat(this.center.lng),
                parseFloat(this.center.lat)
              ],
              zoom: 14
            });
            Object.entries(this.markers).forEach(([key, items]) => {
              this.addMarker(
                {
                  position: {
                    lat: parseFloat(items.lat),
                    lng: parseFloat(items.lng)
                  },
                  map: this.cmaps,
                  animation: null,
                  draggable: items.draggable,
                  icon: items.icon
                },
                items.id,
                items.draggable
              );
            });
            if (Object.keys(this.markers).length > 1) {
              this.FitBounds();
            } else {
              this.setCenter(this.markers[0].lat, this.markers[0].lng);
            }
            break;
        }
      } catch (err) {
        console.error(err);
      }
    },
    addMarker(properties, index, draggable) {
      try {
        switch (this.provider) {
          case "google.maps":
            cmapsMarker[index] = new window.google.maps.Marker(properties);
            this.cmaps.panTo(
              new window.google.maps.LatLng(
                properties.position.lat,
                properties.position.lng
              )
            );
            bounds.extend(cmapsMarker[index].position);
            if (draggable === true) {
              window.google.maps.event.addListener(
                cmapsMarker[index],
                "drag",
                (marker) => {
                  this.$emit("dragMarker", true);
                }
              );
              window.google.maps.event.addListener(
                cmapsMarker[index],
                "dragend",
                (marker) => {
                  const latLng = marker.latLng;
                  this.$emit("afterSelectmap", latLng.lat(), latLng.lng());
                }
              );
              google.maps.event.addListener(this.cmaps, "drag", (data) => {
                let new_position = new google.maps.LatLng(
                  this.cmaps.getCenter().lat(),
                  this.cmaps.getCenter().lng()
                );
                cmapsMarker[index].setPosition(new_position);
              });
              google.maps.event.addListener(this.cmaps, "dragend", (data) => {
                let wrapped = new google.maps.LatLng(
                  this.cmaps.getCenter().lat(),
                  this.cmaps.getCenter().lng()
                );
                this.$emit("afterSelectmap", wrapped.lat(), wrapped.lng());
              });
            }
            break;
          case "mapbox":
            if (!APIinterface.empty(properties.icon)) {
              const el = document.createElement("div");
              el.className = properties.icon;
              cmapsMarker[index] = new mapboxgl.Marker(el).setLngLat([properties.position.lng, properties.position.lat]).addTo(this.cmaps);
            } else {
              cmapsMarker[index] = new mapboxgl.Marker(properties).setLngLat([properties.position.lng, properties.position.lat]).addTo(this.cmaps);
            }
            bounds.extend(
              new mapboxgl.LngLat(
                properties.position.lng,
                properties.position.lat
              )
            );
            if (draggable === true) {
              cmapsMarker[index].on("dragend", (event) => {
                const lngLat = cmapsMarker[index].getLngLat();
                this.$emit("afterSelectmap", lngLat.lat, lngLat.lng);
              });
              this.cmaps.on("drag", () => {
                cmapsMarker[index].setLngLat([
                  this.cmaps.getCenter().lng.toFixed(4),
                  this.cmaps.getCenter().lat.toFixed(4)
                ]);
              });
              this.cmaps.on("dragend", () => {
                cmapsMarker[index].setLngLat([
                  this.cmaps.getCenter().lng.toFixed(4),
                  this.cmaps.getCenter().lat.toFixed(4)
                ]);
                this.$emit(
                  "afterSelectmap",
                  this.cmaps.getCenter().lat.toFixed(4),
                  this.cmaps.getCenter().lng.toFixed(4)
                );
              });
            }
            this.mapBoxResize();
            break;
        }
      } catch (err) {
        console.error(err);
      }
    },
    mapBoxResize() {
      if (this.provider == "mapbox") {
        setTimeout(() => {
          this.cmaps.resize();
        }, 500);
      }
    },
    removeMarker(index) {
      try {
        switch (this.provider) {
          case "google.maps":
            if (typeof cmapsMarker[index] !== "undefined" && cmapsMarker[index] !== null) {
              cmapsMarker[index].setMap(null);
              cmapsMarker.splice(index, 1);
            }
            break;
        }
      } catch (err) {
        console.error(err);
      }
    },
    centerMap() {
      this.FitBounds();
    },
    FitBounds() {
      try {
        switch (this.provider) {
          case "google.maps":
            if (!APIinterface.empty(bounds)) {
              this.cmaps.fitBounds(bounds);
            }
            break;
          case "mapbox":
            if (!APIinterface.empty(bounds)) {
              this.cmaps.fitBounds(bounds, { duration: 0, padding: 50 });
            }
            break;
        }
      } catch (err) {
        console.error(err);
      }
    },
    setCenter(lat, lng) {
      try {
        switch (this.provider) {
          case "google.maps":
            this.cmaps.setCenter(new window.google.maps.LatLng(lat, lng));
            break;
          case "mapbox":
            this.cmaps.flyTo({
              center: [lng, lat],
              essential: true
            });
            break;
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "cmaps",
    class: normalizeClass(["map bg-grey-1", $props.size])
  }, null, 2);
}
var MapsComponents = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "MapsComponents.vue"]]);
export { MapsComponents as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwc0NvbXBvbmVudHMuZGE0NjExMDguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01hcHNDb21wb25lbnRzLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiY21hcHNcIiBjbGFzcz1cIm1hcCBiZy1ncmV5LTFcIiA6Y2xhc3M9XCJzaXplXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFQSWludGVyZmFjZSBmcm9tIFwic3JjL2FwaS9BUElpbnRlcmZhY2VcIjtcbmltcG9ydCB7IGxvYWRTY3JpcHQsIHVubG9hZFNjcmlwdCB9IGZyb20gXCJ2dWUtcGx1Z2luLWxvYWQtc2NyaXB0XCI7XG5cbmNvbnN0IGNtYXBzTWFya2VyID0gW107XG5sZXQgYm91bmRzID0gW107XG5sZXQgdHJhY2tfYm91bmRzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTWFwc0NvbXBvbmVudHNcIixcbiAgcHJvcHM6IFtcImtleXNcIiwgXCJwcm92aWRlclwiLCBcInpvb21cIiwgXCJjZW50ZXJcIiwgXCJtYXJrZXJzXCIsIFwic2l6ZVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY21hcHM6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBtYXBfc3R5bGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzY4Njg2OFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwibGFuZHNjYXBlXCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjZjJmMmYyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJwb2lcIixcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJhbGxcIixcbiAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZpc2liaWxpdHk6IFwib2ZmXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkXCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzYXR1cmF0aW9uOiAtMTAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiA0NSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJzaW1wbGlmaWVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaWdodG5lc3M6IFwiLTIyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNhdHVyYXRpb246IFwiMTFcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogXCItNTFcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0XCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzYXR1cmF0aW9uOiBcIjNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogXCItNTZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHdlaWdodDogXCIyLjIwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaWdodG5lc3M6IFwiLTUyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHdlaWdodDogXCI2LjEzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiBcIi0xMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZ2FtbWE6IFwiMC45NFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcIjEuMjRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNhdHVyYXRpb246IFwiLTEwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeVwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiBcIi0xNlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNhdHVyYXRpb246IFwiLTQxXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaWdodG5lc3M6IFwiLTQxXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB3ZWlnaHQ6IFwiNS40NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy5pY29uXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcIm9mZlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHdlaWdodDogXCIwLjcyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaWdodG5lc3M6IFwiLTE2XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmxvY2FsXCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiBcIi0zN1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwidHJhbnNpdFwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJvZmZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcIndhdGVyXCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjYjdlNGY0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBcIm9uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbWFwX3N0eWxlX2Rhcms6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFsbFwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiAxMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMxNDRiNTNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogMTQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB3ZWlnaHQ6IDEuNCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcImxhbmRzY2FwZVwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzA4MzA0YlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwicG9pXCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnlcIixcbiAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwYzQxNTJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpZ2h0bmVzczogNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICAgICAgICBzdHlsZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzBiNDM0ZlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGlnaHRuZXNzOiAyNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZlYXR1cmVUeXBlOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgICAgICBlbGVtZW50VHlwZTogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjMGIzZDUxXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaWdodG5lc3M6IDE2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmVhdHVyZVR5cGU6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImdlb21ldHJ5XCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ0cmFuc2l0XCIsXG4gICAgICAgICAgZWxlbWVudFR5cGU6IFwiYWxsXCIsXG4gICAgICAgICAgc3R5bGVyczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjMTQ2NDc0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmZWF0dXJlVHlwZTogXCJ3YXRlclwiLFxuICAgICAgICAgIGVsZW1lbnRUeXBlOiBcImFsbFwiLFxuICAgICAgICAgIHN0eWxlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAyMTAxOVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMubG9hZE1hcCgpO1xuICB9LFxuICB3YXRjaDoge1xuICAgIG1hcmtlcnMobmV3dmFsLCBvbGR2YWwpIHtcbiAgICAgIHRoaXMucmVuZGVyTWFwKCk7XG4gICAgfSxcbiAgICBwcm92aWRlcihuZXd2YWwsIG9sZHZhbCkge1xuICAgICAgdGhpcy5sb2FkTWFwKCk7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRNYXAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvdmlkZXIpIHtcbiAgICAgICAgICBjYXNlIFwiZ29vZ2xlLm1hcHNcIjpcbiAgICAgICAgICAgIGxvYWRTY3JpcHQoXG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP3Y9My5leHAmbGlicmFyaWVzPXBsYWNlcyZrZXk9XCIgK1xuICAgICAgICAgICAgICAgIHRoaXMua2V5cyArXG4gICAgICAgICAgICAgICAgXCImY2FsbGJhY2s9RnVuY3Rpb24ucHJvdG90eXBlXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTWFwKCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImZhaWxlZCBsb2FkaW5nIG1hcCBzY3JpcHRcIik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1hcGJveFwiOlxuICAgICAgICAgICAgbG9hZFNjcmlwdChcbiAgICAgICAgICAgICAgXCJodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92Mi4xMS4wL21hcGJveC1nbC5qc1wiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck1hcCgpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJmYWlsZWQgbG9hZGluZyBtYXBib3hzY3JpcHRcIik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXJNYXAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvdmlkZXIpIHtcbiAgICAgICAgICBjYXNlIFwiZ29vZ2xlLm1hcHNcIjpcbiAgICAgICAgICAgIGJvdW5kcyA9IG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY21hcHMgIT09IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5jbWFwcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm1hcmtlcnMpLmZvckVhY2goKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTWFya2VyKGl0ZW1zLmlkKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmNtYXBzID0gbmV3IHdpbmRvdy5nb29nbGUubWFwcy5NYXAodGhpcy4kcmVmcy5jbWFwcywge1xuICAgICAgICAgICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgbGF0OiBwYXJzZUZsb2F0KHRoaXMuY2VudGVyLmxhdCksXG4gICAgICAgICAgICAgICAgICBsbmc6IHBhcnNlRmxvYXQodGhpcy5jZW50ZXIubG5nKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHpvb206IHBhcnNlSW50KHRoaXMuem9vbSksXG4gICAgICAgICAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHRoaXMuJHEuZGFyay5tb2RlXG4gICAgICAgICAgICAgICAgICA/IHRoaXMubWFwX3N0eWxlX2RhcmtcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5tYXBfc3R5bGUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm1hcmtlcnMpLmZvckVhY2goKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlcihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoaXRlbXMubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGl0ZW1zLmxuZyksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbWFwOiB0aGlzLmNtYXBzLFxuICAgICAgICAgICAgICAgICAgLy9hbmltYXRpb246IHdpbmRvdy5nb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcbiAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogaXRlbXMuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW1zLmxhYmVsLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXRlbXMuaWQsXG4gICAgICAgICAgICAgICAgaXRlbXMuZHJhZ2dhYmxlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubWFya2VycykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICB0aGlzLkZpdEJvdW5kcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRDZW50ZXIodGhpcy5tYXJrZXJzWzBdLmxhdCwgdGhpcy5tYXJrZXJzWzBdLmxuZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibWFwYm94XCI6XG4gICAgICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMua2V5cztcbiAgICAgICAgICAgIGJvdW5kcyA9IG5ldyBtYXBib3hnbC5MbmdMYXRCb3VuZHMoKTtcbiAgICAgICAgICAgIHRoaXMuY21hcHMgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgICAgICAgICAgY29udGFpbmVyOiB0aGlzLiRyZWZzLmNtYXBzLFxuICAgICAgICAgICAgICBzdHlsZTogXCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjEyXCIsXG4gICAgICAgICAgICAgIGNlbnRlcjogW1xuICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQodGhpcy5jZW50ZXIubG5nKSxcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHRoaXMuY2VudGVyLmxhdCksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHpvb206IDE0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm1hcmtlcnMpLmZvckVhY2goKFtrZXksIGl0ZW1zXSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlcihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBsYXQ6IHBhcnNlRmxvYXQoaXRlbXMubGF0KSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGl0ZW1zLmxuZyksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbWFwOiB0aGlzLmNtYXBzLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBpdGVtcy5kcmFnZ2FibGUsXG4gICAgICAgICAgICAgICAgICBpY29uOiBpdGVtcy5pY29uLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXRlbXMuaWQsXG4gICAgICAgICAgICAgICAgaXRlbXMuZHJhZ2dhYmxlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1hcmtlcnMpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5GaXRCb3VuZHMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0Q2VudGVyKHRoaXMubWFya2Vyc1swXS5sYXQsIHRoaXMubWFya2Vyc1swXS5sbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRNYXJrZXIocHJvcGVydGllcywgaW5kZXgsIGRyYWdnYWJsZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgY2FzZSBcImdvb2dsZS5tYXBzXCI6XG4gICAgICAgICAgICBjbWFwc01hcmtlcltpbmRleF0gPSBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLk1hcmtlcihwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIHRoaXMuY21hcHMucGFuVG8oXG4gICAgICAgICAgICAgIG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nKFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucG9zaXRpb24ubGF0LFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucG9zaXRpb24ubG5nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBib3VuZHMuZXh0ZW5kKGNtYXBzTWFya2VyW2luZGV4XS5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgd2luZG93Lmdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIGNtYXBzTWFya2VyW2luZGV4XSxcbiAgICAgICAgICAgICAgICBcImRyYWdcIixcbiAgICAgICAgICAgICAgICAobWFya2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiZHJhZ01hcmtlclwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgd2luZG93Lmdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIGNtYXBzTWFya2VyW2luZGV4XSxcbiAgICAgICAgICAgICAgICBcImRyYWdlbmRcIixcbiAgICAgICAgICAgICAgICAobWFya2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsYXRMbmcgPSBtYXJrZXIubGF0TG5nO1xuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyU2VsZWN0bWFwXCIsIGxhdExuZy5sYXQoKSwgbGF0TG5nLmxuZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5jbWFwcywgXCJkcmFnXCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld19wb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoXG4gICAgICAgICAgICAgICAgICB0aGlzLmNtYXBzLmdldENlbnRlcigpLmxhdCgpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5jbWFwcy5nZXRDZW50ZXIoKS5sbmcoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY21hcHNNYXJrZXJbaW5kZXhdLnNldFBvc2l0aW9uKG5ld19wb3NpdGlvbik7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMuY21hcHMsIFwiZHJhZ2VuZFwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVkID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhcbiAgICAgICAgICAgICAgICAgIHRoaXMuY21hcHMuZ2V0Q2VudGVyKCkubGF0KCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmNtYXBzLmdldENlbnRlcigpLmxuZygpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiYWZ0ZXJTZWxlY3RtYXBcIiwgd3JhcHBlZC5sYXQoKSwgd3JhcHBlZC5sbmcoKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJtYXBib3hcIjpcbiAgICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KHByb3BlcnRpZXMuaWNvbikpIHtcbiAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBwcm9wZXJ0aWVzLmljb247XG4gICAgICAgICAgICAgIGNtYXBzTWFya2VyW2luZGV4XSA9IG5ldyBtYXBib3hnbC5NYXJrZXIoZWwpXG4gICAgICAgICAgICAgICAgLnNldExuZ0xhdChbcHJvcGVydGllcy5wb3NpdGlvbi5sbmcsIHByb3BlcnRpZXMucG9zaXRpb24ubGF0XSlcbiAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5jbWFwcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjbWFwc01hcmtlcltpbmRleF0gPSBuZXcgbWFwYm94Z2wuTWFya2VyKHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgLnNldExuZ0xhdChbcHJvcGVydGllcy5wb3NpdGlvbi5sbmcsIHByb3BlcnRpZXMucG9zaXRpb24ubGF0XSlcbiAgICAgICAgICAgICAgICAuYWRkVG8odGhpcy5jbWFwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvdW5kcy5leHRlbmQoXG4gICAgICAgICAgICAgIG5ldyBtYXBib3hnbC5MbmdMYXQoXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wb3NpdGlvbi5sbmcsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wb3NpdGlvbi5sYXRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChkcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY21hcHNNYXJrZXJbaW5kZXhdLm9uKFwiZHJhZ2VuZFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsbmdMYXQgPSBjbWFwc01hcmtlcltpbmRleF0uZ2V0TG5nTGF0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImFmdGVyU2VsZWN0bWFwXCIsIGxuZ0xhdC5sYXQsIGxuZ0xhdC5sbmcpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICB0aGlzLmNtYXBzLm9uKFwiZHJhZ1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY21hcHNNYXJrZXJbaW5kZXhdLnNldExuZ0xhdChbXG4gICAgICAgICAgICAgICAgICB0aGlzLmNtYXBzLmdldENlbnRlcigpLmxuZy50b0ZpeGVkKDQpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5jbWFwcy5nZXRDZW50ZXIoKS5sYXQudG9GaXhlZCg0KSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdGhpcy5jbWFwcy5vbihcImRyYWdlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNtYXBzTWFya2VyW2luZGV4XS5zZXRMbmdMYXQoW1xuICAgICAgICAgICAgICAgICAgdGhpcy5jbWFwcy5nZXRDZW50ZXIoKS5sbmcudG9GaXhlZCg0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuY21hcHMuZ2V0Q2VudGVyKCkubGF0LnRvRml4ZWQoNCksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgICAgICAgICAgIFwiYWZ0ZXJTZWxlY3RtYXBcIixcbiAgICAgICAgICAgICAgICAgIHRoaXMuY21hcHMuZ2V0Q2VudGVyKCkubGF0LnRvRml4ZWQoNCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmNtYXBzLmdldENlbnRlcigpLmxuZy50b0ZpeGVkKDQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hcEJveFJlc2l6ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfSxcbiAgICBtYXBCb3hSZXNpemUoKSB7XG4gICAgICBpZiAodGhpcy5wcm92aWRlciA9PSBcIm1hcGJveFwiKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY21hcHMucmVzaXplKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVNYXJrZXIoaW5kZXgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm92aWRlcikge1xuICAgICAgICAgIGNhc2UgXCJnb29nbGUubWFwc1wiOlxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0eXBlb2YgY21hcHNNYXJrZXJbaW5kZXhdICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICAgIGNtYXBzTWFya2VyW2luZGV4XSAhPT0gbnVsbFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNtYXBzTWFya2VyW2luZGV4XS5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICAgIGNtYXBzTWFya2VyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNlbnRlck1hcCgpIHtcbiAgICAgIHRoaXMuRml0Qm91bmRzKCk7XG4gICAgfSxcbiAgICBGaXRCb3VuZHMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvdmlkZXIpIHtcbiAgICAgICAgICBjYXNlIFwiZ29vZ2xlLm1hcHNcIjpcbiAgICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgdGhpcy5jbWFwcy5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJtYXBib3hcIjpcbiAgICAgICAgICAgIGlmICghQVBJaW50ZXJmYWNlLmVtcHR5KGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgdGhpcy5jbWFwcy5maXRCb3VuZHMoYm91bmRzLCB7IGR1cmF0aW9uOiAwLCBwYWRkaW5nOiA1MCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0Q2VudGVyKGxhdCwgbG5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMucHJvdmlkZXIpIHtcbiAgICAgICAgICBjYXNlIFwiZ29vZ2xlLm1hcHNcIjpcbiAgICAgICAgICAgIHRoaXMuY21hcHMuc2V0Q2VudGVyKG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibWFwYm94XCI6XG4gICAgICAgICAgICB0aGlzLmNtYXBzLmZseVRvKHtcbiAgICAgICAgICAgICAgY2VudGVyOiBbbG5nLCBsYXRdLFxuICAgICAgICAgICAgICBlc3NlbnRpYWw6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy9cbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIl0sIm1hcHBpbmdzIjoiOztBQVFBLE1BQU0sY0FBYyxDQUFBO0FBQ3BCLElBQUksU0FBUyxDQUFBO0FBR2IsTUFBSyxZQUFVO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixPQUFPLENBQUMsUUFBUSxZQUFZLFFBQVEsVUFBVSxXQUFXLE1BQU07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Q0Y7QUFBQSxRQUNEO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsVUFDYixTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0UsT0FBTztBQUFBLFlBQ1I7QUFBQSxZQUNEO0FBQUEsY0FDRSxXQUFXO0FBQUEsWUFDWjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDRDtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsYUFBYTtBQUFBLFVBQ2IsU0FBUztBQUFBLFlBQ1A7QUFBQSxjQUNFLE9BQU87QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNEO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsVUFDYixTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0UsT0FBTztBQUFBLFlBQ1I7QUFBQSxZQUNEO0FBQUEsY0FDRSxXQUFXO0FBQUEsWUFDWjtBQUFBLFlBQ0Q7QUFBQSxjQUNFLFFBQVE7QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNEO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsVUFDYixTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0UsT0FBTztBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0Q7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLGFBQWE7QUFBQSxVQUNiLFNBQVM7QUFBQSxZQUNQO0FBQUEsY0FDRSxPQUFPO0FBQUEsWUFDUjtBQUFBLFlBQ0Q7QUFBQSxjQUNFLFdBQVc7QUFBQSxZQUNaO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNEO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsVUFDYixTQUFTO0FBQUEsWUFDUDtBQUFBLGNBQ0UsT0FBTztBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0Q7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLGFBQWE7QUFBQSxVQUNiLFNBQVM7QUFBQSxZQUNQO0FBQUEsY0FDRSxPQUFPO0FBQUEsWUFDUjtBQUFBLFlB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
