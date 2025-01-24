// src/components/Navbar.tsx
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
import { Component } from "react";
// src/assets/NotificationBell.jsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var NotificationBell = function(param) {
    var badgeCount = param.badgeCount;
    return /* @__PURE__ */ jsxs("div", {
        style: {
            position: "relative",
            display: "inline-block"
        },
        children: [
            /* @__PURE__ */ jsxs("svg", {
                width: "31",
                height: "33",
                viewBox: "0 0 31 33",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /* @__PURE__ */ jsx("path", {
                        d: "M4.66846 18.4521C4.66846 15.4281 7.11995 12.9766 10.144 12.9766V12.9766C13.1681 12.9766 15.6196 15.4281 15.6196 18.4521V23.9277H4.66846V18.4521Z",
                        stroke: "#2E308A",
                        strokeWidth: "2",
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }),
                    /* @__PURE__ */ jsx("circle", {
                        cx: "10.1439",
                        cy: "27.2123",
                        r: "1.09511",
                        fill: "#2E308A"
                    }),
                    /* @__PURE__ */ jsx("path", {
                        d: "M10.144 12.9764V10.7861",
                        stroke: "#2E308A",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            }),
            badgeCount > 0 && /* @__PURE__ */ jsx("span", {
                style: {
                    position: "absolute",
                    top: "2px",
                    right: "3px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "1px 6px",
                    fontSize: "11px"
                },
                children: badgeCount
            })
        ]
    });
};
var NotificationBell_default = NotificationBell;
// src/components/Navbar.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Navbar = /*#__PURE__*/ function(Component) {
    "use strict";
    _inherits(Navbar, Component);
    function Navbar(props) {
        _class_call_check(this, Navbar);
        var _this;
        _this = _call_super(this, Navbar, [
            props
        ]);
        _this.toggleDropdown = function() {
            _this.setState(function(prevState) {
                return {
                    isDropdownOpen: !prevState.isDropdownOpen
                };
            });
        };
        _this.closeDropdown = function() {
            _this.setState({
                isDropdownOpen: false
            });
        };
        _this.toggleFullscreen = function() {
            var isFullscreen = _this.state.isFullscreen;
            if (isFullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                var element = document.documentElement;
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            }
            _this.setState(function(prevState) {
                return {
                    isFullscreen: !prevState.isFullscreen
                };
            });
        };
        _this.handleFullscreenChange = function() {
            _this.setState({
                isFullscreen: !!document.fullscreenElement
            });
        };
        _this.state = {
            isDropdownOpen: false,
            isFullscreen: false
        };
        return _this;
    }
    _create_class(Navbar, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                document.addEventListener("fullscreenchange", this.handleFullscreenChange);
                document.addEventListener("mozfullscreenchange", this.handleFullscreenChange);
                document.addEventListener("webkitfullscreenchange", this.handleFullscreenChange);
                document.addEventListener("msfullscreenchange", this.handleFullscreenChange);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                document.removeEventListener("fullscreenchange", this.handleFullscreenChange);
                document.removeEventListener("mozfullscreenchange", this.handleFullscreenChange);
                document.removeEventListener("webkitfullscreenchange", this.handleFullscreenChange);
                document.removeEventListener("msfullscreenchange", this.handleFullscreenChange);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this_state = this.state, isDropdownOpen = _this_state.isDropdownOpen, isFullscreen = _this_state.isFullscreen;
                var _this_props = this.props, bgColor = _this_props.bgColor, color = _this_props.color, _this_props_projectName = _this_props.projectName, projectName = _this_props_projectName === void 0 ? "My App" : _this_props_projectName, logo = _this_props.logo, logoCollapsed = _this_props.logoCollapsed, isCollapsed = _this_props.isCollapsed, className = _this_props.className, scrollY = _this_props.scrollY, notifCount = _this_props.notifCount, role = _this_props.role, userName = _this_props.userName, baseUrl = _this_props.baseUrl, showNotification = _this_props.showNotification, handleLogout = _this_props.handleLogout, handleNotification = _this_props.handleNotification;
                var isBlurred = scrollY > 0;
                return /* @__PURE__ */ jsx2("nav", {
                    className: "".concat(className, " ").concat(color, " backdrop-blur-md transition-all duration-300 fixed ml-5 mr-5 top-2 z-50"),
                    style: {
                        width: isCollapsed ? "calc(100vw - 125px)" : "calc(100vw - 301px)",
                        backdropFilter: isBlurred ? "blur(40px)" : "none"
                    },
                    children: /* @__PURE__ */ jsx2("div", {
                        className: "px-2 sm:px-2 lg:px-4",
                        children: /* @__PURE__ */ jsxs2("div", {
                            className: "relative flex h-16 items-center justify-between",
                            children: [
                                /* @__PURE__ */ jsx2("div", {
                                    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                                    children: /* @__PURE__ */ jsxs2("button", {
                                        type: "button",
                                        className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                        "aria-controls": "mobile-menu",
                                        "aria-expanded": isDropdownOpen,
                                        onClick: this.toggleDropdown,
                                        children: [
                                            /* @__PURE__ */ jsx2("span", {
                                                className: "absolute -inset-0.5"
                                            }),
                                            /* @__PURE__ */ jsx2("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }),
                                            /* @__PURE__ */ jsx2("svg", {
                                                className: "block size-6 ".concat(isDropdownOpen ? "hidden" : "block"),
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                "data-slot": "icon",
                                                children: /* @__PURE__ */ jsx2("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                                })
                                            }),
                                            /* @__PURE__ */ jsx2("svg", {
                                                className: "hidden size-6 ".concat(isDropdownOpen ? "block" : "hidden"),
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                "data-slot": "icon",
                                                children: /* @__PURE__ */ jsx2("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M6 18L18 6M6 6l12 12"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsx2("div", {
                                    className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",
                                    children: /* @__PURE__ */ jsxs2("div", {
                                        className: "flex shrink-0 items-center",
                                        children: [
                                            projectName !== "My App" && // <>{projectName}</>
                                            (this.props.isCollapsed ? /* @__PURE__ */ jsx2("div", {
                                                className: "text-xl font-bold text-indigo-800",
                                                children: projectName
                                            }) : // <></>
                                            /* @__PURE__ */ jsx2("div", {
                                                className: "text-xl font-bold text-indigo-800",
                                                children: projectName
                                            })),
                                            projectName === "My App" && /* @__PURE__ */ jsx2("h1", {
                                                className: "ml-3 text-xl font-bold text-indigo-800",
                                                children: projectName
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsxs2("div", {
                                    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                                    children: [
                                        /* @__PURE__ */ jsxs2("button", {
                                            type: "button",
                                            className: "relative p-1",
                                            onClick: this.toggleFullscreen,
                                            children: [
                                                /* @__PURE__ */ jsx2("span", {
                                                    className: "absolute -inset-1.5"
                                                }),
                                                /* @__PURE__ */ jsx2("span", {
                                                    className: "sr-only",
                                                    children: "Toggle fullscreen"
                                                }),
                                                isFullscreen ? /* @__PURE__ */ jsxs2("svg", {
                                                    width: "17",
                                                    height: "16",
                                                    viewBox: "0 0 17 16",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M3.82769 3.44452L14.1614 13.7782",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M5.55003 1.72244L2.10544 1.72241L2.10547 5.16699",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M14.6609 10.8328L14.6609 14.2774L11.2163 14.2773",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M12.9385 3.44415L2.60486 13.7778",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M14.6606 5.16721L14.6606 1.72263L11.2161 1.72266",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M5.54978 14.2776L2.1052 14.2776L2.10522 10.833",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    ]
                                                }) : /* @__PURE__ */ jsxs2("svg", {
                                                    width: "17",
                                                    height: "16",
                                                    viewBox: "0 0 17 16",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M3.82769 3.44452L14.1614 13.7782",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M5.55003 1.72244L2.10544 1.72241L2.10547 5.16699",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M14.6609 10.8328L14.6609 14.2774L11.2163 14.2773",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M12.9385 3.44415L2.60486 13.7778",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M14.6606 5.16721L14.6606 1.72263L11.2161 1.72266",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /* @__PURE__ */ jsx2("path", {
                                                            d: "M5.54978 14.2776L2.1052 14.2776L2.10522 10.833",
                                                            stroke: "#2E308A",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        showNotification && /* @__PURE__ */ jsxs2("button", {
                                            type: "button",
                                            className: "relative ml-2 p-1",
                                            onClick: handleNotification,
                                            children: [
                                                /* @__PURE__ */ jsx2("span", {
                                                    className: "absolute -inset-1.5"
                                                }),
                                                /* @__PURE__ */ jsx2("span", {
                                                    className: "sr-only",
                                                    children: "View notifications"
                                                }),
                                                /* @__PURE__ */ jsx2(NotificationBell_default, {
                                                    badgeCount: notifCount
                                                })
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs2("button", {
                                            type: "button",
                                            className: "relative p-1 ".concat(!showNotification ? "ml-2" : ""),
                                            onClick: function() {
                                                if (baseUrl) {
                                                    localStorage.clear();
                                                    window.location.href = baseUrl;
                                                } else {
                                                    handleLogout();
                                                }
                                            },
                                            children: [
                                                /* @__PURE__ */ jsx2("span", {
                                                    className: "absolute -inset-1.5"
                                                }),
                                                /* @__PURE__ */ jsx2("span", {
                                                    className: "sr-only",
                                                    children: "View Lobby"
                                                }),
                                                /* @__PURE__ */ jsxs2("svg", {
                                                    width: "20",
                                                    height: "16",
                                                    viewBox: "0 0 20 16",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /* @__PURE__ */ jsx2("g", {
                                                            clipPath: "url(#clip0_4092_6565)",
                                                            children: /* @__PURE__ */ jsx2("path", {
                                                                d: "M12 3V10H2V3H12ZM2 1C0.896875 1 0 1.89688 0 3V10C0 11.1031 0.896875 12 2 12H5.66563L5.33125 13H3C2.44688 13 2 13.4469 2 14C2 14.5531 2.44688 15 3 15H11C11.5531 15 12 14.5531 12 14C12 13.4469 11.5531 13 11 13H8.66562L8.33125 12H12C13.1031 12 14 11.1031 14 10V3C14 1.89688 13.1031 1 12 1H2ZM16.5 1C15.6719 1 15 1.67188 15 2.5V13.5C15 14.3281 15.6719 15 16.5 15H18.5C19.3281 15 20 14.3281 20 13.5V2.5C20 1.67188 19.3281 1 18.5 1H16.5ZM17 3H18C18.275 3 18.5 3.225 18.5 3.5C18.5 3.775 18.275 4 18 4H17C16.725 4 16.5 3.775 16.5 3.5C16.5 3.225 16.725 3 17 3ZM16.5 5.5C16.5 5.225 16.725 5 17 5H18C18.275 5 18.5 5.225 18.5 5.5C18.5 5.775 18.275 6 18 6H17C16.725 6 16.5 5.775 16.5 5.5ZM17.5 10.5C17.7652 10.5 18.0196 10.6054 18.2071 10.7929C18.3946 10.9804 18.5 11.2348 18.5 11.5C18.5 11.7652 18.3946 12.0196 18.2071 12.2071C18.0196 12.3946 17.7652 12.5 17.5 12.5C17.2348 12.5 16.9804 12.3946 16.7929 12.2071C16.6054 12.0196 16.5 11.7652 16.5 11.5C16.5 11.2348 16.6054 10.9804 16.7929 10.7929C16.9804 10.6054 17.2348 10.5 17.5 10.5Z",
                                                                fill: "#2E308A"
                                                            })
                                                        }),
                                                        /* @__PURE__ */ jsx2("defs", {
                                                            children: /* @__PURE__ */ jsx2("clipPath", {
                                                                id: "clip0_4092_6565",
                                                                children: /* @__PURE__ */ jsx2("rect", {
                                                                    width: "20",
                                                                    height: "16",
                                                                    fill: "white"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /* @__PURE__ */ jsxs2("div", {
                                            className: "relative ml-2 p-1 hover:cursor-pointer hover:bg-gray-50 hover:rounded-md",
                                            children: [
                                                /* @__PURE__ */ jsx2("div", {
                                                    children: /* @__PURE__ */ jsxs2("button", {
                                                        type: "button",
                                                        className: "relative flex text-sm font-medium text-indigo-800",
                                                        id: "user-menu-button",
                                                        "aria-expanded": isDropdownOpen,
                                                        "aria-haspopup": "true",
                                                        onClick: this.toggleDropdown,
                                                        children: [
                                                            /* @__PURE__ */ jsx2("span", {
                                                                className: "absolute -inset-1.5"
                                                            }),
                                                            /* @__PURE__ */ jsx2("span", {
                                                                className: "sr-only",
                                                                children: "Open user menu"
                                                            }),
                                                            /* @__PURE__ */ jsx2("p", {
                                                                className: "flex items-center",
                                                                children: role
                                                            }),
                                                            /* @__PURE__ */ jsx2("div", {
                                                                className: "w-8 h-",
                                                                children: /* @__PURE__ */ jsx2("svg", {
                                                                    className: "ml-1 h-5 w-5",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 20 20",
                                                                    fill: "currentColor",
                                                                    "aria-hidden": "true",
                                                                    children: /* @__PURE__ */ jsx2("path", {
                                                                        fillRule: "evenodd",
                                                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                        clipRule: "evenodd"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /* @__PURE__ */ jsxs2("div", {
                                                    className: "absolute right-0 z-10 mt-2 w-64 border border-gray-200 transition-all duration-300 ease-in-out origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none ".concat(isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"),
                                                    role: "menu",
                                                    "aria-orientation": "vertical",
                                                    "aria-labelledby": "user-menu-button",
                                                    tabIndex: -1,
                                                    onClick: this.closeDropdown,
                                                    children: [
                                                        /* @__PURE__ */ jsxs2("span", {
                                                            className: "block px-4 py-2 text-sm text-gray-700",
                                                            children: [
                                                                " USER ",
                                                                /* @__PURE__ */ jsxs2("strong", {
                                                                    children: [
                                                                        " ",
                                                                        userName,
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /* @__PURE__ */ jsx2("a", {
                                                            href: "#",
                                                            onClick: handleLogout,
                                                            className: "block px-4 py-2 text-sm hover:bg-indigo-800 hover:text-white text-gray-700",
                                                            role: "menuitem",
                                                            tabIndex: -1,
                                                            id: "user-menu-item-2",
                                                            children: "Logout"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                });
            }
        }
    ]);
    return Navbar;
}(Component);
var Navbar_default = Navbar;
// src/components/Sidebar.tsx
import { Component as Component3 } from "react";
// src/context/SearchContext.tsx
import { createContext, Component as Component2 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var SearchContext = createContext({
    searchTerm: "",
    setSearchTerm: function() {}
});
var SearchProvider = /*#__PURE__*/ function(Component2) {
    "use strict";
    _inherits(SearchProvider, Component2);
    function SearchProvider(props) {
        _class_call_check(this, SearchProvider);
        var _this;
        _this = _call_super(this, SearchProvider, [
            props
        ]);
        _this.setSearchTerm = function(searchTerm) {
            _this.setState({
                searchTerm: searchTerm
            });
        };
        _this.state = {
            searchTerm: ""
        };
        return _this;
    }
    _create_class(SearchProvider, [
        {
            key: "render",
            value: function render() {
                return /* @__PURE__ */ jsx3(SearchContext.Provider, {
                    value: {
                        searchTerm: this.state.searchTerm,
                        setSearchTerm: this.setSearchTerm
                    },
                    children: this.props.children
                });
            }
        }
    ]);
    return SearchProvider;
}(Component2);
var SearchConsumer = SearchContext.Consumer;
// src/components/Sidebar.tsx
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Fragment, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Sidebar = /*#__PURE__*/ function(Component3) {
    "use strict";
    _inherits(Sidebar, Component3);
    function Sidebar(props) {
        _class_call_check(this, Sidebar);
        var _this;
        _this = _call_super(this, Sidebar, [
            props
        ]);
        _this.toggleExpand = function(path) {
            _this.setState(function(prevState) {
                return {
                    expandedItems: _object_spread_props(_object_spread({}, prevState.expandedItems), _define_property({}, path, !prevState.expandedItems[path]))
                };
            });
        };
        _this.handleMouseEnter = function() {
            _this.setState({
                isHovered: true
            });
        };
        _this.handleMouseLeave = function() {
            _this.setState({
                isHovered: false
            });
        };
        _this.state = {
            expandedItems: {},
            isHovered: false
        };
        return _this;
    }
    _create_class(Sidebar, [
        {
            key: "render",
            value: function render() {
                var _this = this;
                var _this_props = this.props, title = _this_props.title, _this_props_showSearch = _this_props.showSearch, showSearch = _this_props_showSearch === void 0 ? false : _this_props_showSearch, _this_props_menuItems = _this_props.menuItems, menuItems = _this_props_menuItems === void 0 ? [] : _this_props_menuItems, _this_props_bgColor = _this_props.bgColor, bgColor = _this_props_bgColor === void 0 ? "bg-stone-500" : _this_props_bgColor, _this_props_color = _this_props.color, color = _this_props_color === void 0 ? "text-white" : _this_props_color, isCollapsed = _this_props.isCollapsed, activePath = _this_props.activePath, logoCollapsed = _this_props.logoCollapsed, logo = _this_props.logo, onMenuItemClick = _this_props.onMenuItemClick;
                var isHovered = this.state.isHovered;
                return /* @__PURE__ */ jsx4(SearchConsumer, {
                    children: function(param) {
                        var searchTerm = param.searchTerm, setSearchTerm = param.setSearchTerm;
                        var filteredMenuItems = menuItems.map(function(item) {
                            var subItems = item.subItems || [];
                            var filteredSubItems = subItems.filter(function(subItem) {
                                return subItem.label.toLowerCase().includes(searchTerm.toLowerCase());
                            });
                            return _object_spread_props(_object_spread({}, item), {
                                subItems: filteredSubItems,
                                isVisible: item.label.toLowerCase().includes(searchTerm.toLowerCase()) || filteredSubItems.length > 0
                            });
                        }).filter(function(item) {
                            return item.isVisible;
                        });
                        return /* @__PURE__ */ jsxs3("aside", {
                            onMouseEnter: _this.handleMouseEnter,
                            onMouseLeave: _this.handleMouseLeave,
                            className: "".concat(bgColor, " ").concat(color, " ").concat(isCollapsed && !isHovered ? "w-20" : "w-64", " h-full transition-all duration-300 ease-in-out border border-stone-200 rounded-lg shadow-lg shadow-stone-300/40"),
                            children: [
                                !isCollapsed ? /* @__PURE__ */ jsx4("div", {
                                    className: "mb-4 mt-4 delay-100 transition ease-in-out duration-300 flex justify-center",
                                    children: logoCollapsed
                                }) : isHovered ? /* @__PURE__ */ jsx4("div", {
                                    className: "mb-4 mt-4 delay-100 transition ease-in-out duration-300 flex justify-center",
                                    children: logoCollapsed
                                }) : /* @__PURE__ */ jsx4("div", {
                                    className: "mb-4 mt-4 delay-100 transition ease-in-out duration-300 flex justify-center",
                                    children: logo
                                }),
                                /* @__PURE__ */ jsx4("hr", {
                                    style: {
                                        color: "#e3e3e3",
                                        borderColor: "#e3e3e3",
                                        marginBlockEnd: 0,
                                        marginBlockStart: 0
                                    }
                                }),
                                showSearch && /* @__PURE__ */ jsx4("div", {
                                    className: "mb-4 px-4 pt-4 delay-100 ".concat(isCollapsed && !isHovered ? "hidden" : ""),
                                    children: /* @__PURE__ */ jsxs3("div", {
                                        className: "flex items-center border border-blue-400 rounded-lg bg-blue-100",
                                        children: [
                                            /* @__PURE__ */ jsx4("svg", {
                                                style: {
                                                    marginLeft: 10
                                                },
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: 1.5,
                                                stroke: "currentColor",
                                                className: "size-6",
                                                children: /* @__PURE__ */ jsx4("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                                })
                                            }),
                                            /* @__PURE__ */ jsx4("input", {
                                                type: "text",
                                                value: searchTerm,
                                                onChange: function(event) {
                                                    return setSearchTerm(event.target.value);
                                                },
                                                placeholder: "Search Menu...",
                                                className: "w-full p-2 bg-blue-100 text-indigo-800 rounded-lg focus:outline-none focus:border-indigo-500"
                                            })
                                        ]
                                    })
                                }),
                                /* @__PURE__ */ jsx4("ul", {
                                    className: "px-4 pb-4 overflow-y-auto delay-100 transition ease-in-out duration-300 ".concat(isCollapsed && !isHovered ? "pt-4" : ""),
                                    style: {
                                        maxHeight: "calc(100vh - 220px)",
                                        overflowY: "auto"
                                    },
                                    children: filteredMenuItems.map(function(item, index) {
                                        var subItems = item.subItems || [];
                                        var originalItem = menuItems.find(function(menuItem) {
                                            return menuItem.path === item.path;
                                        });
                                        var hasOriginalSubItems = (originalItem === null || originalItem === void 0 ? void 0 : originalItem.subItems) && originalItem.subItems.length > 0;
                                        var isExpanded = _this.state.expandedItems[item.path] || hasOriginalSubItems && searchTerm !== "";
                                        return /* @__PURE__ */ jsxs3("li", {
                                            className: "mb-2 delay-100 transition ease-in-out duration-300",
                                            children: [
                                                /* @__PURE__ */ jsx4("div", {
                                                    onClick: function() {
                                                        return subItems.length > 0 ? _this.toggleExpand(item.path) : onMenuItemClick === null || onMenuItemClick === void 0 ? void 0 : onMenuItemClick(item.path);
                                                    },
                                                    className: "cursor-pointer align-middle rounded-lg p-3 block transition ease-in-out duration-300 ".concat(activePath === item.path ? "bg-indigo-900 text-white hover:bg-indigo-900 hover:text-white" : "".concat(bgColor, " text-indigo-900 hover:bg-indigo-900 hover:text-white")),
                                                    children: /* @__PURE__ */ jsxs3("div", {
                                                        className: "flex items-center justify-between w-full",
                                                        children: [
                                                            isCollapsed && !isHovered ? /* @__PURE__ */ jsx4("div", {
                                                                className: "flex items-center",
                                                                children: item.icon && /* @__PURE__ */ jsx4("span", {
                                                                    className: "mr-2",
                                                                    children: item.icon
                                                                })
                                                            }) : /* @__PURE__ */ jsxs3("div", {
                                                                className: "flex items-center truncate",
                                                                children: [
                                                                    item.icon && /* @__PURE__ */ jsx4("span", {
                                                                        className: "mr-2",
                                                                        children: item.icon
                                                                    }),
                                                                    /* @__PURE__ */ jsx4("p", {
                                                                        className: "truncate",
                                                                        children: item.label
                                                                    })
                                                                ]
                                                            }),
                                                            subItems.length > 0 && (isCollapsed && !isHovered ? /* @__PURE__ */ jsx4(Fragment, {}) : // animate icon dropdown when isExpanded with rotate
                                                            /* @__PURE__ */ jsx4("span", {
                                                                className: "ml-2 transition-transform duration-300 ".concat(isExpanded ? "rotate-90" : ""),
                                                                children: item.iconClose ? item.iconClose : /* @__PURE__ */ jsx4(KeyboardArrowRightIcon, {})
                                                            }))
                                                        ]
                                                    })
                                                }),
                                                subItems.length > 0 && /* @__PURE__ */ jsx4("ul", {
                                                    className: "overflow-hidden transition-max-height duration-300 ease-in-out bg-blue-100 rounded-lg ".concat(isExpanded ? "max-h-screen" : "max-h-0"),
                                                    children: subItems.map(function(subItem, subIndex) {
                                                        return(// jika subItem bukan yang terakhir, tambahkan tambahkan mb-2  
                                                        /* @__PURE__ */ jsx4("li", {
                                                            className: "".concat(subIndex !== subItems.length - 1 ? "mb-2" : ""),
                                                            children: isCollapsed && !isHovered ? /* @__PURE__ */ jsx4("div", {
                                                                className: "cursor-pointer align-middle rounded-lg p-3 block transition ease-in-out duration-300 ".concat(activePath === subItem.path ? "bg-indigo-900 text-white hover:bg-indigo-900 hover:text-white" : "bg-blue-100 text-indigo-900 hover:bg-indigo-900 hover:text-white"),
                                                                onClick: function() {
                                                                    return onMenuItemClick === null || onMenuItemClick === void 0 ? void 0 : onMenuItemClick(subItem.path);
                                                                },
                                                                children: subItem.icon && /* @__PURE__ */ jsx4("span", {
                                                                    className: "mr-2 ml-px",
                                                                    children: subItem.icon
                                                                })
                                                            }) : /* @__PURE__ */ jsxs3("div", {
                                                                className: "cursor-pointer flex items-center align-middle rounded-lg p-3 block transition ease-in-out duration-300 truncate ".concat(activePath === subItem.path ? "bg-indigo-900 text-white hover:bg-indigo-900 hover:text-white" : "bg-blue-100 text-indigo-900 hover:bg-indigo-900 hover:text-white"),
                                                                onClick: function() {
                                                                    return onMenuItemClick === null || onMenuItemClick === void 0 ? void 0 : onMenuItemClick(subItem.path);
                                                                },
                                                                children: [
                                                                    subItem.icon && /* @__PURE__ */ jsx4("span", {
                                                                        className: "mr-2 ml-4",
                                                                        children: subItem.icon
                                                                    }),
                                                                    /* @__PURE__ */ jsx4("p", {
                                                                        className: "truncate",
                                                                        children: subItem.label
                                                                    })
                                                                ]
                                                            })
                                                        }, subIndex));
                                                    })
                                                })
                                            ]
                                        }, index);
                                    })
                                })
                            ]
                        });
                    }
                });
            }
        }
    ]);
    return Sidebar;
}(Component3);
var Sidebar_default = Sidebar;
// src/components/Content.tsx
import { Component as Component4 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Content = /*#__PURE__*/ function(Component4) {
    "use strict";
    _inherits(Content, Component4);
    function Content() {
        _class_call_check(this, Content);
        var _this;
        _this = _call_super(this, Content, arguments);
        _this.handleScroll = function(event) {
            var scrollY = event.currentTarget.scrollTop;
        };
        return _this;
    }
    _create_class(Content, [
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                return /* @__PURE__ */ jsx5("main", {
                    className: "pl-2 pt-1.5 h-screen",
                    children: children
                });
            }
        }
    ]);
    return Content;
}(Component4);
var Content_default = Content;
// src/components/Footer.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var Footer = function(param) {
    var bgColor = param.bgColor, color = param.color;
    return /* @__PURE__ */ jsx6("footer", {
        className: "p-3 border-t border-stone-200 shadow-lg shadow-indigo-200/20 ".concat(bgColor ? bgColor : "bg-stone-800", " ").concat(color ? color : "text-stone-100"),
        children: /* @__PURE__ */ jsxs4("div", {
            className: "flex justify-between",
            children: [
                /* @__PURE__ */ jsxs4("div", {
                    className: "flex justify-between",
                    children: [
                        /* @__PURE__ */ jsx6("img", {
                            src: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAYAAAAYwiAhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NEFCRjU1NDdDRURFNDExOEM0RDlERjQ2OEVGOEYwQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkY2MzI4ODAxM0QxMUU2QTk5OEE5OTE5MzAwODg5MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkY2MzI4NzAxM0QxMUU2QTk5OEE5OTE5MzAwODg5MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCMThCQjRBMkEwMUU2MTFBREFGOUYwODFFRjk1M0JGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ0QUJGNTU0N0NFREU0MTE4QzREOURGNDY4RUY4RjBDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cj3sTwAAcs9JREFUeNrsvQe8HVd1Lv5Nnzn99q6rLlmWZMu2kNwbMbYBx5DQeyjJozwS8kLIn5SXhORBSAiE8ngQOgECGDDu3ZYtF8mSJVm9315Pr9P/a+859+peWbdIOrKdXzTmolvOmTOz59vf+tbaa60t+L6P88f541wd4vkhOH+cB9j54zzAzh/nj/MAO3+cB9j54zzAzh/nj/MAO3+8Og4598AH+93Msaik6hAgQ7QqsJGmP2kQXRmuVoEk1lckTyo4clnxfM2X4PP/JlF6PpT23/aYePRC9UdPkAS4BdUtDLYKaz7yZ7JjFjrc8hAEJ0J/FuHKHiT6j73Vkx0CnAzHy8U8uM2AA08QXvIhzvlx/m97cDT4Av3Ph8DsoZmHWckhtOz9X4lf/Pv/JouSn/MlNSbIKr3YhyOoED0frujSqyXiMQ++QmCj7xVPhCAE3CVAOM9g/+3R5UMicHnsSyGEFIowbSB27V9/LLz8lm/AzkOmP9HrhAAyBBRR8IilCFp+wGIWMZ5Ifxfpda4gQJgGren8eP7478ZeAuHD50peyWZQdgUYN/71e8OL3/QjFHYzg0mi6xToEDi0/AmQTnx3Hkfnj5P0lwCFyapMHyy1yYrd9Mlb9M7rHwVGAbtMqDMYwM4f548zVV9k1QpjcENLB6M3/sUNavPqA3B7yfzVIRBk58MU54/T9Rmr0kkgKeUXh2BFljwfv+GvL+HgKvcQ5rxpmuk8g50/Tou1fHL+fMGFnByD1LH2wdCF7389JNmBOXJKMX6ewc4f8+cvcvJk24KYSsJbevMvIzd+6nWKDMctjk+axPMAm43+5/W7mfSIMMvf/muPA78DApDolEm7j8BZcOsXjKv++C1CKAKvkJ4RXOdN5OSAivyLe87ChPfMwjaB3vCFQFf43JP2q1721Pe7U0AWhHvY/3nsGzInAnlaLIg9f8C+giYQEo2EzX/y2L3QPbiCDKlShmdWIF/2wb+Q22//PPLkKYr0OnF2jjrPYCcNr+jRTPUDsLk0gExvnABSdYnM9/jws+g1CyGy13NAcvHrwCOd4rHv6feSo0LwxGlLa69uM1gNpHsyC0LQvekQKllY9gj8tW99f/Tij35edgpwrfy82Pk8g1Xd7YB7vCpbiTy4zBjME6oMxvEVBKV9DqXq7wT2j1x9N4cof+/EEayI/NcwlOwOZLpHByo8yYPq23BLKbi+hvCV7/ldqemi3/ruGDy7AkGR5nXO/+IA86c8Ov8UmudkYyZMDqTAWMgn8+XRIHrEOmoUnkuDZhfoq8R/L0oEF6Oe/o2R982AohLYRHg+Jk0lOwdjLAY+sZKC4LiwXfpZlHmgUVSIAZgZcYrEbnR+kc4hyqcJOX8er/fPAMZ+1eyfGCffJ3PI7k4uoJzLw1XbKvGrP/FavaNpszlwBH54IX3M/D9H/q/BMP6UfwO28VlOh8Bo3Kn+rPA1UZ/pISEwXwJ9L9DD9jnrKBDK4/SnPHy9Ho7WDM9hGiIMOWJk4FUGVMMwoS/PuUZDwTcay9DatjkDT/Z5qZ1WKNHtKEbEFZSQ6xthR/AcAWZF8i1LLBWGVcdxRHHRW6KurLXAT1/ql5O6VhqPCsXRiGuXdT9U12BWSq0MuJKkQjJT9JH0pUQBLQTFpfsSiTElmTSPOGmuGZvyBAOu5fxJjcc8OsaufBnP5zRKQPdOC1oSgYlNNEeiMfTZ5/ocPBp9rpmmIQmtTNXf9JfXK40LdyH1GM0l97TA9aoGWDCI1S/6P4kDyeNAYWYoAJDHRSQbJM8vw2E/2CZQyUAINRDrhOnLga9ppqzpPWhfO+ZHV+z18mO71ULfqLzs8qzfcWWOTr3bfvyz2WhEAZZtBDovoZMug+UlUEj1Evs8CYn8cUWlv6saEA7T7+zqhdK1FT24kgKv41aI9V1IEE7hHwR6tqJydBOsrAJt/d+qWtS5DEOPNGHvQwkzclnUb15ztZB9sUvKDjQ6ZmmZbVmQRA26myfvbBROqBGCakBySQsS87n0uCSfOQ8uN9sTptipZhucTtIBg7AnsOsmpqbJKRM2HWJsgejZKvYADWt3NV7+0deJja3DsMYJvacPrlc1wHwhYCwGHonzFvtS+GBAYA+QAYkxQILwESdgZaHoas6tWzzqxtfu1lL7n5Pq1BRW/cGImx3dKh758WDouvegIlyFwr77oB79EdSmZiC6AFY5DZMYxKMHKVZIvJaSBCIymYUyN20gpvQ9j89gwXXoswhcLvui74mRDLEM3S9BlocBI0RXSu8TyNSKSfr9AHSN7qCzxQLqn0Z8J7B3D6SW66Fc+idfQ/7nwLOPonDD+y+U3ewSefuPWu1soclbcdulyL14kVA+1uqYXghyCJI3TtdhwdPq6VlrNC5BYoLAPWBUR2n+VteVXGLJEFS6jYrqQnd8UgjHYDavv79x4yfeKNbFHRSGaFJFzghc/wVMJOMqh6ibzFvJgeimYckaDYoANdRUcdqu6DXNow9LcXlAX/nZw8Kexx6MNSgZ86LPwnrkLxGK9NNMXAnTY8RGwrScghSiB19JEuPRCFdK9BlZ+KS5qsGe6sf6M4cUeFSDZrNaZumaQN5G2qnDiHMJUrtFlHeOoaFFwpZnd6A9vhox+Qo8tmkL5O2bsHJVFGHHQWP+A0jUrYA2eAgLvRw/XySxcg+Q2wM9jYLdCf3a/43Irk8j3VvXIF721g3GgW9fZDqdixwt9FoltbfbLeREi0yrQKCTiN1EJUJgE/mInaw9T3Uw86q4Mk1YEyXF4/owFC7YWHL1f8S73vsBch0JgTRWJCc4SjQbWtni8iOQKR7/XuAhGv+VBpg/JU7kTVFW7PdSIJer8SLu7NNNi3Yajq/Ccml+GjEI9csKqqI+oSWsF90Fv7dV7jm0ObTm5pHUnrsQ9p+B0XIJCkefB6xhAuAwfKdMJMPYLw3PKgbBQALOmVSyc6+RTIegEBAjNMjQMTDWhJ7kIvRlF2FPr4T6jsUYPzyIXdsHcdn6NuzeN4CVF7wW3d0X45HjHg7d9yTMUgULl63F29/zeST6jmHbL3+IZYtXI5N8Da50d2DRogTqCwvo88JoYlnFxjB7RMnwwnX3KsfUe0sL34xYWxj+SO8CJ1T/Wu/AL1eW7RWv8e3MpXKuJ+LYDiNbAg1do9oQsI5wYv1wQsMG0SkadxrvEpnIuEQTNpzEz15YW75g0Zc+0E5a0MqOI+KVCHTsEuj+S1FyXlSEyWnRomRFZJajo0IP0/dR7v9McTLoIsIiQ/G5Bxhz6x2iYok+TPIk2JIQkADTVYzfRfLi2CM06eFxM0VfURLg0YV7FdXYLnRc/rw0/MzDxrrLh1zjmpQ2+nPSOhtgDvZDtMbo/BUOJIB0gmvyG69dOwSBe4xRMQ09kkYyvxjHMpfhSH4l9h4vI2OraIh2IF85hi4xC61Jgrm0AQu7wkSOYahuf4Ofa21q0sfiZruhu7YiNNdXTK28L1/ODQwnIsp4xgxhyFRx52+PoXv5crS0vQt+2YDx0024JNGN9vowCQPSRO4QZHsccsWksenoVdsv+645+hSkpR+AmtzUkOvLtsuRxpvdwUcvdWC9TioMJ7xSlpxZnfBBVoAxHGks2ZW4cvVF8pxJ2DeSaRTqXPzrHZfiUz9cGPv7cOXK669o2TwyptGct6HKZhDz86/gMdXGMXIM7FAAUwKeU2mFplpkLQiyRBKxGGErXoA9XkZds3zuAeaTZ6M4BmkqB6ZiEbsYNPAVEt8m6R4SzF4KmpaAZ6wYkxKhTVZ80aZQsfiYs+T9L0rZHYh0L0E+e5BEKNNDORr8PBxvjAbcqk7KcxXApAlA1xwVRzFsNuF48l3YmVyF3pSMZe110MTdaAmXEVZJG8VFNDaEcPRopvPAgaPv3r5Luq5oaotTqafbRXFb2Hb9wCTTV6ZnAMd/+EuIjl2OJ8QBI7z3UCSs7WqIRJ+K6emnutraM5l0A7751XuxZePlePMbNyC2fQAL3PWoD+sQ6DPFFGOgUXhmmSZpkZyAXBJ1i5Ohlu4XHVWF3LEiXtz5HyskY+nVSG65suykr1OSQ3UeaUc7Rh4r6Ubf05CI0zUZEv7qRxfgc79dTbecxME9j799zZINm0eGMjy84nnVFYzqctD+QyTYpCAG5tN9iYpCvOBzPeqTXg4ZxO9aCpYpobXVfzlMJKNpm1iMzRuiVBLRZasCP9Jh63Xhp+3YtU/QSx7QL/79Hcr4zpIWIROx/wkoYhGOybypKjPRTfieh5fnepmuKPKY1nDTR3FPj4mhvgTaYiZajFFEaFCTvotQKIS25jq8MNS35ic/2/3Hu/aW3zuUHZfJ/YSuJiCpErFzEZqskE6SgqCsTSArV1iIxRjr95e6TmqpJPq30Gv//Pk9xzKrlrbed+GqBf+5dGHdnRcsUUk72nh4j47Otj+BumcIV6YeR3uXfiJuxbw79q2VJ8k0Sj9XIEulrK81bzGWXLfFC3n/otQtTUiFQxvNgvx7bu89y8q2d2WDSDNFKOIj/34Vvv3QcjS1FtgpcOxY6s2yIX2iqb0Brjv/agvfJ8Yjk0xDxh1OPSoS4zsvA8DIFLoS8/qIucpZlCMtlrLq9z8pR5vuUQt7+rTEarj9e4hmGd0WSNCPcGr2XPdlXbsLIvB0nSKxo7gUyVwDhsfbkDfIWzP2o6nSA0WIwmVxJwJLZ0c9BkZG23915+a/eeaZQx8Zy+URjpGGitdzDST4Dtcighfl8SkeVuHrSiKxHsMxzXg10Css5EAOHH2ekDh69Mg7Htt87B0NdcZuORr6v8u6F35jzfIIbMfEgcMinn26DddeuxBvuMmBIY8TlkmMC9JkyIQvY7Gn7JbhFYfg02RW/VJGXn71/ZrUfH+hMIbo8hXd/sgzr33r3xv//otHO9DRbdIkIEcopOPA8aH23Hj+0nWXLNw2NlY863F9GTQYWwoWIbPU2lIOwvIbfhtdedM3vfwBOGN5+Ap5dDR4vm2dYTT6bI8gqGmYh0jAN5O03oChoWuRKSQgM61KIJDJ06vQQ3TowdXFI2hu0nHHrw5+7KHHD3yhf8QN1zVE0dLaxCJSPGblEgBdUQwWvVkQE0FANJgu1YVxX5goyeFBTo1+ViNkkqNhwoePZAGrf/KLvV9/+qneT7z17Zf/xU3XX/wbp6JhmBzj4yM67npAQ6t3OzZcWgekBwjI4aoH+dIgNZ+sxRR96yBMoBSaXttzyL7pO/tKz3xI1Tdt1BWSMC6xoiEgPWTiuS3HbmvrSGzrH8yc9dM49xqMVZ54KqtXopmsIhRd+3OQsPWsFtJjLtnvyiu8UleCKhUw2PQeZBrfTML9Ql6HpzNvTDoh8di/XZ2N2HvgaNM3v/PCD+66/8AtoVg92jrAPUy2ZMTugwV7eQDYP8lZEKYuZ3lTAFAFgVDN6vCZnyIgHqIRI0FzuN9e+c//fNevt2/d/Yu3v+2mP1q0oD4VM4rIZAgMoTeio5hAtPQsZFWGKhRg+jOsfLJsDhLjtuXiyadbIEcSuHmd9+v9Oyobbb8Bim/T5FBImsh48eDAG2+2X/M3qh4nDea9+gGm2iIqxA1+Q4unJRbch0IfeUQErK6r4JBoh9f/MudMCCR0M8QuaViOh4H0KgwsCLwk3eYe/PSYEaGrgby51Hju8q9+88Ffj6TUlpaOdgICixUJ056nMM9rmOvwWMhGtMir1GGX2/DrBw6+5fiAf9WNGxredttbrnlyZKBAXtwQ0skEBuSPIxErYlH+R9CQ4iF9f8pncMzJdK2kC+8evB378xaWduxHS2fs7qb65i/YJP4VYloSCeQFaujvK607uLe/PV6nDpZZ7OvVbSIFWIoLqVgCmtbf7yo0zYpHg9vWGwhgNFDEIsLLBC6RBHxISMFUO5Gu3IDho6tQKQsIaQgqiIWTxWvAXI898vQtP/nZwXuzloaOtiBaL3r0Bl+vZmD4My4lzxwbnM5iJ8fe4LFaVRPkGGLhwm4cPJZuO7T/+KauxZ1/sOaCBd/Llchtosng0t9zZhi7nbejJT6EDvtZ6O5QNetDoods8cl0PHcD0G3h8hA5AoqIhctb9951z95j217sW6Q1RTizGrqKodEkBgfHb162ZOV3h0ets3o25x5gPGWFZS+oCEdX/5KNhm9KwV/MHHQSznL7NXwZiLsf50TAC4EJ00r0KXkMhl6H1MKPwrQlEsBANHzSM59Qg/S2ri7g6c3913/z35+711fDaGqMkGYMAsSMvCAGSTqnCixLE00WBO+lD8kPxiAAp4uTU/NY7jvLyWIgYw9eciw0N/tI5xvwl39793ff+7Y10Y/84Vv/zTBAE4Tmqs9EOrGZkICZCZHDoaFFJKsh5yHUrcD+PXHsThWgi+QtFsBNaV1HHVavbPnN5ucP/QkQp2thzolGjsw4Dh/L3nzRJfp3s0XrTFeJXiYTSYOo2g55jzFU1PH71NRWEvTlaQ/CKpMboNmkIazACxJqyWcSgYqApeRQSEZwOF2PsXQnNI3p7wLKM3yUS0K7syOKTY/vXfwPn7/jUU9KoKlJgkf3MnF9wgxLMow1WOaDQKD2xSBDwfNPAEjggHP4wj3XRoJ/SuZn4ZKJv7gMiKSRGqICMn4Y3/jelq8Qq5Xf96Hf+Xaa5ZCwNVt6CXPYR/1uwks33d8OhK2t2PJCDI/vrENcPQhFFSdXwtKpEhL16m+iMeNPWAyLOSIsc0NVIjg20P87TZ222LEo4VUq1qsXYFzAltLQOq7YZ6z+3WHBTlXTTk5QHFtEFpU6iLFu+GN9NBUrtQEZ/5gClIiOne770b97PUxzDCHVRKk4c44pE+3xRAR9x0bwmc9855GRtI4F3SxfrMB4ac7s1GBZ0+XJhp7P1gsFburYCkMQsFQ4vASaUCITfL5cjb35c+o2Bvx4lFhNbMRn//7+b5mV5LG3vuPyh4/3JMn8C1PWGkXsEA2UM7dhLNuMlcvC9EnxadpMJTO5ceO6px569Fjq4PFUfV2CmeQyQuE4entTifRIesMVV654ZmSk9GoGmMcT8IyWhXcq2iIaJ+MUYycE5lGRIBlREq9KkLR3FjEtCeQVxVL0fQkvDN+A4+SRRZVxhMMyPWh1doCQF9fYEsc//uOPv7r/SHlh9/IWerB5soYyz3JlqxIzr7eCA8fzFBQLLgn0FBlABdE4eWiKx/s4FHJEM44JUWULzAokya5W0M9vUrEJEIsqMCse/u3r2++76NKFbesuXT7e1ztK5xKnOApAQ/NqNOZdpMcLPOVo+rD7aG5KeEsX1t/7wr7ed9fV1fP0bkUVMDZq4rlnem+6YNmiZ0YH7VcbwPzJ+BIfdi0BO1x3bznzDPxK5tTsxGc3DYoch9qxmMbfOrOmKiyeJFlQDBN7jq7HC4cWo1TIIhYax/g8lpUYyzQ11ZOoP3DBbx/Y//HmzmaIDOx+9X5EC6cuZZCqJk1GNssAU0BXR3N6YZf0VGtjZNuxPn9AlOXK+Oh46Ip1emvJdNYNDrgbBkeSbTnSgjqJqZDu0CmEKR2MvFM6Aey3ku2jtVEnrZSX/+UrT9z9/X+/eGM0vgTlUmnKFQlc4pdKKbqmLKJRnYA/fQxcOs+aVV2P/PqRbe/2yKTLLB1KNAmMGvYfGL6xf2D8b9OZwhmvyJ0TgLH1R9kR+Yy0fQdytL6kWZUnvf79NDrOHDkXPcRkIuQIPcS8y9e35r9cQQ9CITNGbHPX0Pux9VATdD1NJrGEgi/Oc2oQUCwHv/j1E18rWTbqGz2eSi1MxqpOTskOBDpLdynT+4q5HJYtqd97yZrwvyxfsfqXrV2Lc7p1EL/8zSAEvREjfcO4cGUC8dY1EKyKcuzg/pteOJB+37H+1FvGx4iZ4joMOWC6ILPVC0wor3hyqsrP5yzt0hh3ddfj8Yd2b/jOd+77xP/32Td99ejRGF+ymeoFL18eglWp4MjhfmLw6RbEskyEQtrDjXUNsOl+JUXgWcHRcAS9g8Mb+5N2LGQkcpWK9+oBmECeoiuXuf6QcklILWsf05e9iTz70Xms/gQvUJQQOQMJulV1ngvaZG4wCt+JYE9PB8y6i3HN1RnIZK7mbXroY1paDezYemTVzl2Hb6hvqAvmA0/BPlUMK/AmJVnAeDoLJ1/BG1635HPrr1j+V4rkwrJdFjtDwtAQrwujZ7APi5c0oFC0MXxoCKsW1dsdHS33JFrD91xVTKzb9Gzxc9sPDdzqyj7CRmTKgDqYXnspVCcysbygElgX4ae/2Pav115x4Q9isVguky1NGgl2TyGDHIO0g0IlxHPrpj6EfJmUWX1D/6KOhj079wxdqNUHADZ0chbGLWWgZ+Sq1asW3Fsyi68mEylW8+B9nnkpRNru9FjqcWnsNKL2XtD/QI/Bs7KTkfIZmQsZ5JovxwvHF6PiWehoPV6d66cXVEk0C9i8fe+fJjM+FjUodG5ndrUniuSNmawcBH/+6de9U9fx01TWQi5VxIVrWrBrz6O48aZ34ZY3LMKffvp/4p8+/xlctKQLv3qoHz19I5DIcbDo8hvj0Rfe+baVr7/8WMuHv/n957+VKRTR1RaG7ZzKUw0kCO9ASXKgrlnD4cPD0vd//Mjff/gjN35yKDk+TfAzI6AZCpYsoYnvuNMUClthaWsLYcmC+MNbnu+90CeNzHSmQCyaK3noPTZ87eolHfeaBfOM/K6aA8znhQM2mUiDZkseXigO1K9/xBPC4Infp6PjyOz4FQNqZDG9V6nWI04HBINQNEbgStq4b/87YRbyCKeyyJ/BaGhElsMHy8pTWw//XrwpTEzsBWGGGYDNTFHZ9IilxvDtr3zk3dfdcNFPf/azh2CEIti1/Tg2bOgmHKRRXx+DLtL5BJtH2Zct78SnFnZi6/Z9eODh/aSPUijIMhTdxQWrFn37bz/TuuP//ejxRw4cGY4u7uqE4zjVTNIpLCo4Qd0liyv6FpnyCJ7a3vPx95nq31y2bn0mm81PY2aJJgIbPte1JlNvJo72dgOXr1/1yB33vvBJh16kstgbXasg+egfzl5jYhyuUjzt6XpOABYUIviwCUy+6UCKd/SHVekoS1Nm+eunfbCc+JYLgbAGv1yZPplp0CJyCvsH2vHADh3p4efIu6IHfobLZ4mEhiMH01eODufj0UioWunNBL4yqRAnii18egiuUsboYA4ffM8NX7rtzZf8x8EDY3jz7Tdh64tHoGrb0d87tmJ8WL3qP3549yIFri8JzckDe0ePvtg6cp/nW3ZHSzPWrwM2bX0OpmnzZMv9BwbxhpvXb339zasuufa2L+0YGE6Hu5rjsPypa5hBzYIr+kHIh4AWi0bQP5AU77xz80dvvemif+zpS3J2PcFiDrFYBPF4E4FNCPLTqkexVKHf1z/a3tJoJgt5TdHCfPIYxHqDo6lLbTsUb6qLZk3r1WAi/aAQlUWiRboiIX7hvW6sHV5xmLmTZ3A+dkJiQa8LXnmQfmEGM5gtwuoj6FXfjJ/sFxFvdNC+uMwT5M7osulj6ts0PLOt//piwUYo6vOUYkxzDvzJFgCi5GBk2MLaC2O9n/pfl/3pSPIY6ZYOrFquYPPz+ea9B0a+/uxzpd9nHuFo5mHyzmTSYYvx/R9vQXKk1CZJ8jDTaHHy7KKRCEq5PJlDh1/HoSNDuPI16w9/6e/edf3bP/yVLemSipihwj3JWw7+cSedjXDIwHPbDv7Bxo2xf1QMMn5TQj0MYC5KyBXJsvBWqCfAms6LaKwPFZcsanq2/+nUtRGd5xiTV6tgeCSvJIexYc2a9geTycIrDzA2oGyWs6xVh7xBVY8/iXwOQql0FkkT9MbiYSilcQh1zXxQjQR5qKM+7jt4ERobCwgreRL4jWfcC4HNWK9kYHDAvYymOPN/6alodD8Kj7pPhAqCQKtL/5HAdiq4/Zab/2hoQIVtS7jsYgNPPNnf+PWv3b3zSK/dmqh3yeyK6Ag3cabJERkrmm7ForIrSDKZPlZ/wMrGVHImRDK3Fdz2xivR0d6EfpKrb3vTmq0Hjr3r03/zuTv+KdxVN0MfiAk17/IY39Hj5hJFb15/5fULt44Mm9PKknVdwMBgBqMjSWj6dLEfqfewoDO8yXOEayfOKUnkHGQqGBjpuerW2xY8yOKUwisNsCBXwQvy3vQ62E0LtwoGPSzpLD+KifxIC2xtAWicMIbl2LYzjAXGIYTiLryzzE1kUW0BaWRyqWUCa+nuKpNNT6Y/zGDtcXTUxIbXLDxwzdUX3jc25mFhRyuxkIPP/N2P7t/54lDr0uVLYPslDizR0QgbBa6/VDFmhZWQxwHGem35gazwfZa12kiTxcD4eArFokXzMoTfe8O6L/72zic/sPdo9oK2pug003YyzDRVwVAhi6ee7Ltt6eKurUMD5WmvUdSgkCo56lb7aEwJVxBrG1romVA4qEPgTgJ9lqyJOHA4f/mRg6TEUvarwEROMBnNSDlUPyBK2gGH2Mv3atHs3KRJZCN1qIiPf/EYhvqG0VovwqtBLgav/VaUWL4odYRDcrUu03tJaCKIh7HVLBM3Xr3qy0uWkUMTNlDXJODHP33qbVu3Hb+0a2kbHJ5pGix0e0KQUizS71hfFUmL+qJETGg7J8wzASscUbBj1wHSYx5/+MfI8V7YXYe3vOWyP/37Lzx6r+25kDiRyieJ/gnPnQCsSThwaOQq25UQJ03pONOWKBBi8QdzHJZZhiidyEsKhwq4aJX2bF1d1MsVPDFsuHytNBQx0Ns/eNlwcresh+Gcbjzs3ACMZQrYgxDrr3w61Liaps1wzbKfBdJG4ykf6y9ZgPBVEs202pyYVXX39o01bd71YIjtE+ALJ5azT2awErnvSxYm3EWdLT/btbsM1ShjJDWK+5949q8VJQyFL2671e7dDAwW7/kg85gsiX1N9SUGsAmTR8AolS3SPBEsW9aIcsmfNGuGIeD1N2687667dvfsODDa3VQXOqVXG2SMeIiSDhtO5tZv39YTot+U7CkAc8iJUBUBK1Z0kImUpoFPIfPXsrAj3dneu2vL9qMXR3WNaz6VvNt8LpeoFMMXNze0PA+r8soDTOSlakwIhx/PM8+vXKnZuQ2rAFtZgetvuBC6bNUMuA2NKna/2J/wv/dAUCUzYxjGQ7FQxvpVq59qamnKHO3pw+49z6FUqCwe6M+vqm+qI3DZmN6UpZq1ymEg+oosc4BNvfY42a/BgRT6jvdPuyUmNVpbE+hsj92xY8/op3xUQwinDOsIBByNdFMufPDAngWtrQ37iyXzhFVhDChLMOJRiCQJmNd6wslxSftF0d0V2fzMltLFLKzEzLtC15VNmThwYOiySBzPj48VTisedg40GBsUk/RXK6J1K55TzBH4vPC1NueXCVSF0WE8ewCoC1s1u+5YNITjPUOKyDr5zdhUrepZkrlftDT0WKzJxej2cezeNUhMEwpJvOo8KCD2hVN3CmStS2RF9WVJnL7CQF6xoEUhN3ZOuOInzFdTGCtXl5565PH9n/JYIbLMekhIVY041cOVeJV4pUxg6WxZctG6zv2pVHHaFYiih0wqhdxIkBI+9f1Jem7NifCz4ZD+MeJZAofD1zPTeZPFAy+95ZY16O83T2tOn5u1SNJKstDcZ4ot2yzHqHYwqQEzsnJ3L4reTBhZcuvh1q7qyCahlCtaMpues1ldjwY+HonAdfuf3b7zMWSyBYRCEdKGEjnQE14bG9aXpsfygILge5osVhnsxAcpBM4CadXD+3Zyj3bqeuJwv4jMWPpwLKLB5F4nA5aKU/WiYBpN0AxsemJP84sv7iU9N/1mMpk8rrn6Elx/3QoaQ3faKlwsxnLBup69494oChUXEY0Vq7gIRUXs25+65JknTLpGexrzvfyRfF76z5rQxI/Iw88Te+VqlkDI5LwiV5AZfx1KylKofr5m1y15Csq+KvnC7AtMLPmuJWE469dcsae9pRF7tz1FnudRAl1CnOj6cyILYnJBiXfFYdVVouD5hgJPlEWebzJVA1kmecN2CoxFp46ZWZQRNYRCJBxDPluiMag2wJtmugXex0NiLZ/IQ+3pHQ4NDlh8QkwDWKoAI6SioU1DLleaNvFlttDtiocjEaM/V8x3sn062CdFwiEMj2RW7dz9YERU3YJj+68kg3lwyzQIS9cc0y59J+mv4draX3KC1Cy51UMZePHaMRgrMvXmUWgqimyfHWv0eP9gf7qQQSqT5Rkftm0JrGfZXPuhEDORiVQ8lvM2VeqRLoOkKBB0tcpgUzJgWTdB1yOsuLzEjTkPnmhVe8i+dIwY05fLeanil3gPtalHOjdOoFqOlvqLoAq5k9osCGhsMLCwa2zXoaPDnZFwnEsCYmcUinmdbOralpaWpwv5yisJMOIw1kQNsQdMsv9+pXYCX1V8FMYl9I2SR0ZC16qdBCMGofnv2GIVBTPem6rq9Lqy+8s7fiOUyp7f0FCHOIlm27JEFsuaja2rD9NTVdWT2NrqFDDqqgqprJE3qfClHGGKDjTo+0yqFM+Tc8FENyY76JwCX6wOVSDzFgk5Kr3W9abrSeY5igTOxYvzJPtEum5n2v11dfp4+il9+z0P+rfyrG2WX0enYEW4LtrXXnbJa54eHE6/ggDzWNvJOlIIQ4Pi0J3wbbN251Zp1pZC5MVdQTNTJ9axa3ZqVlTruu6cCwGM5CRNReeCdjJ2ss+8tHw+z0qLBUavwiytk3y/ymDMiyTGmuqt2raH5uY43rRk4/SkQPq2szOGu36754LRsa1oaGbnl6pFI95LgOZxNvWwduOF+Y72GIql6bOQAdcmM/+D/7eZZ7/6J11gLGYgOWTuamwMgrpSdb65dG9Hjh9bc7THxvBoGfP12moPMJu8llBXRb3k3QdEJQZW2FrDAAh004Lz5DBKhQKb2rU7Mw28afEeibMMXVCdJIqur6iyz8xPgVilQsKXdJHg+9V2SS/xErzJ/mMMYKpGIl8Reb/XSQ1IrF8uF5E5nuTfTwVlGDb27D5wjU3Ak1gzPNYa9OQAsD/RUN2j63Gx8YoVvRuv6MbY6PQ8LomIs1L00bPX4lnq4klWlgWZw6Hkrke29qFCWkuRXb6oTsSNgePpVYNHl9M9q/PuYFT7tUj2AIzwdj9bHnWdPOv2UTshHhVw7BB5VSkPIdUl1qldMxTb4a0B5jEtiaFZj1xiIdbolzEWySMS197Jz/yUFMYgOslgk16wz9lEpN8Jaoz3ap34vWFoGEtZ2LFj8M0R1pcLs/XbF2ARezXUab5d1g/s3VlBqeScpDV9aJqAZatDqK4GTTvYemVHuflg/d2hkcO9qRYjqgfhDbqkctm6QCDLYYTpnh3nFQIYPXQp0XxIEIfgO+O13QSQdXSu6DRoCdIF/pQHVAPwkn9vkwbj1zvLJbNSegKAp+saDboCx02SiSyBZfcI8uzhGD+wkb6iKMRgKiaq8pmolwis/cM9yOZTpDW1yc/qiNTjuR1Hfu9o33hroiE+I7gmDLNp+VjcgcOyMjg8Mjr4kpACc0iKJYW84SbuSJycks5+l4iF/Ib68O4DR0dbeM6uJ5H2VMlBKLZkKqOLojHjmGO+IgALNiIQQxdu8bUraYQGatsfh25ytDKOstmPiK7MtoPJGTCYwDSdgDlpiC8E+6qqcAGtkR6rS4QJFLqfrkx0D5zTiyQWU05MECakNQmtTXWoixu81RPTYQl2XjLd991z/xcc8uRYU8GZFhkmygXypRKWda1++oJFSzE4nJ8WTwuu3YHjyciU5MmdS07WiTLdW3199IBjuzcGLd8VyPT5yXQeiXhkxeVXLDo2Oma/XAATePaEh6CdtsTaXQ7v3F9JjRAfl2oK33CshGPbV6BoL0O9U6ppdyeb9bayyMHnbZZmBpnH06Qlj7nuzAP7zKf/CBsvacRDj/dqH/+z70I1IlznnJyFwZIXg0wIz9d0wZNlKeiWzbxEYsPxVBKhWBOaI1GkUix4K2HBgjC+9E93/NnegwNLGrsSM2ZSTNQGMIbUdAsdbZ33lXItsMsNp1CxLEnahOVs4ewlCC8NdRQqMuKR8mFDDYF1+GJXKldXtvYeLK8MJXB/KmW+jAzG8/CEwMWSI5B1JwPpONuXubYEGcpB1xaQGSb32y7X9NQuMZjnMG6aPTGYeWnkibmawuJVChYtWkizXSQPsEl35xHhZiSkKkzky3wDCNZrTNMU7NpzAI1NTWhr6UBDUxz1dcAD9+278Bvf3fxPsfoIVF+cpYd0sCl7rmCjrbHV2nBNx72hhInG8Cnewcwi0WCd21kNi790IjU3xjDWLxyCf5Q+U2dODX9VseyikE8vXtTsQPPseYmfmjBYsF8PzVG3DFdNVJRLP35MDEcBq7YMRooX8qHjKIwfQ0U3auyc2KRfynPEwQIdJYrME9R41u7YWArd3Y3EOrmg6FWYLUzhM3CSBtN4eZjjsDaWIl7c04eRsTTSqTT6e0bxp5+4Dtt25CJ//hffeNhWNUQiEQisZagwq91GJp3Frdev/0VHVyI/MJA5dUsCnnQhkqdZH1zPKU6VFAwyzx2H6+tVFEwTshbARCGJkkmNdQ/0Hkc6a1aLbV4GBpuYB7x9o960rei3pwUW7XXDNQOATCJcJubae7hExFiGZda4H48rk8kzhbk6gFfL/32NBpsJA7YCwGLJDtnXudQbYzi2BtnZKUOlkbfoQbMl1Rf37uPZDIpqYPnybiRzvvQnf/7NzfRva1d3mCcPeMKpvMcTOWss6BwNybhoTcP/SY4No5DLnnKisGWmbNYlMPo8uHyqcINO+rZULB/VVSWTr1QSU+89n3cXLuxejlaTTK3jn3uABdoyKISw5RhRZ7Ff2v1/4dXYhCkyufKKi5H+blhaAmYNg6z84ZNXanqBIJkVupMMRiKdFIptO7y7DekxcS6PmWWcmqZZeW5LD2SFhUUsAphNAK0gZITQ0d7AWCzxjvfe98hTzx1cu3jJAog2a0HqBB16/JOya1najqfzxMHeoR684caLH95w2Zo9/YNFIrS6UwZ6ffIIm1tMRGO5GR0Slq+/ZEm91bmp6cjR5w5fGtLVaoyMpQJVFt75222G6/vl+Sx61wBg1WgvW6JwyVxGEnm1zmWpbrVlGHaluodkNofdhx0saHAmAc57MJBOYcI5yGE6/dtiQrbMclTmAAmvqRZ9TyEKYhPYsmywcgPLZgJOqG6H578kXsXGJ5GIIZlMWx/5H59FJmeRzoriwx+6nbzQOARi6Eq5tOof/vGeuwfSlUWLlnbypsesOivYu1I4hfBVOEnli3me+//B913+sbVrG1HfEH+J98jvkaaARBP1iU2HMTiYRzisn5KsWbp0PkWEYfk9sipdOvl7Gp1MrhRbdVlDe/fi+iO5bOXcA0ysmkieYlxOwW+5eASr3ku/HKgtwLiJsLDh6nEoTSU0JORJI0FMj4NHR4i+y/yhj45leX1EPBZi0mSeSpIMXjV4OHuslOkoydc0HS7b7s5zSbtZrKBVnA/dCyK9mxiHzf71l12AxYu6YDsu7r//+Xc++ETfD8ZNS+4iJmPF3J4wUwO7iZYFEu/gM9o3ho994tZvXH/rxQePHSsHyfenWg6j8+mk6Qw9gUhI5KZwJpZubEhgYXf/yDPbDgGxCeCxxigytmzZuWDHLv8Ia8f5Mmgwv7qHhMDjJ5YU3iPQjIJTOxPp8ybCKZT9RXj7+y7CB+Tq5vZiUMtL0gNf/NL9YP3oE/X1ZC4GMThUwMEjY8iXLBpMBZGw+pLGH9PHlK1F2nOChPfREpkGIxeeJVbaFsrlAplKUxDml5YkWKaNZcu6sHHjaqTS49FHHt3/L/fcf+TDvmawbjdkb4N8eMCdQZJUN+GTbAwMF3HB8o7eD73/lo+l0yzQbczoo+g6MNSfhWyMY/lqY9a+H+00ifVQuXeqElFkka43D7PY2bpqWSfSGefcA2xiazmWnyRJGks57YXLtqrL1Yq6+Ba/zMtLek08G6A8ETAXgkhISQjSbQxilSYylQu6F6OQqqAp4SMUieLZbUMYGi3xVukhQ54hQs9EK+Zc7mHpK2x/Ao3MtR28h3QVC9TOVgM+1UEQeEUHM5eKYmDP3qPr737wyIfVaAIxgyaryYpK5FN3ReRaVww2v5I8MlcSJNfEx//nDa9XZB17d47wlkyn/myBTHEEh4/swJbtmxCNJmYd9UiYTLYljLJsEY+HU4JGeaZto6tjcfu6C9dhaCQ3Z6hCrsXjd4Rgc0+ojQgPbRmXxveQfrBrBjDB7kem449QaSInotp3d1Ln8n0SAx3GTA0rnig5FZRzJupiEm68bhniERlPPXcco0kBx/vyxGgyYhG9ms1Q3QpPZEtFrJ2NMGuzFSaSRdFzI9EC347FsiUU8jppMUWEOHU/R/+UMTTOfkz70AOvFFkYM+om6qMEVjK3LB1bnBAdUzMlfN7TTBQqrKcOcxdA3h1K+Sw+/5dvfed73n7t7t5ej28KMROLSmIwOcKGgWsuv5G8cmXWUW9sDGOL1NNjWr1kmbTJkLph6GQi97SVswUUyuVzz2CT/YzZnoaG7ovta3JskISaeHnszExILkIytAGSjdPK7Wd9I0bGSzx2fcFiGRsuasfguIOnt/VhYCSPurgKnhvPPUOPLeAK89Fg3ItUVSjk4bEe9GQeJxfK5/JAg3QdhYcrBJYDy/YbndYQ+FQ79zL9YxG4Q9yjLDl5OEUJv3NV26evf+26n7L4tkoiXxfUGT39pgZgy7Yx/OCHL/DlLUWefUtkVhxiWdZQfcJAxT7ReCZJ49nRbbR88tOXYZAYbK7VlJqEKViQlXXscyVlRFhyS4qnnaIWGozN5gxSxUUoF8LQXZx28Qib0Cxek8k7iIZ93Hr9Uixf3ICf/WorjvQyT0ohs6nyBiOeN5GdJ8wVB/NY4qFqsdwqFmYoMy0mzpUazt5LwPJ03aAHrMxjqWsK4MjBFdUSmUVyRsoONlwc/6uFC+u+OEwTpbkuwTXpTIqKkWIm52NoeAzXXLWKnJ/InH3XmBNTqZRyh44N+NlCRZBDAYuxRnmkwxqf2bqNPGLz3DMYhCqDsU44kng8eXCrybYNDtotneWpXbb9cSfGE2uhnmVclZkOlsoyMFogT0rAzVc0YmBVM37zwGFuPkSJb9k3Dw0W6CiVsYDlk5nzeKjCmUeyoh94YiybgjPYbL1egw2onCAtmqVJk+YaGzcRIkv8xjes+ITnmV/L5q1qhsaspMm/WFvM665fRbpvfu3WolEglUT6Oz9+KGdZTjxcBVisLoKjx4cavvbV58lCzDmnauRFsjItn/Vej5fKQhdRRhpnvRJNckgmbyuvLueaS0Vt1rZZjCdbcsC2SfnQh28mL1PAr367BUsWkQPhz10jztbxZGKhEOkomy5sdCTYraRk0/QSxOqWx1JVQ03hQ+aIMPMqCZ5BjMlidbM9aKZ3RN6khLQhnWp4NIXGiFH4wt++9+1q2Lrn+9+9Hw0tc6+UMPaKxoC7fvs09u07QM5FfJ6BbY9Y2Su6tplSdX3yTXa5CLEhVvfWt97GU3vsOQpAapauwwZPl5RkQ30DPNYH3z+bZEACl5uBWXcJ0voKtt1PTdN+2KwrVSye3/6h912D//zFUxgdy/CyepaL5c3a6MIP0nXYHt6KyzvYMIfGdjxxngDnqT5SoLpnfjBsH3J6TapUhlkq4PK1y556x1sve9elr1nau2nT9iAvbR6fF4kAgwM5PP7QY0ins3yHuHnRBl0ac4ZCupabKneY3jSMcPSqjZerpEUtc468sNosFZGZlPVm2NnjWe/p/3XW2+6x/vKePYLkuu/BJaqWHdT04D0cSKSPEKhufe2leNfbr8D9D79ID0P3yiUXs8WzvKqJZBqF7cDh2AVYbplVFYlzmQufJyvKPltxkCb6QvinYh0BRaKt0dEkS9+x3/nmKz/7hte/5ovJdBEDQ+kgo2MeMbcJ/OaSQ7j1pouRqKuf995D7BrqYjq+8K1n8jsPpRDWA7ZkXXmKpUrknns2RekaksxzP8cMVi2Lp1mvhAxXY43iHAdnXsotQDL7UGq5GYX6NVBqV5TEr5E1wdUNDS+6pUR/X6Yrk8eL//DX78C//t3v44e/2qb8xV/9Eu1t9bMVFlUzIhTIMi8UYRVFU9Kthbk0mMcEvlhNi566BMQ+k+nEIs/xB26/YfVPr3nNkr+MJCJHcwWLxHUBbe2t82YgltrvkBxuazHQ3bXutJ4JA1hzY5TM666kyTdiCPP3szXUiumEdu3cH6GzJV3vHJtIYSIr0i5B1TvyStMKwCycDb2Qve1Eof2jPL4FG2fddoAxlq7LaG2NIZ0cXbxt58D77r7/2Mdko/v5N7wRN7PMVLZFTDxm6LNnCPhBuyWSnJohQatIYBtJlQgQlm1LPHlvoujDP0X8nb9X9Nm1yKoEtjzuyEHHCqtikjkUUUdqZ3m3du/qFQv/6fbb1z9RzJVx6Mg4FhvhoCbzNIaxuxP46re24JvfvZcA1nJ6W00T2lnkfmAwXWlrjk7eh0YTy3Yc4bFNB8OVkgVWQPyyaLBga5SwBYFmmJA5czZ0xmFGXkvaqx3q2YDLDxgrGjXQ0hxBX8/ABY89tv+Tu/cOfmgg6UiltAFB15ISTcw8Cxp6EeTypROma5YHRw/aYyDRtGAPyUrFrTLYXGEKj0S+6Gu6CpGYgMlUyzZjuVQJsYiBq67r+OmShc1fd8zMZkWNY2S8CKdUmba5wnxlC9PyvX0ufvTzzRgYKaNsJc/oeZCz7GuqPDlf2AT0HAsf/PDvSN0LGpEvVF6OtUg/2Gic8TpfipHOHBUkvMdj64M57585Y7FAIQNWejzT+vD9R/9q8/bRj2YLZURDChrJZPSV85A92ROZA+GKsMwKC5rOKW14oJXMnMbiYJrPTSTrNe86jjif6yIG8zQ9HIQgnEGEpOzYbTcv/7vW9sXfX7FcO8Y2cXjhhTES4+ZEYPaMjEBDHfDTX+1GJm/hyo2rzmjfR6ZTx8bGrKGhPC845j2pXZfXEtx+21pt/Zp2JOfImqmBiZwQvywORm4V22XK1c7sTF4apnYRsmoz1DMU9iypr76RHmDIwk/+s+dT33pxx9/1j1bC8QYZjY0JSAQmn3Va5vEjh1X787U2snQsM0Kci4UYY7EU59Z4I4xwhTs4FTJvziQ45yoYkXyWg18sC/S+Ipoa/C1tXSu35AoKhkfTXDOx85xNOw+2e9zRXhdPbzuIZUtbEYuFcCZbdRghA/li2nb5toVs/rClLp/n8e/adZTkRJE809LLEckX+Ha9vqo5MOJnVgvpB2Wj49IlmCN2OFuEHYy29x3Zv+K3v9z+7We2D1+tkelpajcIWMF+SAFlBUWvrsA7LfEtjM0yzUzHF0RxrlktIV+qVPb1DvHBZYW3DqHCtmwhKKz1Z9z4ITCR8HQyraWKikKZHCMpg0KGPFEnTKwlnHW0j2nuOEmmRzf3wrRdLFvSPkfYZbZgaxjJsRGLbTfja0G0gK09sxhlsViSc9kM8nnzXAOsuuECW4tUiXcixM2+dfrsJeRgehci69TzPRxPF5uyLKO9PY7tWw+966vffvj7Y2lT7uisD3xct9qLRnB5NoIXpCmyTAxfZV3KbYH31KJbEPnylDBTXoSA9tY4du0dsG+5/cv854tXLERzfRypjCvxwT9FOf/EkjoLU0g8xMGqpz1iTJ08MhmiWrt9MtlOMSPjwO59A+hqa0TE0OfcHW6mIx6NwFA01/eE6v4HE8lCLB5mi6Zpsgzdl0fkBw0MuJhh+cNncAILSX/xaW8Lzzp1R+vZrrRN+MUdD39h87OpT3tysIePZ8t8k80Ta3rCS8/OLptMgMl0lOfOS/JwR9cNHhtbw7SJwVzXmVeYgrW+YYvdPMThSbDcEIxq+ZrvnyV7eYG4v/uhHhzpGUJ7Sx1K5TNfE5ZJU5N3zON7J98V06uBHnNfJoAx2+J6bOsLEDefHnv5WZhiF7JKHU5HvbGU8I5m3tQPd9713Pfuuv/4+5u7Ejwo6Doe31bvpXsLYQrgfJ4oy3LJ2C5lBBZRmMeCtUyvUlSFA42ZR9ZTghV9zMtBECWfrRawzgMyB0Ud39lMousVWR7YWbRaiJD2Ghv38diTL9CJLTJf2bMM77AORhWJNyyeHMnqXlKqRqbeQEV7WcIU1QfHWkvTjZ3ejh4snlBBUl7J4148tWyeZrGlCRgfL+Bjf/jtH9//5NF3dSzugCravLmgxLs7T+VDn98uhxXb0oWZM18OjBoB1CIwBt11hHmQteBPbM3C3Ha2Hmc781sop/d5Cj0UxZxoACzR55ahsb0jQzoPeVQqDv3snZYHyYikmcbjJ3ccxov7+tBNjF4qnW1/KzJIFpl+YWKPgIlHzQLWmhOLh1/SHqrmAGOpOjzhT5IhVVIGSseAcnb+7OVmSAgtQD7SDMUH5lFqF5gCJvUqwP/85He+ee+9e9/VvaqNQOXwbfAgWjzNOgiXTGEtlujOCyg0/q8I25e5ibRIS1iwyYtkm5EKs9hpP1iL9FhJPzMOZkVGwWfVQpbkS4EIPtnSCZNlfQE4Vd2BaronOSgOCX0b0biMjs44MaqECeszH9PZSDLhhReL+Jsv3IF0hi0pFYGzNLmsCYumuKFQSA10nF+VGGxFJAanrlGsltOdcwZjzWXpVJWMjmQvkdj8C25FdwhDdVciV7FhOOa8GI/vo6MY+NcvP/LHd/36wB+2rWwNoOSfmHnTTWL1KtnmUYww2Vq86SFXLLZ4CvNdfR6R53Gw+TgUkuQzxmHLJCy+xNJ1yCTPi25EiRiMtI18igXWicTHJcsayUtzwHq+Bmufwdais3UOYHXOhw4PoKNJxMZ1i3nWx9lqalWRsPfgkDw04sCoFogwj9Qj/dm9sNlctXARhhtz59iLrHbBU0QddmlcdoZz8J35NsYowZXq8EK+BQV3DJqQm4cp8LGgqxE/euSZdf/wz3f+a2N3nGYZeTY2uU9iZZYpwDxJDZ5sI5tP8t3bli/rflgRg44yTIMxEykIswfkuScoyR6LEdm2C6dMwLScgP2EubvrsKUipsFU1TtlwolfBXEkopIDUGI5dqhvpusmz5yVnamyBubVsTaWkTjLTFURiwGDQ8BFy0X8/FvvrnbNObvnyroNNTdG8IE//kV4x+4BLOwK6ix5Jixh7etf32z+NLGDrUu+HJF8MgHlDNyWFWF51TvIbObmla6jkClL5mJI79ahybkgt38O9mC7oI0MZfDVbzzxW1mnwY0G+/x4Uqnas3SmkSXGEQq83q8pFs6++39c8IHX3XTZr9MZpuOGeF/TIFgqAHOYSJaVysromck1CyXe7Zr78vOK1dFVMjkhybPLASFoVMIoV5DYZqJJvrzUN3iU9YjFNddfyPeAHBzuwxPPplFMp+EUR8lhMFCL5CY2DomYRuY2G+e7g0wZAYO04t7dWbNSGZ9zffSsAeaJNOAuCzHRQGvxRr/5JvhWel4Ac0QHsh7H6lU+zcy586HZA1qyJILP/uV/fm7//pHOhSvbCVwS9wwE+C8Z2GoJBo99OXSRo4MmVi/Wt77lbRe9yTA6BjwS+X39WfQcG8GihS1w7aTIq3Jm6w/G+rQKcKMkCSrEfgXWstJxWWK9MKsjw7cAVMhEWp4RqaBkmafFMkHmqo9sKQODJtUlG1pYQiAy2QGYSQXbntqHXVt6EUvUpmcHM7Gs2+FIyohHYyfOadJkitNwXn15S4llMbO60JfHi9RC8AtJ1Tn0GOmbPABvDtXGZmYFfdmrkPS6oIvWnOzV2Khi02PJ1jt+8/xn69qbqzHNamrQxL7W0zRXUNdmkogfOZ7Be99+5S+uvLL5rf3D/TCzJjeLwyM9PHzHQneu64tzOZEBg4meRjqK6RH2IBzSb74sCcKcE4RXVnuqzvqBna4GDwQ2y0NjB6sD4IHVMJlbOt9rNr4GS7rXgoVPanGomgCzbOHgT56OBd23A6hUTBshI5a77rp1GQgK167nFGBBS20hqNiyKotjXU2yKDU7mEuwi8HWJ3qvDqNYIBPpzEHZPhraVHzpy/d/rqc/j4UXtLCmXqeIcU01igQc0kyp0Qo6m6XvffADG/9gdLyIHXv2s63r0HO8H6PjvWDdbkyzzIOlwhxeUZAyLfuhcBiOX0ZfX5oXoza1JfxIYxie6c7i/Xo8DqarBk9W9GuQpstbqNNDX7VyLVquSqBSo87bLBM2m3YTP/j5800226mlWk/q2A7b7yi9+sKlJZHMfMV0zzXAgj0i2SKb7zjdqORjgqqlYM+RKSh58GwS13aRHlhpxoLRyWWLhIwDe0fqn3hmzwfr2uogWH61ia4/bY5PXahxyez2Hh7H295w6d1f+vKb/gBSHI9vuou/QiZmSyZHeUDWJ43DGpF4njdnx0+P59XTxbNN6EmbvPe9V8JQRew8MIinnz+OeESfwwMWWYdD8iLtmgCMaaBwxMDPf/EA+nsKCEVqY5RkkfWQNZtLFSvENNfEwTZPLRTyhX/4P18DS2adq4VTTRiM/ecQ58teSRZ3fZ/cDTs15+ipWfRn1uDxvjfCkIqz7prG9EdbawIPPbjnfYNjObS2NVe3kXGnxZeZzJargVqRLEXfEDFdh3LoU5+66Y3tjXUYGOdb9kGhmZcrJFn7XnK5Fb5WWbZZvy5fkjBTW7YTtlqWJc+2PLR1xvC5f7wZKjHlV7+zKXT33TsRX6rP6G3zZr8iK3nT6DqcmgBsglVvev0K3ufV92vTGLm5IYrNTx9p+s0D+xCKntBg5XKFxr8ruWYtax1QnjMuXZOUaZGbSXqiTp60fjbky0bQ7XA2DxIW8kUPxbLIS6lmn6Ui0uMl7Nk38h7W+I09mRNbCU9/iiyf3yc2TedIK5CL/+V/+cNbO7s78fyeEtd9t912I/Yf6MFDjz1LszE2mRbDTAuxmSjO4YExsCukwYICEfLq+kexqLMB6XRBxiz6h++hxduQiz7zQBXFqgnABL55F9uG+Tiy2SJUpTYMFk/o6B8sdqpqqLr9cjBQhWIRzY2Jgd9949WkXwtz3kNN4mDsYTOj4VoFWJ23tIltl78Ia3x2C6l4UEfDqDdFRLTYrDMhHA4hOTrcPTSWXhfSYxxEOKlFUnUnMwI6q8ZRkBrO4U8+fsXf3nDjisOHj2SDgCW9VictwciP9Ve17crkcoxtCcGC9RxuN4+DEYOx6hxJFvgKQIUVHbPeVbO99URHaY9lfrCv2jCYz/PTdLEFeTtLDohaE4DpNC79vaPtpUoedaHohIHnLQUG+pKjX/riYyixznvnHmCBqRKIk1yzAEEsXKY1tz8ozNH9zpdVOMkxiIVxyIIwa7vz+ngUO48P3DCU9dFUJ5FjaMNh7Qn8KflTgluNg6lIJXNYe0FT+kMfvPF/jwwX4NolvgsZY8JyUcS+ffs4MHTjhNKumEIQaMV8qrNlj1U4s00KbHI/bctkSYvCXG2vJxa7NWJhRa0NgzH2L+RZwLcJjfG2Gu075qMxGoWmpBdbNttBLjopD4r5Iq7YuG7wdTe+hjc/mTuYXoMIBSYAwjtMb10seBl6YrPvhCZoBRT7L0OkbhFi6qwVqIgaPoaHM5ewtTpBUIP1xpf0ugx24WBNQvKZPN76sRu+snxxMw4cTvFGa3xW6gpRvEniPs+ruR3rhIvtcAZjLCTMAyRBXSTL7mReVKnCUnbmiDkKVfYTBY81EFZrxGAssq5rNunPIb6FjCTVYHtptjdSjrzsvsFuWdOnPWpDD6N/6Ejflh05Msk49wDjwOLho2D13y4nG5BfSB7i7AHLkO9gIGlga089mkPWrPGv+hTpgXF5bYjtcAuDe4+Cf1Jowpd5txu2D09rax1aO5u+t3nLIMYJTBPXYegGRsdGkUtneS96d0oMxzVZfr03Z48vFmgl00gmkrWqYlshA8USy6YQ+QYwk1nT/slRv+DdMks4JNrRagQwVv7Gkgw7uny+84konf3mASxXzVBKzPQvc1nbgurtWDSLWBLi6otaeuKNxMLRl6M3xeTAC5CcMmwxvFy4+P10o0FDlBmPqAI1P45ozyjCujCLCZCIXfIYHx9vVzV9lki5xBmsWCngwhWduytmpXfzs/unZXOyIGWKzDLLwtR0nQB2IoZj2T5f7J7dLRKqKTeBmSM4E7DMIFnRdebV/CSoqSQNpig1AZimicTIHsaGo7y/hlADG2kYIkbzpbrx0cziiH6ioohXVAmWp0nh4xG1HoJVebkA5getzOUw3Mr4qsjYQ93Q5R7MFuUlM3bxsqvQtvwqGEJ2FoGvIpurhH7882cbbNudmUdZjhddhEtfDTHjeZgSvErxpECnTAxbgu2SqbWmZ7dalgfHDRIO52rfJEmKq+sRmA7pL7MCy1S4Bps7SOvxdlFhI0QP0TrrDNZgfBSafCZB3YHBvdizD1MYpL/6BlPLMzlHVWVxcmnWIseooaOu18q7owdHh+Z1/XKt+Iu1AhYlDZJbRG7f0x2OrPdglh5hMTmPwyUNz2RdxKTsLDNUQrniRm3XM2Z2wYOOy75PGivnYu3q1p7fu/0S0hCZaeU5DfVh/PJXWezYlUMTS6Cacticwbw5CCAoqGUJnhqxrlnykEyXeDk9kZ8ribPu08bzqBRVtjT6KR4P1QRgOrFyY1MZbZ0lqJpRE5Hf3lrA9h3jF2YyNppaQpO+ukdSyNDFg6KY45szzKeYpCbZFEDQTYYFOv38COyV712prnrv00Klf5ZpoqLxaArC40PwQtKM1B7kUfLkwVkXkxm4eCtPq4BYLF5sbdYh69PL7BtjBOx4Aqw7cjw6faZLQR+xOdOePVeCrFpeOJFE2a8QY8ZRJsikklaDwAadB589TE12nCj0bu1I4Jkthyvv/MN/h2nWpuFGNlfCNVeswcWr2zAycvZN//iaelnAsYOFdR7b4J4Rh8e29BN4hmx3R+LwuoviGGQJjfMAc403w2L73JH7nn7hxtBx4bteJYWZ816yqHdX4rrrfx8xgyf7ndoEkJjOF8zcd767q2hZtsZM5qzxNQLryEihYc9+F339mWkfz9qG9/WlSMSC97ef9j4x8CLno2FI65Ar6fFrW7yoEyFis3Qms8abHFIHLwkQCeDe7NBwRtyzv59F9GsytfM0WepiLLWmgmSqUJNnmEqF0TcwtkYPTTTNEng5XEhzEI41HRzOL0KqMr+s5Zpv5yerOrzkoWWFaHew0ZJ36plqMHPnFfHj79+L4eEsIuFTDzjb5ctxnHKxkC+Ew0b9zMPicW82Fgtj976e9h/9+AmksxlMpSRFCWEsNcSzM1k19skmjGVTzOlF+jzh0I+G4zSjM+jv72M1lUb/cOqiUDiE2SKPzMvTNEVob4vXpB0VayNelwjh9a/fgFUXNCGVPvuV7hAJ/ELe1L7/kxfWMY+UtYTwoPLKq3iYWYX8rmMDB1Asll8ZgLFeWb5vXBTpurxNVqUh3zn1TbONzputLDqbQqh43UiE/ZmMHw2igWP9zuD2HQcWqGpsxvnMIMq2qssXC5dddWUCph3nZWWTDFYfw7ZtJdxx5wEk4vJLTCTPmH6JUJ9SgUQTxrF56byWqItjaJBtCm8TyAYvGR8vhnUjVGUvnJK5WTaFFtJt3VAwn42z5gSY7fLgWz6rY7Cf7rtw9rBlY33wYHrt6HglxhrlscosZihZWnhTJOIt7m5/0Yiy0Ij4ygCM7baG0pjqHn9sndiyZsgzT90IhekUKarg0gubkCwm0RyfeR0vES9DF/MHPF/YyMIRjK3YBgQizwHzTsCLninb9uR4b/4C+uuy1Wu6Do2OFif1XV1dGOPJIn/05bLFdwaZ6qi4rsz2wjiJhbyg/JusIsvBlxUfnR3NO3wCW6yxBRdcVI8DPzx+Sy5ZRnNnrKq/WJb/1Pw0phFlAn8JTdHmSktjO0zr7PtSsWLhukYNopbH0HiBvOCzBa0PNRzFvoNHNrCIfUOTyvv1CwILJtto7G46tKBxybhJnOHMs1i49gAjBvDMJBxJf63WvuFesdSHGTfpDImo04cR8m0C0MzpznHdwKIF9XueeD7F1z1Z97+XpokEFeYhVSNGGcb99+/4SHt7258NDOYwIXcYuGTFIDMaIZ2RQShkTKVeBGn10zs9865BvLu5ikxhDB1NjcUlrcaP+g4fQoVe1j84jhf29r5TZSktgsnB6J9i22P2UzadxzVvWzN6+xuuxeDw2e8jwILFplNCsjDAMyo0+ex0HS+mIQ2dHC9fwz02eFUni7VWcNC1ILqltUvAyGj5lduzO8hupQc3tP0K1C9AkBc2w8wid3dF+wUYuOG1EJ3ijGstTTSTLigeekL7zQFiARsyj+RLfLOC6cbU53mMcdIlDz22/2M337z+r1pbYhUS/XyYWLHFggX1fDeNPXsOoaurdXKgHGJE1idfEIxp7AVf5ynZNgviJl3c8rurPmNEQ1axVMDVl3fgkUd3b3hh1+CiBGtn45sTXfdfuoxFE0OTdYyOH+rffVDAeKpSAxNpo7W1EfFQGJWKVc16OPODtUKvFMo0aVJXK3qEr/WytWa2NBfWWe+y8PMHDw9jbHz+k6PmAGMXxbbeq1Qyq0PR5U1CLDYGqzgDwHwYJFliuSxsT4MinnpWOOQmX3rpgueXdTem9x0bqZPr40Eevj+9OiPIv2c7iUVw5PiA8Yufb/ra/8/el8fJVZbpPqe2U/te1V29dye9JN2dhYSkQ0IgG4uigIB4AUdFEEdHlOvV651RGZyZq6NX7zjjiOaCV1FBEZAAwRAhwexbZ+l0ujvpfe+u7tr37Zx5v68qTQgdSEgA/8j5/bJ1VarO+b73e9/n3Z5346N/e583kOVt8FMTcYwND2JeYxV27z2KSDgCUSsWovOs9UxU5DFY9sxEGGmJLKfbvG5Vzauf+czqnwgkKKymrLzGiB3f2//PCXLfi1ykASUd+RlJ4CwzK/MQSBpmkw3FFareaK6fF0NenK/HviaB0REy/XojS+5e9N6ZTCrClf7mCW+gmA2LYFCE5XZzWVpTo4iy8rJWpcYIvUnzwQkYwyoKJXlJqZAhfnLLMrWlarOcDp/b5quSMKXX4GS0HCZldFZwHAkJKC2xSrUNrmcOnei/32W3E8rJze5LKmQeMfeUFOHpF9o+e+36vc998u4VLw9PRNB6tANjA0OoX1CLlpYWbHvtNZInsYDFMqxbyJOU9UikUiRAaj7AgaMpMh31Fcbnvvjl9bctaCxG32ACtZU6/OH5/Vc+vWnvek+pI4/V2GlnfoL81rmOScJcZrOYWL385vaiEhMikYvTYKz52EQbzZtWBgPQ6VQXbXjsRRbsa21bF/DHYSs20RMl6BzT76kMqjyOiEFvOujzp3HujMr74UXyE0tAPOUnyfev1bmv2ixHhXPGwwQxBad3BK1BAxS6zDnTM2yQwPKWil9sfuXo/ayLR6mSZvHWCIhDxdGYntS9wW7F1//n7180ioYmgvCdxw53YEFzDULhBEo8bly/4SrotErOD6ZUs2mukeeHJ7Jmva68iLwmnYx0yGAQjl3VsvAPk5MjLzCap0giP4xgeCKBH/zfbb+TFRLPB7JmVD6/8Rytc3Fag+om48FYJBA9sHv0nBRPF4aZNLB6jPBUipz+4GI/0uLKYSLgvYFx6fEdk/NcDqmUgJIi3R6LOZ4OBNNQXUCQ5T3AYELexKgMUAWGPy5ohK8q7KWcjGP2t2dQWmlAo+DmVEYa9eynQ6USsPZq974Xm4517Dg4OL+41M5P1yyhXv4n8/jsFj0mEznFd3+0ad/dty9eOaempJ29gwVZ44kUFi5qRO1cBy2kGmajCnv2HXp8bq3q8Q/deAt6+wYUWq1CGuw5gjoSyl27Q9i58xSZVQ3Wr5uHv3vwyY0Hjw/UVNeU5jcXWeBc43IZwUoqi7qaulfdHhEpRoB3EQeYQdWiYjN27DyOvoEkGufPgdcbvKhSHa0oYrw3qWtv911rspvpluN8XSQ+FD4Bp0O7KyNN88T+BQUVLr2ASfxj1SRg6WBfmZDJXqFyNR9GzneOU6iAinCLenAMrcdF2M3pWU83y3uVl7mxfEntt7bv63r2dCPi21L25rIo8ujRNxIx/+TnOw5+9Kb6Ozdcu+CFcErg3dGRiB+9gyrodR4S7mmEwzHCUBYymxrSSjopRwIcT8sIBIJwGO0YmgiSVk5i48+3fvPFLQfv95STkDOe/Flooc5Eh6mUBKddgSuWVPxekjRkzszvMsYITmbMusKPH+vCcF8CwXg/li5vxMKyWvgDcbybah12ryUeE7Zv67hhZNQv2lwmvoeMdyJD+NOkB8rKPNshldC+xj9oActrMBZ1SEsRKHr2Xp+R3YfBwhWzVRvI7PSQIJCHp9bVE/jV8WaM2T51wp/CVde2PNeyv7+v9VhvTXExaZ+CbXjDozxjoxm6zshwOU0IxZLaJ353fFMimvnxkhX1D3uKLSG1Ok4aUw02eKxnYBL9A2YsW9GAUz3DOHWK7lcaJk3IecOg1+rI61Tgjy/t+/H27ScftDvt3KVnQgzeH6B4s5YpzBtkZCo+8rpWLis9VFIunhqZGHtHTq3Zc63kDJnMGPWmEI6MIhToh1pTgbgvhv1k+j920wYY9RrE4oXRexf4+S6nFl3dY7fESLO7FEYet2MHJ56Ko9JtDs2pc+5TaTIwX6CWfA8ErBA9Ys0ISg1U3p4P62qF7wpa5znnFzHkVF6iwnKYMDCugFGbOQewlVFZocftN82/Z8+B9j2JrAQ9GwMiqfODnc9y0+XTdJZyBhaDGhnRjKde7vry7iNTdy+aZ/9BU6PpV3arOGm1O+CfZlyrOjLFFgyPBdDRNQGPawTFHhesZGpPtHZdv6e1/393DPivMFkNhN00HLvl5Vlxlg5XQs3pOiVkWVd5OoSbbrztkcqKKkgD0QuiI2coQK1RwmYxwucfIW82goH+CObVWjA9wVgIDXxA1tYtu9Bc70E4Ks70Gpzvt7Cau9FeGUeO9d9osTPhUvKn4KOVgynUX+PZvnBBdW7Se+ElRu9JHEySNdwr06jUSMUnV6qkKY/G4ByXzzmklI2uTaJc04buZDlS/OFmf5D+vhDWrm3ae/v+vqeffvHwx6vmlHC+L0FSnQMDneaol0m9CygizTMVTDi37uj91xNd5keqq+KbG5umX82mkgdEtW5EISRDZqOalaXYcjlTTUd7cOWBQztuPdDWv0LKauAk4RKU8tuwNgtQ8i6rHO87GBrwYc2Kmo677ljxUoSAfmmR9rxXkgXmzab8wNPB4XEcPfFnWttGOJ1m+v7pQm5U5iU70ZgXwYgWWn05dEbFebNKM3lxu41oPdC/YnBw2mWy6d6Ud1ULKixoqHpJJwoEZS68AkT1XmivvLlitOY6SJFeZPsPf0TT9ImNAlLnBk1JBRxFGqw01SAYU0NUnivZnCda+/Y/3H3P4aPda8dGI053KUvRpJAf7X5unCGwtjHSLFa9nu6RHIBQQtu7r+e2HQc6b7MaTDAZdPGhqeEwu/VgOGZPpgQxGWEc81kYXDaILARDu/5OZVCMdokFPaP0HBo5jU/ctu4zqUQCE2PR8zJfBS5+GEk7BfwJHD0YQGvbYdQukNng01m0CJsHYEQiLiOWDqCm1o1IKMtLgt5JW3JzTgJ6omfsE5FEFmaHcmaPEkmyLOV6FLsNm9uP+xCPxz94AePpBTINipwKGWYm2UztZMddMJg3gjdfJN8Gu6VQYhlBcrAa0YTE8c1sxQ0DQxKZSkPmkW/eef29n/9payCghdNGmCGb7wOQZ9FkPJEkMBIU9vc8tSZL2Jp0bPKtAVmSGl88ph/3R1glIER6TSGQJjNroIfIa6JY4iR31iS1M7bpjFCgkpts7/AQvvSFlY/edc/yA909CRgsuvMSLlEkD5hM1ejoOB7f+DQ0wgKY7VYyZTESsHNLN+Noy0oxTExMIUYCpjWQ2SehERRvV5KuwEBPEIePd9+pt6i5JeAWAYybIgVnVdH+QDwzMTAx9O5S05feQAq8R5JFgAU6vbY5enR3D1zTOXq8wu30DGWSsxeq5ZmiCbMJPvgQQsW8RdCJGgQDiYJWeLOfOjYlY/WapYe/8pUb7/rhv+16UiGYYbcI+fIg+m6GgwQhd5YAn705Sp7TZOuvVrHXNNAapTwhlawo3JcqXy0r5IsIBZwdcMrn6xS0Mbxsm71PJRJO8qJpvv7Yl7/88S+w/2Ei4Xq7imrmITLHqLgYiNESPf7YEUi5blqTJMwGA70Ye0f8w9ZIp9ORgEUQi0zh9juWI52SeWJ/toPKPq28RIstWzvXdPVMFjkdFu4YsZGEWQLzWXr2hbWGZ4oNOQjx1Luq939PQD7TXpIiA5snge7+clz3sAcNq/2f+cwnKx8Zm0i95UQx8K5loJk1xMb0SEQnMOw7hKUtFaisJ3UfZmwyeFNPLFvrNG3Yd759x1MWk879re9s/Te12gG9nnGn5ni3uVwIFL4lxXLmLGxBfssByXulMxm/gv5TYTbiME5dzhLcjLaTpa8UagyMTqCu0jH92Ma71hnNMd79fa694d3eStbQSiYukcHLmzsJfM3F69sGcOWVGdJkVkip8wfW7PMsFgP6T3XiyMF+8orncUoBpvneKiASHWIbjrSOfyrB5oe7lDgdsc1mmLOlwJza6s0WEjxJqf4r0WBkHiQ12fKyEA60luOWf2/BeCCHqsTJu69s+PAjybmMuVg4S00LfE5Qa/seaNRmaK1uDA724djRY1i37lpcuaICNqsaoXD++U9rAtZTMuoDHnzoph/TjxP/+PDzP0/bSmFzsWkjCUZxcimo2M4477M9sMAHtecIACsEG0YHx+GyysF//qc7r5rXWOsbGe2FJJ274YiZQ42oRmfnKKa9Xvxi42bcfPO9qK520mvjdNikCw7KsvczWqejbX0YHImhZfkipLOEJemUnlmAyerSxicS6l37x26zMe+RBYsZ5xctsJ+81auXefqWtczr9AcJ45Ggf4ACJswAcFGZgr4kg5d21uGORxcjLatRNSeDtuOB2i27jy+5YoGnddIb56eJz21Uq2C1avHq9k6E4jE0zXEhHsvBZjcjGkljz/Y9hEX6sahlJeY36MBosVjDp1KZ/9Z4PIcIeQTNzVUb77h17uSJrsSTp4YDejYhjE2glWcS17MPSXh3YcnTgdW8M8Okh3UsjY2MYGmztfuhr9y3wWqzDg4Oevn4u7OBPfPwjEY9PSObpJHGpud6sGnTXtx+ezU8Hgcvrb6YgsQCHz9hTBGjI8M4bsyhyD4XZr0LsXissC4y3GR6t+4+8ZGe4WFjkdtaGBeT79xLZ2JsSshTVpMF0XAIUAgfjIAxrMLowgU6wZosm2QRwC9eqMXnf70aKm0Wc20J2gZGASnjlT+/+jmd8ooHRsej3OhoRE70T4BagzjhhDxNkDCj6jUaFdwWPQIhJTa9sA097QJWXH0DPCUK+Kbz1N1s71jqp69vAg2NDZs2bChq/NUvt/96b9vEKgMJrsNo5HzvEgoYSs4XEDJmbG7SLmTCXSHXyQRLLedLiRlNdSicIa9tCksbPc9+7at33l1VU506cqwTnuKSt5gvxr3KBjF4vX784emtqKlaj8E+llul10zamYN3SZLCYBWqVrq/EEGGSbiLiqEx23hfKMugiATqj3d1f4EXHQt5PMrb00i4ikngaqprfnukzY9wKPKuz+UlIT9RsWpPAu9afRYhx60PPbK59LNZYaqp3CEjkxb5ITfoBJzsDN9Vdd+iLy1cqE8zU5cizLF56w4kU2xMrx4ZOTVroNFK6lsg1fWX145idNiBtdc7MKduLhewcIgR3ub4yLuxcT/q59QMfPLuVVc3NA989S87e/5p0h/XaclcaFX57p6ckoUq0nnzKZ9u0Dj/PVMWWHplEog0ufGBST9KisyZmzes+FpDdfmPJYmZnak3VcvmHRgZTjLdPl8GrLznlT/tx29/8yd8+9vX0MbroelVXTwz9DkKBaxWB6a8vQTm+2ndmuhnaRgNOrR3THkOtZ1Y53K6+M9UvDMrR45VGssW1XU0LrJ1hiMxiIZ3r/VVF2saBVYeE/Mhl6HTd+39d0mOu56qbNrRMLqju0nIuArgV4DJqMOpQb/xWFf37Z++Z/mTew6Nwjfuo59reIlL9m3cb4kzO6vhcjsJg5FJeeYlaPSNuP3O1aTNWB2ZqvAeBYLBKJnQOD5606oflrtcf3hhy75/mI7gcxPTfsJ6WpiNDgjqBM8qnF1Pdj7Pq6ANSGUk+EIybPo0WhaXPr1h3fy/r66t7D28fwhuwpKGAqcpuydm7hjDezyWwYG9cfx84+u49WNkrkwiSkqdPIp+Kerz317IJHJ+TPBPepEIBVBaWozyMj327Tp+77hXRml5voSdecjM6WFjpVdeOfeJuZVO9A9ELqpbXPXudG8eUzBbnouOIam0SNa1X/+wonzdlon+CNZepf5d5z7zA+mcwEcDM7JdVlOlpVP9yra2L1VX2J88cHwQHvJ22AZE4pnzPo16OnmC0oCOLj82/WEHHE6J3PF1vPmVaTuGd1iuzzsZZNNYh+ZUOh6o1wjfF9TV93f3TH+8f6C/2hfXQU3vZ93VaqWWd1vnGaBnD5+wF1i9e4pRPqUIP+kUWN5oefmKxVU/nDOneFsiliYNEebfywKb7LOYuSkqciCWGCVsRqDZ68ZLLx7F4EAIBr2aDpQS7+cl89ieyFmoY4k4xidjONzp+5zeoOHCJTOKd1Z7T95kcakRazbUPaXW6uBwXRxmVb3zmT3t0BYcfDZ+RUhzrZNKjEPS2vz2pd+4TjNnUWsyNAHvsBrXLWt6/ZW5HSNt3ZNlxTZbIXaU5TOgj7ePt/zop5ufal5Q/v2rF9ccGScsEo5FCizK57dQTIiKS+xkdiTs+stB9A+mUVlpJ/dcm59pSl4pS1CzVvdwJAmLXdd783VLvpFZo/7G4Y5jN0yMhm8YHQ6s8vrSjYmMpA2GglyT6EnLjo9GkY6kYHEZyKTp4PMHeOWFzWyGxYxgkaf0+SuXVP+iyCrsZMPZfP4EB4Mim2rG2Q/zE0Y05Hic7BzAv3z/e1iy4BZ86IaPwmIVYLWJbwju+yZc+RgZsyJFTj26+4ZW/epXR785OByvsNlO9z4qOZb2B1O4/pryPUUuaai/bxCSlHtvBYx3yysKI1S4S55FlpUKhMlDMtR0Gdb/44fURkc/Yv0YnXajaySB5nl2LF5a8vihtpGHBVt+hAsPfKq5e4KDR8c/0d099QnfqO/X5eWun8+tt+9OJQT4w9GZyoF3jPeQRmGMyk6XDZMTITKVDtJGPtKINRgek1BaQaZJIfKJGXpTFt6pIGk/B+rrG7dctSSyZbQniXBCdvd7d86HVF8Tj1orWg/1Wz7+kRpDdaVFc+joQPxkly/23279kF+hjI0gO9lbV13ZPuJVhF1uBwJTtPgEjFnxYb6lTebVDIxYzuU0kEbrwq9/cxD7953EqhYFn9MqXBryrgvTWrRGbrcOIcJ+w73T639zbPvfHT7hvTkcVcBpF9l4wQI5X4ZPLRYUEq5e2vif2bgCoSlpZnj9eyZgTFPlhUvKT2JllZtxMj/uZbssDV/cAFN5EokhHkFPK4rI8yC16tThxg2rH3/xj10Px9JRXsyWj1bL3IMqcqi45/fsK72fNOkGPtmyyPmq2+16snae9dkilz0c0cpIBSI4n4EC+akYWm6aRDqMgVAIUwE9VtpLEIkdQkWFiTNNswFdjNUwQd5fNk44LUpuvFXntWUkb131/NfHhvVo3TuAL35+JVqW1OI/Nr6Mg/teR8uy5dBoQ2hvexVagxH+wBT0hLHYIIUUGyFDn2WkL9ZodJgK+fGzX2zDQw9eA6dDT0KlASspYhpXkt4fTcU61EW1SNpc5JNux0YjRXt2he9oOzF6d/9AtCUUS8Fk1ZHQKTjPrTQTURYQI809t9yeKK0uebZ3mNYqcQmooN4adhBmItxCgeiNDbzifTKEqZKpMNS2hk2WJV+/hVWtyqEBCKwJk1xdsiZQkmaZHouQN+cZbllRvuOPL7evrizT8cz8jMCQSmSVFh4PAdysErv3j6+Hcnx9RZv9B8drpjbX1JS+ZPcotlothpCDFgqkGZIx5XkInIKPPNbrTCRoacST/fjYbavwxO9GkJQcMOm1CPknyBwyIjiRE9JFohEMDo3R4paw4AOmpllCN00aL8pNdjhC5jsSQDQaQ4AekE1Ds9qdCE/5YTGZ6BnK6DNyONUbwtHOcXR1DdB7lxMcEPmAefl9sIVMyxgNtJ5FVp7p9QUinlMnp9cHw+kPn+wN3jTuzRpkVRZmix5u0riCnMzPBeNFhbk8+wfhad+UD3d8aM1TK1fMSfURuLfbcOkFLKdMQ5nVkCuv5CUnKjp6jAdfkkkDhFMQ65v/v7Zkw70ybaQghcHLHkjAurtUaO8bhkWfH04gqOyYP9/zn8+9eGp1JqPgrMrMhefmkg14ZKctJ/PmWYubVVDmMD6VcnT3t/+NuLfzb8rclkCxw/H6nCrlttK5+l1GS67NYhIlh91KIFUDf4ix+ShnyccJPGzBTJaSERPT8iWSAnTWakwH2/HKpsfwwOfvQTScxe69J1E5ZwHmNczH4dZx+rwQZy3MkZZjNWBsfDIbeMAIcbU6J8qrqhGOj2PfzlcwOtiD++59AMuXNmPrrj4EAqOkORS0KQYw/q9cLnvJBYk9G0tos4m5VouGMKEBiSyrcM2JY+Pxxb09rdd0dkfWjk76rxnzxkVG72lgAV0XOVk8JEMaV8jwNWd0xywBquTUagJC8RS09N41qxseZYPDdercJWHqUb0ZbjH8I3IgL7GWcVb/I5B3xng6EwFoF971I+PixV/NdveThouS5jLlb4IEZSJeSgtsgEaZ4V1bQb+GsMeCZ6+79uTx1/4y3KxhHolb5HVeipwyP4qZdWkrkvSQOY7RDAb6ZbRzHoSJ6ZRtZGz41kPt0q0m6yg8Ls2QSW05VFWz94BO6z+sEos6RHVu1GQkj0ymz3ZYISUVYKPnWBBRyYVP4HwQSgUbIiojFo+TFvLxbpxYyssFbOGCW7FyRTNGRkagEntw5Ggrn0NZX1cGHW3izt170Nw8F2XlK7CkpYbuOYvHHn2e8J+VnIg0o87koRMmjJcKY7F7Z8/AO4VIw4usjFskB8HK8qxZTHszlSf8wcaezsCSSX+wJXns0JLJaakoEPDz3CijMDCZWEe2ama6FnPS2L7ywRkFmj2WcssQiA9O0Z/xGG76SN1WT4XpUGdf3yULnajOTtxq6IEkVYhHqdWSgaDVFLKJMPTz7/sfhpa//SGSr0FKxaA4zUrIopdpunmNCiXFOhIw1RuZfb0xd/WK8gUGg+bBiSnhqx2d/RVpSUGnzwqVms3OThdG7Im88oHFyXk2n57cyIJ7jEmHFoVNmujui1bkEKs42Nn9Ma3aTAA1nbUapZOiKHUZjalTyXS40yjm+tOpWL9ONEzqtMosK9YrKdZzoGuzWZBLWXn+TaR7ZbjQQhglk43yRDqLs7HQQiAQ5mUqrHaeRd5jiQSPrRUXSXxaNKuxstqcdL8iF6jzwVbsfTy1VRBAdgiSCXYIZLhcDsJJSX5PRUVGchRIsERyCtQqMeBLFseiqapo8ERVMJZuTO7zNkz7h+dNBeS54XCCBJv2Qanj982yHk6nbabpZSYK/pYkl5xvJKYbn/LGeRPzwgZb57VLF3xv/qKyJ3qGQnwG0qXyR1RvaftSshmFeuhytLmJcYTIqhuvfOgObenaZ5AhkJWKvrW2Pj95nYcFhMJIGBb0jEbjhGXiWLlywb/XzrH87LdPpD49FlB/oePk5MLgVAxGqwUavcjDHpAxS9CTT8Umk6ODlVlXFgiUDRzPBYJh1ZhX0Ug/a9QoA9izv4fAK510YUxy2S1jew7sGVGplKPjvp6hyemI92jbUW9o+tSYSmmYDgQSgVg04RU1QoQNfGJN2XqtkjSdhGLyuObU2CGO55n9DHoyMVYTpxsocoPAs5GXSivIg7RaTPmfkSSzMhnmQbLL47HBZs7AbGJT1ZJ8qBTJN58MoqLTE/THzLGo7MqkBfvePQecY2NRz9RU0Pn7p9s8QwPJirbOZ0rCcaHCHwwWywQpookepLMiHTQ9tOoUGD2snswklORAMDiAPL6VZvKks1d9ZGidGXDPRFlMLIINK+fuuKLR8zNbsfIpu97DsaTOJvG1uFTYUTUzTAp5CiQG5wXZBCl2ClGdS9Jd9X+uN1YsfjU70gFZ78Q70USefXLZFQjEEY3r0zVzizd+ZEHDxq72/utPnvJ+6kjn5E2TU0ETO90qDevkEaEqdN3nyYXlQh2WlC+9KdTds3HJrIRXK/KMZiFIKCDNJlrRG/sGvWXpVK5MqTHj9X0n4HZocPL/PcHVqtVSh4e/u5/N2g6qVarQppcPBve2dke9UxN+QeOJ7GmNhYKxo8FoNBeke4nHotHEKAEcWvA4acp4Z2dfUBR1UdZJ3XWyx6hQitbu7iHD5OSkIZGI6wnaiL/7/S6DTis7OrsiJPENxudePGjeuWfIMeGNmXyBqOVff7TTSrDHlEjZ8P3/eBZsMIOSNNGh9mkYTXo6qGOc2ZHVxzFBZqxVhpld0hXWp5BH482+bxQanblOLIPCTF0iniSNmSKLIpIHr5tsurL0+YoS5xOr11Xt0WoU2LGvCxJ5w1oWdL3EoRQhuPm2kOQdNEPPgCCrJaebCw0ho6ucNqz65npd5apjiPYjM9EHVWklhEwr0j2jUJmvJjNppOdNENBXYFebDcG0BaIqM6PBGB32pue2wGwrQl2dHXt2tqF58TzoyTxqCGt1dHQ64oHULUeOT390MhheOzkZMrI0hUgLoSNToSKzpZgZ8imfnkzJ43F5TzffMpZn1mGccAVPUzj93gLzjpyfr80mgLDzzhZbrVLwOqxYNE0nN8qrGyykkcLkyITDcR7ELfWYeXT+9C9G3cQCqSbWx0X3wKZeMK+Vaa78DMi84zE+7gcbe2QiL9NgMJMn6iP8F+JzfnSkEdOpfBf4adoCvl4K4YyKNJkfLl5rxg+aMj98gjAxe9Y3JlMWBhZylm+BVxIzs55K55BJMVybhFopoqxI76+sLHq1sdrxnEofecFgcSX0QjG05iQP7XT1jMCuc9G6q2F06umQKy6dBmMlspKKDqTg5sN+pOAACU/pkHHDv1yt1RQPIdpbeA7FJfGC2AIEQzFIUSWpYq2vcemcx0Vj3+O03k4hl1s9OJJb2z3Qu3rSl20OhZJkDtkisHEmar657FdOyJsEBVPAcmFwJwev0lm1D6oZnCgo8xqaPYVa/wb0ZN6Y1eIo/IvwlZlMn9k0U35ENp8LDXt8xpzNYlqpTF6QlWrWACLxGByXD+7Bgse+ZvAOYvT5Ou6Vng6zqPWKN2pzhTPrdIU3wQ759AxMQSpQxZ8ueswLIculsrxois40Y7tWKXk/E2wmGY4Sc6vLUv56U5N1e239vJ2CWh1WpYPoHgrC603Cro+RgCnxXod+VSxkINHmGdMk77E+ZIpbDpnXf+dGpd48nRvrhtJSdF7DRS9c2MBze9O+MIHoFOEV9fSixprnFi2xP9fTLWJizDhfIQwsHhiOrxyZDC9JpKWmSDSjTySzSKQSvLxErdBxcMsaLFh/I+Szwen5nMK3J+4VZn7DGTSx+fQJD3LP2ukqv4mS5fzuRZj133lFQkLERpsRHEjEU8hlCeDLamjIgph0KTJ7csBuKWuno9c6t1bc2zx/WWswOtIb84uoqyezp1Jiwhsm4xoH4+O7BOydF4DBZFFSZwW68T5INeu3OdZ8+3qlxpaV4z2XRGudr7CxWdz+QJTDB8bOaDSLHU3zSjvKym2/7ezdR/+22QWpqHF8+EhjLlfXEI4qm0NRb5XPH6wm0yeEImk65CqkklEeNrBYLIjFMpwDTMEHUWV4Cc3pLhvhTcWD59pw+RzCIVxA1esbDIlnfuvp11jFBTOzbMYQ+zNOAsRoLCMRVv5k5OadMTpbjQQX5ER2bpmxx2aqHDBb5A6lGG6vqljdqdOfPK6UzLGxUScq507CVWTFmHcE/iAd3pABBlOheeZ9zH/OCJgiFzAmo0PQNH/qCfuKL34KanJRpMlLUPn57kuAWHlJivS+z58kbzHCixENZrXf7Xbs1KnMO0vcy6HQGDAV+hNU6ppSf7Ckpr/7SKnZmJjjC1jKNaKj4tSpwfIKj8kaTyTcoVBck2GuPGGlaV8UScJANqeVawff5AR0WhV0BtKGWjVhsnyoRE1emopwlZrUFBNYni5jwsnzZYqZ1BfDKiwwy0wnw2GMspOxt/NhDyKLZRFWi6d5TjSVJG3jLubG3e8PkdlUclokmf4Pi9PZHLqkvswwmUjK4ZVXNvX7vL2j9fW2wWDcPuApqxpKRQ8MNM8vH7carkImN4TJqZ3kOReTEA0jSLgxQl57KJThhMCyLL3vuc9ZBSwdjas0dfc8bl393+8DqVBIUyxSg7+uizNA0+lO0iJmMK0KQWcUSPCyqPYUjyazjtH6Wjus2lHYli2F3tiATS9twmfvb1Q9+tNfuuvXrrQsWXKd8yc/eaZ0TUu9paxcX7Rt+6GiWDxtXXPVKlM4lLJPTQfNoXDU7CpViSRH5lQqrc+RRsnksogkE5w9h3GM8SAoc3tlNrghA5m8tFwmL2B6s4G0D71uUstanSlKAhVNpXLpuip7wO0wBy0WXeDEifa42SIGV3962diB/RO+bMYQuPueD49seemxaY0mHrr33hsnf/n7AaxduQ5HDz6LuXNkeKPFBNetUMpGchbSEHIREtooZxxSqOMFHloBf42XyrDkgS9pS5p/gtgkn0JLxxh/7Rd3LAs1V/F4go9DjpM3iAy7/wSiqWAhrCZkE8nkmKfEM9bU6CEhVeLqqxuwYrkdbUe2w2VX45Fv3Y2DB4N49c870XasE9/6XzeoRTFh2fmXQ8ZTJ7v0Haem9V976Mva0hK38Xhbn2FsdNo4NOg1KpWSXFFdHikpdscWLyiPDo8MRh977PHUvIZ58bo6W/yjNy2L/Pm18dBPHzueW7ahCevWNOOKJaV48MG/J9yYwD13NcLvk9HZkca8ecXYvcOISCjAvWZmNr3TARKiLJk5CeFEkp4ryeOMsoxz1q79Ve6VLMu4fF2+3rNE/OUluHxdFrDL12UBu3xdvi4L2OXrsoBdvi4L2OXr8nXe138JMAC5Jw1gcYLCiwAAAABJRU5ErkJggg==",
                            alt: "Puninar Logo",
                            className: "w-10 h-10 mr-2"
                        }),
                        /* @__PURE__ */ jsx6("a", {
                            className: "hover:underline hover:text-blue-500 text-gray-600 font-bold content-center",
                            target: "_blank",
                            href: "https://www.puninar.com",
                            children: "PUNINAR LOGISTICS"
                        })
                    ]
                }),
                /* @__PURE__ */ jsx6("div", {
                    className: "content-center",
                    children: /* @__PURE__ */ jsx6("p", {
                        className: "text-gray-600 font-semibold",
                        children: "Design template version 1.0.0"
                    })
                })
            ]
        })
    });
};
var Footer_default = Footer;
// src/components/Layout.tsx
import { Component as Component5 } from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var Layout = /*#__PURE__*/ function(Component5) {
    "use strict";
    _inherits(Layout, Component5);
    function Layout(props) {
        _class_call_check(this, Layout);
        var _this;
        _this = _call_super(this, Layout, [
            props
        ]);
        _this.handleScroll = function(event) {
            var scrollY = event.currentTarget.scrollTop;
            _this.setState({
                scrollY: scrollY
            });
        };
        _this.toggleSidebar = function() {
            _this.setState(function(prevState) {
                return {
                    isSidebarCollapsed: !prevState.isSidebarCollapsed
                };
            });
        };
        _this.state = {
            isSidebarCollapsed: false,
            scrollY: 0
        };
        return _this;
    }
    _create_class(Layout, [
        {
            key: "render",
            value: function render() {
                var _this_props = this.props, children = _this_props.children, _this_props_title = _this_props.title, title = _this_props_title === void 0 ? "My App" : _this_props_title, _this_props_showSearch = _this_props.showSearch, showSearch = _this_props_showSearch === void 0 ? false : _this_props_showSearch, _this_props_menuItems = _this_props.menuItems, menuItems = _this_props_menuItems === void 0 ? [] : _this_props_menuItems, _this_props_showSidebar = _this_props.showSidebar, showSidebar = _this_props_showSidebar === void 0 ? true : _this_props_showSidebar, _this_props_bgColor = _this_props.bgColor, bgColor = _this_props_bgColor === void 0 ? "bg-gray-800" : _this_props_bgColor, _this_props_color = _this_props.color, color = _this_props_color === void 0 ? "text-gray-100" : _this_props_color, _this_props_projectName = _this_props.projectName, projectName = _this_props_projectName === void 0 ? "My App" : _this_props_projectName, logo = _this_props.logo, activePath = _this_props.activePath, logoCollapsed = _this_props.logoCollapsed, notifCount = _this_props.notifCount, role = _this_props.role, userName = _this_props.userName, baseUrl = _this_props.baseUrl, showNotification = _this_props.showNotification, onMenuItemClick = _this_props.onMenuItemClick, handleLogout = _this_props.handleLogout, handleNotification = _this_props.handleNotification;
                var _this_state = this.state, isSidebarCollapsed = _this_state.isSidebarCollapsed, scrollY = _this_state.scrollY;
                var menu = menuItems.filter(function(item) {
                    return item.label !== null;
                });
                return /* @__PURE__ */ jsx7(SearchProvider, {
                    children: /* @__PURE__ */ jsx7("div", {
                        className: "flex flex-col h-screen",
                        children: /* @__PURE__ */ jsxs5("div", {
                            className: "flex flex-1 overflow-hidden",
                            children: [
                                showSidebar && /* @__PURE__ */ jsxs5("div", {
                                    className: "relative my-2 ml-2 opacity-100",
                                    children: [
                                        /* @__PURE__ */ jsx7(Sidebar_default, {
                                            title: title,
                                            showSearch: showSearch,
                                            menuItems: menu,
                                            isCollapsed: isSidebarCollapsed,
                                            bgColor: bgColor,
                                            color: color,
                                            activePath: activePath,
                                            logoCollapsed: logoCollapsed,
                                            logo: logo,
                                            onMenuItemClick: onMenuItemClick
                                        }),
                                        /* @__PURE__ */ jsxs5("button", {
                                            type: "button",
                                            className: "absolute top-3 right-[-12px] sm:right-[-12px] md:right-[-12px] lg:right-[-12px] flex items-center justify-center p-1 rounded-full border border-stone-200 text-stone-500 ".concat(bgColor, " hover:text-stone-700 hover:bg-stone-100 focus:outline-none"),
                                            onClick: this.toggleSidebar,
                                            children: [
                                                /* @__PURE__ */ jsx7("span", {
                                                    className: "absolute -inset-0.5"
                                                }),
                                                /* @__PURE__ */ jsx7("span", {
                                                    className: "sr-only",
                                                    children: "Toggle sidebar"
                                                }),
                                                /* @__PURE__ */ jsx7("svg", {
                                                    className: "block size-4 ".concat(isSidebarCollapsed ? "rotate-180" : ""),
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    strokeWidth: "1.5",
                                                    stroke: "currentColor",
                                                    "aria-hidden": "true",
                                                    "data-slot": "icon",
                                                    children: isSidebarCollapsed ? /* @__PURE__ */ jsx7("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M6 18L18 6M6 6l12 12"
                                                    }) : /* @__PURE__ */ jsx7("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /* @__PURE__ */ jsxs5("div", {
                                    className: "flex-1 overflow-y-auto scroll-smooth",
                                    onScroll: this.handleScroll,
                                    children: [
                                        /* @__PURE__ */ jsx7(Navbar_default, {
                                            bgColor: bgColor,
                                            color: color,
                                            projectName: projectName,
                                            logo: logo,
                                            logoCollapsed: logoCollapsed,
                                            isCollapsed: isSidebarCollapsed,
                                            className: scrollY > 0 ? "border border-stone-200 shadow-lg rounded-lg" : "border border-stone-200 bg-white rounded-lg",
                                            scrollY: scrollY,
                                            notifCount: notifCount,
                                            role: role,
                                            userName: userName,
                                            baseUrl: baseUrl,
                                            showNotification: showNotification,
                                            handleLogout: handleLogout,
                                            handleNotification: handleNotification
                                        }),
                                        /* @__PURE__ */ jsx7("div", {
                                            className: "flex-1 pt-16",
                                            children: /* @__PURE__ */ jsx7("div", {
                                                className: "pt-4",
                                                children: /* @__PURE__ */ jsx7(Content_default, {
                                                    children: children
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                });
            }
        }
    ]);
    return Layout;
}(Component5);
var Layout_default = Layout;
export { Content_default as Content, Footer_default as Footer, Layout_default as Layout, Navbar_default as Navbar, Sidebar_default as Sidebar };
//# sourceMappingURL=index.mjs.map