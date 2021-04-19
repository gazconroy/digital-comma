module Jekyll
    module Algolia
      module Hooks
        def self.before_indexing_each(record, node, context)
          return record if node.nil?
          # Do not index feature rows
          return nil if node.matches?('.row1')
          return nil if node.matches?('.row2')
          return nil if node.matches?('.row3')
          return nil if node.matches?('.row4')
          return nil if node.matches?('.row5')
          # Do not index sidebar
          return nil if node.matches?('.sidebar')
          # Do not index author panel
          return nil if node.matches?('.author_profile')
          # Do not index comments flag
          return nil if node.matches?('.comments')
          # Do not index read time
          return nil if node.matches?('.read_time')
          # Do not index share flag
          return nil if node.matches?('.share')
          # Do not index related
          return nil if node.matches?('.related')
          # Do not index show date flag
          return nil if node.matches?('.show_date')
          # Do not index header styling
          return nil if node.matches?('.header.overlay_color')
          return nil if node.matches?('.header.overlay_filter')
          return nil if node.matches?('.header.teaser')
          # Do not index page class or type
          return nil if node.matches?('.classes')
          return nil if node.matches?('.type')
          # Do not index page slug or permalink
          return nil if node.matches?('.slug')
          return nil if node.matches?('.permalink')   
          # Do not index headings
          return nil if node.matches?('.headings')
          # Do not index anchor
          return nil if node.matches?('.anchor')
          # Do not index table of contents
          return nil if node.matches?('.toc')
          return nil if node.matches?('.toc_label')
          return nil if node.matches?('.toc_icon')
          # Do not index date
          return nil if node.matches?('.date')
          # Do not index ranking
          return nil if node.matches?('.custom_ranking.position')
          return nil if node.matches?('.custom_ranking.heading')
          # Do not index HTML version of excerpt
          return nil if node.matches?('.excerpt_html')
          # Do not index weird stuff
          return nil if node.matches?('.entries_layout')
          return nil if node.matches?('.objectID')
          record
        end
      end
    end
  end