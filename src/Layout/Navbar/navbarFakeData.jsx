const navbarFakeData = [
    {
        _id: 1,
        name: "Home",
        url: "home",
        cetegory: true,
        subcetegory:false,
        cetegorys: [
            {
                _id: 1,
                name: "Home-1",
                url: "/home"
            },
            {
                _id: 2,
                name: "Home-2",
                url: "/home-2"
            }
        ]
    },
    {
        _id: 2,
        name: "Collection",
        img: "assets/sofa3.jpg",
        cetegory: true,
        subcetegory: true,
        cetegorys: [
            {
                _id: 1,
                name: "Living",
                subCetegorys: [
                    {
                        _id: 1,
                        name: "Modern Sofa",
                        url: "modern-sofa",
                        img: "../../assets/icon/modern-sofa.jpg"
                    },
                    {
                        _id: 2,
                        name: "Victorian Sofa",
                        url: "victorian-sofa",
                        img: "../../assets/icon/victorian-sofa.jpg"
                    }
                ]
            },
            {
                _id: 2,
                name: "Bed Room",
                subCetegorys: [
                    {
                        _id: 1,
                        name: "King Size Bed",
                        url: "modern-sofa",
                        img: "../../assets/icon/king-bed.jpg"
                    },
                    {
                        _id: 2,
                        name: "Single Bed",
                        url: "victorian-sofa",
                        img: "../../assets/icon/single-bed.jpg"
                    }
                  
                ]
            },
            {
                _id: 3,
                name: "Dining",
                subCetegorys: [
                    {
                        _id: 1,
                        name: "Dining Chair",
                        url: "modern-sofa",
                        img: "../../assets/icon/dining-table.jpg"
                    },
                    {
                        _id: 2,
                        name: "Tea Trolly",
                        url: "victorian-sofa",
                        img: "../.././assets/icon/tv-icon.jpg"
                    }
                   
                
                ]
            }
        ]
    },
    {
        _id: 3,
        name: "Blog",
        img: "assets/blog.jpg",
        url: "blog",
        cetegory:true,
        subcetegory:true,
        cetegorys: [
            {
                _id: 1,
                name: "Blog Style",
                subCetegorys: [
                    {
                        _id: 1,
                        name: "Blog List",
                        url: "blog-list",
                        img: "../../assets/icon/blog-list.jpg"
                    },
                    {
                        _id: 2,
                        name: "Blog Grid",
                        url: "blog",
                        img: "../../../assets/icon/blog-grid.jpg"
                    }
                ]
            },
            {
                _id: 2,
                name: "Post layout",
                subCetegorys: [
                    {
                        _id: 2,
                        name: "Post Gellery",
                        url: "post-gellery",
                        img: "../.././assets/icon/gallery.jpg"
                    }
                ]
            }
        ]
    },
    {
        _id: 4,
        name: "vendor",
        url: "vendor",
        cetegory:true,
        subcetegory:false,
        cetegorys: [
            {
                _id: 1,
                name: "Vendor List",
                url: "vendor-list"
            },
            {
                _id: 2,
                name: "vendor details",
                url: "vendor-details"
            }
        ]
    },
    {
        _id: 5,
        name: "Pages",
        url: "pages",
        cetegory:true,
        subcetegory: false,
        cetegorys: [
            {
                _id: 1,
                name: "About",
                url: "about"
            },
            {
                _id: 2,
                name: "Contact",
                url: "contact"
            },
            {
                _id: 3,
                name: "Login",
                url: "login"
            },
            {
                _id: 4,
                name: "Page 404",
                url: "error-page"
            }
        ]
    },
    {
        _id: 8,
        name: "Login",
        url: "login",
        cetegory: false,
        subcetegory:false
    }
]

export default navbarFakeData;