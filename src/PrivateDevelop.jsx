const PrivateDevelop = () => {
    const url = "http://localhost:8080/login";
    return(
        <div id="sec4">
            <h2 Class="headline">PrivateDevelop</h2>
            <table border="1">
                <thead>
                    <th>名称</th>
                    <th>説明</th>
                </thead>
                <tbody>
                    <tr>
                        <td>パスワード管理アプリ</td>
                        <td>2024年頃から技術習得のために、月に2、3回程度ですが、<br></br>
                        業務の傍ら開発をしていました。使用技術は下記の通りです。<br></br>
                        Java SpringBoot JavaScript(DOM, FETCH API) MySQL HTML CSS SMTP4DEV iText</td>
                    </tr>
                    <tr>
                        <td>ポートフォリオサイト</td>
                        <td>フリーランス活動をしていくうえで、必要と感じ作成しました。<br></br>
                            Reactを使用しており、テキストボックスには状態管理にuseStateを使用しています。<br></br>
                            (使用技術)Java SpringBoot React.js(useState, FETCT API) HTML CSS
                        </td>
                    </tr>
                </tbody>
            </table>
            <form action={url} method="get" id="form">
                <input type="submit" value="パスワード管理アプリへ" Class="toPW"/><br></br>
            </form>
        </div>
    )
};
export default PrivateDevelop;