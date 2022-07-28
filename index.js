var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(config) {
    return function (Constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                _this.square = config.templete(_this.options);
                return _this;
            }
            class_1.prototype.options = function (options) {
                throw new Error('Method not implemented.');
            };
            return class_1;
        }(Constructor));
    };
}
var Rectangle = /** @class */ (function () {
    function Rectangle(options) {
        this.options = options;
    }
    Rectangle = __decorate([
        Component({
            type: 'Rectangle',
            templete: function (obj) { return obj.width * obj.height; }
        })
    ], Rectangle);
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(options) {
        this.options = options;
    }
    Circle = __decorate([
        Component({
            type: 'Circle',
            templete: function (obj) { return Math.PI * obj.radius; }
        })
    ], Circle);
    return Circle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(options) {
        this.options = options;
    }
    Triangle = __decorate([
        Component({
            type: 'Triangle',
            templete: function (obj) { return 0.5 * obj.width * obj.height; }
        })
    ], Triangle);
    return Triangle;
}());
var rectangle = new Rectangle({ width: 32, height: 32 });
console.log(rectangle.square);
var circle = new Circle({ radius: 32 });
console.log(circle.square);
var triangle = new Triangle({ width: 32, height: 32 });
console.log(triangle.square);
