const tinhDiemTB = (...numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total/(numbers.length);
}

document.getElementById('btnKhoi1').onclick = function () {
    const diemToan = document.getElementById('inpToan').value * 1;
    const diemLy = document.getElementById('inpLy').value * 1;
    const diemHoa = document.getElementById('inpHoa').value * 1;

    const ketQUa = tinhDiemTB(diemToan, diemLy, diemHoa);
    document.getElementById('tbKhoi1').innerHTML = `Điểm trung bình là: ${ketQUa}`;
}

document.getElementById('btnKhoi2').onclick = function () {
    const diemVan = document.getElementById('inpVan').value * 1;
    const diemSu = document.getElementById('inpSu').value * 1;
    const diemDia = document.getElementById('inpDia').value * 1;
    const diemEnglish = document.getElementById('inpEnglish').value * 1;

    const ketQUa = tinhDiemTB(diemVan, diemSu, diemDia, diemEnglish);
    document.getElementById('tbKhoi2').innerHTML = `Điểm trung bình là: ${ketQUa}`;
}