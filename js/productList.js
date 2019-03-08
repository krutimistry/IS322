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
            name: 'UGG® Classic Short II Boot'
        },
        {
            _id: '006',
            type: 'boot',
            color: 'black',
            size: [5, 5.5, 7, 9, 12],
            price: 199.99,
            image: 'images/shoe6',
            name: 'Dr. Martens Virginia 20-Eye Boot'
        },
        {
            _id: '007',
            type: 'casual',
            color: 'yellow',
            size: [2, 6.5, 7, 9.5, 12],
            price: 49.99,
            image: 'images/shoe7',
            name: 'TOMS Classic Slip On Casual Shoe'
        },
        {
            _id: '008',
            type: 'casual',
            color: 'blue',
            size: [6.5, 7, 7.5, 8, 8.5, 9.5, 10],
            price: 59.99,
            image: 'images/shoe8',
            name: 'Sperry Top-Sider Crest Vibe Casual Shoe'
        },
        {
            _id: '009',
            type: 'casual',
            color: 'red',
            size: [2, 6.5, 7, 9.5, 12],
            price: 54.99,
            image: 'images/shoe9',
            name: 'Sanuk Donna Hemp Slip On Casual Shoe'
        },
        {
            _id: '010',
            type: 'flat',
            color: 'grey',
            size: [5, 6, 7.5, 9.5, 10, 10.5, 11],
            price: 54.99,
            image: 'images/shoe10',
            name: 'T.U.K. Sophistakitty Flat'
        },
        {
            _id: '011',
            type: 'flat',
            color: 'black',
            size: [5, 5.5, 7, 9, 12],
            price: 49.99,
            image: 'images/shoe11',
            name: 'MIA Esie Ballet Flat'
        },
        {
            _id: '012',
            type: 'heel',
            color: 'black',
            size: [2, 6.5, 7, 9.5, 12],
            price: 39.99,
            image: 'images/shoe12',
            name: 'Rocket Dog Diver Wedge Sandal'
        },
        {
            _id: '013',
            type: 'heel',
            color: 'grey',
            size: [5.5, 7, 8, 8.5, 9],
            price: 59.99,
            image: 'images/shoe13',
            name: 'Not Rated Ofari Sandal'
        },
        {
            _id: '014',
            type: 'heel',
            color: 'blue',
            size: [6.5, 7, 7.5, 8, 8.5, 9.5, 10],
            price: 109.99,
            image: 'images/shoe14',
            name: 'T.U.K. Nosebleed Glitter Boot'
        },
        {
            _id: '015',
            type: 'slipper',
            color: 'brown',
            size: [2, 6.5, 7, 9.5, 12],
            price: 99.99,
            image: 'images/shoe15',
            name: 'UGG® Tasman Clog'
        },
        {
            _id: '016',
            type: 'slipper',
            color: 'black',
            size: [6.5, 7, 7.5, 8, 8.5, 9.5, 10],
            price: 79.99,
            image: 'images/shoe16',
            name: 'UGG® Bella II Casual Shoe'
        },
        {
            _id: '017',
            type: 'slipper',
            color: 'white',
            size: [5.5, 7, 8, 8.5, 9],
            price: 59.99,
            image: 'images/shoe17',
            name: 'EMU Australia Mayberry Slide'
        },
        {
            _id: '018',
            type: 'sandal',
            color: 'brown',
            size: [5, 6, 7.5, 9.5, 10, 10.5, 11],
            price: 44.99,
            image: 'images/shoe18',
            name: 'Madden Girl Catelyn Platform Slide Sandal'
        },
        {
            _id: '019',
            type: 'sandal',
            color: 'black',
            size: [5, 6, 7.5, 9.5, 10, 10.5, 11],
            price: 99.99,
            image: 'images/shoe19',
            name: 'Chaco Z/Volv X2 Sandal'
        },
        {
            _id: '020',
            type: 'sandal',
            color: 'blue',
            size: [2, 6.5, 7, 9.5, 12],
            price: '49.99',
            image: 'images/shoe20',
            name: 'Sanuk Flip Flop Yoga Salty'
        }
    ];

    //working directory: changes as filters and options are applied
    var workingDir=shoesDB;
    var currColor='';
    var currSize=0;
    var currType='';
    var currSort='';

    //function to render product cards
    function renderProducts(database) {
        const productSpace = document.getElementById('productCatalog');

        productSpace.innerHTML='';

        database.forEach(function(product) {

            const productCard = '<article class=\"productCard\"><img class=\"productDetails\" alt=\"shoe\" src=\"' + product.image + '.jpg\" /><p id=\"productName\" class=\"productDetails\">' + product.name + '</p><p id=\"productPrice\" class=\"productDetails\">$' + product.price + '</p></article>';

            return productSpace.innerHTML += productCard;
        });
    }

    //runs the renderProducts function on the mockdatabase
    renderProducts(shoesDB);

    //function to create filtering options
    function renderOptions(database) {
        const colors=[];
        const sizes=[0];
        const types=[];

        //creates lists of each color, size, and type used by shoes
        database.forEach(function(shoe){
            var color=shoe.color;
            var sizeRange=shoe.size;
            var type=shoe.type;

            if(!colors.includes(color)){
                colors.push(color);
            }

            if(!types.includes(type)){
                types.push(type);
            }

            sizeRange.forEach(function(size){
                if(!sizes.includes(size)){
                    sizes.push(size);
                }
            })
        });

        colors.sort();
        colors.unshift('none');
        types.sort();
        types.unshift('none');

        //designates where each list is displayed
        const colorOptions = document.getElementById('colorFilter');
        const sizeOptions=document.getElementById('sizeFilter');
        const typeOptions=document.getElementById('typeFilter');

        //creates color options
        colorOptions.innerHTML='';

        colors.forEach(function(coloring){
            if(coloring=='none'){
                colorOptions.innerHTML+=('<option value=\"'+coloring+'\">Color</option>');
            }else{
                colorOptions.innerHTML+=('<option value=\"'+coloring+'\">'+coloring+'</option>');
            }
        })

        //creates size options
        sizeOptions.innerHTML='';

        sizes.forEach(function(sizing){
            if(sizing==0){
                sizeOptions.innerHTML+=('<option value=\"'+sizing+'\">Size</option>');
            }else{
                sizeOptions.innerHTML+=('<option value=\"'+sizing+'\">'+sizing+'</option>');
            }
        })

        //creates type options
        typeOptions.innerHTML='';

        types.forEach(function(typing){
            if(typing=='none'){
                typeOptions.innerHTML+=('<option value=\"'+typing+'\">Type</option>');
            }else{
                typeOptions.innerHTML+=('<option value=\"'+typing+'\">'+typing+'</option>');
            }
        })
    }

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

    //function to sort products in name order
    function sortNames(database){
        var shoeNames=[];

        var sortedShoes=[];

        database.forEach(function(shoe){
            shoeNames.push(shoe.name);
        });

        shoeNames.sort();

        shoeNames.forEach(function(name){
            for(var i=0;i<shoeNames.length;i++){
                if(database[i].name==name){
                    sortedShoes.push(database[i]);
                    break;
                }
            }

        });

        return sortedShoes;

    }

    //function to sort products in price order from low to high
    function sortPrices(database){
        var shoePrices=[];
        var sortedShoes=[];

        database.forEach(function(shoe){
            if(!shoePrices.includes(shoe.price)) {
                shoePrices.push(shoe.price);
            }
        });

        shoePrices.sort(function(a,b){return a-b});

        shoePrices.forEach(function(price){
            for(var i=0;i<shoePrices.length;i++){
                if(database[i].price==price){
                    sortedShoes.push(database[i]);
                }
            }

        });

        return sortedShoes;
    }

    //working directory: changes as filters and options are applied
    var currColor='none';
    var currSize=0;
    var currType='none';
    var currSort='none';

    //function to keep a working directory of shoes
    function workingDirectory(database, color, size, type, sort){
        var workDir=database;
        console.log('Current Number of Shoes: '+workDir.length);

        //filter by color
        if(color!=='none'){
            console.log('Current Color: '+color);
            var coloring=colorFiltering(workDir,color);
            workDir=coloring;
        }

        console.log('Current Number of Shoes: '+workDir.length);

        //filter by size
        if(size!==0){
            var sizing=sizeFiltering(workDir,size);
            workDir=sizing;
        }

        //filter by type
        if(type!='none'){
            var typing=typeFiltering(workDir,type);
            workDir=typing;
        }

        //sort by selected option
        if(sort=='name'){
            workDir=sortNames(workDir);
        }else if(sort=='loHi'){
            workDir=sortPrices(workDir);
        }else if(sort=='hiLo'){
            workDir=sortPrices(workDir);
            workDir.reverse();
        }

        return workDir;
    }

    //color event listener: listens for change to color filter
    document.querySelector('#colorFilter').addEventListener('change', function(event){
        var filterColor=event.target.value.toString();
        console.log('Filtering Color: '+filterColor);
        currColor=filterColor;

        var workingList=workingDirectory(shoesDB,currColor,currSize,currType,currSort);

        renderProducts(workingList);

    });



    //type event listener: listens for change to type filter
    document.querySelector('#typeFilter').addEventListener('change', function(event){
        var filterType=event.target.value.toString();
        currType=filterType;

        if(filterType=="none"){
            renderProducts(shoesDB);
        }else{
            var typedShoes=typeFiltering(shoesDB,filterType);
            renderProducts(typedShoes);
        }

    });

    //size event listener: listens for changes in the size filter option
    document.querySelector('#sizeFilter').addEventListener('change', function(event){
        var filterSize=parseFloat(event.target.value.toString());
        currSize=filterSize;

        var workingList=workingDirectory(shoesDB,currColor,currSize,currType,currSort);

        renderProducts(workingList);

    });

    //sort event listener: listens for changes in the sort options and then runs the different sorting functions and renders the product list
    document.querySelector('#orderOptions').addEventListener('change', function(event){
        var selectOption=event.target.value.toString();
        currSort=selectOption;

        var workingList=workingDirectory(shoesDB,currColor,currSize,currType,currSort);

        renderProducts(workingList);

    });

    //runs the render options function on mock database
    renderOptions(shoesDB);

}();