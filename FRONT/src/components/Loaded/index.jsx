import { useSelector } from "react-redux"
import { Dot, LoadingWrapper, LoadingIndex } from "../../pages/Users/styles"

export default function Load() {
  const loaded = useSelector((state) => state.loading.loaded)

  if (loaded) {
    return (
      <LoadingIndex>
        <LoadingWrapper>
          <Dot delay="0s" />
          <Dot delay="0.1s" />
          <Dot delay="0.2s" />
        </LoadingWrapper>
      </LoadingIndex>
    )
  }
}
