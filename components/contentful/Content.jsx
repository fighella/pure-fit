const contentful = require("contentful");
const FIT_SPACE_ID = "qt03r4b2rdnc";
const FIT_ACCESS_TOKEN =
  "wUysDGvbczx4bTZ3zvzq1ELlBvql7W09jMc4_qZeggo";
const fit_client = contentful.createClient({
  space: FIT_SPACE_ID,
  accessToken: FIT_ACCESS_TOKEN
});

  export async function getContentfulPage(page_id) { 
    try {
      const response = await fit_client.getEntry(page_id);
      let json = await response;
      return {
        raw: json,
        content: json.fields,
      }
    } catch {
      console.log('noFetchError();');
    }
 
  }

  export async function getContentfulEntries(content_type,banner) { 
    try {
      const response = await fit_client.getEntries({ content_type: content_type  })
      let json = await response;
      banner.setState({ items: json.items.reverse() })
    } catch { 
      return { 
        items: []
      }
      // console.log('noFetchErrors()')
    }
  }
