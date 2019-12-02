import { AppState } from '../store'

export const subareasBiggerThanFullArea = ({
  flatPramsForm: { fullArea, livingArea, kitchenArea },
}: AppState): boolean => livingArea.getOrElse(0) + kitchenArea.getOrElse(0) > fullArea
