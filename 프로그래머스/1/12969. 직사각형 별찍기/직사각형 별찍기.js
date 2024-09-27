process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const dimensions = data.split(" ");
    const n = Number(dimensions[0]); // 가로의 길이
    const m = Number(dimensions[1]); // 세로의 길이

    for (let i = 0; i < m; i++) {
        console.log('*'.repeat(n)); // 가로 길이만큼 별 출력
    }

    // 입력 종료 후 프로세스 종료
    process.stdin.pause();
});
