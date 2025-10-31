import { g as p } from "./lodash-9da1000b.js";
var c = { exports: {} };
(function(f) {
  /*!
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *       http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function h(e, s) {
    function r() {
    }
    r.prototype = s.prototype, e.superClass_ = s.prototype, e.prototype = new r(), e.prototype.constructor = e;
  }
  function i(e, s) {
    this.marker_ = e, this.labelDiv_ = document.createElement("div"), this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;", this.eventDiv_ = document.createElement("div"), this.eventDiv_.style.cssText = this.labelDiv_.style.cssText, this.eventDiv_.setAttribute("onselectstart", "return false;"), this.eventDiv_.setAttribute("ondragstart", "return false;"), this.crossDiv_ = i.getSharedCross(s);
  }
  typeof google < "u" && h(i, google.maps.OverlayView), i.getSharedCross = function(e) {
    var s;
    return typeof i.getSharedCross.crossDiv > "u" && (s = document.createElement("img"), s.style.cssText = "position: absolute; z-index: 1000002; display: none;", s.style.marginLeft = "-8px", s.style.marginTop = "-9px", s.src = e, i.getSharedCross.crossDiv = s), i.getSharedCross.crossDiv;
  }, i.prototype.onAdd = function() {
    var e = this;
    this.getPanes().markerLayer.appendChild(this.labelDiv_), this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_), typeof i.getSharedCross.processed > "u" && (this.getPanes().overlayImage.appendChild(this.crossDiv_), i.getSharedCross.processed = !0), this.addMouseListeners(), this.listeners2_ = [
      google.maps.event.addListener(this.marker_, "clickable_changed", function() {
        e.setClickable();
      }),
      google.maps.event.addListener(this.marker_, "cursor_changed", function() {
        e.setCursor();
      }),
      google.maps.event.addListener(this.marker_, "draggable_changed", function() {
        e.setClickable();
      }),
      google.maps.event.addListener(this.marker_, "position_changed", function() {
        e.setPosition();
      }),
      google.maps.event.addListener(this.marker_, "visible_changed", function() {
        e.setVisible();
      }),
      google.maps.event.addListener(this.marker_, "title_changed", function() {
        e.setTitle();
      }),
      google.maps.event.addListener(this.marker_, "zindex_changed", function() {
        e.setZIndex();
      }),
      google.maps.event.addListener(this.marker_, "labelanchor_changed", function() {
        e.setAnchor();
      }),
      google.maps.event.addListener(this.marker_, "labelclass_changed", function() {
        e.setStyles();
      }),
      google.maps.event.addListener(this.marker_, "labelcontent_changed", function() {
        e.setContent();
      }),
      google.maps.event.addListener(this.marker_, "labelstyle_changed", function() {
        e.setStyles();
      }),
      google.maps.event.addListener(this.marker_, "labelvisible_changed", function() {
        e.setVisible();
      })
    ];
  }, i.prototype.addMouseListeners = function() {
    var e = this, s = !1, r = !1, n = !1, g, d, m, l = function(t) {
      t = t || window.event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    }, v = function(t) {
      t = t || window.event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
    };
    this.listeners1_ = [
      google.maps.event.addDomListener(this.eventDiv_, "mouseover", function(t) {
        var a = { latLng: e.marker_.getPosition() };
        e.marker_.getClickable() || e.marker_.getDraggable() ? s || (this.style.cursor = e.marker_.getCursor() || "pointer", google.maps.event.trigger(e.marker_, "mouseover", a), l(t)) : this.style.cursor = null;
      }),
      google.maps.event.addDomListener(this.eventDiv_, "mouseout", function(t) {
        var a = { latLng: e.marker_.getPosition() };
        (e.marker_.getClickable() || e.marker_.getDraggable()) && (s || (google.maps.event.trigger(e.marker_, "mouseout", a), l(t)));
      }),
      google.maps.event.addDomListener(this.eventDiv_, "mousedown", function(t) {
        var a = { latLng: e.marker_.getPosition() };
        n = !1, (e.marker_.getClickable() || e.marker_.getDraggable()) && (r = !0, google.maps.event.trigger(e.marker_, "mousedown", a), s || l(t));
      }),
      google.maps.event.addDomListener(this.eventDiv_, "mouseup", function(t) {
        var a = { latLng: e.marker_.getPosition() };
        r && (r = !1, google.maps.event.trigger(e.marker_, "mouseup", a), n && (n = !1, e.crossDiv_.style.display = "none", g = !0, google.maps.event.trigger(e.marker_, "dragend", a)), e.marker_.getDraggable() || l(t));
      }),
      google.maps.event.addDomListener(this.eventDiv_, "click", function(t) {
        var a = { latLng: e.marker_.getPosition() };
        (e.marker_.getClickable() || e.marker_.getDraggable()) && (g ? g = !1 : google.maps.event.trigger(e.marker_, "click", a), l(t));
      }),
      google.maps.event.addDomListener(this.eventDiv_, "dblclick", function(t) {
        var a = { latLng: e.marker_.getPosition() };
        (e.marker_.getClickable() || e.marker_.getDraggable()) && (google.maps.event.trigger(e.marker_, "dblclick", a), l(t));
      }),
      google.maps.event.addListener(this.marker_.getMap(), "mousemove", function(t) {
        var a;
        r && e.marker_.getDraggable() && (n ? (t.latLng = new google.maps.LatLng(t.latLng.lat() - d, t.latLng.lng() - m), e.marker_.get("crossOnDrag") && (a = e.getProjection().fromLatLngToDivPixel(t.latLng), e.crossDiv_.style.left = a.x + "px", e.crossDiv_.style.top = a.y + "px", e.crossDiv_.style.display = ""), google.maps.event.trigger(e.marker_, "drag", t)) : (d = t.latLng.lat() - e.marker_.getPosition().lat(), m = t.latLng.lng() - e.marker_.getPosition().lng(), n = !0, t.latLng = e.marker_.getPosition(), google.maps.event.trigger(e.marker_, "dragstart", t)));
      }),
      google.maps.event.addListener(this.marker_, "dragstart", function(t) {
        e.labelDiv_.style.zIndex = 1e6 + (this.get("labelInBackground") ? -1 : 1), e.eventDiv_.style.zIndex = e.labelDiv_.style.zIndex;
      }),
      google.maps.event.addListener(this.marker_, "drag", function(t) {
        this.setPosition(t.latLng);
      }),
      google.maps.event.addListener(this.marker_, "dragend", function(t) {
        e.setZIndex();
      }),
      // Prevent touch events from passing through the label DIV to the underlying map.
      //
      google.maps.event.addDomListener(this.eventDiv_, "touchstart", function(t) {
        s = !0, v(t);
      }),
      google.maps.event.addDomListener(this.eventDiv_, "touchmove", function(t) {
        v(t);
      }),
      google.maps.event.addDomListener(this.eventDiv_, "touchend", function(t) {
        v(t);
      })
    ];
  }, i.prototype.removeMouseListeners = function() {
    var e;
    if (this.listeners1_)
      for (e = 0; e < this.listeners1_.length; e++)
        google.maps.event.removeListener(this.listeners1_[e]);
  }, i.prototype.onRemove = function() {
    var e;
    if (this.labelDiv_.parentNode && this.labelDiv_.parentNode.removeChild(this.labelDiv_), this.eventDiv_.parentNode && this.eventDiv_.parentNode.removeChild(this.eventDiv_), this.removeMouseListeners(), this.listeners2_)
      for (e = 0; e < this.listeners2_.length; e++)
        google.maps.event.removeListener(this.listeners2_[e]);
  }, i.prototype.draw = function() {
    this.setContent(), this.setTitle(), this.setStyles();
  }, i.prototype.setContent = function() {
    var e = this.marker_.get("labelContent"), s = this.marker_._previousContent;
    s !== e && (this.marker_._previousContent = e, typeof e.nodeType > "u" ? (this.labelDiv_.innerHTML = e, this.eventDiv_.innerHTML = this.labelDiv_.innerHTML) : (this.labelDiv_.innerHTML = "", this.labelDiv_.appendChild(e), e = e.cloneNode(!0), this.eventDiv_.innerHTML = "", this.eventDiv_.appendChild(e)));
  }, i.prototype.setTitle = function() {
    this.eventDiv_.title = this.marker_.getTitle() || "";
  }, i.prototype.setStyles = function() {
    var e, s;
    this.labelDiv_.className = this.marker_.get("labelClass"), this.eventDiv_.className = this.labelDiv_.className, this.labelDiv_.style.cssText = "", this.eventDiv_.style.cssText = "", s = this.marker_.get("labelStyle");
    for (e in s)
      s.hasOwnProperty(e) && (this.labelDiv_.style[e] = s[e], this.eventDiv_.style[e] = s[e]);
    this.setMandatoryStyles();
  }, i.prototype.setMandatoryStyles = function() {
    this.labelDiv_.style.position = "absolute", this.labelDiv_.style.overflow = "hidden", typeof this.labelDiv_.style.opacity < "u" && this.labelDiv_.style.opacity !== "" && (this.labelDiv_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(opacity=' + this.labelDiv_.style.opacity * 100 + ')"', this.labelDiv_.style.filter = "alpha(opacity=" + this.labelDiv_.style.opacity * 100 + ")"), this.eventDiv_.style.position = this.labelDiv_.style.position, this.eventDiv_.style.overflow = this.labelDiv_.style.overflow, this.eventDiv_.style.cursor = "pointer", this.eventDiv_.style.opacity = 0.01, this.eventDiv_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"', this.eventDiv_.style.filter = "alpha(opacity=1)", this.setAnchor(), this.setPosition(), this.setZIndex(), this.setVisible();
  }, i.prototype.setAnchor = function() {
    var e = this.marker_.get("labelAnchor");
    this.labelDiv_.style.marginLeft = -e.x + "px", this.labelDiv_.style.marginTop = -e.y + "px", this.eventDiv_.style.marginLeft = -e.x + "px", this.eventDiv_.style.marginTop = -e.y + "px";
  }, i.prototype.setPosition = function() {
    var e = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
    this.labelDiv_.style.left = Math.round(e.x) + "px", this.labelDiv_.style.top = Math.round(e.y) + "px", this.eventDiv_.style.left = this.labelDiv_.style.left, this.eventDiv_.style.top = this.labelDiv_.style.top;
  }, i.prototype.setZIndex = function() {
    var e = this.marker_.get("labelInBackground") ? -1 : 1;
    typeof this.marker_.getZIndex() > "u" ? (this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + e, this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex) : (this.labelDiv_.style.zIndex = this.marker_.getZIndex() + e, this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex);
  }, i.prototype.setClickable = function() {
    this.removeMouseListeners(), this.eventDiv_.style.cursor = null, (this.marker_.getClickable() || this.marker_.getDraggable()) && this.addMouseListeners();
  }, i.prototype.setCursor = function() {
    this.eventDiv_.style.cursor = this.marker_.getCursor();
  }, i.prototype.setVisible = function() {
    this.marker_.get("labelVisible") ? this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none" : this.labelDiv_.style.display = "none", this.eventDiv_.style.display = this.labelDiv_.style.display;
  };
  function o(e) {
    e = e || {}, e.labelContent = e.labelContent || "", e.labelAnchor = e.labelAnchor || new google.maps.Point(0, 0), e.labelClass = e.labelClass || "markerLabels", e.labelStyle = e.labelStyle || {}, e.labelInBackground = e.labelInBackground || !1, typeof e.labelVisible > "u" && (e.labelVisible = !0), typeof e.crossOnDrag > "u" && (e.crossOnDrag = !0), typeof e.clickable > "u" && (e.clickable = !0), typeof e.draggable > "u" && (e.draggable = !1), typeof e.optimized > "u" && (e.optimized = !1), e.crossImage = e.crossImage || "//maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png", e.optimized = !1, this.label = new i(this, e.crossImage), google.maps.Marker.apply(this, arguments);
  }
  typeof google < "u" && h(o, google.maps.Marker), o.prototype.setMap = function(e) {
    google.maps.Marker.prototype.setMap.apply(this, arguments), this.label.setMap(e);
  }, f.exports = o;
})(c);
var _ = c.exports;
const y = /* @__PURE__ */ p(_);
export {
  y as m
};
