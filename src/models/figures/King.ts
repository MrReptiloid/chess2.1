import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from "../../assets/k_b.png";
import whiteLogo from "../../assets/k_w.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FigureNames.KING
  }

  canMove(target: Cell):boolean {
    if (!super.canMove(target))
      return false
    return true
  }
}