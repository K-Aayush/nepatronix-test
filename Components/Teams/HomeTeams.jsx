import React from 'react'
import HomeSlider from './HomeSlider'
import DisplayTeam from '../Reusables/DisplayTeam'
import { getLists } from '@/ApiRequest/GetData'

const HomeTeams = async() => {
    const data = await getLists("teams", 0, 5)

  return (
  <HomeSlider data={data} length={data?.length}>
    {data?.map((item, idx) => (
      <DisplayTeam data={item} key={idx} />
    ))}
  </HomeSlider>
  )
}

export default HomeTeams
