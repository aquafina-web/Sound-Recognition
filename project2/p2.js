let soundModel = 'https://teachablemachine.withgoogle.com/models/GQ_NRo7nN/';
classifier = ml5.soundClassifier(soundModel + 'model.json', modelLoad);

function modelLoad()
{
    console.log("model has been loaded")
}

function classification(){
    classifier.classify(gotResult)
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error)
    }
    else{
        console.log(results)

        l = results[0].label;
        Accuracy = results[0].confidence;

        document.getElementById("object").innerText="I can hear: "+l;
        document.getElementById("acc").innerText="Accuracy: "+(Accuracy * 100).toFixed(2) + "%"

        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        var img3 = document.getElementById("img3");
        var img4 = document.getElementById("img4");

        if(l == 'Background Noise')
        {
            img1.src = "https://media.tenor.com/_L5pbTv24qoAAAA1/aesthetic-cottagecore.webp";
            img2.src = "bell1.jpg"
            img3.src = "bird1.jpg"
            img4.src = "clap1.jpg"
        }
        else if (l == "Bell")
        {
            img1.src = "bg1.jpg"
            img2.src = "https://media.tenor.com/hqMfWmMrIfEAAAAm/billthebear-bill-the-bear.webp";
            img3.src = "bird1.jpg"
            img4.src = "clap1.jpg"
        }
        else if(l == "Bird")
        {
            img1.src = "bg1.jpg"
            img2.src = "bell1.jpg"
            img3.src = "https://media.tenor.com/no0vOEEP1QMAAAAm/rain-bow-bird.webp"
            img4.src = clap1.jpg
        }
        else if(l == "Clap")
        {
            img1.src = "bg1.jpg"
            img2.src = "bell1.jpg"
            img3.src = "bird1.jpg"
            img4.src = "https://media.tenor.com/2QWVR9Lies4AAAAm/billthebear-bill-the-bear.webp"
        }

    
    }

}