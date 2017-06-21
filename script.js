var i = -1
document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement('button');
    button.innerText = 'Lets make some Squares!'
    document.body.appendChild(button)
    var container = document.createElement('div')
    document.body.appendChild(container)
    button.addEventListener("click", function () {
        var square = document.createElement('div');
        square.className = 'squares';
        i++;
        square.id = [i]
        square.addEventListener('mouseover', function () {
            square.innerText = square.id;
        });
        square.addEventListener('mouseout', function () {
            square.innerText = '';
        });
        square.addEventListener('click', function () {
            var backColor = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"]
            var rand = backColor[Math.floor(Math.random() * backColor.length)];
            console.log(rand)
            square.style.backgroundColor = (rand);
        })
        square.addEventListener('dblclick', function () {
            if (square.id % 2 !== 0 && square == container.firstChild) {
                alert('Element does not extist')
                console.log('odd 1 works')
            }
            else if (square.id % 2 !== 0) {
                square.previousElementSibling.remove()
                console.log('odd works')
            }
            else if (square == container.lastChild) {
                alert('Element does not exist!')
                console.log('lst child working')
            }
            else if (square.id % 2 == 0) {
                square.nextElementSibling.remove()
                console.log(' even works')
            }
        })
        container.appendChild(square)
        var boxCount = document.querySelectorAll(container > square).length;
    });
});
