const routes:any = [
    {
        id: "Application Advising",
        route: "/application",
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
        id: "Major Advising",
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
        id: "Additional Resources",
        route: "/resource",
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
