resolve: {
    fallback: {
        "zlib": require.resolve("browserify-zlib"),
            "querystring": require.resolve("querystring-es3"),
                "stream": require.resolve("stream-browserify"),
                    "path": require.resolve("path-browserify"),
                        "buffer": require.resolve("buffer/"),
                            "fs": false
    }
}