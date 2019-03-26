const buffer = Buffer.alloc(256);
buffer.write("NodeJs", "utf-8");
console.log(buffer.slice(0, 4).toString());
console.log(buffer.length);
console.log(buffer.toJSON());
console.log(buffer.toString());
