import {
  ContextsConsumer
} from "../../utils/StateContext";

export default () => (
  <ContextsConsumer>
    {
      ({ state: { darkmode } }) => (
        <footer className={`flex justify-end ${darkmode ? 'text-white' : 'text-teal-400'} text-center p-6 sticky bottom-0 -z-1`}>
          <>
            <a className={`flex items-center`} 
              target="_blank"
              href="https://damengrandom.now.sh/">
              <span className={!darkmode ? 'text-teal-400' : 'text-gray-800'}>Developed by</span>
              <img className="logo w-5 ml-1 mr-1" src="/damengrandom.svg" alt="Damengrandom Logo" />
              <span className={!darkmode ? 'text-teal-400' : 'text-gray-800'}> &#64; 2020</span>
            </a>
          </>
        </footer>
      )
    }
  </ContextsConsumer>
);
