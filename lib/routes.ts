const routes = [
    {
        id: "Store",
        route: "/shop",
        routePath: [
            {
                path: "/shop/mac",
                route: "mac"
            },
            {
                path: "/shop/ipad",
                route: "ipad"
            },
            {
                path: "/shop/iphone",
                route: "iphone"
            }
        ],
        paths: [
            "/shop/mac",
            '/shop/ipad',
            '/shop/iphone',
        ],
        routeNames: [
            "Mac",
            "Ipad",
            "Iphone"
        ]
    },
    {
        id: "Mac",
        route: "/mac",
        paths: [
            "/shop/mac",
            '/shop/ipad',
            '/shop/iphone',
        ],
        routeNames: [
            "Mac",
            "Ipad",
            "Iphone"
        ],
        routePath: [
            {
                path: "/shop/mac",
                route: "mac"
            },
            {
                path: "/shop/ipad",
                route: "ipad"
            },
            {
                path: "/shop/iphone",
                route: "iphone"
            }
        ],
    },
    {
        id: "Iphone",
        route: "/iphone",
        paths: [
            "/shop/mac",
            '/shop/ipad',
            '/shop/iphone',
        ],
        routeNames: [
            "Mac",
            "Ipad",
            "Iphone"
        ],
        routePath: [
            {
                path: "/shop/mac",
                route: "mac"
            },
            {
                path: "/shop/ipad",
                route: "ipad"
            },
            {
                path: "/shop/iphone",
                route: "iphone"
            }
        ],
        
    },
    {
        id: "Store",
        route: "/shop",
        paths: [
            "/shop/mac",
            '/shop/ipad',
            '/shop/iphone',
        ],
        routeNames: [
            "Mac",
            "Ipad",
            "Iphone"
        ],        routePath: [
            {
                path: "/shop/mac",
                route: "mac"
            },
            {
                path: "/shop/ipad",
                route: "ipad"
            },
            {
                path: "/shop/iphone",
                route: "iphone"
            }
        ],
    },
]
export default routes