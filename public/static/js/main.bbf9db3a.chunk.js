(this["webpackJsonpmesto-react"] = this["webpackJsonpmesto-react"] || []).push([
  [0],
  {
    10: function (e, t, a) {
      e.exports = a(16);
    },
    15: function (e, t, a) {},
    16: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        o = a.n(n),
        r = a(5),
        c = a.n(r),
        i = (a(15), a(9)),
        l = a(1),
        s = a(6),
        u = a.n(s);
      var p = function () {
        return o.a.createElement(
          "header",
          { className: "header" },
          o.a.createElement(
            "a",
            { className: "header__logo-link", href: "#root" },
            o.a.createElement("img", {
              className: "header__logo-img",
              src: u.a,
              alt: "\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia",
            })
          )
        );
      };
      var m = function (e) {
          return o.a.createElement(
            "section",
            {
              className: "popup popup_type_"
                .concat(e.name, " ")
                .concat(e.isOpen),
            },
            o.a.createElement(
              "form",
              {
                className: "popup__container popup__container_form",
                method: "GET",
                action: "#",
                name: "".concat(e.name),
                noValidate: !0,
                onSubmit: e.onSubmit,
              },
              o.a.createElement("button", {
                className: "popup__close",
                type: "button",
                onClick: e.onClose,
              }),
              o.a.createElement(
                "h2",
                { className: "popup__title popup__title_profile" },
                "".concat(e.title)
              ),
              e.children,
              o.a.createElement(
                "button",
                { type: "submit", className: "popup__button" },
                e.button
              )
            )
          );
        },
        d = o.a.createContext();
      var f = function (e) {
        var t = o.a.useContext(d),
          a = "element__basket ".concat(
            e.card.owner._id === t._id ? "element__basket_active" : ""
          ),
          n = "element__like ".concat(
            e.card.likes.some(function (e) {
              return e._id === t._id;
            })
              ? "element__like_active"
              : ""
          );
        return o.a.createElement(
          "div",
          { className: "element" },
          o.a.createElement("button", {
            type: "button",
            onClick: function () {
              e.onCardDelete(e.card);
            },
            className: a,
          }),
          o.a.createElement("img", {
            className: "element__image",
            src: e.card.link,
            alt: e.card.name,
            onClick: function () {
              e.onCardClick(e.card);
            },
          }),
          o.a.createElement(
            "div",
            { className: "element__group" },
            o.a.createElement(
              "h2",
              { className: "element__title" },
              e.card.name
            ),
            o.a.createElement(
              "div",
              { className: "element__likebox" },
              o.a.createElement("button", {
                onClick: function () {
                  e.onCardLike(e.card);
                },
                className: n,
                type: "button",
              }),
              o.a.createElement(
                "p",
                { className: "element__like-number" },
                e.card.likes.length
              )
            )
          )
        );
      };
      var _ = function (e) {
        return o.a.createElement(
          "section",
          {
            className: "popup popup_type_".concat(e.name, " ").concat(e.isOpen),
          },
          o.a.createElement(
            "figure",
            { className: "popup__container popup__container_figure" },
            o.a.createElement("button", {
              className: "popup__close",
              type: "button",
              onClick: e.onClose,
            }),
            o.a.createElement("img", {
              className: "popup__img",
              src: e.card.src,
              alt: e.card.alt,
            }),
            o.a.createElement(
              "figcaption",
              { className: "popup__text" },
              e.card.title
            )
          )
        );
      };
      var h = function (e) {
        var t = o.a.useContext(d);
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "section",
            { className: "profile" },
            o.a.createElement(
              "div",
              { className: "profile__info" },
              o.a.createElement(
                "div",
                { className: "profile__overlay" },
                o.a.createElement("img", {
                  className: "profile__avatar",
                  onClick: e.onEditAvatar,
                  src: t.avatar,
                  alt:
                    "\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",
                })
              ),
              o.a.createElement(
                "div",
                { className: "profile__text" },
                o.a.createElement(
                  "div",
                  { className: "profile__topline" },
                  o.a.createElement(
                    "h1",
                    { className: "profile__name" },
                    t.name
                  ),
                  o.a.createElement("button", {
                    className: "profile__button profile__button_edit",
                    type: "button",
                    onClick: e.onEditProfile,
                  })
                ),
                o.a.createElement("p", { className: "profile__about" }, t.about)
              )
            ),
            o.a.createElement("button", {
              className: "profile__button profile__button_add",
              onClick: e.onAddPlace,
              type: "button",
            })
          ),
          o.a.createElement(
            "section",
            { className: "elements" },
            e.cards.map(function (t) {
              return o.a.createElement(f, {
                onCardLike: e.onCardLike,
                key: t._id,
                onCardClick: e.onSelectedCard,
                onCardDelete: e.onCardDelete,
                card: t,
              });
            })
          ),
          o.a.createElement(m, {
            name: "agree",
            title: "\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",
            button: "\u0414\u0430",
            onClose: e.onClose,
          }),
          o.a.createElement(_, {
            name: "figure",
            card: e.selectedCard,
            isOpen: e.isSelectedCard ? "popup_on" : "",
            onClose: e.onClose,
          })
        );
      };
      var E = function () {
          return o.a.createElement(
            "footer",
            { className: "footer" },
            o.a.createElement(
              "p",
              { className: "footer__copyright" },
              "\xa9 2020 Mesto Russia"
            )
          );
        },
        v = a(7),
        b = a(8),
        C = function (e) {
          return e.ok
            ? e.json()
            : Promise.reject(
                "\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)
              );
        },
        g = new ((function () {
          function e(t) {
            var a = t.baseUrl,
              n = t.headers;
            Object(v.a)(this, e), (this.baseUrl = a), (this.headers = n);
          }
          return (
            Object(b.a)(e, [
              {
                key: "getMe",
                value: function () {
                  return fetch("".concat(this.baseUrl, "/users/me"), {
                    headers: this.headers,
                  })
                    .then(C)
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "getInitialCards",
                value: function () {
                  return fetch("".concat(this.baseUrl, "/cards"), {
                    method: "GET",
                    headers: this.headers,
                  })
                    .then(C)
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "createCards",
                value: function (e) {
                  return fetch("".concat(this.baseUrl, "/cards"), {
                    method: "POST",
                    headers: this.headers,
                    body: JSON.stringify({ name: e.name, link: e.link }),
                  })
                    .then(C)
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "deleteCards",
                value: function (e) {
                  return fetch("".concat(this.baseUrl, "/cards/").concat(e), {
                    method: "DELETE",
                    headers: this.headers,
                  })
                    .then(C)
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "changeLikeCards",
                value: function (e, t) {
                  return fetch(
                    "".concat(this.baseUrl, "/cards/likes/").concat(e),
                    {
                      method: "".concat(t ? "PUT" : "DELETE"),
                      headers: this.headers,
                    }
                  )
                    .then(C)
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "changeAvatar",
                value: function (e) {
                  return fetch("".concat(this.baseUrl, "/users/me/avatar"), {
                    method: "PATCH",
                    headers: this.headers,
                    body: JSON.stringify({ avatar: e.avatar }),
                  })
                    .then(C)
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
              {
                key: "changeUserInfo",
                value: function (e) {
                  return fetch("".concat(this.baseUrl, "/users/me"), {
                    method: "PATCH",
                    headers: this.headers,
                    body: JSON.stringify({ name: e.name, about: e.about }),
                  })
                    .then(C)
                    .catch(function (e) {
                      console.log(e);
                    });
                },
              },
            ]),
            e
          );
        })())({
          baseUrl: "https://mesto.nomoreparties.co/v1/cohort-14",
          headers: {
            authorization: "9eba132f-f547-4f26-8f5f-732456ccc9d1",
            "Content-Type": "application/json",
          },
        });
      var k = function (e) {
        var t = o.a.useContext(d),
          a = o.a.useState(""),
          n = Object(l.a)(a, 2),
          r = n[0],
          c = n[1],
          i = o.a.useState(""),
          s = Object(l.a)(i, 2),
          u = s[0],
          p = s[1];
        return (
          o.a.useEffect(
            function () {
              e.isOpen && (c(t.name), p(t.about));
            },
            [t, e.isOpen]
          ),
          o.a.createElement(
            m,
            {
              name: "profile",
              title:
                "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",
              button: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
              isOpen: e.isOpen ? "popup_on" : "",
              onClose: e.onClose,
              onSubmit: function (t) {
                t.preventDefault(), e.onUpdateUser({ name: r, about: u });
              },
            },
            o.a.createElement("input", {
              type: "text",
              value: r,
              name: "name",
              className: "popup__input popup__input_name",
              id: "name-input",
              required: !0,
              minLength: "2",
              maxLength: "40",
              onChange: function (e) {
                c(e.target.value);
              },
            }),
            o.a.createElement(
              "span",
              { className: "popup__input-error", id: "name-input-error" },
              "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"
            ),
            o.a.createElement("input", {
              value: u,
              type: "text",
              name: "about",
              className: "popup__input popup__input_about",
              id: "about-input",
              required: !0,
              minLength: "2",
              maxLength: "200",
              onChange: function (e) {
                p(e.target.value);
              },
            }),
            o.a.createElement(
              "span",
              { className: "popup__input-error", id: "about-input-error" },
              "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"
            )
          )
        );
      };
      var N = function (e) {
        var t = o.a.useRef("");
        return (
          o.a.useEffect(
            function () {
              t.current.value = "";
            },
            [e.isOpen]
          ),
          o.a.createElement(
            m,
            {
              name: "avatar",
              title:
                "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",
              button: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
              isOpen: e.isOpen ? "popup_on" : "",
              onClose: e.onClose,
              onSubmit: function (a) {
                a.preventDefault(),
                  e.onUpdateAvatar({ avatar: t.current.value });
              },
            },
            o.a.createElement("input", {
              ref: t,
              type: "url",
              name: "link",
              className: "popup__input popup__input_link",
              id: "link-input",
              placeholder:
                "\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",
              required: !0,
            }),
            o.a.createElement(
              "span",
              { className: "popup__input-error", id: "link-input-error" },
              "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"
            )
          )
        );
      };
      var y = function (e) {
        var t = o.a.useRef(""),
          a = o.a.useRef("");
        return (
          o.a.useEffect(
            function () {
              (t.current.value = ""), (a.current.value = "");
            },
            [e.isOpen]
          ),
          o.a.createElement(
            m,
            {
              name: "place",
              title:
                "\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",
              button: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c",
              isOpen: e.isOpen ? "popup_on" : "",
              onClose: e.onClose,
              onSubmit: function (n) {
                n.preventDefault(),
                  e.onAddPlace({
                    name: t.current.value,
                    link: a.current.value,
                  });
              },
            },
            o.a.createElement("input", {
              ref: t,
              type: "text",
              name: "name",
              className: "popup__input popup__input_title",
              id: "title-input",
              placeholder: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",
              required: !0,
              minLength: "1",
              maxLength: "30",
            }),
            o.a.createElement(
              "span",
              { className: "popup__input-error", id: "title-input-error" },
              "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"
            ),
            o.a.createElement("input", {
              ref: a,
              type: "url",
              name: "link",
              className: "popup__input popup__input_link",
              id: "link-input",
              placeholder:
                "\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",
              required: !0,
            }),
            o.a.createElement(
              "span",
              { className: "popup__input-error", id: "link-input-error" },
              "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"
            )
          )
        );
      };
      var O = function () {
        var e = o.a.useState({}),
          t = Object(l.a)(e, 2),
          a = t[0],
          n = t[1],
          r = o.a.useState(!1),
          c = Object(l.a)(r, 2),
          s = c[0],
          u = c[1],
          m = o.a.useState([]),
          f = Object(l.a)(m, 2),
          _ = f[0],
          v = f[1],
          b = o.a.useState(!1),
          C = Object(l.a)(b, 2),
          O = C[0],
          S = C[1],
          U = o.a.useState(!1),
          j = Object(l.a)(U, 2),
          x = j[0],
          L = j[1],
          P = o.a.useState(!1),
          A = Object(l.a)(P, 2),
          w = A[0],
          D = A[1],
          T = o.a.useState({ src: "", alt: "", title: "" }),
          q = Object(l.a)(T, 2),
          I = q[0],
          J = q[1];
        function M() {
          u(!1), S(!1), L(!1), D(!1), J({});
        }
        return (
          o.a.useEffect(function () {
            Promise.all([g.getMe(), g.getInitialCards()]).then(function (e) {
              var t = Object(l.a)(e, 2),
                a = t[0],
                o = t[1];
              n(a), v(o);
            });
          }, []),
          o.a.createElement(
            "div",
            { className: "page" },
            o.a.createElement(
              d.Provider,
              { value: a },
              o.a.createElement(p, null),
              o.a.createElement(h, {
                onEditProfile: function () {
                  u(!0);
                },
                onAddPlace: function () {
                  S(!0);
                },
                onEditAvatar: function () {
                  L(!0);
                },
                onSelectedCard: function (e) {
                  D(!0), J({ src: e.link, alt: e.name, title: e.name });
                },
                isSelectedCard: w,
                selectedCard: I,
                onClose: M,
                cards: _,
                onCardLike: function (e) {
                  var t = e.likes.some(function (e) {
                    return e._id === a._id;
                  });
                  g.changeLikeCards(e._id, !t).then(function (t) {
                    var a = _.map(function (a) {
                      return a._id === e._id ? t : a;
                    });
                    v(a);
                  });
                },
                onCardDelete: function (e) {
                  g.deleteCards(e._id).then(function () {
                    return v(
                      _.filter(function (t) {
                        return t !== e;
                      })
                    );
                  });
                },
              }),
              o.a.createElement(k, {
                isOpen: s,
                onClose: M,
                onUpdateUser: function (e) {
                  g.changeUserInfo(e)
                    .then(function (e) {
                      return n(e);
                    })
                    .finally(function () {
                      M();
                    });
                },
              }),
              o.a.createElement(N, {
                isOpen: x,
                onClose: M,
                onUpdateAvatar: function (e) {
                  g.changeAvatar(e)
                    .then(function (e) {
                      return n(e);
                    })
                    .finally(function () {
                      M();
                    });
                },
              }),
              o.a.createElement(y, {
                isOpen: O,
                onClose: M,
                onAddPlace: function (e) {
                  g.createCards(e)
                    .then(function (e) {
                      return v([e].concat(Object(i.a)(_)));
                    })
                    .finally(function () {
                      M();
                    });
                },
              }),
              o.a.createElement(E, null)
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        o.a.createElement(o.a.StrictMode, null, o.a.createElement(O, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    6: function (e, t, a) {
      e.exports = a.p + "static/media/logo.855a8c98.svg";
    },
  },
  [[10, 1, 2]],
]);
//# sourceMappingURL=main.bbf9db3a.chunk.js.map
