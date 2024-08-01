import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from "../../assets/r_b.png";
import whiteLogo from "../../assets/r_w.png";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FigureNames.ROOK
  }

  canMove(target: Cell):boolean {
    if (!super.canMove(target))
      return false
    if (this.cell.isEmptyVertical(target))
      return true
    if (this.cell.isEmptyHorizontal(target))
      return true
    return false
  }
}