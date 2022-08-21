function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/v2UzS12_y/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

animal = 0;
animal1 = 0;
animal2 = 0;
animal3 = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    animal_img = 'Cat.jpg'
    animal_img1 = 'Dog.jpg'
    animal_img2 = 'Sheep.jpg'
    animal_img3 = 'Pig.jpg'
    
    if (results[0].label == "Meowing")
    {
      bg.src = 'Cat.jpg';
      animal = animal+1;
    }
    else if (results[0].label == "Barking")
    {
      bg.src = 'Dog.jpg'
      animal1 = animal1+1;
    }
    else if (results[0].label == "Bleating")
    {
      bg.src = 'Sheep.jpg'
      animal2 = animal2+1;
    }
    else if (results[0].label == "Oinking")
    {
      bg.src = 'Pig.jpg'
      animal3 = animal3+1;
    }
    else
    {
      bg.src = 'bgvoice.jpg'
    }
  }
}