const http = require('http');
const fs = require('fs').promises //콜백지옥 방지

//파일을 내려받고 요청을 받아야 하므로 async로 비동기 처리.
http.createServer(async (req,res) => {
    try {
        const data = await fs.readFile('./server2.html') //읽을 때 까지 await -> async + await 함께 사용
        res.writeHead(200, { 'Content-Type' : 'text/plain; charset=utf-8' })
        res.end(data)
    } catch(err) {
        console.error(err);
        res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8' })
        res.end(err.message)
    }
})
.listen(8081, ()=> {
    console.log('8081번 포트에서 서버 대기중.')
})
