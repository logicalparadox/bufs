describe('Buffers', function () {
  it('can be constructed', function () {
    var bufs = new Buffers();
    bufs.should.have.property('buffers')
      .an('array')
      .with.length(0);
    bufs.should.have.property('length', 0);
  });

  it('can have buffers pushed in', function () {
    var bufs = new Buffers();

    // set 1
    bufs.push(new Buffer([ 0, 1, 2 ]));
    bufs.buffers.should.have.length(1);
    bufs.should.have.length(3);

    // set 2
    bufs.push(new Buffer([ 3, 4, 5 ]));
    bufs.buffers.should.have.length(2);
    bufs.should.have.length(6);

    // set 3
    bufs.push(
        new Buffer([ 6, 7, 8 ])
      , new Buffer([ 1, 2, 3 ])
    );
    bufs.buffers.should.have.length(4);
    bufs.should.have.length(12);
  });

  it('can emit events on push');

  it('can slice a set of buffers', function () {
    var bufs = new Buffers();

    bufs.push(new Buffer([ 0, 1, 2 ]));
    bufs.push(new Buffer([ 3, 4, 5 ]));
    bufs.push(new Buffer([ 6, 7, 8 ]));

    var res = bufs.slice(2, 5);
    res.should.be.instanceof(Buffer);
    res.should.have.length(3);
    res[0].should.equal(2);
    res[1].should.equal(3);
    res[2].should.equal(4);
  });

  it('can splice a set of buffers', function () {
    var bufs = new Buffers();

    bufs.push(new Buffer([ 0, 1, 2 ]));
    bufs.push(new Buffer([ 3, 4, 5 ]));
    bufs.push(new Buffer([ 6, 7, 8 ]));

    var res = bufs.splice(2, 5);

    res.should.have.length(5);

    var _res = res.slice(); // to buffer
    _res[0].should.equal(2);
    _res[1].should.equal(3);
    _res[2].should.equal(4);
    _res[3].should.equal(5);
    _res[4].should.equal(6);

    bufs.should.have.length(4);

    var _bufs = bufs.slice(); // to buffer
    _bufs[0].should.equal(0);
    _bufs[1].should.equal(1);
    _bufs[2].should.equal(7);
    _bufs[3].should.equal(8);
  });
});
