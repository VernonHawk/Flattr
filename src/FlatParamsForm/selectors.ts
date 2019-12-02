import { FlatParamsFormState } from './reducers'

export const subareasBiggerThanFullArea = ({
  fullArea,
  livingArea,
  kitchenArea,
}: FlatParamsFormState): boolean => livingArea.getOrElse(0) + kitchenArea.getOrElse(0) > fullArea
