1. if 문을 사용하여 예시값 화면을 만드시오 .
  
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compitable" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>중간고사 점수는?</title>
    <style>
        table{
            width: 50%;
            border-collapse: collapse;
        }

        table, th, td{
            border: 1px solid black;
            text-align: center;
            padding: 8px
        }
        th{
            background-color: blanchedalmond;
        }
    </style>
</head>
<body>
    <div id="container">
        <table name="table">
            <tr>
                <th>점수</th>
                <td>90점 이상</td>
                <td>80~89점</td>
                <td>70~79점</td>
                <td>60~69점</td>
                <td>60점 미만</td>
            </tr>
            <tr>
                <th>학점</th>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
                <td>F</td>
            </tr>
        </table>
    </div>
    <script>
        var score = prompt("중간고사 점수를 입력하세요.")
        if (score >= 90){
            alert(`나의 기말고사 점수는 ${score}, 학점은 A !!`)
        }
        else if (score >= 80){
            alert(`나의 기말고사 점수는 ${score}, 학점은 B !!`)
        }
        else if (score >= 70){
            alert(`나의 기말고사 점수는 ${score}, 학점은 C !!`)
        }
        else if (score >= 60){
            alert(`나의 기말고사 점수는 ${score}, 학점은 D !!`)
        }
        else{
            alert(`나의 기말고사 점수는 ${score}, 학점은 F !!`)
        }
    </script>
</body>
</html>
  
2. for 문을 이용해서 별을 찍어 보세요.
  
  <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>별찍기</title>
</head>
<body>
    <div class="section01">
        <h2>1번 별</h2>
        <div class="star_area_1">
            <script>
                for(let i = 0; i < 5; i++){
                    for(let j = 0; j <= i; j++){
                        document.write('*');
                    }
                    document.write("<br/>");
                }
            </script>
        </div>
    </div>
    <div class="section02">
        <h2>2번 별</h2>
        <div class="star_area_2">
            <script>
                for(let i = 0; i < 5; i++){
                    for(let j = 0; j <= i; j++){
                        document.write('*');
                    }
                    document.write("<br/>");
                }
                for(let i = 0; i < 4; i++)  {
                    for(let j = 4; j > i; j--)  {
                        document.write('*');
                    }
                    document.write("<br/>");
                }
            </script>
        </div>
    </div>
    <div class="section03">
        <h2>3번 별</h2>
        <div class="star_area_3">
            <script>
                for(let i = 0; i < 5; i++)  {
                    for(let j = 4; j > i; j--)  {
                        document.write('&nbsp');
                    }
                    for(let j = 0; j <= i; j++)  {
                        document.write('*');
                    }
                    for(let j = 1; j <= i; j++)  {
                        document.write('*');
                    }

                    document.write('<br/>');
                }

                for(let i = 0; i < 4; i++)  {
                    for(let j = 0; j <= i; j++)  {
                        document.write('&nbsp');
                    }
                    for(let j = 4; j > i; j--)  {
                        document.write('*');
                    }
                    for(let j = 3; j > i; j--)  {
                        document.write('*');
                    }
                    document.write('<br/>');
                }
                    </script>
        </div>
    </div>

</body>
</html>
  
3. while 문 


4. 미스테리 숫자 맞추기 
