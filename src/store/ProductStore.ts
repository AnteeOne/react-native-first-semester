import {makeAutoObservable} from "mobx";
import {Product} from "../models/Product";

class ProductStore {

    descr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et blandit turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam hendrerit pellentesque volutpat. Sed eu justo lacus."

    products: Product[] = [
        new Product(
            "1",
            "Gucci Bag",
            this.descr,
            "https://thumb.tildacdn.com/tild3133-3533-4164-a637-666537633266/-/resize/552x/-/format/webp/image_9.png",
            23.2,
            false
        ),
        new Product(
            "2",
            "Nike Sneakers",
            this.descr,
            "https://static.nike.com/a/images/t_default/e595abfa-7e65-4514-9895-be2de74f3e10/air-zoom-pegasus-37-mens-road-running-shoes-KLvDcj.png",
            13,
            false
        ),
        new Product(
            "3",
            "AirMax",
            this.descr,
            "https://static.nike.com/a/images/t_default/bc4e006a-ae3d-478b-a2f6-8740f63a6e52/air-max-plus-womens-shoes-gCc9PN.png",
            19.9,
            false
        ),
        new Product(
            "4",
            "AirMax 2",
            this.descr,
            "https://static.nike.com/a/images/t_default/0bf5223f-133a-444d-b095-33975925a978/custom-nike-zoom-mercurial-vapor-15-elite-by-you.png",
            49.99,
            false
        ),
        new Product(
            "5",
            "Abidas",
            this.descr,
            "https://www.thenextsole.com/storage/images/DH9740-004.png",
            9.49,
            false
        )
    ]

    constructor() {
        makeAutoObservable(this)
    }

    handleFavourite(oldProduct: Product) {
        this.products = this.products.map((product: Product) => {
            return oldProduct.id == product.id ? new Product(
                product.id,
                product.title,
                product.description,
                product.imageUrl,
                product.price,
                !product.isLiked,
            ) : product
        })
    }

}

export default new ProductStore()