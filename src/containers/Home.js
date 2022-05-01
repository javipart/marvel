import { useDispatch, useSelector, useStore } from 'react-redux';
import { Box, Container, LinearProgress, Paper, Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { getDataTopic, setTopic, setTopicPage, topics } from '../actions/topicActions';
import GridItems from '../components/Items/GridItems';
import TopicSearch from '../components/TopicSearch/TopicSearch';
import { setSearch } from '../actions/searchActions';

const titleTopics = ['Personajes', 'Comics', 'Series', 'Historias'];

const Home = () => {
  const dispatch = useDispatch();
  const store = useStore();

  const topic = useSelector((state = store.getState()) => state.topic);
  const search = useSelector((state = store.getState()) => state.search);
  const { selected, data, maxPage, page, loading } = topic;

  useEffect(() => {
    dispatch(getDataTopic());
  }, [selected]);

  const handleTopic = (e, value) => {
    dispatch(setTopic(value));
  };

  const handlePage = (e, value) => {
    dispatch(setTopicPage(value));
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    dispatch(setSearch(value));
  };

  return (
    <Paper elevation={1} sx={{ margin: 2, height: '700px' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={selected}
            onChange={handleTopic}
            aria-label="tab-topics"
            variant="scrollable"
            scrollButtons="auto"
          >
            {titleTopics.map(item => (
              <Tab label={item} key={item} />
            ))}
          </Tabs>
        </Box>
      </Box>
      <TopicSearch
        maxPage={maxPage}
        page={page}
        handlePage={handlePage}
        handleSearch={handleSearch}
        value={search.value}
        loading={loading}
      />
      {loading
        ?
        (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )
        :
        (
          <Container fixed sx={{ maxHeight: 570, overflow: 'auto', marginTop: 2 }}>
            <GridItems
              data={data.results}
            />
          </Container>
        )
      }
    </Paper >
  );
}

export default Home;
