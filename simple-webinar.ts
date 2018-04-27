export class SimpleWebinar {

  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  public learnGit () {
    console.log(`Learning ${this.name}`);
  }
  
}

var webinar = new SimpleWebinar("Git")
webinar.learnGit();


// Pozdawiam + rafal
