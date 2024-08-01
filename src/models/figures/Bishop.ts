import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import blackLogo from "../../assets/b_b.png"
import whiteLogo from "../../assets/b_w.png"
import {Cell} from "../Cell.ts";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FigureNames.BISHOP
  }

  canMove(target: Cell):boolean {
    if (!super.canMove(target))
      return false
    if (this.cell.isEmptyDiagonal(target))
      return true
    return false
  }
}