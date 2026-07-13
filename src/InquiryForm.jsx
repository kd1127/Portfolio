import { useState } from "react";

const InquiryForm = () => {
    const url = "http://localhost:8080/api/mailSend";

    const [name, setName] = useState("");
    const [mailAddress, setMailAddress] = useState("");
    const [inquiryContent, setInquiryContent] = useState("");

    const InquirySend = async () => {
        //  ネットワーク接続のチェック
        if(!navigator.onLine){
            console.log("インターネット接続がありません。");
            throw new Error("インターネット接続がありません。");
        }
        //  入力チェック
        let errorMessage = "";
        if(name === "" || name == null){
            errorMessage = "氏名\n";
        }
        if(mailAddress === "" || mailAddress == null){
            errorMessage = errorMessage + "メールアドレス\n";
        }
        if(inquiryContent === "" || inquiryContent == null){
            errorMessage = errorMessage + "問い合わせ内容\n";
        }
        if(errorMessage.length != 0){
            errorMessage = errorMessage + "は必須入力項目です。";
            alert(errorMessage);
            return;
        }

        try{
            const response = await fetch(url, { 
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    name: name, 
                    mailAddress: mailAddress, 
                    inquiryContent: inquiryContent
                })
            });
            console.log(response.status);
            if(!response.ok){
                alert("何らかの理由によりエラーが発生しました。");
                throw new Error("何らかの理由によりエラーが発生しました。");
            }
            else if(response.ok){
                alert("問い合わせ完了しました。");
            }
            const message = response.json;
            alert(JSON.stringify(message));
        } catch(error){
            alert("エラー内容：", error);
        }
    }

    return (
        <div id="sec5">
            <h2 Class="headline">InquiryForm</h2>
            <label Class="label-name">氏名（必須）</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} 
                Class="text-field"/><br></br>
            <label Class="label-name2">メールアドレス（必須）</label>
            <input type="mail" required value={mailAddress} 
                onChange={(e) => setMailAddress(e.target.value)} Class="text-field2"/><br></br>
            <label Class="label-name3">問い合わせ内容</label>
            <textarea rows={5} cols={40} maxLength={300} required value={inquiryContent} onChange=
                {(e) => setInquiryContent(e.target.value)} Class="text-field3"></textarea><br></br>
            <button onClick={InquirySend} Class="mail-send" id="mail-send-style">問い合わせ送信</button>
        </div>
    );
}
export default InquiryForm;