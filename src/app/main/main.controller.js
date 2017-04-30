export class MainController {
  constructor (gridService) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1486045471836;

    this.testFunction(gridService);
  }

  testFunction(NavTreeService) {
    //console.log('running test function is awesome', NavTreeService.getData());
  }

}
