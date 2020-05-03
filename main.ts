let cursor = sprites.create(img`
a a a a
a b b a
a b b a
a a a a
`.doubled())
controller.moveSprite(cursor, 100, 100)
cursor.z = 100



let keys: Sprite[] = [];
for(let i = 0; i <= 11; ++i) {
    const im = image.create(24, 16)
    im.fill(1)
    im.printCenter("F" + (i + 13), 4,15);
    const sprite = sprites.create(im)
    keys.push(sprite);
    sprite.x = (i % 4) * 32 + 26;
    sprite.y = ((i / 4) | 0) * 24 + 26;
    sprite.data["name"] = "F" + (i + 13)
    sprite.data["key"] = KeyboardFunctionKey.F13Key + i;
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    for(const sprite of keys) {
        if (sprite.overlapsWith(cursor)) {
            const key = sprite.data["key"] as KeyboardFunctionKey;
            sprite.say(key, 1000)
            keyboard.functionKey(key, KeyboardKeyEvent.Down)
            keyboard.functionKey(key, KeyboardKeyEvent.Up)
        }
    }
})
