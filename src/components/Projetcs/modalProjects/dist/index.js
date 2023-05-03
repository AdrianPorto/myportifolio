"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var Modal = function (_a) {
    var src = _a.src, href = _a.href, Title = _a.Title, Description = _a.Description, dark = _a.dark, image1 = _a.image1, image2 = _a.image2, image3 = _a.image3;
    return (react_1["default"].createElement("div", { className: "  shadow-lg shadow-gray-800 group rounded-lg relative overflow-hidden max-[768px]:w-[80vw] " },
        react_1["default"].createElement("div", { className: "bottom-10" },
            react_1["default"].createElement(link_1["default"], { href: href },
                react_1["default"].createElement("div", { className: "absolute left-10 bottom-0 group-hover:bottom-[13vw] max-[768px]:group-hover:bottom-[34vw] max-[768px]:text-leftg group-hover:opacity-100 :duration-1000 opacity-0 font-black text-2xl", id: "title" }, Title),
                react_1["default"].createElement("div", { className: "absolute left-10 max-[768px]:text-left bottom-[11vw]  group-hover:bottom-26 max-[768px]:group-hover:bottom-[20vw] max-[768px]:group-hover:text-[4.6vw]  group-hover:opacity-100 opacity-0 transition-all duration-500 \n            " + (dark ? "text-black" : "text-white") }, Description),
                react_1["default"].createElement("div", { className: "absolute left-[5vw]  bottom-0 group-hover:bottom-[5vw] max-[768px]:group-hover:bottom-5 max-[768px]:left-[10vw] max-[768px]:w-[9vw] group-hover:opacity-100 opacity-0 transition-all duration-500" },
                    react_1["default"].createElement(image_1["default"], { src: image1, alt: "", className: "w-10" })),
                react_1["default"].createElement("div", { className: "absolute left-[10vw] bottom-0 group-hover:bottom-[5vw] max-[768px]:group-hover:bottom-5 max-[768px]:left-[30vw] max-[768px]:w-[9vw] group-hover:opacity-100 opacity-0 transition-all duration-500" },
                    react_1["default"].createElement(image_1["default"], { src: image2, alt: "", className: "w-10" })),
                react_1["default"].createElement("div", { className: "absolute left-[15vw] bottom-0 group-hover:bottom-[5vw] max-[768px]:group-hover:bottom-5 max-[768px]:left-[50vw] max-[768px]:w-[9vw] group-hover:opacity-100 opacity-0 transition-all duration-500" },
                    react_1["default"].createElement(image_1["default"], { src: image3, alt: "", className: (dark ? "invert-0" : "invert") + " w-14 mb-3" })),
                react_1["default"].createElement(image_1["default"], { src: src, alt: "", className: " rounded-lg group-hover:scale-125 duration-500 " + (dark ? "group-hover:opacity-10" : "group-hover:opacity-10"), id: "ImageProject" })))));
};
exports["default"] = Modal;
