//03.07.2025 Eldoran

function unify_crusher(event, input, result) {
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 3000,
        "input": {
          "tag": input
        },
        "result": {
          "item": result
        }
    })

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag":  input
            }
        ],
        "processing_time": 300,
        "results": [
            {
                "id": result
            }
        ]
    })

}

