var expect = chai.expect;

describe("Tests del Conversor", function() {

    it("22F === 267.59Kelvin", function() {
      var temp = new Temperatura();

      temp.setValor(22);
      temp.setTipo("F");

      var espia = sinon.spy();
      espia(temp.getValor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(22)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      var aux = temp.fak();

      expect(aux).to.equal(267.59);
    });

    it("11.1F === -11.61 Celsius", function() {
      var temp = new Temperatura();

      temp.setValor(11.1);
      temp.setTipo("F");

      var espia = sinon.spy();
      espia(temp.getValor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(11.1)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      var aux = temp.fac();

      expect(aux).to.equal(-11.61);
    });

    it("41.4e3c === 74552.00 Fahrenheit", function() {
      var temp = new Temperatura();

      temp.setValor(41.4e3);
      temp.setTipo("c");

      var espia = sinon.spy();
      espia(temp.getValor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(41.4e3)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      var aux = temp.caf();

      expect(aux).to.equal(74552.00);
    });

    it("-2e3C === -1726.85Kelvin", function() {
      var temp = new Temperatura();

      temp.setValor(-2e3);
      temp.setTipo("C");

      var espia = sinon.spy();
      espia(temp.getValor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(-2e3)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      var aux = temp.cak();

      expect(aux).to.equal(-1726.85);
    });


    it("-6.3k === -279.45Celsius", function() {
      var temp = new Temperatura();

      temp.setValor(-6.3);
      temp.setTipo("k");

      var espia = sinon.spy();
      espia(temp.getValor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(-6.3)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      var aux = temp.kac();

      expect(aux).to.equal(-279.45);
    });

    it("303.3K === 85.73Fahrenheit", function() {
      var temp = new Temperatura();

      temp.setValor(303.3);
      temp.setTipo("k");

      var espia = sinon.spy();
      espia(temp.getValor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(303.3)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      var aux = temp.kaf();

      expect(aux).to.equal(85.73);
    });

    it("Resultado: 22e3K", function() {
      var temp = new Temperatura();

      temp.setValor(22e3);
      temp.setTipo("K");

      var espia = sinon.spy();
      espia(temp.getValor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(22e3)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      expect(temp.getValor()).to.equal(22e3);
      expect(temp.getTipo()).to.equal("K");
    });


    it("Resultado: -13.6E-4C", function() {
      var temp = new Temperatura();
      temp.setValor(-13.6E-4);
      temp.setTipo("C");

      var espia = sinon.spy();
      espia(temp.getTipo());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith("C")).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.string)).to.be.true;

      expect(temp.getValor()).to.equal(-13.6E-4);
      expect(temp.getTipo()).to.equal("C");
    });


});

