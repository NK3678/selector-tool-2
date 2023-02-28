import {
  React,
  useState,
  createContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";

const AppDataContext = createContext({
  industryData: [],
  priducts: [],
  currentLevel: { number: 0, name: "", multi: false, showResult: false },
  currentSelectedIndustry: {},
  filters: [],
  results: false,
  filteredProductsData: [],
  getNextSetData: (id, level) => {},
  getPrevSetData: (level) => {},
  resetSetData: () => {},
  selectIndustry: (selectedIndId) => {},
  showResults: () => {},
  selectFilter: (id) => {},
  facetHandler: () => {},
});
let ALL_DATA = [];
let currentSelectedIndustryId = 0;
let filters = [];
let loadedProducts = [];
export const AppDataContextProvider = (props) => {
  const [industryDataLoaded, setIndustryDataLoaded] = useState([]);
  const [filteredProductsData, setfilteredProductsData] = useState([]);
  const [currentSelectedIndustry, setcurrentSelectedIndustry] = useState({});
  const [updatedFilters, setUpdatedFilters] = useState([]);
  const [currentLevel, setcurrentLevel] = useState({
    number: 0,
    name: "",
    multi: false,
    showResult: false,
  });
  const [results, setResults] = useState(false);

  filters = updatedFilters;

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await fetch("/api/industries");
      const resData = await res.json();
      resData.industries.forEach((i) => {
        i.data.forEach((e) => {
          e.image = e.name.replace(/[\/'’+]/g, "_");
        });
      });
      setIndustryDataLoaded(
        resData.industries[0].data.map((e) => {
          return { ...e, show: true };
        })
      );
      ALL_DATA = resData.industries;
      ALL_DATA[0].data = ALL_DATA[0].data.map((e) => {
        return { ...e, show: true };
      });
      setcurrentLevel({
        id: ALL_DATA[0].id,
        number: 0,
        name: ALL_DATA[0].name,
        multi: ALL_DATA[0].multi,
        showResult: ALL_DATA[0].showResult,
      });
    }
    async function fetchProduct() {
      const res = await fetch("/api/products");
      const resData = await res.json();
      loadedProducts = resData;
    }
    fetchData();
    fetchProduct();
  }, []); // Or [] if effect doesn't need props or state

  const getNextSetDataHandler = useCallback(
    (level, selectedIndId) => {
      let newDataSet = [];
      currentSelectedIndustryId =
        level == 1 ? selectedIndId : currentSelectedIndustryId;
      if (ALL_DATA[level]) {
        newDataSet = ALL_DATA[level].data.filter((a) => {
          return a.parentId
            .split(",")
            .includes(currentSelectedIndustryId.toString());
        });
        setcurrentLevel({
          id: ALL_DATA[level].id,
          number: level,
          name: ALL_DATA[level].name,
          multi: ALL_DATA[level].multi,
          showResult: ALL_DATA[level].showResult,
        });
      }
      newDataSet.forEach((e) => {
        e.show = false;
        filteredProductsData.forEach((p) => {
          var categoryId = p.level
            .find((k) => k.levelId === ALL_DATA[level].id)
            .categoryId.split(",");
          e.show = categoryId.includes(e.id.toString()) ? true : e.show;
        });
      });
      setIndustryDataLoaded(newDataSet);
      filters[level].currentFilteredProduct = filteredProductsData;
    },
    [filteredProductsData]
  );

  const getPrevSetDataHandler = useCallback((level) => {
    let newDataSet = [];
    if (ALL_DATA[level]) {
      newDataSet = ALL_DATA[level].data.filter((a) => {
        return a.parentId
          .split(",")
          .includes(currentSelectedIndustryId.toString());
      });
      setcurrentLevel({
        id: ALL_DATA[level].id,
        number: level,
        name: ALL_DATA[level].name,
        multi: ALL_DATA[level].multi,
        showResult: ALL_DATA[level].showResult,
      });
    }
    if (level == 0) {
      setIndustryDataLoaded(ALL_DATA[0].data);
    } else {
      setIndustryDataLoaded(newDataSet);
    }
  }, []);

  const resetSetDataHandler = () => {
    setIndustryDataLoaded(ALL_DATA[0].data);
    setcurrentLevel({
      id: ALL_DATA[0].id,
      number: 0,
      name: ALL_DATA[0].name,
      multi: ALL_DATA[0].multi,
      showResult: ALL_DATA[0].showResult,
    });
    setResults(false);
    setUpdatedFilters([]);
  };

  const selectIndustryHandler = (selectedIndId) => {
    let currentSelectedIndustry = ALL_DATA[0].data.find(
      (e) => e.id === selectedIndId
    );
    setcurrentSelectedIndustry(
      currentSelectedIndustry ? currentSelectedIndustry : {}
    );
    filters = ALL_DATA.map((e, i) => {
      let cat = { ...e, selectedIds: [] };
      cat.data = e.data.filter((e) => {
        return (
          e.parentId == 0 ||
          e.parentId.split(",").includes(selectedIndId.toString())
        );
      });
      return cat;
    });
  };

  const showResultsHandler = async () => {
    setResults(true);
  };

  const selectFilterHandler = useCallback((idArr, filterLevelId) => {
    let fil = [...filters];
    let level = fil.find((e) => e.id === filterLevelId);
    let LevelIndx = fil.findIndex((e) => e.id === filterLevelId);
    level.selectedIds = [];
    idArr.forEach((id) => {
      let icon = level.data.find((e) => e.id === id);
      level.selectedIds.unshift(icon);
    });
    setUpdatedFilters(fil);
    var selectedIds = fil
      .find((l) => l.id === filterLevelId)
      .selectedIds.map((a) => a.id);
    let products =
      LevelIndx == 0 ? loadedProducts : level.currentFilteredProduct;
    let filteredProduct = products.filter((e) => {
      var categoryId = e.level.find(
        (k) => k.levelId === filterLevelId
      ).categoryId;
      categoryId = categoryId.split(",");
      return (
        selectedIds.filter((id) => {
          return categoryId.includes(id.toString());
        }).length > 0
      );
    });
    setfilteredProductsData(filteredProduct);
  }, []);

  const facetHandler = (idArr, filterLevelId) => {
    let fil = [...filters];
    let level = fil.find((e) => e.id === filterLevelId);
    level.selectedIds = [];
    idArr.forEach((id) => {
      let icon = level.data.find((e) => e.id === id);
      level.selectedIds.unshift(icon);
    });
    setUpdatedFilters(fil);
    let filteredProduct = loadedProducts;
    fil.forEach(i => {
      filteredProduct = filteredProduct.filter((e) => {
        var categoryId = e.level.find(
          (k) => k.levelId === i.id
        ).categoryId;
        categoryId = categoryId.split(",");
        return (
          i.selectedIds.filter((icon) => {
            return categoryId.includes(icon.id.toString());
          }).length > 0
        );
      });
    })
    setfilteredProductsData(filteredProduct);
    console.log(fil)
  };

  const contextValue = useMemo(() => {
    return {
      industryData: industryDataLoaded,
      currentLevel: currentLevel,
      currentSelectedIndustry: currentSelectedIndustry,
      results: results,
      filters: updatedFilters,
      filteredProductsData: filteredProductsData,
      getNextSetData: getNextSetDataHandler,
      getPrevSetData: getPrevSetDataHandler,
      resetSetData: resetSetDataHandler,
      selectIndustry: selectIndustryHandler,
      showResults: showResultsHandler,
      selectFilter: selectFilterHandler,
      facetHandler: facetHandler,
    };
  }, [
    industryDataLoaded,
    currentLevel,
    currentSelectedIndustry,
    results,
    updatedFilters,
    filteredProductsData,
    selectFilterHandler,
    getNextSetDataHandler,
    getPrevSetDataHandler,
  ]);

  return (
    <AppDataContext.Provider value={contextValue}>
      {props.children}
    </AppDataContext.Provider>
  );
};

export default AppDataContext;
