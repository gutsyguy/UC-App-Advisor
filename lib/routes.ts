const routes:any = [
    {
        id: "Major Advising",
        route: "/",
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
        id: "Application Advice",
        route: "/application",
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
]

export default routes
