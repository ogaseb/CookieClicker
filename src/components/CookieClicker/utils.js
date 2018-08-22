export function nFormatter(num, digits) {
    //https://stackoverflow.com/questions/9461621/how-to-format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900-in-javascrip
    var si = [{
            value: 1,
            symbol: ""
        },
        {
            value: 1e3,
            symbol: "k"
        },
        {
            value: 1e6,
            symbol: "Mil"
        },
        {
            value: 1e9,
            symbol: "Bil"
        },
        {
            value: 1e12,
            symbol: "Tri"
        },
        {
            value: 1e15,
            symbol: "Quad"
        },
        {
            value: 1e18,
            symbol: "Quin"
        },
        {
            value: 1e21,
            symbol: "Sext"
        },
        {
            value: 1e24,
            symbol: "Sept"
        },
        {
            value: 1e27,
            symbol: "Oct"
        },
        {
            value: 1e30,
            symbol: "Dec"
        },
        {
            value: 1e33,
            symbol: "Undec"
        },
        {
            value: 1e33,
            symbol: "Duodec"
        }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
};

export function makeWave(canvas) {

    //https://codepen.io/jackrugile/pen/BvLHg
    var c = document.getElementById(canvas),
        ctx = c.getContext("2d"),
        cw = (c.width = window.innerWidth),
        ch = (c.height = window.innerHeight),
        points = [],
        tick = 0,
        opt = {
            count: 7,
            range: {
                x: 20,
                y: 30
            },
            duration: {
                min: 20,
                max: 40
            },
            thickness: 20,
            strokeColor: "#daab71",
            level: 0.2,
            curved: true
        },
        rand = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        ease = function (t, b, c, d) {
            if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
            return (-c / 2) * (--t * (t - 2) - 1) + b;
        };

    ctx.lineJoin = "round";
    ctx.lineWidth = opt.thickness;
    ctx.strokeStyle = opt.strokeColor;

    var Point = function (config) {
        this.anchorX = config.x;
        this.anchorY = config.y;
        this.x = config.x;
        this.y = config.y;
        this.setTarget();
    };

    Point.prototype.setTarget = function () {
        this.initialX = this.x;
        this.initialY = this.y;
        this.targetX = this.anchorX + rand(0, opt.range.x * 2) - opt.range.x;
        this.targetY = this.anchorY + rand(0, opt.range.y * 2) - opt.range.y;
        this.tick = 0;
        this.duration = rand(opt.duration.min, opt.duration.max);
    };

    Point.prototype.update = function () {
        var dx = this.targetX - this.x;
        var dy = this.targetY - this.y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (Math.abs(dist) <= 0) {
            this.setTarget();
        } else {
            var t = this.tick;
            var b = this.initialY;
            var c = this.targetY - this.initialY;
            var d = this.duration;
            this.y = ease(t, b, c, d);

            b = this.initialX;
            c = this.targetX - this.initialX;
            d = this.duration;
            this.x = ease(t, b, c, d);

            this.tick++;
        }
    };

    Point.prototype.render = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
        ctx.fillStyle = "#000";
        ctx.fill();
    };

    var updatePoints = function () {
        var i = points.length;
        while (i--) {
            points[i].update();
        }
    };

    var renderShape = function () {
        ctx.beginPath();
        var pointCount = points.length;
        ctx.moveTo(points[0].x, points[0].y);
        var i;
        for (i = 0; i < pointCount - 1; i++) {
            var c = (points[i].x + points[i + 1].x) / 2;
            var d = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
        }
        ctx.lineTo(-opt.range.x - opt.thickness, ch + opt.thickness);
        ctx.lineTo(cw + opt.range.x + opt.thickness, ch + opt.thickness);
        ctx.closePath();
        ctx.fillStyle = "#e5c49b";
        ctx.fill();
        ctx.stroke();
    };

    var clear = function () {
        ctx.clearRect(0, 0, cw, ch);
    };

    var loop = function () {
        window.requestAnimFrame(loop, c);
        tick++;
        clear();
        updatePoints();
        renderShape();
        //renderPoints();
    };

    var i = opt.count + 2;
    var spacing = (cw + opt.range.x * 2) / (opt.count - 1);
    while (i--) {
        points.push(
            new Point({
                x: spacing * (i - 1) - opt.range.x,
                y: ch - ch * opt.level
            })
        );
    }

    window.requestAnimFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (a) {
                window.setTimeout(a, 1e3 / 60);
            }
        );
    })();

    loop();
    return c;
}