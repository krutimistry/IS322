window.onload=function() {

// mock database of shoes
    const shoesDB = [
        {
            _id: '001',
            type: 'sneaker',
            color: 'black',
            size: [5, 5.5, 7, 9, 12],
            price: 64.99,
            image: 'images/shoe1',
            name: 'Vans Sk8 Hi Skate Shoe'
        },
        {
            _id: '002',
            type: 'sneaker',
            color: 'white',
            size: [2, 6.5, 7, 9.5, 12],
            price: 49.99,
            image: 'images/shoe2',
            name: 'Vans Slip On Chex Skate Shoe'
        },
        {
            _id: '003',
            type: 'sneaker',
            color: 'red',
            size: [5.5, 7, 8, 8.5, 9],
            price: 54.99,
            image: 'images/shoe3',
            name: 'Converse Chuck Taylor All Star Hi Sneaker'
        },
        {
            _id: '004',
            type: 'boot',
            color: 'white',
            size: [6.5, 7, 7.5, 8, 8.5, 9.5, 10],
            price: 169.99,
            image: 'images/shoe4',
            name: 'Dr. Martens 1490 Sex Pistols 10-Eye Boot'
        },
        {
            _id: '005',
            type: 'boot',
            color: 'brown',
            size: [5, 6, 7.5, 9.5, 10, 10.5, 11],
            price: 159.99,
            image: 'images/shoe5',
            name: 'Womens UGG® Classic Short II Boot'
        },
        {
            _id: '006',
            type: 'boot',
            color: 'black',
            size: [5, 5.5, 7, 9, 12],
            price: 199.99,
            image: 'images/shoe6',
            name: 'Womens Dr. Martens Virginia 20-Eye Boot'
        },
        {
            _id: '007',
            type: 'casual',
            color: 'yellow',
            size: [2, 6.5, 7, 9.5, 12],
            price: 49.99,
            image: 'images/shoe7',
            name: 'Womens TOMS Classic Slip On Casual Shoe'
        },
        {
            _id: '008',
            type: 'casual',
            color: 'blue',
            size: [6.5, 7, 7.5, 8, 8.5, 9.5, 10],
            price: 59.99,
            image: 'images/shoe8',
            name: 'Womens Sperry Top-Sider Crest Vibe Casual Shoe'
        },
        {
            _id: '009',
            type: 'casual',
            color: 'red',
            size: [2, 6.5, 7, 9.5, 12],
            price: 54.99,
            image: 'images/shoe9',
            name: 'Womens Sanuk Donna Hemp Slip On Casual Shoe'
        },
        {
            _id: '010',
            type: 'flat',
            color: 'grey',
            size: [5, 6, 7.5, 9.5, 10, 10.5, 11],
            price: 54.99,
            image: 'images/shoe10',
            name: 'Womens T.U.K. Sophistakitty Flat'
        },
        {
            _id: '011',
            type: 'flat',
            color: 'black',
            size: [5, 5.5, 7, 9, 12],
            price: 49.99,
            image: 'images/shoe11',
            name: 'Womens MIA Esie Ballet Flat'
        },
        {
            _id: '012',
            type: 'heel',
            color: 'black',
            size: [2, 6.5, 7, 9.5, 12],
            price: 39.99,
            image: 'images/shoe12',
            name: 'Womens Rocket Dog Diver Wedge Sandal'
        },
        {
            _id: '013',
            type: 'heel',
            color: 'grey',
            size: [5.5, 7, 8, 8.5, 9],
            price: 59.99,
            image: 'images/shoe13',
            name: 'Womens Not Rated Ofari Sandal'
        },
        {
            _id: '014',
            type: 'heel',
            color: 'blue',
            size: [6.5, 7, 7.5, 8, 8.5, 9.5, 10],
            price: 109.99,
            image: 'images/shoe14',
            name: 'Womens T.U.K. Nosebleed Glitter Boot'
        },
        {
            _id: '015',
            type: 'slipper',
            color: 'brown',
            size: [2, 6.5, 7, 9.5, 12],
            price: 99.99,
            image: 'images/shoe15',
            name: 'Womens UGG® Tasman Clog'
        },
        {
            _id: '016',
            type: 'slipper',
            color: 'black',
            size: [6.5, 7, 7.5, 8, 8.5, 9.5, 10],
            price: 79.99,
            image: 'images/shoe16',
            name: 'Womens UGG® Bella II Casual Shoe'
        },
        {
            _id: '017',
            type: 'slipper',
            color: 'white',
            size: [5.5, 7, 8, 8.5, 9],
            price: 59.99,
            image: 'images/shoe17',
            name: 'Womens EMU Australia Mayberry Slide'
        },
        {
            _id: '018',
            type: 'sandal',
            color: 'brown',
            size: [5, 6, 7.5, 9.5, 10, 10.5, 11],
            price: 44.99,
            image: 'images/shoe18',
            name: 'Womens Madden Girl Catelyn Platform Slide Sandal'
        },
        {
            _id: '019',
            type: 'sandal',
            color: 'black',
            size: [5, 6, 7.5, 9.5, 10, 10.5, 11],
            price: 99.99,
            image: 'images/shoe19',
            name: 'Womens Chaco Z/Volv X2 Sandal'
        },
        {
            _id: '020',
            type: 'sandal',
            color: 'blue',
            size: [2, 6.5, 7, 9.5, 12],
            price: '49.99',
            image: 'images/shoe20',
            name: 'Womens Sanuk Flip Flop Yoga Salty'
        }
    ];

    //renders product cards

    function renderProducts(database) {
        const productSpace = document.getElementById('productCatalog');

        productSpace.innerHTML='';

        database.forEach(function(product) {

            const productCard = '<article class=\"productCard\"><img class=\"productDetails\" alt=\"shoe\"src=\"' + product.image + '.jpg\" /><p id=\"productName\" class=\"productDetails\">' + product.name + '</p><p id=\"productPrice\" class=\"productDetails\">$' + product.price + '</p></article>';

            return productSpace.innerHTML += productCard;
        });
    }

    renderProducts(shoesDB);

    // function to filter shoes by color
    function colorFiltering(database, criteria){

        var shoesTrue=[];

        database.forEach(function(shoe){

            if(shoe.color==criteria){
                shoesTrue.push(shoe);
            }
        });

        return shoesTrue;
    }

    //color event listener: listens for change to color filter

    document.querySelector('#colorFilter').addEventListener('change', function(event){
        var filterColor=event.target.value.toString();

        console.log(filterColor);

        if(filterColor==="none"){
            renderProducts(shoesDB);
        }else{
            var coloredShoes=colorFiltering(shoesDB,filterColor);
            renderProducts(coloredShoes);
        }

    });

    // function to filter shoes by type
    function typeFiltering(database, criteria){

        var shoesTrue=[];

        database.forEach(function(shoe){

            if(shoe.type===criteria){
                shoesTrue.push(shoe);
            }
        });

        return shoesTrue;
    }

    //color event listener: listens for change to type filter

    document.querySelector('#typeFilter').addEventListener('change', function(event){
        var filterType=event.target.value.toString();

        if(filterType=="none"){
            renderProducts(shoesDB);
        }else{
            var typedShoes=typeFiltering(shoesDB,filterType);
            renderProducts(typedShoes);
        }

    });

    //function to filter shoes by size
    function sizeFiltering(database, criteria){

        var shoesTrue=[];

        database.forEach(function(shoe){
            var shoeSizes=shoe.size;

            if(shoeSizes.includes(criteria)){
                shoesTrue.push(shoe);
            }
        });

        return shoesTrue;
    }

    document.querySelector('#sizeFilter').addEventListener('change', function(event){
        var filterSize=parseFloat(event.target.value.toString());

        if(filterSize=="none"){
            renderProducts(shoesDB);
        }else{
            var sizedShoes=sizeFiltering(shoesDB,filterSize);
            renderProducts(sizedShoes);
        }

    });

}();