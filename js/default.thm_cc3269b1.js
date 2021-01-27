window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"Index":"resource/eui_skins/Index.exml"};generateEUI.paths['resource/eui_skins/Index.exml'] = window.skins.Index = (function (_super) {
	__extends(Index, _super);
	function Index() {
		_super.call(this);
		this.skinParts = [];
		
		this.maxWidth = 980;
		this.minHeight = 600;
		this.elementsContent = [this._Scroller1_i()];
	}
	var _proto = Index.prototype;

	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.touchChildren = true;
		t.touchEnabled = true;
		t.visible = true;
		t.percentWidth = 100;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_01";
		return t;
	};
	return Index;
})(eui.Skin);