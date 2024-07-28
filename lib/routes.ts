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
]

export default routes
