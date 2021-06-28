import CodeBlock from 'src/components/code-block.js';

export default {
  version: '0.10.0',
  latest: true,
  releaseDate: 'June 22nd, 2021',
  content: {
    introduction: {
      content: (
        <div className='grid md:grid-cols-2 gap-x-4'>
          <div className='text-center p-4 space-y-4'>
            <strong>Headline</strong>
            <p>Subtext</p>
          </div>
          {/* <CodeBlock
            query={{
              query: {
                _field: 'field',
                _args: { id: 0 },
                id: {},
                name: {},
                otherField: {}
              }
            }}
          /> */}
          <CodeBlock>
            &#123;
            <br />
            &nbsp;&nbsp;query: &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;_field: &apos;basic_schema&apos;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;_args: &#123; id: 0 &#125;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;id: &#123;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;name: &#123;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;randomField: &#123;&#125;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
            <br />
          </CodeBlock>
        </div>
      )
    },
    queries: {
      children: {
        arguments: {
          content: (
            <div className='grid md:grid-cols-2 gap-x-4'>
              <div className='text-center p-4 space-y-4'>
                <strong>Headline</strong>
                <p>Subtext</p>
              </div>
              <CodeBlock>
                &#123;
                <br />
                &nbsp;&nbsp;query: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_field: &apos;basic_schema&apos;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_args: &#123; id: 0 &#125;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;id: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;name: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;randomField: &#123;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
              </CodeBlock>
            </div>
          )
        },
        fields: {
          content: (
            <div className='grid md:grid-cols-2 gap-x-4'>
              <div className='text-center p-4 space-y-4'>
                <strong>Headline</strong>
                <p>Subtext</p>
              </div>
              <CodeBlock>
                &#123;
                <br />
                &nbsp;&nbsp;query: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_field: &apos;basic_schema&apos;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_args: &#123; id: 0 &#125;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;id: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;name: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;randomField: &#123;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
              </CodeBlock>
            </div>
          )
        },
        aliases: {
          content: (
            <div className='grid md:grid-cols-2 gap-x-4'>
              <div className='text-center p-4 space-y-4'>
                <strong>Headline</strong>
                <p>Subtext</p>
              </div>
              <CodeBlock>
                &#123;
                <br />
                &nbsp;&nbsp;query: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_field: &apos;basic_schema&apos;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_args: &#123; id: 0 &#125;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;id: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;name: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;randomField: &#123;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
              </CodeBlock>
            </div>
          )
        }
      }
    },
    schemas: {
      name: 'Schemas and Types',
      children: {
        arguments: {
          content: (
            <div className='grid md:grid-cols-2 gap-x-4'>
              <div className='text-center p-4 space-y-4'>
                <strong>Headline</strong>
                <p>Subtext</p>
              </div>
              <CodeBlock>
                &#123;
                <br />
                &nbsp;&nbsp;query: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_field: &apos;basic_schema&apos;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_args: &#123; id: 0 &#125;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;id: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;name: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;randomField: &#123;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
              </CodeBlock>
            </div>
          )
        },
        fields: {
          content: (
            <div className='grid md:grid-cols-2 gap-x-4'>
              <div className='text-center p-4 space-y-4'>
                <strong>Headline</strong>
                <p>Subtext</p>
              </div>
              <CodeBlock>
                &#123;
                <br />
                &nbsp;&nbsp;query: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_field: &apos;basic_schema&apos;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_args: &#123; id: 0 &#125;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;id: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;name: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;randomField: &#123;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
              </CodeBlock>
            </div>
          )
        },
        aliases: {
          content: (
            <div className='grid md:grid-cols-2 gap-x-4'>
              <div className='text-center p-4 space-y-4'>
                <strong>Headline</strong>
                <p>Subtext</p>
              </div>
              <CodeBlock>
                &#123;
                <br />
                &nbsp;&nbsp;query: &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_field: &apos;basic_schema&apos;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;_args: &#123; id: 0 &#125;,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;id: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;name: &#123;&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;randomField: &#123;&#125;
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
                <br />
              </CodeBlock>
            </div>
          )
        }
      }
    }
  }
};
