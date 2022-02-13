function addGrid(Konva, layer) {

    for (i = 50; i <= layer.width(); i += 50) {
        let line = new Konva.Line({
            points: [i, 0, i, layer.height()],
            stroke: '#CCC',
            strokeWidth: 1,
          });
          layer.add(line)
    }

    for (i = 50; i <= layer.height(); i += 50) {
        let line = new Konva.Line({
            points: [0, i, layer.width(), i],
            stroke: '#CCC',
            strokeWidth: 1,
          });
          layer.add(line)
    }

}
