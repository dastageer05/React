import express from "express";

const app = express();

app.get('/api/products', (req, res) =>{
    const products =[
        {
          "id": 1,
          "name": "Perfume Ocean Breeze",
          "price": 49.99,
          "image": "https://example.com/images/ocean_breeze.jpg"
        },
        {
          "id": 2,
          "name": "Perfume Midnight Aura",
          "price": 59.99,
          "image": "https://example.com/images/midnight_aura.jpg"
        },
        {
          "id": 3,
          "name": "Perfume Summer Bliss",
          "price": 39.99,
          "image": "https://example.com/images/summer_bliss.jpg"
        },
        {
          "id": 4,
          "name": "Perfume Desert Rose",
          "price": 44.99,
          "image": "https://example.com/images/desert_rose.jpg"
        },
        {
          "id": 5,
          "name": "Perfume Forest Whisper",
          "price": 54.99,
          "image": "https://example.com/images/forest_whisper.jpg"
        }
    ]
    
    if (req.query.search){
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products);
    }, 3000);

})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server runnin on port ${port}`);
})