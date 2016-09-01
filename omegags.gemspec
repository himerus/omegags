# -*- encoding: utf-8 -*-

Gem::Specification.new do |spec|
  spec.name        = 'omegags'

  spec.summary     = %q{A Sass module to build responsive grid systems}
  spec.description = %q{Omega.gs is a responsive, flexible grid framework.}

  spec.homepage    = 'https://github.com/himerus/omegags'
  spec.rubyforge_project =

  spec.version     = '1.0.0'
  spec.date        = '2016-09-01'
  spec.licenses    = ['GPL-3.0']

  spec.authors     = ['Jake Strawn']
  spec.email       = 'jake.strawn@gmail.com'

  spec.add_runtime_dependency('sass', '~> 3.3')

  spec.files       = `git ls-files`.split($/).select {|f| File.exist?(f) && f =~ %r{^(lib|sass)/} }
  spec.files       += %w(
    bower.json
    LICENSE.md
    package.json
    README.md
    zen-grids.gemspec
  )
end
