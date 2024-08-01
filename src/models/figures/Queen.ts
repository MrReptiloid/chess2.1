import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from "../../assets/q_b.png";
import whiteLogo from "../../assets/q_w.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FigureNames.QUEEN
  }

  canMove(target: Cell):boolean {
    if (!super.canMove(target))
      return false
    if (this.cell.isEmptyVertical(target))
      return true
    if (this.cell.isEmptyHorizontal(target))
      return true
    if (this.cell.isEmptyDiagonal(target))
      return true
    return false
  }
}